import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import ScrollContainer from 'react-indiana-drag-scroll';
import { makeStyles } from '@material-ui/core/styles';


const listImage = [
    {
        id:1,
        srcImage: "./assets/photo12.jpg",
        descr: "What is the best gift to buy for your husband?",
    },
    {
        id:2,
        srcImage: "./assets/photo13.jpg",
        descr: "Can you spot difference in this scene",
    },
    {
        id:3,
        srcImage: "./assets/photo2.jpg",
        descr: "20 present that actualy won't Get Re-Gifted",
    },
    {
        id:4,
        srcImage: "./assets/photo3.jpg",
        descr: "Is Orange Juice the Enemy of the Disease?",
    },
    {
        id:5,
        srcImage: "./assets/photo4.jpg",
        descr: "Best selling furniture of this year"
    },
];

const uS = makeStyles(theme => ({
    larges: {
        width: theme.spacing(12),
        height: theme.spacing(12),
      },root: {
        marginRight:'10px',
        position: 'absolut',
      },
  }))

export default function ImageSwipe2(){
    const classes = uS();
    return(
        <ScrollContainer className="scroll-container">
        <div style={{display:"flex", flexDirection:"row", padding:10}}>
            {listImage.map(item => (
                <li key={item.id} style={{listStyle: 'none'}}>
                        <div className={classes.root}> 
                            <div style={{textAlign:'center'}}>
                                <Avatar variant="rounded"
                                    alt="Icon Product" 
                                    src={require(""+item.srcImage)}
                                    className={classes.larges} />
                             </div>
                             <div style={{textAlign:'left'}}>
                                <Typography color="black" component="p" style={{fontSize:'15px',fontWeight:'bold'}} >
                                    {item.descr}
                                </Typography>
                             </div>
                        </div>
                </li>   
               
            ))}
        </div>
        </ScrollContainer>
    );
}