import React, { useEffect } from 'react'

function UnmountComponent ()
{
    useEffect( () =>{
        alert( "I am Mounted yes" );
        return () =>
        {
            alert( "i am UnMounted");
        }      
    }, [])
  return (
    <div>
      <h3>this Component is Mount Component</h3>
    </div>
  )
}

export default UnmountComponent
