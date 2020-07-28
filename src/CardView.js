import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const usedStyle = makeStyles({
    rootss: {
      maxWidth: 'absolut',
    },
    media: {
      height: 'auto',
    },
  });

function CardView  (props){

    const classes = usedStyle;
    return(
    <div style = {{width: 'auto', margin: '10px', borderRadius: '50%'}}>    
    <Card className = {classes.rootss}>
        <CardActionArea>
            <div>
            <CardMedia 
                component="img"
                alt="Image Blog"
                height="auto"
                image={require(""+props.image)}
                title="Image Blog">      
            </CardMedia>
            </div>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.desc}
          </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    </div>
    );
}  
  export default CardView