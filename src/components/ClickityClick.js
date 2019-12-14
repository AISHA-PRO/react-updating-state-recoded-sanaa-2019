<<<<<<< HEAD
// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      count: 0
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
    // Update our state here...
    //let newCount = this.state.count + 1
   // this.setState({
    //  count: newCount
   // hasBeenClicked: true
   // },()=>
  //  console.log(this.state.hasBeenClicked);
  //  );
    
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        //<p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
 
import ClickityClick from './components/ClickityClick';
 
=======
// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      count: 0
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
    // Update our state here...
    //let newCount = this.state.count + 1
    this.setState({
    //  count: newCount
    hasBeenClicked: true
    },()=>
    console.log(this.state.hasBeenClicked);
    );
    
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
 
import ClickityClick from './components/ClickityClick';
 
>>>>>>> 3a3c9c31581665f4a61cb5d9eb90db2e5abf4a7a
ReactDOM.render(<ClickityClick />, document.getElementById('root'));