import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const usedStyle = makeStyles(theme => ({
    rot:{
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    rootss: {
      maxWidth: 'absolut',
    },
    media: {
      height: 'auto',
    },
    large: {
        width: 'auto',
        height: 'auto',
    }
  }));

  function CardView2  (props){

    const classes = usedStyle();
    return(
    <div style = {{width: 'auto', height:'absolut'}}>    
            <div className = {classes.rootss}>
                <Avatar variant='rounded' alt="image" src={require(""+props.image)} className={classes.large} />
                <div>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.desc}
                </Typography>
                </div>
                <div className={classes.rot}>
                    <Avatar alt = "ava" src={require(""+props.ava)}/>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {props.dates}
                    </Typography>
                </div>
            </div>
    </div>
    );
}  
  export default CardView2