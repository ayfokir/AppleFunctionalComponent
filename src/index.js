import React from 'react';
import ReactDOM from 'react-dom/client';// here ke react dom wust clientn becha new yemnfelgat
import App from './App';
import reportWebVitals from './reportWebVitals';// you can delete this one 
import {BrowserRouter} from 'react-router-dom'

// import "./commonResource/css/bootstrap.css";
// import "./commonResource/css/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App /> 
//   </React.StrictMode>
// );       
const myArray = [ "apple", "banana", "orange" ];

let x = 30;
let text = "";
if ( x < 40 )
{
  // text = "Hello Sewoch"
  text = <h1>Hi i am from Index.js you can mix XML file and js File as you want</h1>

}

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);



function Abebe ()
{
  console.log( "Abebe Beso teta" )
  return <>
    <h1>Abebe Beso Teta</h1>
    <h1>The sum of  {67 + 45} </h1>
  </>
}

const myList = myArray.map((item, i) => <p key={i}>{item}</p>);
root.render(
<BrowserRouter>
<App />
</BrowserRouter>

  // myElement
  // myList
  // Abebe()
  // text
  // <h1>hi aman new</h1> // ykegnaw display ayhonem
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // you can avoid this one.





