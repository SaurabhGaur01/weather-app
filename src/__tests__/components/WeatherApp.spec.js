import React from 'react';
import { shallow } from 'enzyme';
import { TestableWeatherApp } from '../../components/WeatherApp';

describe('WeatherApp Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionCallWeatherApi: jest.fn(),
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableWeatherApp {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('componentDidMount', () => {
        it('should call actionCallWeatherApi', () => {
            const instance = shallow(<TestableWeatherApp {...props} />).instance();
            instance.componentDidMount();
            expect(props.actionCallWeatherApi).toHaveBeenCalled();
        })
    })
})