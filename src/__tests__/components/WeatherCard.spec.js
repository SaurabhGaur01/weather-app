import React from 'react';
import { shallow } from 'enzyme';
import { TestableWeatherCard } from '../../components/Content/WeatherCard/WeatherCard';

jest.mock('@material-ui/core/Card', () => 'Card');
jest.mock('@material-ui/core/CardActionArea', () => 'CardActionArea');
jest.mock('@material-ui/core/CardContent', () => 'CardContent');
jest.mock('@material-ui/core/Typography', () => 'Typography');
jest.mock('@material-ui/core/IconButton', () => 'IconButton');
jest.mock('@material-ui/icons/ArrowForwardIos', () => 'ArrowForwardIos');
jest.mock('@material-ui/icons/ArrowBackIos', () => 'ArrowBackIos');

describe('WeatherCard Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetChartingData: jest.fn(),
            handleClick: jest.fn(),
            unit: 'F',
            weatherData: [
                {
                    date: '',
                    description: '',
                    temperature: {
                        avgtemp: ''
                    },
                    dataForChart: [
                        {
                            text: '03:00',
                            value: 50.
                        },
                        {
                            text: '04:00',
                            value: 60.
                        },
                    ]
                }
            ]
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableWeatherCard {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetChartingData when component mounts', () => {
        jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
        const { actionSetChartingData } = props;
        shallow(<TestableWeatherCard {...props} />);
        expect(actionSetChartingData).toHaveBeenCalledTimes(1);
    });
})