import { Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SideMenu = ({color}) => {
    console.log(color)
  return (
    <>
    <div>
        <ul>
          <li >
           
            <NavLink  to="/" style={{color: color}} >
              HOME
            </NavLink>
           
          </li>
          <li>
            <NavLink to="/aboutus">
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink  to="/users">
              USERS
            </NavLink>
          </li>
          <li>
            <NavLink  to="/post">
              POST
            </NavLink>
          </li>

          <li>
            <NavLink to="/Formsignup">
              SIGN UP
            </NavLink>
          </li>
        </ul>
      </div>
      </>
  )
}

export default SideMenu