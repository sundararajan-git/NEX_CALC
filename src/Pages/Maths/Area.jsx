import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Area = () => {

  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)

  const navigate = useNavigate()

  const areaOption = {
    "Square Kilometere": "Km2",
    'Square Metres': "m2",
    "Square Mile": "mi2",
    "Square Yard": "yd2",
    "Square Foot": "ft2",
    "Square Inch": "in2",
    "Hectare": "ha",
    "Arce": "ac",
  }

  const conversionFactors = {
    km2: {
      m2: 1e6,
      mi2: 0.386102,
      yd2: 1.19599e6,
      ft2: 1.07639e7,
      in2: 1.55e9,
      ha: 100,
      ac: 247.105,
    },
    m2: {
      km2: 1e-6,
      mi2: 3.861e-7,
      yd2: 1.19599,
      ft2: 10.7639,
      in2: 1550,
      ha: 1e-4,
      ac: 0.000247105,
    },
    mi2: {
      km2: 2.58999,
      m2: 2.58999e6,
      yd2: 3.0976e6,
      ft2: 2.7884e7,
      in2: 4.01449e9,
      ha: 258.999,
      ac: 640,
    },
    yd2: {
      km2: 8.36127e-7,
      m2: 0.836127,
      mi2: 3.2283e-7,
      ft2: 9,
      in2: 1296,
      ha: 8.36127e-5,
      ac: 0.000206612,
    },
    ft2: {
      km2: 9.2903e-8,
      m2: 0.092903,
      mi2: 3.587e-8,
      yd2: 0.111111,
      in2: 144,
      ha: 9.2903e-6,
      ac: 2.2957e-5,
    },
    in2: {
      km2: 6.4516e-10,
      m2: 0.00064516,
      mi2: 2.491e-10,
      yd2: 0.000771605,
      ft2: 0.00694444,
      ha: 6.4516e-8,
      ac: 1.5942e-7,
    },
    ha: {
      km2: 0.01,
      m2: 10000,
      mi2: 0.00386102,
      yd2: 11959.9,
      ft2: 107639,
      in2: 1.55e6,
      ac: 2.47105,
    },
    ac: {
      km2: 0.00404686,
      m2: 4046.86,
      mi2: 0.0015625,
      yd2: 4840,
      ft2: 43560,
      in2: 6.27264e6,
      ha: 0.404686,
    }
  };


  function convertArea(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) {
      return value; // No conversion needed
    }

    const factor = conversionFactors[fromUnit][toUnit];
    return value * factor;
  }


  const firstHandler = (e) => {
    try {
      let val = e.target.value;
      let fromUnit = document.getElementById("select1").value
      let secondUnit = document.getElementById("select2").value
      let returnval = convertArea(val, fromUnit, secondUnit)
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
      let returnval = convertArea(val, fromUnit, secondUnit)
      console.log(returnval);
      let ele = document.getElementById("input1")
      ele.value = returnval
      // setInput1(returnval)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className='m-1 mt-8 sm:m-5 p-2  w-full sm:w-3/4'>

      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>

      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>AREA</h1>

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
              <input type="number" id='input1' className='inputNumber' defaultValue={input1} onChange={firstHandler} placeholder='value' />
            </div>

            <div className='inputEle'>
              <input type="number" id='input2' className='inputNumber' defaultValue={input2} onChange={secondHandler} placeholder='value' />
            </div>

          </div>

        </div>


      </section>




    </section>
  )
}

export default Area