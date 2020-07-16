import { 
    setApiCallStatusError, setApiCallStatusLoading, setApiCallStatusSuccess
} from '../ducks/apiCallStatus';
import { setWeatherData } from '../ducks/weatherData';
import { setUnitCelsius, setUnitFahrenheit } from '../ducks/unit';
import { 
    BASE_URL, COUNT, APP_ID, TEMPERATURE_IN_FAHRENHEIT
} from '../constants/apiInfo';
import { transformResponse } from '../utils/weatherUtils';

const handleRetrieveWeatherInfo = (unit, location) => {
    const url = BASE_URL+'?q='+location+'&APPID='+APP_ID+'&cnt='+COUNT+'&units='+unit;
    return async (dispatch) =>{
        dispatch(setApiCallStatusLoading());
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const transformedResponse = transformResponse(data.list);
            dispatch(setWeatherData(transformedResponse));
            unit === TEMPERATURE_IN_FAHRENHEIT ? dispatch(setUnitFahrenheit()) : dispatch(setUnitCelsius());
            dispatch(setApiCallStatusSuccess());
        })
        .catch(error => dispatch(setApiCallStatusError()));
    }
}

export default handleRetrieveWeatherInfo;