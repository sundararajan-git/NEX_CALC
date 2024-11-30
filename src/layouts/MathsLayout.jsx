import React from 'react'
import { BiArea } from 'react-icons/bi'
import { BsCalendar2Date } from 'react-icons/bs'
import { CgGym } from 'react-icons/cg'
import { CiTempHigh } from 'react-icons/ci'
import { IoCubeOutline, IoTimeOutline } from 'react-icons/io5'
import { LuBinary } from 'react-icons/lu'
import { Md4gPlusMobiledata, MdOutlineDiscount, MdSpeed } from 'react-icons/md'
import { TbUserHexagon, TbWeight } from 'react-icons/tb'
import { TfiRulerAlt2 } from 'react-icons/tfi'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const MathsLayout = () => {
    const location = useLocation()

    return (
        <>
            {location.pathname === "/Maths" ?
                <ShowNavigation />
                :
                <section className='w-full flex justify-center bg-rede-600 h-fit'>
                    <Outlet />
                </section>

            }
        </>
    )
}

export default MathsLayout


const ShowNavigation = () => {
    return (
        <>
            <section className='w-full sm:w-3/4 mx-auto mt-10'>
                <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 h-full'>
                    <NavLink to="Age" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <TbUserHexagon className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Age</p>
                    </NavLink>
                    <NavLink to="Area" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <BiArea className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Area</p>
                    </NavLink>
                    <NavLink to="BMI" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <CgGym className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>BMI</p>
                    </NavLink>
                    <NavLink to="Data" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <Md4gPlusMobiledata className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Data</p>
                    </NavLink>
                    <NavLink to="Date" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <BsCalendar2Date className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Date</p>
                    </NavLink>
                    <NavLink to="Discount" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <MdOutlineDiscount className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Discount</p>
                    </NavLink>
                    <NavLink to="Length" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <TfiRulerAlt2 className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Length</p>
                    </NavLink>
                    <NavLink to="Mass" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <TbWeight className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Mass</p>
                    </NavLink>
                    <NavLink to="Numerical System" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <LuBinary className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Numerical</p>
                    </NavLink>
                    <NavLink to="Speed" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <MdSpeed className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Speed</p>
                    </NavLink>
                    <NavLink to="Temperature" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <CiTempHigh className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Temp</p>
                    </NavLink>
                    <NavLink to="Time" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <IoTimeOutline className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Time</p>
                    </NavLink>
                    <NavLink to="Volume" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <IoCubeOutline className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Volume</p>
                    </NavLink>
                </ul>
            </section>

        </>
    )
}