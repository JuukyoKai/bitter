import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ScrollContainer from 'react-indiana-drag-scroll';


const listImage = [
    {
        id:1,
        srcImage: "./assets/product1.jpg",
        descr: "Headphone",
    },
    {
        id:2,
        srcImage: "./assets/product2.jpg",
        descr: "Furniture",
    },
    {
        id:3,
        srcImage: "./assets/product3.jpg",
        descr: "Watch",
    },
    {
        id:4,
        srcImage: "./assets/product4.jpg",
        descr: "Camera",
    },
    {
        id:5,
        srcImage: "./assets/product5.jpg",
        descr: "Computer"
    },
    {
        id:6,
        srcImage: "./assets/product6.jpg",
        descr: "Fruits"
    },
    {
        id:7,
        srcImage: "./assets/product7.jpg",
        descr: "Pencil"
    },
]


  const uS = makeStyles(theme => ({
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },root: {
        marginRight:'10px',
        position: 'absolut',
        textAlign: 'center'
      },
  }));

  export default function ImageSwipe3(){
      const classes = uS();   

    return(
        <ScrollContainer className="scroll-container">
        <div style={{display:"flex", flexDirection:"row"}}>
            {listImage.map(item => (
                <li key={item.id} style={{listStyle: 'none'}}>
                        <div className={classes.root}> 
                            <div style={{ marginRight:'10px', marginTop:'30px'}}>
                                <Avatar 
                                    alt="Icon Product" 
                                    src={require(""+item.srcImage)}
                                    className={classes.large} />
                             </div>
                             <div>
                                <Typography gutterBottom color="textPrimary" component="p" style={{fontSize:'12px',fontWeight:'bold'}}>
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