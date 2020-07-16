export const SET_CHART_DATA = 'modules/weather-app/SET_CHART_DATA';
export const CLEAR_CHART_DATA = 'modules/weather-app/CLEAR_CHART_DATA';

export const setChartData = data => ({
    type: SET_CHART_DATA,
    data,
});

export const clearChartData = () => ({
    type: CLEAR_CHART_DATA,
});

export const chartDataReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_CHART_DATA:
            return action.data;
        case CLEAR_CHART_DATA:
            return [];
        default:
            return state;               
    }
};