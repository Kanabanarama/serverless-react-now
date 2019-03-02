import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './Dashboard';

export default class App extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     fullscreen: false
   }
  }
  toggleFullscreen(){
    var elem = document.getElementById('app');

    if(!this.state.fullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    this.setState({
      fullscreen: !this.state.fullscreen
    })
  }
  render(){
     return(
       <div>
         <div style={{width: 1280, height: 800, backgroundColor: 'black', overflow: 'hidden'}}>
           <div onDoubleClick={() => { this.toggleFullscreen(); }}>
            <Dashboard />
           </div>
         </div>
       </div>
    )
   }
}
