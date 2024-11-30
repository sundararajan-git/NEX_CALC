import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Discount = () => {

  const navigate = useNavigate()
  const [answer, setAnswer] = useState({})


  const PriceHandler = () => {
    try {
      let originalPrice = document.getElementById("price").value
      let discount = document.getElementById('discount').value
      let ans = calculateDiscount(originalPrice, discount)
      setAnswer(ans)
    } catch (err) {
      console.log(err)
    }
  }

  const DisHandler = () => {
    try {
      let originalPrice = document.getElementById("price").value
      let discount = document.getElementById('discount').value
      let ans = calculateDiscount(originalPrice, discount)
      setAnswer(ans)
    } catch (err) {
      console.error(err)
    }
  }

  function calculateDiscount(originalPrice, discountPercentage) {

    const discountAmount = (originalPrice * discountPercentage) / 100;

    const finalPrice = originalPrice - discountAmount;

    return {
      discountAmount: discountAmount,
      finalPrice: finalPrice,
      amountSaved: discountAmount
    };
  }


  return (
    <section className='m-1 mt-8 sm:m-5 sm:p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>

      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>DISCOUNT</h1>

      <section className='w-full p-4 sm:w-3/4 mx-auto mt-5'>

        <div className='flex flex-col sm:flex-row items-center justify-evenly gap-4'>

          <div className='flex items-center justify-between gap-4 bg-purple-100 sm:bg-transparent p-2 rounded-lg w-full'>
            <label htmlFor="">Original price</label>
            <input type="number" id="price" className='outline-none p-1.5 rounded-lg text-purple-600 bg-transparent sm:bg-white' onChange={PriceHandler} />
          </div>

          <div className='flex items-center justify-between gap-4 bg-purple-100 sm:bg-transparent p-2 rounded-lg w-full'>
            <label htmlFor="">Discount</label>
            <input type="number" id="discount" className='outline-none p-1.5 rounded-lg text-purple-600 bg-transparent sm:bg-white' onChange={DisHandler} />
          </div>
        </div>

        <br />

        <div className='bg-purple-100 sm:bg-white w-full sm:w-1/3 rounded-lg p-4 mx-auto'>
          <p className='flex items-center justify-between'>FinalPrice <span>{answer.finalPrice}</span></p>
          <p className='flex items-center justify-between'>Saved <span>{answer.amountSaved}</span></p>
        </div>
      </section>
    </section>
  )
}

export default Discount