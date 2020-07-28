import React from 'react'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const uS = makeStyles(theme => ({
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      }
  }));

export default function CardView3(props){
    const classes = uS();
    return(
        <div style = {{width: 'auto', borderRadius: '100%'}}>
                <div style={{textAlign:'center'}}>
                    <Avatar 
                        variant="rounded"
                        alt="Icon Product" 
                        style={{color:'#fff',backgroundColor: (props.color), fontSize:'50px', marginBottom:'13px'}}
                        className={classes.large}>
                            {props.image}
                        </Avatar>
                </div>
                <div >
                    <Typography  color="black" variant="h5" component="h2" style={{marginBottom:'13px', fontSize:'20px'}}>{props.names}</Typography>
                    <Typography gutterBottom color="textSecondary" component="p">{props.desc}</Typography>
                </div>
            </div>
    );
}