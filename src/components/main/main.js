/* eslint-disable semi */
import React from 'react';

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

import './main.scss';
import { InputLabel } from '@material-ui/core';
import Dashboard from './dashboard/dashboard';

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
      <main className={classes.content} style={{ padding: '0 50px 50px 50px', boxSizing: 'border-box' }}>
        <div className={classes.toolbar} />
        <Dashboard />
      </main>
    </div>
  );
}

export default Main;
