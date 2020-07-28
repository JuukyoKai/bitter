import React from 'react'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const uS = makeStyles(theme => ({
    large: {
        width: theme.spacing(16),
        height: theme.spacing(16),
      },root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
      },
  }));

export default function ImageList1(){
    const classes = uS();
    return(
        <div style = {{width: 'auto', borderRadius: '100%'}}>
            <div className={classes.root}> 
                <div style={{textAlign:'center'}}>
                    <Avatar 
                        variant="rounded"
                        alt="Icon Product" 
                        src={require("./assets/photo14.jpg")}
                        className={classes.large} />
                </div>
                <div>
                    <Typography  color="textPrimary" variant="h5" component="h2" style={{marginBottom:'20px'}}>
                        Pinky Glasses
                    </Typography>
                    <Typography gutterBottom color="textSecondary" component="p">
                        Simple and elegant design line and has stunning looks
                    </Typography>
                </div>
            </div>
            <div className={classes.root}> 
                <div style={{textAlign:'center'}}>
                    <Avatar 
                        variant="rounded"
                        alt="Icon Product" 
                        src={require("./assets/photo13.jpg")}
                        className={classes.large} />
                </div>
                <div>
                    <Typography  color="black" variant="h5" component="h2" style={{marginBottom:'20px'}}>
                        Yellowish Headphone
                    </Typography>
                    <Typography gutterBottom color="textSecondary" component="p">
                        Perfect spacing and perfect color scheme
                    </Typography>
                </div>
            </div>
            <div className={classes.root}> 
                <div style={{textAlign:'center'}}>
                    <Avatar 
                        variant="rounded"
                        alt="Icon Product" 
                        src={require("./assets/photo4.jpg")}
                        className={classes.large} />
                </div>
                <div>
                    <Typography  color="black" variant="h5" component="h2" style={{marginBottom:'20px'}}>
                        Hybrid
                    </Typography>
                    <Typography gutterBottom color="textSecondary" component="p">
                        Just what you need for perfect hybrid app design
                    </Typography>
                </div>
            </div>
        </div>
    );
}