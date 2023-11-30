import React from 'react'
import { useEffect, useState } from 'react';
import Practice from './Practice';
import UnmountComponent from './UnmountComponent';
function FunctionalComponentPractice1 ()
{
  const [ count, setCount ] = useState( 0 );
  const [ age, setAge ] = useState( 23 );
  const [boolean, setBoolean] = useState(true)
  // you can define the useState() jus tlike below, but you call the value and the functioon using aray index.
  let x = useState( 56 );
  console.log( x );
  const [ car, setCare ] = useState( {
    brand: "ford",
    model: "Mustang",
    year: 2034,
    color: "red"
  } );
  console.log( car );
  //the updator function
  function countUpdater ()
  {
    setBoolean( (boole) => boole = false)
    // count = count + 1;   
    // console.log( count );
    setCount( count + 1 );// one value silehone update yemetaregew no need of use callback function.
    setCare( ( state ) =>
    { 
      return{...state, color:" blue"}
    }
    
    )
  };
    useEffect( () =>
    {

      
      setTimeout(
        // () => setCount( ( count ) => count + 1 )
        
        console.log( "Abebe beso teta" )
        , 1000 )  
      // return () => {
      //   alert("the componnet is unmounted or Died")
      // }
      }
      , [] );
  return (
    <div>
      { boolean ? <UnmountComponent /> : <h1>i am Unmounted</h1> }
      {/* <Practice Car =  {car} /> */}
      <button onClick={countUpdater}> ClickToIncreament </button>
      <h1>I have rendered the count  {count} times!</h1>
      <h1>i have rendered again the age {age} </h1>
      <button
        type= "button"
        onClick={() => {
          setCount( ( count ) => count + 1 );
          setAge((age) => age + 1);
        }}
      > Click me man</button>
    </div>
  );
}
export default  FunctionalComponentPractice1 ;
