import React from 'react';
import Button from '../Button';
import logo from './media/buh_one_logo.png';
import style from './style.module.css';
import {MenuOutlined}from "@ant-design/icons";

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
            <Button type='light_mode'>Contact Us</Button>
            <MenuOutlined className={style.butger_menu} />
        </div>
    </nav>
  )
}
