/* eslint-disable semi */
/* eslint-disable no-tabs */
import React from 'react';
import clsx from 'clsx';
import { Grid, TextField, Checkbox, makeStyles } from '@material-ui/core';

import './login.scss'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: 3,
    width: 12,
    height: 12,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 12,
      height: 12,
      backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  }
});

function Login (props) {
  const classes = useStyles()

  return (
    <Grid container className="container-height">
      <Grid container item sm={7} style={{ background: 'indigo' }}></Grid>
      <Grid container item sm={5} direction="row" justify="center" alignItems="center">
        <div className="align-center">
          <h3 className="login-title">AWESOME DASH</h3>
          <span id="sub-title" style={{ 'text-align': 'center' }}>Welcome back! Please login to your account.</span>
          <form noValidate autoComplete="off" justify="center" alignItems="center">
            <div className="control-div">
              <TextField id="standard-basic" label="Username" fullWidth/>
            </div>
            <div className="control-div">
              <TextField id="standard-basic" label="Password" type="password" fullWidth />
            </div>
            <Grid container style={{ 'margin-top': '30px' }}>
              <Grid item sm={6} style={{ 'text-align': 'left' }}>
                { /* check width and height */ }
                <Checkbox
                  style={{ 'font-size': '0px', margin: '0px', padding: '0px 10px 0 0' }}
                  checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                  icon={<span className={classes.icon} />}
                  value="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }} />
                <span style={{ 'font-size': '10px' }}>Remember Me</span>
              </Grid>
              <Grid item sm={6} style={{ textAlign: 'right' }}>
                <a style={{ 'font-size': '10px' }}>Forgot Password</a>
              </Grid>
            </Grid>
            <Grid container style={{ 'margin-top': '50px' }} justify="space-between">
              <button id="login-btn">
								Login
              </button>
              <button id="signup-btn">
									Sign Up
              </button>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
};

export default Login;
