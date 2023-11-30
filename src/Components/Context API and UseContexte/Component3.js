import { MyContext } from "./Component1";
import { useContext } from "react";
function Component3() {
  const abebe = useContext(MyContext);
  return (
    <div>
      <p>hi the name is come from component-1:{abebe.name}</p>
    </div>
  );
}

export default Component3;
