import React, {useState, useContext, useEffect} from 'react'
import Practice from './Practice';

function Hooks ()
{
    const [ count, setCount ] = useState( 40 );
    const [ age, setAge ] = useState( 30 );
    useEffect( () =>
    {
      document.title = `Ayfo ${ count }`;
      // let titiel = document.getElementsByTagName("title")[0]
      // console.log( titiel );
      // titiel.innerHTML = `Count ${ count }`;
      
    }, [ count ] ) // ye age value becha sikeyer run aderge
  function updatCount(){
    setCount( ( x ) =>
    {
      return x =  x + 1
    }
   )
  }
  return (
    <div>
         <h1>Magnaw aman neh { count }</h1>
          <button onClick={ updatCount}>Click me </button>
          {/* {console.log(count)} */}
          <h1>The new Age is: { age}</h1>
          <button onClick={ () => setAge( ( age ) => age + 10 ) }>CLick to chang Age</button>
          
      {/* { console.log( age ) } */}
      <Practice Age= {age} UpdateCount = {updatCount}  />   
    </div>
  )
}

export default Hooks
