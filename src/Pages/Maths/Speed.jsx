import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Speed = () => {

  const navigate = useNavigate()

  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)

  const speedUnits = {
    'meters per second': 'mps',
    'kilometers per hour': 'kmph',
    'miles per hour': 'mph',
    'feet per second': 'fps'
  };;

  const firstHandler = (e) => {
    try {
      let val = e.target.value;
      let fromUnit = document.getElementById("select1").value
      let secondUnit = document.getElementById("select2").value
      let returnval = convertSpeed(val, fromUnit, secondUnit)
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
      let returnval = convertSpeed(val, fromUnit, secondUnit)
      console.log(returnval);
      let ele = document.getElementById("input1")
      ele.value = returnval
      // setInput1(returnval)
    } catch (err) {
      console.log(err);
    }
  }
  function convertSpeed(value, fromUnit, toUnit) {
    const units = {
      'mps': 1,               // meters per second
      'kmph': 1000 / 3600,    // kilometers per hour to meters per second
      'mph': 1609.34 / 3600,  // miles per hour to meters per second
      'fps': 0.3048           // feet per second to meters per second
    };

    // Normalize units to lower case
    fromUnit = fromUnit.toLowerCase();
    toUnit = toUnit.toLowerCase();

    // Validate units
    if (!units.hasOwnProperty(fromUnit) || !units.hasOwnProperty(toUnit)) {
      throw new Error('Unsupported speed unit');
    }

    // Convert the value to meters per second first
    let valueInMetersPerSecond = value * units[fromUnit];

    // Convert from meters per second to the target unit
    let convertedValue = valueInMetersPerSecond / units[toUnit];

    return convertedValue;
  }

  return (
    <section className='m-1 mt-8 sm:m-5 sm:p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>

      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>SPEED</h1>

      <section className='w-full sm:w-3/4 mx-auto mt-5'>

        <div className='inputFrame'>


          <div className='inputBody'>
            <div className='inputEle'>
              <select name="" id="select1" className='inputSelect'>
                {Object.keys(speedUnits).sort().map(i => {
                  return <option value={speedUnits[i]}>{i}</option>
                })}
              </select>
            </div>

            <div className='inputEle'>
              <select name="" id="select2" className='inputSelect'>
                {Object.keys(speedUnits).sort().map(i => {
                  return <option value={speedUnits[i]}>{i}</option>
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

export default Speed