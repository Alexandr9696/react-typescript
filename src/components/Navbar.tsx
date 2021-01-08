import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <NavLink to="/" className="brand-logo">React + Typescript</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)