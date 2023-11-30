import React from "react";
import { MyContext } from "./Component1";
function Component2() {
  return (
    <div>
      <MyContext.Consumer>
        {(abe) => {
          return (
            <>
              <p>hi man endet neh {abe.age} </p>
              <h1>Hi aman nw sewoch </h1>
            </>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
}

export default Component2;
