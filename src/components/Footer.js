import React from 'react';
import './../assets/css/App.css';

export default ()=>(
        <footer className="container-fluid text-center">
           eJam &copy; {new Date().getFullYear()}
           <p>All Rights Reserved.</p>
        </footer>
);

// import react,{Component,useState} from 'react';

// let counter=()=>{
// const {counter,setCounter} =useState(0)

//   render(){
//       return(
//           <div>
//           <div>{this.state.counter}</div>
//           <button onclick={setCounter(counter++)}>+</button>
//           <button onclick={setCounter(counter--)} >-</button>
//           </div>
//       )
//   }

// }