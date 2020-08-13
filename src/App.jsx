import React, { useState } from 'react';
import './App.css';

const App = props => {
  let [lightA, setA] = useState(false);
  let [lightB, setB] = useState(false);
  let [lightC, setC] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="topSemaforo">
          <div>
            {/* Parte de arriba del semaforo   */}
          </div>
        </div>
        <div className="semaforo">
           <div className={"redLight rounded-circle" + (lightA === true ? " selected" : "")} onClick={(e) => { 
            setA(!lightA)
            setB(lightB = false)
            setC(lightC = false)
          }}></div>
          <div className={"yellowLight rounded-circle" + (lightB === true ? " selected" : "")} onClick={(e) => {
            setB(!lightB)
            setA(lightA = false)
            setC(lightC = false)
          }}></div>
          <div className={"greenLight rounded-circle" + (lightC === true ? " selected" : "")} onClick={(e) => {
            setC(!lightC)
            setA(lightA = false)
            setB(lightB = false)
          }}></div>
        </div>
      </div>
    </div>
  );
}


export default App;
