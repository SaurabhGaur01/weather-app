import moment from 'moment';

// Returns an array containing the next 5 days dates in format yyyy-mm-dd
export const getNextDays = (tomorrow) => {
    var fourDates = [];
    for(var i=0; i<5; i++) {
        tomorrow.setDate(tomorrow.getDate() + 1);
        var month = tomorrow.getMonth() + 1;
        var day = tomorrow.getDate();
        var year = tomorrow.getFullYear();

        if (month < 10) { month = "0" + month } 
        if (day < 10) { day = "0" + day }
        fourDates.push(year + "-" + month + "-" + day);
    }  
    return fourDates;
}

//Return date in format ddd D MMMM
export const formatDate = (date) => {
  if (date && moment(date).isValid()) {
    return moment.unix(date).format('ddd D MMMM');
  }
  return '';
}

//Return average of an array
export const getAverageTemperature = arr => arr.reduce((a, b) => a + b, 0 ) / arr.length;

//Return new object which will contain average temperature, date and list of temperature for that whole day
export const transformResponse = (daysData) => {
    var comingDays = getNextDays(new Date());
    var daysMapped = [];
    for (let i=0; i<5; i++) { 
      var dayDataFiltered = daysData.filter(item => item.dt_txt.includes(comingDays[i]));
      var dayMapped = {};
      if(dayDataFiltered && dayDataFiltered.length > 0){
        dayMapped.date = formatDate(dayDataFiltered[0].dt);
        dayMapped.temperature = {};
        const temperatureForDayList = dayDataFiltered.map(el => { return el.main.temp});
        const averageTemperature = getAverageTemperature(temperatureForDayList);
        const dataForChart = dayDataFiltered.map(el => { 
          return {
            text: moment(el.dt_txt).format('HH:mm'),
            value : el.main.temp
          }
        });
        dayMapped.temperature.avgtemp = averageTemperature.toFixed(2);
        dayMapped.dataForChart = dataForChart;
        dayMapped.description = dayDataFiltered[0].weather[0].description;
        daysMapped.push(dayMapped);
      }  
    }
    return daysMapped;
}