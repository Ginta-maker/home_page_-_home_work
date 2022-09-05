import React from 'react';
import logo from './media/buh_one_logo.png';
import style from './style.module.css'

export default function Navbar() {
  return (
    <nav>
        <div className={['wrapper', style.wrapper].join(' ')}>
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
            <ul className={style.menu}>
                <li>Home</li>
                <li>Service</li>
                <li>Cases</li>
                <li>About Us</li>
                <li>Contacts</li>
            </ul>
        </div>
    </nav>
  )
}
