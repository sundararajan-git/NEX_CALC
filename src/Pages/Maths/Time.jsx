import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Time = () => {


  const navigate = useNavigate()
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)

  const timeUnits = {
    'Seconds': 's',
    'Minutes': 'min',
    'Hours': 'h',
    'Days': 'd',
    'Weeks': 'w'
  };

  const firstHandler = (e) => {
    try {
      let val = e.target.value;
      let fromUnit = document.getElementById("select1").value
      let secondUnit = document.getElementById("select2").value
      let returnval = convertTime(val, fromUnit, secondUnit)
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
      let returnval = convertTime(val, fromUnit, secondUnit)
      console.log(returnval);
      let ele = document.getElementById("input1")
      ele.value = returnval
      // setInput1(returnval)
    } catch (err) {
      console.log(err);
    }
  }
  function convertTime(value, fromUnit, toUnit) {
    const units = {
      's': 1,          // seconds
      'min': 60,       // minutes to seconds
      'h': 3600,       // hours to seconds
      'd': 86400,      // days to seconds
      'w': 604800      // weeks to seconds
    };

    // Normalize units to lower case
    fromUnit = fromUnit.toLowerCase();
    toUnit = toUnit.toLowerCase();

    // Validate units
    if (!units.hasOwnProperty(fromUnit) || !units.hasOwnProperty(toUnit)) {
      throw new Error('Unsupported time unit');
    }

    // Convert the value to seconds first
    let valueInSeconds = value * units[fromUnit];

    // Convert from seconds to the target unit
    let convertedValue = valueInSeconds / units[toUnit];

    return convertedValue;
  }

  return (
    <section className='m-1 mt-8 sm:m-5 sm:p-2 w-full  sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>

      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>TIME</h1>

      <section className='w-full sm:w-3/4 mx-auto mt-5'>

        <div className='inputFrame'>

          <div className='inputBody'>

            <div className='inputEle'>
              <select name="" id="select1" className='inputSelect'>
                {Object.keys(timeUnits).sort().map(i => {
                  return <option value={timeUnits[i]}>{i}</option>
                })}
              </select>
            </div>
            <div className='inputEle'>
              <select name="" id="select2" className='inputSelect'>
                {Object.keys(timeUnits).sort().map(i => {
                  return <option value={timeUnits[i]}>{i}</option>
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

export default Time