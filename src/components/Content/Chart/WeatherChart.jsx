import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BarChart from 'react-bar-chart';
   
const margin = {top: 20, right: 20, bottom: 30, left: 40};
   
class WeatherChart extends React.Component{
    constructor(props) {
      super(props);
      let width = window.innerWidth;
      if (width > 768) {
        this.state = {
          width: 500
        }
      }else{
        this.state = {
          width: 300
        }
      } 
    }
 
    render() {
      const { chartData } = this.props;
      return (
          <div ref='root'>
            <BarChart 
              width={this.state.width}
              height={200}
              margin={margin}
              data={chartData}
            />
          </div>
      );
    }
};

WeatherChart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })),
};

const mapStateToProps = state => ({
  chartData: state.chartData,
});

export { WeatherChart as TestableWeatherChart };

export default connect(mapStateToProps)(WeatherChart);