import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ImageSwipe1 from './ImageSwipe1';
import ImageSwipe2 from './ImageSwipe2';
import ImageSwipe3 from './ImageSwipe3';
import ImageList1 from './ImageList1';
import GridList from './GridList';
import ProfileList from './ProfileList';
import { IoIosSearch } from "react-icons/io";
import GridIcon from './GridIcon';

const useStyles = makeStyles({
  font:{
    fontFamily:" 'Heebo' , sans-serif"
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root:{
    width: 'absolut',
    flexGrow: 1
  },
  menuButton: {
    marginRight: 0,
  },
  title: {
    position: 'absolut',
    flexGrow: 1,
    textAlign: 'center'
  },
});

function Apps({setDrawerOpen,drawerOpen}) {

  const classes = useStyles();

  return (
    <div className={classes.font}>
      <AppBar color = "white" position='fixed'>
        <Toolbar>
          <IconButton className={classes.menuButton} color="black" aria-label="Bitter" onClick={() => (setDrawerOpen({left: !drawerOpen.left}))}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Bitter
          </Typography>
          <Button color="black" style={{fontSize:'25px'}}><IoIosSearch /></Button>
        </Toolbar>
      </AppBar>
      <div>
            <ImageSwipe1/>
        </div>
        <div style={{marginLeft:'10px'}}>
            <span className = {classes.text}>NEWS</span>
            <h2 className = {classes.text}>TODAY</h2>
            <ImageSwipe2/>
        </div>
        <div style={{marginLeft:'10px'}}>
          <ImageSwipe3/>
        </div>
        <div style={{marginLeft:'10px'}}>
          <span className = {classes.text}>OVERVIEW</span>
          <h2 className = {classes.text}>Products</h2>
          <p>Bitter is using modern design style
            Simple and elegant design lines</p>
          <ImageList1/>
        </div>
        <div style={{marginLeft:'10px', marginBottom:10}}>
          <p className = {classes.text}>LASTEST</p>
          <h2 className = {classes.text}>Blogs</h2>
          <GridList/>
        </div>
        <div style={{marginLeft:'10px'}}>
          <GridIcon/>
        </div>
        <div style={{marginLeft:'10px'}}>
          <p className = {classes.text}>Most Popular
          <h2 className = {classes.text}>Profiles</h2>
          </p>
          <ProfileList/>
        </div>
        <div style={{marginBottom:'80px', fontSize:'12px', textAlign:'center'}}>
        <h2>CopyRight Bitter 2019. All Rights Reserved.</h2>
          <p>Modern,simple, and elegant design for mobile devices. Based on React</p>
        </div>
    </div>
  );
}

export default Apps;
