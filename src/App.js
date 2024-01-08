import logo from './logo.svg';
import './App.css';
import React from 'react';

const Container = () => {
  //useState는 초기값을 줄 수 있다.
  //const data = React.useState(); 일 시,consolle => [undefinde,f]
  //const data = React.useState(0); 일 시,consolle => [0,f]
  const [counter, setCounter] = React.useState(0);
  const onclick = () => {
    setCounter(counter +1)
  }
  // React.useState(0);
  // let counter = 0;
  // function countUp(){}
  
  return(
  <div>
    <h3>Total click : {counter}</h3>
    <button onClick={onclick}>Click me</button>
  </div>
  )
}
export default Container;
 