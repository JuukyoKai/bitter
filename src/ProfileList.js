import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const listProfile = [
    {
        srcImage:'./assets/avatar.jpg',
        name:'Carmen Beltran',
        city:'New York City'
    },
    {
        srcImage:'./assets/avatar2.jpg',
        name:'Furmaan Bharyar',
        city:'London'
    },
    {
        srcImage:'./assets/avatar3.jpg',
        name:'Kari Granleese',
        city:'Paris'
    },
    {
        srcImage:'./assets/avatar4.jpg',
        name:'Jurrian van der Broek',
        city:'Klew'
    },
    {
        srcImage:'./assets/avatar5.jpg',
        name:'Homayoun Shakibaii',
        city:'Monterrey'
    },
    {
        srcImage:'./assets/avatar6.jpg',
        name:'Carmen Beltran',
        city:'New York City'
    },
    {
        srcImage:'./assets/avatar7.jpg',
        name:'Stephanus Huggins',
        city:'Oslo'
    },
    {
        srcImage:'./assets/avatar8.jpg',
        name:'Malin Quist',
        city:'Tokyo'
    },
];

const uS = makeStyles(theme => ({
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
      },
  }));

export default function ProfileList(){
    const classes = uS();
    return(
        <div>
            {listProfile.map(item => (
                <li key={item.id} style={{listStyle: 'none'}}>
                        <div className={classes.root}> 
                            <div style={{textAlign:'center'}}>
                                <Avatar 
                                    alt="Icon Product" 
                                    src={require(""+item.srcImage)}
                                    className={classes.large} />
                             </div>
                             <div>
                                <Typography  color="black" variant="h5" component="h2" style={{marginBottom:'20px'}}>
                                    {item.name}
                                </Typography>
                                <Typography gutterBottom color="textSecondary" component="p">
                                    {item.city}
                                </Typography>
                             </div>
                        </div>
                </li>    
            ))}
        </div>
    );
}
