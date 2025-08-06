// OTP input - only numbers

import { useState, useRef, useEffect } from 'react';
import './style.css';

const OTP_DIGITS_COUNT = 6;

function App() {
  const [ inputArr, setInputArr ] = useState(new Array(OTP_DIGITS_COUNT).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const onHandleChange = (index, value) => {
    if (isNaN(value))
      return;

    const newValue = value.trim();
    const temp = [...inputArr];
    temp[index] = newValue.slice(-1);
    setInputArr(temp);

    newValue  && refArr.current[index+1]?.focus()
  };

  const onHandleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      console.log(index);
      refArr.current[index-1]?.focus()
    }
  }

  return (
    <div className="App">
      <h1>Validate OTP</h1>
      {
        inputArr.map((inputVal, index) => (
          <input 
            className="otp-input" 
            key={index} 
            value={inputArr[index]} 
            type="text" 
            ref={(inputVal) => refArr.current[index] = inputVal}
            onChange={(e) => onHandleChange(index, e.target.value)}
            onKeyDown={(e) => onHandleKeyDown(e, index)}
          />
        ))
      }
    </div>
  );
}

export default App
