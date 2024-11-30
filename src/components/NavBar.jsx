import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const isActive = (path, location) => location.pathname.startsWith(path)


const NavBar = () => {
  const location = useLocation()
  return (
    <section className='sm:p-4'>
      <nav className='bg-purple-100 hidden sm:block'>
        <ul className='flex items-center justify-around gap-3'>

          <h1 className='font-bold text-purple-600 text-xl w-1/4'>Clacu.</h1>

          <div className='flex items-center justify-between gap-4 md:gap-8 font-semibold'>

            <NavLink to={"/"} className="flex flex-col">
              <span className=''>
                Home
              </span>
              <span className={`border-t-2 rounded-t-md ${location.pathname === "/" ? "border-purple-600" : "border-transparent"}`}></span>
            </NavLink>
            <NavLink to={"/Maths"} className="flex flex-col">
              <span className=''>
                Maths
              </span>
              <span className={`border-t-2 rounded-t-md ${isActive("/Maths", location) ? "border-purple-600" : "border-transparent"}`}></span>
            </NavLink>
            <NavLink to={"/Financial"} className="flex flex-col">
              <span>Financial</span>
              <span className={`border-t-2 border-purple-600 rounded-t-md ${isActive("/Financial", location) ? "border-purple-600" : "border-transparent"}`}></span>
            </NavLink>

          </div>

          {/* <div className='flex gap-2 items-center'> */}
          {/* <Bolt size={20} /> */}
          {/* <Moon size={20} /> */}
          {/* <Sun size={20} /> */}
          {/* </div> */}
        </ul>
      </nav>

      <nav className='sm:hidden p-3 bg-white'>
        <ul className='flex gap-2 items-center justify-around font-semibold'>
          <NavLink to={"/"} className="flex flex-col">
            <span className=''>
              Home
            </span>
            <span className={`border-t-2 rounded-t-md ${location.pathname === "/" ? "border-purple-600" : "border-transparent"}`}></span></NavLink>
          <NavLink to={"/Maths"} className="flex flex-col">
            <span className=''>
              Maths
            </span>
            <span className={`border-t-2 rounded-t-md ${location.pathname === "/Maths" ? "border-purple-600" : "border-transparent"}`}></span></NavLink>
          <NavLink to={"/Financial"} className="flex flex-col">
            <span>Financial</span>
            <span className={`border-t-2 border-purple-600 rounded-t-md ${location.pathname === "/Financial" ? "border-purple-600" : "border-transparent"}`}></span>
          </NavLink>
          {/* <NavLink to={"/Settings"}>Settings</NavLink> */}
        </ul>
      </nav>


    </section>
  )
}

export default NavBar