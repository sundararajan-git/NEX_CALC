import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Bmi = () => {

  const navigate = useNavigate()
  const [height, setHieght] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState("")
  const [category, setCategory] = useState("")

  const weightHandler = (e) => {
    try {
      let val = e.target.value
      let unitType = document.getElementById("weight").value
      if (unitType !== "Kilogrames") {
        val = val * 0.453592
      }
      setWeight(val)
    } catch (err) {
      console.error(err)
    }
  }

  const heightHandler = (e) => {
    try {
      let val = e.target.value
      let unitType = document.getElementById("height").value
      switch (unitType) {
        case 'CM':
          val = val / 100;
          break;
        case 'M':
          val = val;
          break;
        case 'ICH':
          val = val * 0.0254;
          break;
        case 'F':
          val = val * 0.3048;
          break;
      }
      setHieght(val)
    } catch (err) {
      console.error(err)
    }
  }


  function calculateBMI() {
    let ans = weight / (height * height)
    let returnval = getBMICategory(ans)
    setBmi(ans)
    setCategory(returnval)
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }



  return (
    <section className='m-1 mt-8 sm:m-5 sm:p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>

      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>BMI</h1>

      <section className='w-full sm:w-3/4 mx-auto mt-5'>

        <div className='inputFrame'>

          <div className='inputBody'>
            <div className='inputEle'>
              <select name="" id="weight" className='inputSelect'>
                <option value="Kilogrames">Kilograms</option>
                <option value="Pounds">Pounds</option>
              </select>
            </div>
            <div className='inputEle'>
              <select name="" id="height" className='inputSelect'>
                <option value="CM">Centi Meeter</option>
                <option value="ICH">Inch</option>
                <option value="F">Feet</option>
                <option value="M">Meter</option>
              </select>
            </div>
          </div>
          <div className='inputBody'>
            <div className='inputEle'>
              <input type="number" className='inputNumber' onChange={weightHandler} />
            </div>
            <div className='inputEle'>
              <input type="number" className='inputNumber' onChange={heightHandler} />
            </div>
          </div>
        </div>

        <button type='button' className='bg-black px-2 py-1.5 rounded text-white m-4'
          onClick={calculateBMI}>
          Go
        </button>

        {bmi ?
          <div className='bg-white w-fit rounded-lg shadow p-2 mx-auto'>
            <p className='p-2'>BMI - <span className='text-purple-600 font-medium'>{bmi}</span></p>
            <p className='p-2'>Category - <span className='text-purple-600 font-medium'>{category}</span></p>
          </div>
          : null
        }




      </section>
    </section>
  )
}

export default Bmi