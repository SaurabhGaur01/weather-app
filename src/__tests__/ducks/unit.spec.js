import {
    setUnitFahrenheit,
    setUnitCelsius,
    unitReducer
} from '../../ducks/unit';

import {  CELSIUS_UNIT, FAHRENHEIT_UNIT } from '../../constants/apiInfo';

describe('unit Duck Tests', () => {
    const mockState = {
        key: 'mockKey',
    }

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setUnitCelsius should match the snapshot' , () => {
            expect(setUnitCelsius()).toMatchSnapshot();
        });
        it('setUnitFahrenheit should match the snapshot' , () => {
            expect(setUnitFahrenheit()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(unitReducer()).toEqual('');
        });
        it('should return the passed state if called with no action' , () => {
            expect(unitReducer(mockState)).toBe(mockState);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(unitReducer(mockState, unknownAction)).toBe(mockState);
        });
    });

    describe('when called with a particular action', () => {
        it('should return the value of the constant FAHRENHEIT_UNIT' , () => {
            expect(unitReducer(mockState, setUnitFahrenheit()))
            .toEqual(FAHRENHEIT_UNIT);
        });
        it('should return the value of the constant CELSIUS_UNIT' , () => {
            expect(unitReducer(mockState, setUnitCelsius()))
            .toEqual(CELSIUS_UNIT);
        });
    });

})