import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Data = () => {

  const navigate = useNavigate()
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)

  const areaOption = {
    "Byte": "b",
    'Kilobyte': "kb",
    "Megabyte": "mb",
    "Gigabyte": "gb",
    "Terabyte": "tb",
    "Petabyte": "pb",
  }

  const firstHandler = (e) => {
    try {
      let val = e.target.value;
      let fromUnit = document.getElementById("select1").value
      let secondUnit = document.getElementById("select2").value
      let returnval = convertDataSize(val, fromUnit, secondUnit)
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
      let returnval = convertDataSize(val, fromUnit, secondUnit)
      console.log(returnval);
      let ele = document.getElementById("input1")
      ele.value = returnval
      // setInput1(returnval)
    } catch (err) {
      console.log(err);
    }
  }


  function convertDataSize(value, fromUnit, toUnit) {
    const units = ['b', 'kb', 'mb', 'gb', 'tb', 'pb'];
    const factor = 1024;

    fromUnit = fromUnit.toLowerCase();
    toUnit = toUnit.toLowerCase();

    if (!units.includes(fromUnit) || !units.includes(toUnit)) {
      throw new Error('Unsupported data unit');
    }

    let valueInBits;
    switch (fromUnit) {
      case 'b':
        valueInBits = value;
        break;
      case 'kb':
        valueInBits = value * factor * 8;
        break;
      case 'mb':
        valueInBits = value * factor * factor * 8;
        break;
      case 'gb':
        valueInBits = value * factor * factor * factor * 8;
        break;
      case 'tb':
        valueInBits = value * factor * factor * factor * factor * 8;
        break;
      case 'pb':
        valueInBits = value * factor * factor * factor * factor * factor * 8;
        break;
    }

    let convertedValue;
    switch (toUnit) {
      case 'b':
        convertedValue = valueInBits;
        break;
      case 'kb':
        convertedValue = valueInBits / (factor * 8);
        break;
      case 'mb':
        convertedValue = valueInBits / (factor * factor * 8);
        break;
      case 'gb':
        convertedValue = valueInBits / (factor * factor * factor * 8);
        break;
      case 'tb':
        convertedValue = valueInBits / (factor * factor * factor * factor * 8);
        break;
      case 'pb':
        convertedValue = valueInBits / (factor * factor * factor * factor * factor * 8);
        break;
    }

    return convertedValue;
  }


  return (
    <section className='m-1 mt-8  sm:m-5 sm:p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>
      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>DATA</h1>

      <section className='w-full sm:w-3/4 mx-auto mt-5'>

        <div className='inputFrame'>

          <div className='inputBody'>

            <div className='inputEle'>
              <select name="" id="select1" className='inputSelect'>
                {Object.keys(areaOption).sort().map(i => {
                  return <option value={areaOption[i]}>{i}</option>
                })}
              </select>
            </div>


            <div className='inputEle'>
              <select name="" id="select2" className='inputSelect'>
                {Object.keys(areaOption).sort().map(i => {
                  return <option value={areaOption[i]}>{i}</option>
                })}
              </select>
            </div>

          </div>

          <div className='inputBody'>

            <div className='inputEle'>
              <input type="number" id='input1' className='inputNumber' defaultValue={input1} onChange={firstHandler} />
            </div>

            <div className='inputEle'>
              <input type="number" className='inputNumber' id='input2' defaultValue={input2} onChange={secondHandler} />
            </div>
          </div>


        </div>


      </section>



    </section >
  )
}

export default Data