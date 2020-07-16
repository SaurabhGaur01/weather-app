import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ItemsCarousel from 'react-items-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { weatherCardClass } from '../../../utils/getStyles';
import WeatherChart from '../Chart/WeatherChart';
import { setChartData } from '../../../ducks/chartData';

const WeatherCard = ({ weatherData, unit, actionSetChartingData }) => {
  React.useEffect(() => {
    actionSetChartingData(weatherData[0].dataForChart);
  });
  const classes = weatherCardClass();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const handleClick = (data) => {
    actionSetChartingData(data.dataForChart);
  }
  return (
    <React.Fragment>
      <div className={classes.card}>
        <div className={`weather-card ${classes.cardContainer}`}>
          <ItemsCarousel
            infiniteLoop={false}
            gutter={1}
            chevronWidth={60}
            numberOfCards={3}
            slidesToScroll={2}
            firstAndLastGutter={false}
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            outsideChevron ={true}
            rightChevron={
              <IconButton color="primary" aria-label="forward" component="span" >
                <ArrowForwardIosIcon color="primary"/>
              </IconButton>
            }
            leftChevron={
              <IconButton color="primary" aria-label="backward" component="span"
              >
                <ArrowBackIosIcon color="primary"/>
              </IconButton>
            }
          >  
            {
              weatherData.map( (day, index) => ( 
                <Card className={classes.root} key={index}>
                  <CardActionArea onClick={() => handleClick(day)}>
                    <CardContent>
                      <Typography variant="h6" component="h2">
                          {day.date}
                      </Typography>
                      <Typography className={classes.title} color="textSecondary">
                          Avg Temp:
                      </Typography>
                      <Typography variant="h6" component="h2">
                          {day.temperature.avgtemp} {unit}
                      </Typography>
                      <Typography className={classes.title} color="textSecondary">
                          Weather:
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                      {day.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea> 
                </Card>
              ))
            }
          </ItemsCarousel>
        </div>
      </div>
      <WeatherChart />
    </React.Fragment>  
  )
}

WeatherCard.propTypes = {
  unit: PropTypes.string.isRequired,
  weatherData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      avgtemp: PropTypes.string.isRequired,
    }),
    dataForChart: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })),
  })).isRequired,
  actionSetChartingData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  weatherData: state.weatherData,
  unit: state.unit,
});

const mapDispatchAsProps = dispatch =>{
  return {
      actionSetChartingData: data => dispatch(setChartData(data)),
  };
}

const hocChain = compose(
  connect(mapStateToProps, mapDispatchAsProps),
);

export { WeatherCard as TestableWeatherCard };

export default hocChain(WeatherCard);