import React, { useState } from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { NavLink, useNavigate } from 'react-router-dom'

const Age = () => {

    const navigate = useNavigate()

    const [summary, setSummary] = useState({})
    const [age, setAge] = useState({})
    const [nextBirthday, setNextBirthday] = useState({})
    const [startDate, setStartDate] = useState(null)

    const currentDate = new Date().toISOString().split("T")[0]

    const startHandler = (e) => {

        let startVal = new Date(document.getElementById("StartDate").value)
        let endVal = new Date(document.getElementById("EndDate").value)

        console.log(startVal)

        console.log(endVal)

        if (startVal > endVal) {
            alert("Start date is after the end date")
            const ele = document.getElementById("StartDate")
            ele.value = startDate.split()
            return
        }

        setStartDate(startDate)

        let returnSummaryObj = calculateDiffrence(startVal, endVal)

        setSummary(returnSummaryObj)

        let returnAgeObj = calculateAge(startVal, endVal)

        setAge(returnAgeObj)

        let returnNextBirthObj = calculateNextBirthday(startVal.getMonth() + 1, startVal.getDate())

        console.log(returnNextBirthObj);

        setNextBirthday(returnNextBirthObj)
    }


    const endHandeler = (e) => {
        let startVal = new Date(document.getElementById("StartDate").value)
        let endVal = new Date(document.getElementById("EndDate").value)

        if (new Date(startVal) < new Date(endVal)) {
            alert("end date is after the start date")
            return
        }

        let returnSummaryObj = calculateDiffrence(startVal, endVal)

        setSummary(returnSummaryObj)

        let returnAgeObj = calculateAge(startVal, endVal)

        setAge(returnAgeObj)

        let returnNextBirthObj = calculateNextBirthday(startVal.getMonth() + 1, startVal.getDate())

        setNextBirthday(returnNextBirthObj)
    }


    function calculateDiffrence(birthDate, currentDate) {
        birthDate = new Date(birthDate);
        currentDate = new Date(currentDate);


        if (currentDate < birthDate) throw new Error("Current date must be after birth date");


        const MS_PER_MINUTE = 60 * 1000;
        const MS_PER_HOUR = 60 * MS_PER_MINUTE;
        const MS_PER_DAY = 24 * MS_PER_HOUR;
        const MS_PER_WEEK = 7 * MS_PER_DAY;


        let diffInMilliseconds = currentDate - birthDate;


        let totalMinutes = Math.floor(diffInMilliseconds / MS_PER_MINUTE);
        let totalHours = Math.floor(diffInMilliseconds / MS_PER_HOUR);
        let totalDays = Math.floor(diffInMilliseconds / MS_PER_DAY);
        let totalWeeks = Math.floor(diffInMilliseconds / MS_PER_WEEK);


        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        if (months < 0) { years--; months += 12; }


        let days = currentDate.getDate() - birthDate.getDate();
        if (days < 0) {
            months--;
            let previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += previousMonth.getDate();
        }


        let totalMonths = years * 12 + months;

        let remainingHours = totalHours;
        let remainingMinutes = totalMinutes;


        return {
            Years: years,
            Months: totalMonths,
            Weeks: totalWeeks,
            Days: totalDays,
            Hours: remainingHours,
            Minutes: remainingMinutes
        };
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


    function calculateNextBirthday(birthMonth, birthDay) {
        const today = new Date();
        const currentYear = today.getFullYear();

        let nextBirthday = new Date(currentYear, birthMonth - 1, birthDay); // Months are zero-indexed in JS

        // Check if the birthday has already occurred this year
        if (today > nextBirthday) {
            nextBirthday.setFullYear(currentYear + 1);
        }

        // Calculate the total time difference in milliseconds
        const timeDifference = nextBirthday - today;

        // Convert the time difference to days
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        // Calculate months and days remaining
        let remainingDays = daysRemaining;
        let monthsRemaining = 0;

        const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0) {
            monthDays[1] = 29; // Leap year adjustment for February
        }

        let currentMonth = today.getMonth();
        while (remainingDays > monthDays[currentMonth]) {
            remainingDays -= monthDays[currentMonth];
            currentMonth = (currentMonth + 1) % 12;
            monthsRemaining++;
        }

        return { Months: monthsRemaining, Days: remainingDays };
    }




    return (
        <div className='m-1 mt-12 p-2 sm:m-5 w-full sm:w-3/4'>

            <section className='ps-3 sm:ps-0 w-fit'>
                <p className='flex items-center gap-2 cursor-pointer font-semibold hover:underline' onClick={() => navigate(-1)}><IoCaretBackCircle className='text-purple-500' size={22} /> Back</p>
            </section>

            <h1 className='text-violet-600 font-bold text-center w-full mx-auto pb-2 sm:pb-4'>AGE</h1>


            <section className='w-full mx-auto mt-5'>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-evenly sm:pb-2'>

                    <div className='bg-purple-50 sm:bg-white px-5 py-1 rounded-lg w-3/4 sm:w-fit flex items-center justify-between sm:block'>
                        <label htmlFor="StartDate" className='font-medium ps-2'>Start Date : </label>
                        <input type="date"
                            className='ms-2 outline-none p-2 bg-transparent font-medium text-purple-600 '
                            id='StartDate'
                            // max={currentDate}
                            onChange={startHandler} />
                    </div>

                    <div className=' bg-purple-50 sm:bg-white px-5 py-1 rounded-lg w-3/4 sm:w-fit flex items-center justify-between sm:block'>
                        <label htmlFor="EndDate" className='font-medium ps-2'>End Date : </label>
                        <input type="date"
                            id='EndDate' className='ms-2 outline-none p-2 bg-transparent font-medium text-purple-600 '
                            defaultValue={new Date().toISOString().split("T")[0]}
                            onChange={endHandeler}
                            min={currentDate}
                        />
                    </div>

                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 h-full place-items-center p-8 pt-3 sm:pt-4 sm:pb-2'>

                    {Object.keys(age).length ?
                        <div className='bg-purple-50 sm:bg-white w-full rounded-lg p-4 h-full '>
                            <p className='font-medium text-sm text-center text-violet-600 pb-2'>TOTAL DURATION</p>
                            {Object.entries(age).map((arr, index) => {
                                return <div className='flex justify-between items-center w-full' key={index}>
                                    <span className='font-medium'>{arr[0]}</span>
                                    <span className='font-medium text-violet-600'>{arr[1]}</span>
                                </div>
                            })}
                        </div>
                        : null
                    }


                    {Object.keys(nextBirthday).length ?
                        <div className=' bg-purple-50 sm:bg-white rounded-lg p-4 w-full h-full'>
                            <p className='font-medium text-sm text-center text-violet-600 pb-2'>NEXT BIRTHDAY</p>
                            {Object.entries(nextBirthday).map((arr, index) => {
                                return <div className='flex justify-between items-center w-full' key={index}>
                                    <span className='font-medium'>{arr[0]}</span>
                                    <span className='font-medium text-violet-600'>{arr[1]}</span>
                                </div>
                            })}
                        </div>

                        : null
                    }

                    {Object.keys(age).length ?
                        <div className='bg-purple-50 sm:bg-white w-full rounded-lg p-4 h-full'>
                            <p className='font-medium text-sm text-center text-violet-600 pb-2'>PEROID</p>
                            {Object.entries(summary).map((arr, index) => {
                                return <div className='flex justify-between items-center w-full' key={index}>
                                    <span className='font-medium'>{arr[0]}</span>
                                    <span className='font-medium text-violet-600'>{arr[1]}</span>
                                </div>
                            })}
                        </div>
                        : null
                    }

                </div>



            </section>
        </div>
    )
}

export default Age