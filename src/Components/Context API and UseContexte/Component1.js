import React from "react";
import Component3 from "./Component3";
import Component2 from "./Component2";
//context malet teyayazenet yalew neger malet new.
export const MyContext = React.createContext(); // keteta
//from this component component-3 props lemelake. mekebabel component drilling ybalale
function Component1 ()
{
  console.log( Component2 );  
  // console.log(MyContext);
  let abe = {
    name: "ayfo",  
    age: 24   
  };
  return (
    <MyContext.Provider value={abe}>
      {" "}
      {/*  this "value" is availble for componnet2, component3 and all their child*/}
      <Component2 />
      <Component3 />
    </MyContext.Provider>
  );
}
export default Component1;
