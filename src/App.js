import "./App.css";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import AlertSection from "./Components/Main/AlertSection.js";
// import { ReactDOM } from 'react-dom/client';
//  import "./commonResource/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./commonResource/css/styles.css";
import FirstSection from "./Components/Main/FirstSection.js";
import SecondSection from "./Components/Main/SecondSection.js";
import ThirdSection from "./Components/Main/ThirdSection.js";
import FourthSection from "./Components/Main/FourthSection.js";
import FifthSection from "./Components/Main/FifthSection.js";
import SixSection from "./Components/Main/SixSection.js";
import ClassComponent from "./Components/ClassComponent.js";
import FunctinalComponentPractice from "./Components/FunctinalComponentPractice.js";
import Hooks from "./Components/Hooks.js";
import Component1 from "./Components/Context API and UseContexte/Component1.js";
import FunctionalComponentPractice1 from "./Components/FunctionalComponentPractice1";
import Component3 from "./Components/Context API and UseContexte/Component3.js";
import Main from "./Components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Iphone from "./Components/Iphone";
import Productpage from "./Components/Productpage";
import For04 from "./Components/For04";
import SharedLayout from "./Components/SharedLayout";
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

// let allProps = {
//   Name: "Abebe",
//   Age: " 44",
//   Gender: "male"
// };

function App() {
  let allProps = {
    Name: "Abebe",
    Age: " 44",
    Gender: "male"
  };
  let ayfo = "ssss";

  return (
    
    
    // <Header />




    //   <Routes>
    //     <Route path="/" element =  {<SharedLayout/>} >
    //     <Route path="/" element={<Main />}></Route>
    //     <Route path="/alert" element={<AlertSection />}></Route>
    //     <Route path="/iphones" element={<Iphone />}></Route> 
    //     <Route path="/iphones/:productID" element={ <Productpage /> }></Route>
    //     <Route  path="*" element = {<For04 />} ></Route>
    //     </Route>
    // </Routes>
    



      // {/* <h1>Ayfo</h1>  */}
      // {/* <Footer /> */}
      // {/* <h1>Hi sewoche</h1>     */}
      // {/*     
      // <ul>
      //   <li>Apples</li>
      //   <li>Bananas</li>
      //   <li>Cherries</li>
      // </ul> */}
        // <ClassComponent favcol="GrachaColor" year="2025" {...allProps} Value = {45}  />  
      <FunctinalComponentPractice isGoal={false} />  
      // {/* <h1>Abebe beso bela</h1> */}
      // {/* { myElement } */}
      // {/* {`Ayfo Genfo bela ${45 - 67}`} */}
      // {/* <Hooks /> */}
      // {/* <Component1 />  */}
      // {/* < FunctionalComponentPractice1 />   */}
      // {/* <Component3 /> */}
    
  );
}
export default App;
