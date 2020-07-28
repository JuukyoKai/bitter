import React from 'react';
import { IoIosAnalytics } from "react-icons/io";
import { IoIosFolderOpen } from "react-icons/io";
import { IoIosCut} from "react-icons/io";
import { IoIosThumbsUp } from "react-icons/io";
import Grid from '@material-ui/core/Grid';
import CardView3 from './CardView3';

export default function GridIcon(){
    return(
        <div>
            <Grid container spacing = {2}>
                <Grid item xs>
                    <CardView3 image={<IoIosAnalytics/> } names={"Component"} desc={"Use the latest easy to use components"} color={'blue'}/>
                </Grid>
                <Grid item xs>
                <CardView3 image={<IoIosCut/>} names={"UX Based"} desc={"We design Bitter UX based, simple and clean"} color={'pink'}/>
                </Grid>
            </Grid>
            <Grid container spacing = {2}>
                <Grid item xs>
                <CardView3 image={<IoIosFolderOpen/> } names={"Well Documented"}  desc={"With Bitter you can easily build and edit the theme"} color={'green'}/>
                </Grid>
                <Grid item xs>
                <CardView3 image={<IoIosThumbsUp/>} names={"Ready to Build"}  desc={"Does not require long installation"} color={'purple'}/>    
                </Grid>
            </Grid>
        </div>
    );
}
