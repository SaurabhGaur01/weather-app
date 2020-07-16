import { combineReducers } from 'redux';
import { apiCallStatusReducer as apiCallStatus } from '../ducks/apiCallStatus';
import { weatherDataReducer as weatherData } from '../ducks/weatherData';
import { unitReducer as unit } from '../ducks/unit';
import { chartDataReducer as chartData } from '../ducks/chartData';

export default combineReducers({
    apiCallStatus,
    weatherData,
    unit,
    chartData,
})