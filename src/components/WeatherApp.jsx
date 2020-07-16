import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import handleRetrieveWeatherInfo from '../thunks/handleRetrieveWeatherInfo';
import Content from '../components/Content/Content';
import { TEMPERATURE_IN_FAHRENHEIT, DEFAULT_LOCATION } from '../constants/apiInfo';

class WeatherApp extends React.Component{
    componentDidMount(){
        const { actionCallWeatherApi } = this.props;
        actionCallWeatherApi(TEMPERATURE_IN_FAHRENHEIT, DEFAULT_LOCATION);
    }
    
    render(){
        return (
            <Content />
        )
    }
}

WeatherApp.propTypes = {
    actionCallWeatherApi: PropTypes.func.isRequired,
};

const mapDispatchAsProps = dispatch =>{
    return {
        actionCallWeatherApi: (temperature, location) => dispatch(handleRetrieveWeatherInfo(temperature, location)),
    };
}

const hocChain = compose(
    connect(null, mapDispatchAsProps),
);

export { WeatherApp as TestableWeatherApp };

export default hocChain(WeatherApp);