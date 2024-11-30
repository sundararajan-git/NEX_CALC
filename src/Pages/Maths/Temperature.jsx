import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Temperature = () => {


  const navigate = useNavigate()
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)

  const tempUnits = {
    'celsius': 'c',
    'fahrenheit': 'f',
    'kelvin': 'k'
  };


  const firstHandler = (e) => {
    try {
      let val = e.target.value;
      let fromUnit = document.getElementById("select1").value
      let secondUnit = document.getElementById("select2").value
      let returnval = convertTemperature(val, fromUnit, secondUnit)
      console.log(returnval);
      let ele = document.getElementById("input2")
      ele.value = returnval
      // setInput2(returnval)
    } catch (err) {
      console.log(err);
    }
  }


  const secondHandler = (e) => {
    try {
      let val = e.target.value;
      let fromUnit = document.getElementById("select2").value
      let secondUnit = document.getElementById("select1").value
      let returnval = convertTemperature(val, fromUnit, secondUnit)
      console.log(returnval);
      let ele = document.getElementById("input1")
      ele.value = returnval
      // setInput1(returnval)
    } catch (err) {
      console.log(err);
    }
  }


  function convertTemperature(value, fromUnit, toUnit) {
    fromUnit = fromUnit.toLowerCase();
    toUnit = toUnit.toLowerCase();

    // Validate units
    if (!['c', 'f', 'k'].includes(fromUnit) || !['c', 'f', 'k'].includes(toUnit)) {
      throw new Error('Unsupported temperature unit');
    }

    let result;

    // Convert from the source unit to Celsius
    switch (fromUnit) {
      case 'c':
        result = value;
        break;
      case 'f':
        result = (value - 32) * 5 / 9;
        break;
      case 'k':
        result = value - 273.15;
        break;
    }

    // Convert from Celsius to the target unit
    switch (toUnit) {
      case 'c':
        return result;
      case 'f':
        return result * 9 / 5 + 32;
      case 'k':
        return result + 273.15;
    }
  }

  return (
    <section className='m-1 mt-8 sm:m-5 sm:p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>

      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>TEMPERATURE</h1>

      <section className='w-full sm:w-3/4 mx-auto mt-5'>

        <div className='inputFrame'>
          <div className='inputBody'>
            <div className='inputEle'>
              <select name="" id="select1" className='inputSelect'>
                {Object.keys(tempUnits).sort().map(i => {
                  return <option value={tempUnits[i]}>{i}</option>
                })}
              </select>
            </div>
            <div className='inputEle'>
              <select name="" id="select2" className='inputSelect'>
                {Object.keys(tempUnits).sort().map(i => {
                  return <option value={tempUnits[i]}>{i}</option>
                })}
              </select>
            </div>
          </div>
          <div className='inputBody'>
            <div className='inputEle'>
              <input type="number" id='input1' className='inputNumber' defaultValue={input1} onChange={firstHandler} />
            </div>
            <div className='inputEle'>
              <input type="number" id='input2' className='inputNumber' defaultValue={input2} onChange={secondHandler} />
            </div>
          </div>
        </div>


      </section>
    </section>
  )
}

export default Temperature