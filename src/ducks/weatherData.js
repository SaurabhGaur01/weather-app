export const SET_WEATHER_DATA = 'modules/weather-app/SET_WEATHER_DATA';
export const CLEAR_WEATHER_DATA = 'modules/weather-app/CLEAR_WEATHER_DATA';

export const setWeatherData = data => ({
    type: SET_WEATHER_DATA,
    data,
});

export const clearWeatherData = () => ({
    type: CLEAR_WEATHER_DATA,
});

export const weatherDataReducer = (state = {}, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_WEATHER_DATA:
            return action.data;
        case CLEAR_WEATHER_DATA:
            return {};
        default:
            return state;               
    }
};