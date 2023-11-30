import React, { Component } from "react";
import FunctinalComponentPractice from "./FunctinalComponentPractice";
// below is how to use anothe component method
// let x = FunctinalComponentPractice.Car();
// console.log( x() );

// we can define variable and methde outside of class component. 
let a = "ayfo";
function Abebe() {
  // ykenen ke eventgara atache laderg betil "this metekem aytebekebhm."
  // console.log("you clicked");
  alert("you clicked");
}
export default class ClassComponent extends Component {
  constructor(props) {
    //If your component has a constructor function, the props should always be passed
    // to the constructor and also to the React.Component via the super() method.
    super();
    this.state = {
      // state is defined inside the constructor function;
      favoritecolor: "red",
      value: props.Value,
      Age: 23,
    };
    // this.abebech = this.abebech.bind( this ); //abebeche yemebalewun function
    // "this" kemebalew objectgar bind aderglgne. tache lay onclick eventga
    //sitekemew this.abebeche beye acces endadergew
    console.log(typeof(props.Value))
  }
  abebe = () => 
  {
    console.log( "i am inside abebe" );
    console.log( this );
    setTimeout(() => {  
       this.setState( 
        (
          states // here the setState is an updater function.  
        ) => {
          return {
            favoritecolor: "yellow",
            value: states.value + 5
          };
        }
      );
    }, 1000);   
  };

  abebech() {
    this.setState({
      favoritecolor: "yellow",
      value: this.state.value + 10
    });
  }
  // abebe = () =>
  // {
  //   this.setState( ( state ) =>
  //   {
  //     return {
  //       favoritecolor: "blue",
  //       value: state.value + 2
  //     }
  //   } );
  // }

  //   componentDidMount = () => {
  //     setInterval(() => {
  //       this.setState((state) => {
  //         return {
  //           favoritecolor: "blue",
  //           value: state.value + 1
  //         };
  //       });
  //     }, 2000);
  //   };

  //   abebe = () => {
  //  return   setTimeout(() => {
  //      return  this.setState( ( state ) =>
  //      {
  //         return {
  //           favoritecolor: "blue",
  //           value: state.value + 1
  //         };
  //       });
  //     }, 2000);
  //   };

  // static getDerivedStateFromProps(props) {
  //   return { favoritecolor: props.favcol };
  // }

  componentDidMount() {
    console.log("abebe beso bela hiey");
    setTimeout(() => {
      this.setState((state) => {
        return {
          favoritecolor: "componentDidMoutColor",
          value: state.value + 300
        };
      });
    }, 3000);  
  }
  
  componentDidUpdate(prevProps, prevState) {
    // (prevProps, prevState ) the order is just like this new.
    console.log( prevState )
    console.log(prevProps)
    document.title = "Ayfo " + this.state.value;
    //do yemtfelgewun sira here
    if (prevState.value != this.state.value) {
      console.log("component didUpdates");
    }
  }
  ages = () =>  
  {
    this.setState( ( state ) =>
    {
      console.log(state)
      return { Age: state.Age + 1 };
    });
  };
  render ()
  {
    console.log( this );  
    let abebe = 9; // you can write any javascript code here
    console.log(this.props);
    let { Name, Age, Gender, favcol, year, value } = this.props;
    console.log( typeof ( this.props.Value ) );
    return (
      <div>
        {/* <h1>My Favorite Color is: {this.state.favoritecolor}</h1>
        <h1>The new value is: { this.state.value }</h1> */}
        <h1>
          THe propes comes from parent element is:{ " " }     { this.props.favcol + "  and  " + year + "  the value is " + this.state.value }{ " " }
          and { this.state.favoritecolor }
        </h1>
        <h1>
          His Name: {this.props.Name}, age:  {this.props.Age} and Gender:{" "}
          {this.props.Gender}{" "}
        </h1>
        <button type="button" onClick={Abebe}>  {" "} {/*this yalnbet mkinyat the function "abebe" is inside the component componentuw wust yale endemalet new  */}
          click me { a }
        </button>
        <button onClick={this.ages}>Lela Button</button> {/* here "ages " methtod sintera parantesis yaladeregenew automaticall click sanareg endaytera nw*/}
        <h1>The variation of age is { this.state.Age }</h1>;
      <h1>The variation of Value is {this.state.value} </h1>
      </div>
    );
  }
}
// console.log( new Component );
// console.log(new ClassComponent);

