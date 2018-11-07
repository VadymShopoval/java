import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import * as serviceWorker from './serviceWorker';
import Button from './Button';
//function REACT
/* function Greet (){
  let phrase = 'World!';
  return (
    <h1>Hello {phrase} {4+4}</h1>
  )
} */
function Greet(props) {
  
  return (
    <h1>Hello {props.phrase}! My name is {props.name} </h1>
  )
}

//ReactDOM.render(<Greet phrase="worlD" name='Vadim'/ > , document.getElementById('root'));
//const element = <Greet phrase="worlD" name='Vadim' />;
//ReactDOM.render(element, document.getElementById('root'));
/* function GreetAll() {
  return (
    <div>
      <Greet phrase="worlD" name='Vadim' />
      <Greet phrase="worlD" name='ivan' />
      <Greet phrase="worlD" name='Alex' />
    </div>
  )
}
ReactDOM.render(<GreetAll/>, document.getElementById('root')); */

//es6
//class REACT
class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Clock / >
        <Button/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
