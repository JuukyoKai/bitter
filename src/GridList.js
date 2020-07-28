import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardView2 from './CardView2';

const listGrid = [
    {
        id:1,
        srcImage:'./assets/photo11.jpg',
        descr:"Juxon praises Peri's resilience after testing week",
        avaImage:'./assets/avatar.jpg',
        date:'25 Sep 2019'
    },
    {
        id:2,
        srcImage:'./assets/photo8.jpg',
        descr:"Top 10 Travel Bloggers You Should Follow",
        avaImage:'./assets/avatar2.jpg',
        date:'21 Sep 2019'
    },
    {
        id:3,
        srcImage:'./assets/photo3.jpg',
        descr:"Is Orange Juice the Enemy of the Disease?",
        avaImage:'./assets/avatar.jpg',
        date:'15 Sep 2019'
    },
    {
        id:4,
        srcImage:'./assets/photo4.jpg',
        descr:"Check The Best Selling Furniture of This Year",
        avaImage:'./assets/avatar.jpg',
        date:'12 Sep 2019'
    },
];

export default function GridList(){
    return(
        <div>
            <Grid container spacing = {2}>
                <Grid item xs>
                    <CardView2 image={listGrid[0].srcImage } desc={listGrid[0].descr} ava={listGrid[0].avaImage} dates={listGrid[0].date}/>
                </Grid>
                <Grid item xs>
                <CardView2 image={listGrid[1].srcImage } desc={listGrid[1].descr} ava={listGrid[1].avaImage} dates={listGrid[1].date}/>
                </Grid>
            </Grid>
            <Grid container spacing = {2}>
                <Grid item xs>
                <CardView2 image={listGrid[2].srcImage } desc={listGrid[2].descr} ava={listGrid[2].avaImage} dates={listGrid[2].date}/>
                </Grid>
                <Grid item xs>
                <CardView2 image={listGrid[3].srcImage } desc={listGrid[3].descr} ava={listGrid[3].avaImage} dates={listGrid[3].date}/>    
                </Grid>
            </Grid>
        </div>
    );
}