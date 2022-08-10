import React, { useEffect } from 'react'
import SDGIcon from '../../asserts/users.svg'
import SDGTrackerIcon from '../../asserts/users.svg'
import DashboardIcon from '../../asserts/dashboard.svg'
import EmployeesIcon from '../../asserts/users.svg'
import JointIcon from '../../asserts/users.svg'
import FilesIcon from '../../asserts/users.svg'
import REsIcon from '../../asserts/submitess.svg'

import Logo from '../../asserts/logo.png'

import ProjectsIcon from '../../asserts/users.svg'
import { Link } from 'react-router-dom'

import './sidenav.css'

const SideNav = () => {


  let setP = window.location.pathname

  return (

    <div className='text-dark  py-4  ' style={{ position: "fixed", backgroundColor: "#dfdfdf", borderRadius: "10px", height: " 95%", }}>
      <div className='d-flex mx-auto justify-content-center TeamableTop'>
        <div> <img src={Logo} alt="" style={{ width: "170px" }} />
        </div>

      </div>
      <div className=" sidenavul border-0  " style={{ position: "relative", top: "10px", padding: "20px 0px" }}>
        <ul>
          <li>
            <Link className={`d-flex text-dark text-decoration-none ${setP === "/admin_panel" ? "setActivebg" : ""}`} to="/admin_panel"><img src={DashboardIcon} alt="dashboard" style={{ width: "18px" }} /><p className='FiloSubMenu ' style={{ marginLeft: "3px" }}>Dashboard</p> </Link>
          </li>
          <li>
            <Link className={`d-flex text-dark text-decoration-none ${setP === "/users_list" ? "setActivebg" : ""}`} to="/users_list"> <img src={SDGTrackerIcon} alt="" style={{ width: "18px" }} /><p className='FiloSubMenu mx-1'>Users</p> </Link>
          </li>
          <li>
            <Link className={`d-flex text-dark text-decoration-none ${setP === "/response_list" ? "setActivebg" : ""}`} to="/response_list"><img src={REsIcon} alt="projects" style={{ width: "15px" }} /><p className='FiloSubMenu mx-2'>Response</p> </Link>
          </li>




        </ul>

      </div>

    </div>

  )
}

export default SideNav