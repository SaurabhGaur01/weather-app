import { 
    CELSIUS_UNIT, FAHRENHEIT_UNIT
} from '../constants/apiInfo';

export const SET_UNIT_CELSIUS = 'modules/weather-app/SET_UNIT_CELSIUS';
export const SET_UNIT_FAHRENHEIT = 'modules/weather-app/SET_UNIT_FAHRENHEIT';

export const setUnitCelsius = () => ({
    type: SET_UNIT_CELSIUS,
});

export const setUnitFahrenheit = () => ({
    type: SET_UNIT_FAHRENHEIT,
});

export const unitReducer = (state = '', action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_UNIT_CELSIUS:
            return CELSIUS_UNIT;
        case SET_UNIT_FAHRENHEIT:
            return FAHRENHEIT_UNIT;
        default:
            return state;               
    }
};