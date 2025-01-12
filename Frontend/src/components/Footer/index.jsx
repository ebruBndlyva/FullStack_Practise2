import React from 'react'
import style from "./style.module.css"
import { RiFacebookFill } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
function Footer() {
  return (
    <div className="content">
      <div className={style.footer}>
        <div className={style.foot_desc}>Copyright ©2025 All rights reserved | This template is made with  by  <CiHeart /> Colorlib</div>
        <div className={style.foot_link}>
          <ul>
            <li><RiFacebookFill /></li>
            <li><FiTwitter /></li>
            <li><FaDribbble /></li>
            <li><FaBehance /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer