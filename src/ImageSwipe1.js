import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactSwipe from 'react-swipe';
import { Avatar } from '@material-ui/core';

const swipeOptions = {
    disableScroll: true,
    continuous: true,
    widthOfSiblingSlidePreview:10,
  };


const listDescImage = [
    {
        type: 'SPORTS',
        image: './assets/photo11.jpg',
        like: '12K',
        title: 'Juxon Julio praises Peri’s resilience after testing week',
        avatar: './assets/avatar5.jpg',
        hours: '2 hours ago',
        name:'Jackie Pearson'
    },
    {
        type: 'WORLD',
        image: './assets/photo10.jpg',  
        like: '12K',
        title: 'Best of Skyscrapers in the World',
        avatar: './assets/avatar6.jpg',
        hours: '2 hours ago',
        name:'Vincent Hunt'
    },
    {
        type: 'TRAVEL',
        image: './assets/photo8.jpg',  
        like: '523',
        title: 'Top 10 Travel Bloggers You Should Already Be Following',
        avatar: './assets/avatar3.jpg',
        hours: '5 hours ago',
        name:'Marti Valencia'
    },
    {
        type: 'EVENTS',
        image: './assets/photo5.jpg',  
        like: '12K',
        title: "The World's Largest Pillow Fight is Also a Festival",
        avatar: './assets/avatar.jpg',
        hours: '2 hours ago',
        name:'Sofie Fulloway'
    }
    ];

    function ImageSwipe1(){
        
    return(
        <div style={{marginTop:'80px'}}>
            <ReactSwipe
            className="carousel"
            swipeOptions={{ swipeOptions}}
            >
                {listDescImage.map(item => (
                    <li style={{listStyle:'none'}}>
                        <div>
                    <img src={require(""+item.image)} alt = "first" style={{filter:'brightness(65%)', borderRadius:20, padding:10}}/>
                    <div style={{position:'absolute', top:0, bottom:0, left:0, right:0, margin:18, color:'#ffff', fontWeight:'bold'}}>
                        <div style={{flexDirection:'row', justifyContent:'space-between',flexGrow:1,  display:'flex' , fontSize:20}}>
                            <label>{item.type}</label>
                            <label>{item.like}</label>
                        </div>
                        <div style={{fontSize:30, marginTop:100}}>
                            <label>{item.title}</label>
                        </div>
                        <div style={{flexDirection:'row', flexGrow:1, display:'flex', top:'auto', bottom:0}}>
                            <div style={{flexDirection:'row', flexGrow:1, display:'flex', alignItems:'center'}}>
                                <Avatar 
                                alt="Icon Product" 
                                src={require(""+item.avatar)}/>
                                <label style={{marginLeft:10}}>Jackie Pearson</label>
                            </div>
                            <div style={{marginRight:10, justifyContent:"space-between", display:'flex', alignItems:'center'}}>
                            <label>{item.hours}</label>
                            </div>
                        </div>
                    </div>
                </div>
                    </li>
                ))}
            </ReactSwipe>
        </div>
    );
}

export default ImageSwipe1;