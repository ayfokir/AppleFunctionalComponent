import React from 'react'

function Car({brand}) { // you can pass props just like this
  return <>
    <h2>I am a { brand.model }!</h2>
  </>
}

function Practice(props) {
  const carInfo = { name: "Ford", model: "Mustang" };
  

  
 return (
   <>
     <h1>Who lives in my garage?</h1>
     <Car brand={carInfo} />
     <h1>My age is {props.Age} </h1>
     <button onClick={props.UpdateCount}>
       in this button function is passed as props{" "}
     </button>
     <h1>
       here is the color comes from Functional Component practice 1{" "}
       <span className={props.Car.color}>{props.Car.color}</span>{" "}   
     </h1>

     
   </>
 );
}

export default Practice
