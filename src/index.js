import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

let curdate = new Date();
curdate = curdate.getHours();
let greeting = "";
const cssStyle = {};

if(curdate>= 1 && curdate<= 12){
  greeting = "good morning ";
  cssStyle.color = "green"
}else if(curdate>=12 && curdate<= 18){
  greeting = "good afternoon";
  cssStyle.color = "orange"
}else if(curdate >=18 && curdate <= 23){
  greeting = "good night";
  cssStyle.color = "blue"
}




ReactDOM.render(
  <>
  <div>
   <h2> hello sir <span style= {cssStyle}>{ greeting }</span></h2>
  </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
