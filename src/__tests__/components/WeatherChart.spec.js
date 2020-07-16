import React from 'react';
import { shallow } from 'enzyme';
import { TestableWeatherChart } from '../../components/Content/Chart/WeatherChart';

describe('WeatherChart Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            chartData: [
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
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableWeatherChart {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });
})