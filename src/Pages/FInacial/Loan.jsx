import React from 'react'
import { IoCaretBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'

const Loan = () => {
  const navigate = useNavigate()


  function calculateLoanPayment(principal, annualInterestRate, years) {


    console.log(principal, "this principal");

    if (typeof principal !== 'number' || typeof annualInterestRate !== 'number' || typeof years !== 'number' ||
      principal <= 0 || annualInterestRate <= 0 || years <= 0) {
      throw new Error('Invalid input. Ensure all inputs are positive numbers.');
    }

    // Convert annual interest rate to monthly rate and number of payments
    let monthlyInterestRate = annualInterestRate / 100 / 12;
    let numberOfPayments = years * 12;

    // Calculate the monthly payment using loan payment formula
    let monthlyPayment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Round to two decimal places for clarity
    monthlyPayment = Math.round(monthlyPayment * 100) / 100;

    return monthlyPayment;
  }

  // // Example usage:
  // let loanAmount = 200000; // Loan amount (principal)
  // let annualInterestRate = 5; // Annual interest rate (in percentage)
  // let loanTermInYears = 30; // Loan term in years

  // try {
  //   let monthlyPayment = calculateLoanPayment(loanAmount, annualInterestRate, loanTermInYears);
  //   console.log(`Loan Amount: $${loanAmount.toFixed(2)}`);
  //   console.log(`Annual Interest Rate: ${annualInterestRate}%`);
  //   console.log(`Loan Term (years): ${loanTermInYears}`);
  //   console.log(`Monthly Payment: $${monthlyPayment.toFixed(2)}`);
  // } catch (error) {
  //   console.log(error.message);
  // }



  const loanAmountHandler = () => {
    try {

      let loanAmount = document.getElementById("loanamount").value
      let inteterst = document.getElementById("interest").value
      let loanTermYears = document.getElementById("loantermyears").value

      calculateLoanPayment(Number(loanAmount), Number(inteterst), Number(loanTermYears))

    } catch (err) {
      console.log(err);
    }
  }
  const interestHandler = () => {
    try {

      let loanAmount = document.getElementById("loanamount").value
      let inteterst = document.getElementById("interest").value
      let loanTermYears = document.getElementById("loantermyears").value

      calculateLoanPayment(Number(loanAmount), Number(inteterst), Number(loanTermYears))

    } catch (err) {
      console.log(err);
    }
  }
  const loanTermYearsHandler = () => {
    try {

      let loanAmount = document.getElementById("loanamount").value
      let inteterst = document.getElementById("interest").value
      let loanTermYears = document.getElementById("loantermyears").value

      calculateLoanPayment(Number(loanAmount), Number(inteterst), Number(loanTermYears))

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section className='m-1 mt-8 sm:m-5 sm:p-2 w-full sm:w-3/4'>
      <section className='ps-3 sm:ps-10 w-fit'>
        <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
      </section>
      <h1 className='text-violet-600 font-bold text-center w-full mx-auto'>LOAN</h1>

      <section className='w-full sm:w-3/4 mx-auto  mt-5 flex items-center flex-col gap-4 p-2'>

        <div className='flex items-center justify-around  w-full sm:w-3/4 bg-purple-100 rounded-lg p-2 sm:p-0'>
          <input type="number" id="loanamount" placeholder='LA' className='border border-gray-500 p-0.5 rounded w-fit' onChange={loanAmountHandler} />
        </div>


        <div className='flex items-center justify-around  w-full sm:w-3/4 bg-purple-100 rounded-lg p-2 sm:p-0'>
          <input type="number" id="interest" placeholder='I' className='border border-gray-500 p-0.5 rounded w-fit' onChange={interestHandler} />
        </div>

        <div className='flex items-center justify-around  w-full sm:w-3/4 bg-purple-100 rounded-lg p-2 sm:p-0'>
          <input type="number" id="loantermyears" placeholder='LTY' className='border border-gray-500 p-0.5 rounded w-fit' onChange={loanTermYearsHandler} />
        </div>


        <p>GST amount - { }</p>
        <p>Final Amount  - { }</p>
      </section>
    </section>
  )
}

export default Loan