import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// This is the last thing I want you guys to know 
// in this intro to react-router. There are times when you might 
// need to pass down props through a component rendered in a Route
// component. Change the name of this file to index.js
// Rename index.js to index.js.old and comment out Navbar.js 
// so that only this page is the only thing rendered. 

// Click on the DifferentPage link with the web console in view, and notice
// that this.props is undefined. Oh no!

// You can pass down props by changing the "component" prop in a Route component.
// Replace   "<Route path="/differentPage" component={DifferentPage} />" with
// <Route path="/differentPage" render={() => <DifferentPage foo="bar" />} />

// Now you should see a prop getting passed down in your console. Pretty cool!
// Instead of setting a component, you just make a render method in your 
// Route tag. 

// Last thing - get a prop passed down through the About component and console log it
// in the web console




class About extends React.Component{
  render(){
    console.log(this.props);
    
    return (
      <div>
        My name is Garth Brooks and I got friends in low places. lol just kidding
        I'm a millionaire with friends in high places
      </div>
    )
  }
}


class DifferentPage extends React.Component{
  constructor(){
    super();
  }

  render(){
    console.log(this);
    console.log(this.props);
    return (
      <div>
        This is a page about something. Or maybe nothing. 
      </div>
    )
  }
}

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    var obj = { kittens: 'mew', age: 26};
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/differentPage">Different</Link></li>
          </ul>
          <hr />
            <Route path="/differentPage" render={ ()=> <DifferentPage obj={obj}/>} />
            <Route path="/about" render={()=> <About band="Garth Brooks"/>} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
