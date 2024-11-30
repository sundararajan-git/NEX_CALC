import React from 'react'
import { IoCaretBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'

const Invisment = () => {
  const navigate = useNavigate()

  function calculateInvestment(principal, interestRate, years, timesCompoundedPerYear) {
    // Validate input types and values
    if (typeof principal !== 'number' || typeof interestRate !== 'number' || typeof years !== 'number' || typeof timesCompoundedPerYear !== 'number' ||
      principal <= 0 || interestRate <= 0 || years <= 0 || timesCompoundedPerYear <= 0) {
      throw new Error('Invalid input. Ensure all inputs are positive numbers.');
    }

    // Convert annual interest rate to decimal form
    let r = interestRate / 100;

    // Calculate the future value using compound interest formula
    let n = timesCompoundedPerYear;
    let t = years;
    let futureValue = principal * Math.pow(1 + r / n, n * t);

    // Round to two decimal places for clarity
    futureValue = Math.round(futureValue * 100) / 100;

    return futureValue;
  }

  // Example usage:
  let principal = 1000; // Principal amount (initial investment)
  let interestRate = 5; // Annual interest rate (in percentage)
  let years = 5; // Duration of investment (in years)
  let timesCompoundedPerYear = 12; // Interest compounded monthly

  try {
    let futureValue = calculateInvestment(principal, interestRate, years, timesCompoundedPerYear);
    console.log(`Principal: $${principal.toFixed(2)}`);
    console.log(`Annual Interest Rate: ${interestRate}%`);
    console.log(`Duration (years): ${years}`);
    console.log(`Times Compounded per Year: ${timesCompoundedPerYear}`);
    console.log(`Future Value: $${futureValue.toFixed(2)}`);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <section className='m-1 sm:m-5 sm:p-2 w-3/4'>
      <section className='ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>
      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>INVESMENT</h1>

      <br />

      <section className='w-full sm:w-3/4 mx-auto mt-5'>
        <p>this is INvestment part</p>
      </section>
    </section>
  )
}

export default Invisment