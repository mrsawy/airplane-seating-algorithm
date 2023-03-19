import logo from "./images/Screenshot_17.png";
import "./App.css";
import Seers from "./Seets";
import Seets from "./Seets";
import { useCallback, useRef, useState } from "react";

function App() {
  const [seetsArray, setSeetsArray] = useState([]);
  const [passengersNumber, setPassengersNumber] = useState(0);

  const seetsInputRef = useRef();
  const passengersInputRef = useRef();

  const submitHandler = useCallback((e) => {
    e.preventDefault();
    try {
      /////////
      let seets = seetsInputRef.current.value;
      const regex = /,(?=\s*])/g;
      const outputStringRegex = seets.replace(/['`]/g, '"').replace(regex, "");
      let parsed = JSON.parse(outputStringRegex);
      console.log(parsed);
      if (!Array.isArray(parsed)) {
        throw new Error(`input here must be an array`);
      }
      ////////////////////
      let passerngers = +passengersInputRef.current.value;

      if(typeof passerngers!==`number`|| passerngers<0){

        throw new Error(`passengers must be a valid positive number`);

      }

      // console.log(passerngers, typeof passerngers);


      setPassengersNumber(passerngers);
      setSeetsArray(parsed);





      ////////////////////////////
    } catch (e) {
      console.log(e);
      alert(`something went wrong : ${e.message}`);


    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form onSubmit={submitHandler} className="inputsDiv">
          <input
            type={`text`}
            ref={seetsInputRef}
            placeholder={`enter array of seets`}
          />
          <input
            type={`text`}
            ref={passengersInputRef}
            placeholder={`enter the number of passengers`}
          />

          <button type={`submit`}>SUBMIT</button>
        </form>
      </header>
      <Seets
      
      

      
      arr={seetsArray}
      number={passengersNumber}
       />
    </div>
  );
}

export default App;
