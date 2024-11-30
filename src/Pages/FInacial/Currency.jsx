import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { currency } from '../../Common'

const Currency = () => {
  const navigate = useNavigate()

  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)


  async function convertCurrency(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) {
      return value; // No conversion needed
    }
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromUnit}`)
    const data = await res.json()
    return data.rates[toUnit] * value
  }


  const firstHandler = async (e) => {
    try {
      let val = e.target.value;
      let fromUnit = document.getElementById("select1").value
      let secondUnit = document.getElementById("select2").value
      let returnval = await convertCurrency(val, fromUnit, secondUnit)
      console.log(returnval);
      let ele = document.getElementById("input2")
      ele.value = returnval
      // setInput2(returnval)
    } catch (err) {
      console.log(err);
    }
  }

  const secondHandler = async (e) => {
    try {
      let val = e.target.value;
      let fromUnit = document.getElementById("select2").value
      let secondUnit = document.getElementById("select1").value
      let returnval = await convertCurrency(val, fromUnit, secondUnit)
      console.log(returnval);
      let ele = document.getElementById("input1")
      ele.value = returnval
      // setInput1(returnval)
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <section className='m-1 mt-8 sm:m-5 p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>

      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>CURRENCY</h1>

      <section className='w-full sm:w-3/4 mx-auto mt-5'>

        <div className='inputFrame'>

          <div className='inputBody'>

            <div className='inputEle'>
              <select name="" id="select1" className='inputSelect'>
                {currency.sort().map(i => {
                  return <option value={i} key={i}>{i}</option>
                })}
              </select>
            </div>


            <div className='inputEle'>
              <select name="" id="select2" className='inputSelect'>
                {currency.sort().map(i => {
                  return <option value={i} key={i}>{i}</option>
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

export default Currency