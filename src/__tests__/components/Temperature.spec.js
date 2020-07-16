import React from 'react';
import { shallow } from 'enzyme';
import { TestableTemperature } from '../../components/Content/Temperature/Temperature';

jest.mock('@material-ui/core/Typography', () => 'span');
jest.mock('@material-ui/core/Radio', () => 'radio')
jest.mock('@material-ui/core/RadioGroup', () => 'RadioGroup')
jest.mock('@material-ui/core/FormControlLabel', () => 'label')
jest.mock('@material-ui/core/FormControl', () => 'form')

describe('Temperature Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionCallWeatherApi: jest.fn(),
            handleChange: () => ('handleChange'),
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableTemperature {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });
})