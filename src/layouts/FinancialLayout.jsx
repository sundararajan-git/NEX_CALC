// import { Cake, Maximize } from 'lucide-react'
import React from 'react'
import { CiMoneyCheck1 } from 'react-icons/ci'
import { RiMoneyDollarCircleLine, RiStockLine } from 'react-icons/ri'
import { TiDocumentText } from 'react-icons/ti'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const FinancialLayout = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname === "/Financial" ?
                <ShowNavigation />
                :
                <section className='w-full flex justify-center bg-rede-600 h-fit'>
                    <Outlet />
                </section>
            }
        </>
    )
}

export default FinancialLayout



const ShowNavigation = () => {
    return (
        <>
            <section className='w-full sm:w-3/4 mx-auto mt-10'>
                <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 h-full'>
                    <NavLink to="GST" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <CiMoneyCheck1 className='text-purple-700' size={20} strokeWidth={0.5} />
                        <p className='font-semibold text-sm'>GST</p>
                    </NavLink>
                    <NavLink to="Currency" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <RiMoneyDollarCircleLine className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Currency</p>
                    </NavLink>
                    <NavLink to="Investment" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <RiStockLine className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Invesment</p>
                    </NavLink>
                    <NavLink to="Loan" className="h-20 w-20 text-center bg-purple-100 sm:bg-white  rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                        <TiDocumentText className='text-purple-700' size={20} />
                        <p className='font-semibold text-sm'>Loan</p>
                    </NavLink>

                </ul>
            </section>

        </>
    )
}