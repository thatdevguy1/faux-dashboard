/* eslint-disable semi */
import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Dashboard = (props) => {
  const defaultOptions = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      // eslint-disable-next-line react/prop-types
      options={props.options || defaultOptions}
    />
  )
}

export default Dashboard
