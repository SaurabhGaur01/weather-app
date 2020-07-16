import {
    setWeatherData,
    clearWeatherData,
    weatherDataReducer,
} from '../../ducks/weatherData';

const mockObject = {
        mockVariable: 'mockValue',
};

describe('weatherData Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setWeatherData should match the snapshot' , () => {
            expect(setWeatherData(mockObject)).toMatchSnapshot();
        });
        it('clearWeatherData should match the snapshot' , () => {
            expect(clearWeatherData()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(weatherDataReducer()).toEqual({});
        });
        it('should return the passed state if called with no action' , () => {
            expect(weatherDataReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(weatherDataReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value of the API call' , () => {
            expect(weatherDataReducer('', setWeatherData(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearWeatherData' , () => {
            expect(weatherDataReducer(mockObject, clearWeatherData())).toEqual({});
        });
    });
});