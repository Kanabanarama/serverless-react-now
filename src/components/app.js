import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render(){
       return(
           <div>
               <div style={{width: 1280, height: 800, backgroundColor: 'grey'}}>
                  <span style={{justifyContent: 'center', alignItems: 'center'}}>It works.</span>
               </div>
           </div>
        )
     }
}
