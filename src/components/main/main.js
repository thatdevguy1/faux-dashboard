/* eslint-disable semi */
import React from 'react';
import Dashboard from './dashboard/dashboard';
import Highcharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more.js'
import solidGauge from 'highcharts/modules/solid-gauge.js';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid'

import './main.scss';
import { InputLabel } from '@material-ui/core';

highchartsMore(Highcharts);
solidGauge(Highcharts);

const drawerWidth = 240;

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
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    color: 'white',
    background: '#43425E',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    color: 'white',
    background: '#43425E',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1
    }
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
  },
  hideSpan: {
    display: 'none'
  },
  toolBarTitle: {
    fontSize: '1rem',
    margin: '0 10px'
  }
}));

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
    // events: {
    //   render: renderIcons
    // }
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
      rounded: true
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

function Main (props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', background: 'white' }}>
          <Badge badgeContent={0} color="error" style={{ marginLeft: '15px' }}>
            <BlurCircularIcon style={{ color: 'grey' }} />
          </Badge>
          <Badge badgeContent={0} color="error" style={{ marginLeft: '15px' }}>
            <ForumIcon style={{ color: 'grey' }} />
          </Badge>
          <Badge badgeContent={1} color="error" style={{ marginLeft: '15px' }}>
            <NotificationsIcon style={{ color: 'grey' }} />
          </Badge>
          <InputLabel style={{ borderLeft: 'solid 1px lightgrey', margin: '0 20px', padding: '5px 0 5px 15px', color: 'grey' }}>David Bland</InputLabel>
          <Avatar alt="Remy Sharp" src="https://avatars0.githubusercontent.com/u/20208886?s=400&v=4" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', background: '#3D3B54' }}>
          <span className={clsx({ [classes.hideSpan]: !open, [classes.toolBarTitle]: true })}> AWESOME DASH </span>
          <IconButton onClick={handleDrawer} style={{ width: 'auto' }}>
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'Dashboard', 'About Me', 'Products', 'Invoices', 'Mail Marketing', 'Chat Room', 'Calendar', 'Help Center', 'Settings'].map((text, index) => (
            <ListItem button key={text}
              onClick={event => handleListItemClick(event, index)}
              selected={selectedIndex === index}>
              <ListItemIcon style={{ color: '#A5A4BF' }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content} style={{ paddingLeft: '50px', paddingRight: '50px', 'box-sizing': 'border-box' }}>
        <div className={classes.toolbar} />
        <Grid container spacing={10} direction="row" justify="space-between">
          <Grid item sm={3}>
            <div style={ { width: '100%', height: '150px', background: 'white' } }>

            </div>
          </Grid>
          <Grid item sm={3}>
            <div style={ { width: '100%', height: '150px', background: 'white' } }>

            </div>
          </Grid>
          <Grid item sm={3}>
            <div style={ { width: '100%', height: '150px', background: 'white' } }>

            </div>
          </Grid>
        </Grid>
        <Grid container spacing={10} >
          <Grid item sm={9}>
            <Dashboard options = { splineOptions }/>
          </Grid>
          <Grid item sm={3} className="solid-gauge-wrapper">
            <div className = "solid-gauge-inner-wrap">

              <div className = "solid-gauge-header">
                <span>Money</span>
                <div className="budget-box">
                  <span>Total Budget</span><span style={{ color: 'green' }}>$50,000</span>
                </div>
              </div>

              <Dashboard options = { solidGauge1 } />

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
          <Grid item sm={7}>
            <Dashboard />
          </Grid>
          <Grid item sm={5}>
            <Dashboard options = { splineOptions } />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Main;
