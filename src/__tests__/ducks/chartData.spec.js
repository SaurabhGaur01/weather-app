import {
    setChartData,
    clearChartData,
    chartDataReducer,
} from '../../ducks/chartData';

const mockObject = [
    {
        mockVariable: 'mockValue',
    }
];

describe('chartData Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setChartData should match the snapshot' , () => {
            expect(setChartData(mockObject)).toMatchSnapshot();
        });
        it('clearChartData should match the snapshot' , () => {
            expect(clearChartData()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(chartDataReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(chartDataReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(chartDataReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value of the API call' , () => {
            expect(chartDataReducer('', setChartData(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearChartData' , () => {
            expect(chartDataReducer(mockObject, clearChartData())).toEqual([]);
        });
    });
});