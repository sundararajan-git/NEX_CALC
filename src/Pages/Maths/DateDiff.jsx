import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const DateDiff = () => {

  const navigate = useNavigate()
  const [age, setAge] = useState({})

  const startHandler = (e) => {

    let startVal = new Date(document.getElementById("StartDate").value)
    let endVal = new Date(document.getElementById("EndDate").value)

    console.log(startVal);
    console.log(startVal.getMonth());
    console.log(startVal.getDate());

    console.log(endVal);

    let returnAgeObj = calculateAge(startVal, endVal)

    setAge(returnAgeObj)


  }

  const endHandeler = (e) => {
    let startVal = new Date(document.getElementById("StartDate").value)
    let endVal = new Date(document.getElementById("EndDate").value)


    let returnAgeObj = calculateAge(startVal, endVal)

    setAge(returnAgeObj)

  }


  const calculateAge = (startVal, endVal) => {

    try {

      console.log(startVal);
      console.log(endVal);

      let years = endVal.getFullYear() - startVal.getFullYear()
      let months = endVal.getMonth() - startVal.getMonth()
      let date = endVal.getDate() - startVal.getDate()
      let hours = endVal.getHours() - startVal.getHours()
      let minutes = endVal.getMinutes() - startVal.getMinutes()

      if (months < 0) {
        years--
        months += 12
      }

      if (date < 0) {
        months--
        let previousMounth = new Date(endVal.getFullYear(), endVal.getMonth(), 0)
        date += previousMounth.getDate()
      }

      console.log({ Years: years, Months: months, Days: date })

      return { Years: years, Months: months, Days: date }

    } catch (err) {
      console.log(err);
    }
  }




  return (
    <section className='m-1 mt-8 sm:m-5 sm:p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>


      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>DATE</h1>

      <br />

      <section className='w-full sm:w-3/4 mx-auto mt-5'>

        <div className='flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-evenly mb-12 w-full'>

          <div className='bg-purple-100 sm:bg-white p-2 rounded-lg shadow w-3/4 flex items-center justify-between sm:w-fit'>
            <label htmlFor="StartDate">Start Date : </label>
            <input type="date"
              id='StartDate'
              className='ms-2 outline-none bg-transparent text-purple-600' onChange={startHandler} />
          </div>

          <div className=' bg-purple-100 sm:bg-white p-2 rounded-lg shadow w-3/4 flex items-center justify-between sm:w-fit'>
            <label htmlFor="EndDate">End Date : </label>
            <input type="date"
              id='EndDate' className='ms-2 outline-none bg-transparent text-purple-600'
              defaultValue={new Date().toISOString().split("T")[0]}
              onChange={endHandeler}
            />
          </div>


        </div>

        <div className='bg-purple-100 sm:bg-white w-[200px] rounded-lg shadow p-4 mx-auto'>
          <p className='flex items-center justify-between p-1'>Years <span className='font-medium text-purple-600'>{age.Years ?? 0}</span> </p>
          <p className='flex items-center justify-between p-1'>Months<span className='font-medium text-purple-600'>{age.Months ?? 0}</span></p>
          <p className='flex items-center justify-between p-1'>Days<span className='font-medium text-purple-600'>{age.Days ?? 0}</span></p>
        </div>

      </section>
    </section>
  )
}

export default DateDiff