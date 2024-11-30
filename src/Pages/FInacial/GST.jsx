import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const GST = () => {

  const navigate = useNavigate()

  const [result, setResult] = useState({})



  function calculateGST(price, gstRate) {
    // Validate input types

    console.log(gstRate, "this is gst rate");

    if (typeof price !== 'number' || typeof gstRate !== 'number' || price < 0 || gstRate < 0) {
      throw new Error('Invalid input. Price and GST rate must be positive numbers.');
    }

    // Calculate GST amount
    let gstAmount = (price * gstRate) / 100;

    // Calculate total amount including GST
    let totalAmount = price + gstAmount;

    // Return an object with calculated amounts
    setResult({
      gstAmount: gstAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2)
    })
  }

  // Example usage:
  let price = 100; // Price of the product or service
  let gstRate = 18; // GST rate in percentage

  try {
    // let result = calculateGST(price, gstRate);
    console.log(`Price: $${price.toFixed(2)}`);
    console.log(`GST Rate: ${gstRate}%`);
    console.log(`GST Amount: $${result.gstAmount}`);
    console.log(`Total Amount (including GST): $${result.totalAmount}`);
  } catch (error) {
    console.log(error.message);
  }

  const originalPriceHandler = () => {
    try {


      let orignalPrice = document.getElementById("orignalprice").value
      let gstPercentage = document.getElementById("gstpercentage").value
      let finalPrice = document.getElementById("finalprice").value

      calculateGST(Number(orignalPrice), Number(gstPercentage))

    } catch (err) {
      console.log(err);
    }
  }
  const gstPercentageHandler = () => {
    try {

      let orignalPrice = document.getElementById("orignalprice").value
      let gstPercentage = document.getElementById("gstpercentage").value
      let finalPrice = document.getElementById("finalprice").value

      calculateGST(Number(orignalPrice), Number(gstPercentage))

    } catch (err) {
      console.log(err);
    }
  }
  const finalPricePriceHandler = () => {
    try {

      let orignalPrice = document.getElementById("orignalprice").value
      let gstPercentage = document.getElementById("gstpercentage").value
      let finalPrice = document.getElementById("finalprice").value


      calculateGST(Number(orignalPrice), Number(gstPercentage))

    } catch (err) {
      console.log(err);
    }
  }


  return (
    <section className='m-1 mt-8 sm:m-5 sm:p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>

      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>GST</h1>

      <section className='w-full sm:w-3/4 mx-auto  mt-5 flex items-center flex-col gap-4 p-2'>

        <div className='flex items-center justify-around  w-full sm:w-3/4 bg-purple-100 rounded-lg p-2 sm:p-0'>
          <label htmlFor="">Original Price</label>
          <input type="number" id="orignalprice" placeholder='OP' className='rounded w-fit ms-3 outline-none p-1.5 bg-transparent sm:bg-white' onChange={originalPriceHandler} />
        </div>

        <div className='flex items-center justify-around sm:w-3/4 w-full bg-purple-100 rounded-lg p-2 sm:p-0'>
          <label htmlFor="">Tax Percentage</label>
          <input type="number" id="gstpercentage" placeholder='P' className='p-1.5 rounded w-fit outline-none bg-transparent sm:bg-white' onChange={gstPercentageHandler} />

        </div>

        <div className='flex items-center justify-around sm:w-3/4 w-full bg-purple-100 rounded-lg p-2 sm:p-0'>
          <label htmlFor="">Final Price</label>
          <input type="number" id="finalprice" placeholder='FP' className='p-1.5 rounded w-fit ms-8 outline-none bg-transparent sm:bg-white' onChange={finalPricePriceHandler} />
        </div>
      </section>

      <div className='bg-purple-100 sm:bg-white w-1/2 lg:w-1/4 p-2 rounded-lg shadow mx-auto mt-8'>
        <p className='flex items-center justify-between p-2'>GST amount <span className='text-purple-600'>{result.gstAmount ?? 0}</span> </p>
        <p className='flex items-center justify-between p-2'>Final Amount  <span className='text-purple-600'>{result.totalAmount ?? 0}</span></p>


      </div>


    </section>
  )
}

export default GST