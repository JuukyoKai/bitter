import React from 'react';
import Apps from './Apps';
import App from './App';
import DrawerLeft from './DrawerLeft';

export default function App1(){
    const [drawerOpen,setDrawerOpen] = React.useState( {left: false})
    return(
    <div>
     <DrawerLeft  drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
     <Apps drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/> 
     <App drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
   </div>
    )
}