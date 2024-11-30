import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const NumericalSystem = () => {


  const navigate = useNavigate()
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)

  const numberOption = {
    Binary: 2,
    Octal: 8,
    Decimal: 10,
    Hexadecimal: 16
  };

  const firstHandler = (e) => {
    try {
      let val = e.target.value;
      let fromBase = document.getElementById("select1").value
      let secondBase = document.getElementById("select2").value
      let returnval = convertNumber(val, fromBase, secondBase)
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
      let fromBase = document.getElementById("select2").value
      let secondBase = document.getElementById("select1").value
      let returnval = convertNumber(val, fromBase, secondBase)
      console.log(returnval);
      let ele = document.getElementById("input1")
      ele.value = returnval
      // setInput1(returnval)
    } catch (err) {
      console.log(err);
    }
  }



  function convertNumber(value, fromBase, toBase) {
    // Parse the input value to an integer
    let decimalValue = parseInt(value, fromBase);

    // Handle invalid input
    if (isNaN(decimalValue)) {
      throw new Error('Invalid number or base');
    }

    // Convert the decimal value to the target base
    let convertedValue = decimalValue.toString(toBase);

    return convertedValue.toUpperCase(); // Convert to uppercase for hexadecimal representation
  }


  return (
    <section className='m-1 mt-8 sm:m-5 sm:p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>


      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>NUMERICAL  SYSTEM</h1>

      <section className='w-full sm:w-3/4 mx-auto mt-5'>

        <div className='inputFrame'>

          <div className='inputBody'>

            <div className='inputEle'>
              <select name="" id="select1" className='inputSelect'>
                {Object.keys(numberOption).sort().map(i => {
                  return <option value={numberOption[i]}>{i}</option>
                })}
              </select>
            </div>

            <div className='inputEle'>
              <select name="" id="select2" className='inputSelect'>
                {Object.keys(numberOption).sort().map(i => {
                  return <option value={numberOption[i]}>{i}</option>
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

export default NumericalSystem