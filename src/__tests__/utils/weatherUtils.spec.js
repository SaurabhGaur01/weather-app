import {
    getNextDays,
    formatDate,
    getAverageTemperature,
    transformResponse
} from '../../utils/weatherUtils';

describe('Utility functions Test', () => {
    describe('getNextDays function test', ()=> {
        it('should return next 5 dates based on the current date', () => {
            expect(getNextDays(new Date())).toEqual([
                '2020-07-17',
                '2020-07-18',
                '2020-07-19',
                '2020-07-20', 
                '2020-07-21'           
            ]);
        });
    });

    describe('formatDate function test', ()=> {
        it('should return date in ddd D MMMM', () => {
            expect(formatDate(1594954800)).toEqual('Fri 17 July');
        });
    });

    describe('getAverageTemperature function test', ()=> {
        it('should return an average of number passed in ddd D MMMM', () => {
            expect(getAverageTemperature([
                1,2,3,4,5
            ])).toEqual(3);
        });
    });

    describe('transformedResponse function test', ()=> {
        it('should return transformedResponse from actual response from API', () => {
            const mockResponse = [
                {
                    "dt": 1594944000,
                    "main": {
                        "temp": 10,
                    },
                    "weather":[
                        {
                            "description":"moderate rain"
                        }
                    ],
                    "dt_txt":"2020-07-17 00:00:00"
                },
            ];

            const transformedResponse = [
                {
                    "date": "Fri 17 July",
                    "description": "moderate rain",
                    "temperature": {
                        "avgtemp": "10.00",
                    },
                    "dataForChart": [
                        {
                            "text": "00:00",
                            "value": 10,
                        }
                    ]
                }
            ];

            expect(transformResponse(mockResponse)).toEqual(transformedResponse);
        });
    });
});