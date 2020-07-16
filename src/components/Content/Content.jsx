import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RingLoader from "react-spinners/RingLoader";
import Temperature from './Temperature/Temperature';
import WeatherCard from './WeatherCard/WeatherCard';
import { contentClass } from '../../utils/getStyles';
import { API_CALL_STATUS_LOADING, API_CALL_STATUS_SUCCESS } from '../../constants/status';
import { loaderClass, loaderSize, loaderColor } from '../../constants/loaderClass';

const Content = ({apiCallStatus}) => {
    const classes = contentClass();
    return (
        <div class="container">
            <div class="row">
                <div className="col-md-2" />
                <div class="col-md-8">
                    <Card className={`root-container ${classes.root}`}>
                        <CardContent>
                            <RingLoader
                                css={loaderClass}
                                size={loaderSize}
                                color={loaderColor}
                                loading={apiCallStatus === API_CALL_STATUS_LOADING ? true: false}
                            />
                            <Temperature />
                            {
                                apiCallStatus === API_CALL_STATUS_SUCCESS && 
                                <WeatherCard />    
                            }
                        </CardContent>
                    </Card>
                </div>
                <div className="col-md-2" />
            </div>
        </div>            
    )
}

Content.propTypes = {
    apiCallStatus: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    apiCallStatus: state.apiCallStatus,
});

export { Content as TestableContent };

export default connect(mapStateToProps)(Content);