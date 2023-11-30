import React from 'react'
import {useState} from 'react'

// below is the component is called inside components.
function Car({brand}) {
  return (
    <>
      <h2>I am a {brand} ! </h2>
     
    </>
  );
}
function MissedGoal() {
  return <h1>MISSED!</h1>;
}
function MadeGoal() {
  return <h1>GOAL!</h1>;
}






function TextArea() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = ( event ) =>
  {
    console.log(textarea)
    setTextarea(event.target.value);
  };
      
// console.log(textarea)
  return (
    <form>
      <textarea value={ textarea } onChange={ handleChange } />
    </form>
  );
}

function DropDownListOrAselectedBox() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.magna);
  };

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option magna="Ford">Ford</option>
        <option magna="Volvo">Volvo</option>
        <option magna="Fiat">Fiat</option>
      </select>
    </form>
  );
}

function MultipleInputFields() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
     console.log( name );

    const value = event.target.value;
    console.log(value)
    setInputs( ( values ) => ( { ...values, [ name ]: value } ) );
   
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);  
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""} // megemeri mnm yelem name masgebiaw field lay next ksgeban buhal from inputs.username
          // le valu letebalew atrribut egna lasgebanew set enadergalen
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

function FunctinalComponentPractice(props) { 
   const isGoal = props.isGoal;
  //  if (isGoal) {
  //    return <MadeGoal />;
  //  }
  //  return <MissedGoal />;  
  // return isGoal ? <MadeGoal /> : <MissedGoal />;
  
    const cars = [
        { id: 1, brand: "Ford"},
        { id: 2, brand: "BMW" },
        { id: 3, brand: "Audi" }
    ];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car, i) => (
            <Car key={i} brand={car.brand} />
          ))}
          <a href="https://www.evangadi.com">Go to Evangadi</a>
          <TextArea />
          <DropDownListOrAselectedBox />
          <MultipleInputFields />
        </ul>
      </>
    );
}
export default FunctinalComponentPractice;

