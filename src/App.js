import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { IoIosSearch } from "react-icons/io";
import { IoIosAnalytics } from "react-icons/io";
import { IoMdEgg } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
  fontFamily: 'Heebo , sans-srif',
  root: {
    width: 'absolut',
  },
  text:{
      marginLeft: 20,
  }
});

function App({setDrawerOpen,drawerOpen}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.fontFamily}>
    <AppBar position='fixed' style={{top:'auto',bottom:0}}>
    <BottomNavigation 
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<IoMdEgg />} style={{fontSize:'25px'}}/>
      <BottomNavigationAction label="Pages" icon={<IoIosApps />} style={{fontSize:'25px'}}/>
      <BottomNavigationAction label="Components" icon={<IoIosAnalytics style={{fontSize:'25px'}}/>} />
      <BottomNavigationAction label="Search" icon={<IoIosSearch />} style={{fontSize:'25px'}}/>
      <BottomNavigationAction label="Menu" icon={<MenuIcon />} style={{fontSize:'25px'}} onClick={() => (setDrawerOpen({left: !drawerOpen.left}))}/>
    </BottomNavigation>
    </AppBar>
    </div>  
    
  );
}

export default App;
