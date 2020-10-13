/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import highchartsMore from 'highcharts/highcharts-more.js'
import solidGauge from 'highcharts/modules/solid-gauge.js';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const Dashboard = (props) => {
  const [btc, setBtc] = useState([]);
  const [tableBookmark, setTableBookmark] = useState(8);
  const [rows, setRows] = useState([]);

  /* Get BTC data and update the BTC state with the information as well as call the expandTable
     function with the data as an argument */
  useEffect(() => {
    (async () => {
      const data = await (await fetch('https://api.coinranking.com/v1/public/coin/1/history/24h')).json();
      setBtc(data.data.history);
      expandTable(data.data.history);
      generateAverage(data.data.history);
    })();
  }, []);

  /* Takes array of BTC data and creates rows for table based on the amount of rows (tableBookmark)
     the users wants to view which gets saved in the rows state */
  const expandTable = (data) => {
    const newRows = []
    for (var i = 0; i < tableBookmark; i++) {
      var date = new Date(data[i].timestamp);
      newRows.push(createData(date.toLocaleString(), Number(data[i].price).toFixed(2), 10, 10, 10));
    };
    setRows(newRows);
    // use this to check date generated on line 66 --> console.log(date);
  };

  // Creating objects to be used to dynamicaly populate our table rows. Initially saved to rows state
  const createData = (tradeDate, price) => {
    return { tradeDate, price };
  };

  // ###################### Only shows Tuesday and Wednesday, consider something else for graphs ###################
  // Generates price average for each day based on the total amount of days and saves it to the average state
  const generateAverage = (data) => {
    // elements 0 - 6 represent the days of the week Sunday - Saturday
    const averagePerDay = [[], [], [], [], [], [], []];

    data.forEach((data) => {
      const day = new Date(data.timestamp);
      averagePerDay[day.getDay()].push(data.price);
    });
  };

  // Highchars / highcharts-react specific options and styles
  const classes = useStyles();
  highchartsMore(Highcharts);
  solidGauge(Highcharts);
  const splineOptions = {
    chart: {
      type: 'areaspline',
      spacingBottom: 60,
      spacingTop: 40
    },
    title: {
      align: 'left',
      text: 'Views',
      y: -5,
      x: 13
    },
    legend: {
      align: 'left',
      verticalAlign: 'bottom',
      x: 0,
      y: 40,
      floating: true,
      borderWidth: 0,
      backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      width: '100%',
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: ' units'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    //   colors: ['#AEEDFF', '#A3A0FC'],
    colors: [{
      linearGradient: { x1: 1, y1: 1, x2: 1, y2: 0 },
      stops: [
        [0, 'rgba(255, 255, 255, 0)'],
        [1, 'rgba(174, 237, 255, .8)']
      ]
    }, {
      linearGradient: { x1: 1, y1: 1, x2: 1, y2: 0 },
      stops: [
        [0, 'rgba(255, 255, 255, 0)'],
        [1, 'rgba(163, 160, 252, .8)']
      ]
    }],
    series: [{
      name: 'John',
      data: [12, 6, 3, 8, 4, 10, 12],
      lineColor: 'rgba(174, 237, 255, 1)',
      lineWidth: 1,
      marker: {
        fillColor: 'white',
        lineWidth: 1,
        lineColor: 'rgba(174, 237, 255, 1)'
      }
    }, {
      name: 'Jane',
      data: [1, 13, 10, 6, 10, 5, 4],
      lineWidth: 1,
      lineColor: 'rgba(163, 160, 252, 1)',
      marker: {
        fillColor: 'white',
        lineWidth: 1,
        lineColor: 'rgba(163, 160, 252, 1)'
      }
    }]
  };

  const solidGauge1 = {

    chart: {
      type: 'solidgauge',
      height: '70%'
    },

    title: {
      text: ''
    },
    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '13px'
      },
      valueSuffix: '%',
      pointFormat: '{series.name}<br><span style="font-size:2em; color: {black}; font-weight: bold">{point.y}</span>',
      positioner: function (labelWidth) {
        return {
          x: ((this.chart.chartWidth - labelWidth) / 2) + 7,
          y: (this.chart.plotHeight / 2) - 25
        };
      }
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{ // Track for Move
        outerRadius: '105%',
        innerRadius: '90%',
        backgroundColor: 'rgba(163, 160, 252, .5)',
        borderWidth: 0
      }]
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: false
      }
    },

    series: [{
      name: 'Saved',
      data: [{
        color: 'rgba(163, 160, 252, 1)',
        radius: '105%',
        innerRadius: '90%',
        y: 50
      }]
    }]
  };

  const histogram = {
    chart: {
      type: 'column',
      height: '80%',
      width: 130
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      visible: false,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      visible: false
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0,
        shadow: false
      }
    },
    series: [{
      name: 'Data',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 120, 135, 80, 92, 50, 111, 130]

    }]
  };

  return (
    <>
      <Grid container spacing={10} direction="row" justify="space-between">
        <Grid item sm={3}>
          <div style={ { width: '100%', height: '150px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' } }>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%', padding: '10px' }}>
              <span>Total Views</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>246k</span>
                <span>13%</span>
              </div>
            </div>
            <div>
              <HighchartsReact highcharts = { Highcharts } options = { histogram } />
            </div>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div style={ { width: '100%', height: '150px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' } }>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%', padding: '10px' }}>
              <span>Total Views</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>246k</span>
                <span>13%</span>
              </div>
            </div>
            <div>
              <HighchartsReact highcharts = { Highcharts } options = { histogram } />
            </div>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div style={ { width: '100%', height: '150px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' } }>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%', padding: '10px' }}>
              <span>Total Views</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>246k</span>
                <span>13%</span>
              </div>
            </div>
            <div>
              <HighchartsReact highcharts = { Highcharts } options = { histogram } />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={10} >
        <Grid item sm={9}>
          <HighchartsReact highcharts = { Highcharts } options = { splineOptions }/>
        </Grid>
        <Grid item sm={3} className="solid-gauge-wrapper">
          <div className = "solid-gauge-inner-wrap">

            <div className = "solid-gauge-header">
              <span>Money</span>
              <div className="budget-box">
                <span>Total Budget</span><span style={{ color: 'green' }}>$50,000</span>
              </div>
            </div>

            <HighchartsReact highcharts = { Highcharts } options = { solidGauge1 } />

            <div className="solid-gauge-info-wrap">
              <span className = "total-spent-info">Total Spent</span>
              <span className = "money-saved-info">Money Saved</span>
            </div>

            <div className = "solid-gauge-footer">
              <span>View Full Report</span>
            </div>

          </div>
        </Grid>
      </Grid>
      <Grid container spacing={10} >
        <Grid item sm={7} >
          <div style={{ background: 'white', minHeight: '400px', padding: '15px' }}>
            <span>Referrer</span>
            <TableContainer component={Paper} style={{ boxShadow: 'none', margin: '15px 0' }}>
              <Table className={classes.table} size='small' aria-label="simple table">
                <TableHead style={{ background: '#F5F6FA' }}>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {row.tradeDate}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <span>Show More</span>
          </div>
        </Grid>
        <Grid item sm={5}>
          <HighchartsReact highcharts = { Highcharts } options = { splineOptions } />
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
