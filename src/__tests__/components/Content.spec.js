import React from 'react';
import { shallow } from 'enzyme';
import { TestableContent } from '../../components/Content/Content';
import { API_CALL_STATUS_LOADING, API_CALL_STATUS_SUCCESS } from '../../constants/status';

describe('Content Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            apiCallStatus: API_CALL_STATUS_LOADING,
            contentClass: jest.fn(),
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableContent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when apiCallStatus is Success', () => {
        props.apiCallStatus = API_CALL_STATUS_SUCCESS;
        const renderedModule = shallow(<TestableContent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });
})