import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { temperatureClass } from '../../../utils/getStyles';
import handleRetrieveWeatherInfo from '../../../thunks/handleRetrieveWeatherInfo';
import { TEMPERATURE_IN_FAHRENHEIT, DEFAULT_LOCATION, TEMPERATURE_IN_CELSIUS } from '../../../constants/apiInfo';

const Temperature = ({ actionCallWeatherApi }) => {
  const classes = temperatureClass();
  const [value, setValue] = React.useState('F');

  const handleChange = (event) => {
    setValue(event.target.value);
    if(event.target.value === 'C'){
      actionCallWeatherApi(TEMPERATURE_IN_CELSIUS, DEFAULT_LOCATION);
    }else{
      actionCallWeatherApi(TEMPERATURE_IN_FAHRENHEIT, DEFAULT_LOCATION);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6">
        {DEFAULT_LOCATION}
      </Typography>
      <hr/>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup row aria-label="position" name="position" value={value} onChange={handleChange}>
          <FormControlLabel
            value="C"
            control={<Radio color="primary" />}
            label="Celcius"
            labelPlacement="end"
            className={classes.labelControl}
          />
          <FormControlLabel 
              value="F" 
              control={<Radio color="primary" />} 
              label="Fahrenheit" 
              labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
}

Temperature.propTypes = {
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

export { Temperature as TestableTemperature};

export default hocChain(Temperature);