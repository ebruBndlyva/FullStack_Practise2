import React, { useContext } from 'react'
import style from "./style.module.css"
import { FaRegClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import logo from "../../assets/logo.png.webp"
import { Link, NavLink } from 'react-router-dom';
import { FavoriteContext } from '../../context/FavoriteContext';
function Navbar() {
    let {favoriteData}=useContext(FavoriteContext)
    return (
        <div className={style.navbar}>
            <div className={style.navbar_top}>
                <div className="content">
                 <div className={style.navbar_top_wrapper}>
                 <div className={style.navbar_time}>
                        <ul>
                            <li><span><FaRegClock /></span> Mon - SAT: 6.00 am - 10.00 pm</li>
                            <li> Sun: Closed</li>
                        </ul>
                    </div>
                    <div className={style.navbar_icon}>
                        <ul>
                            <li><a href=""><FaFacebookF /></a></li>
                            <li><a href=""><FaTwitter /></a></li>
                            <li><a href=""><FaLinkedinIn /></a></li>
                            <li><a href=""><FaGooglePlusG /></a></li>
                        </ul>
                    </div>
                 </div>
                </div>
            </div>
            <div className={style.navbar_bottom}>
             <div className="content">
         <div className={style.navbar_bottom_wrapper}>
         <div className={style.navbar_logo}>
                    <img src={logo} alt="logo-img" />
                </div>
                <div className={style.navbar_links}>
                    <ul>
                        <li>
                            <NavLink to={""} style={({ isActive }) => ({ color: isActive ? "#092C3F" : "brown" })} >Home</NavLink>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Services</Link>
                        </li>
                        <li>
                            <NavLink to={"/add"} style={({ isActive }) => ({ color: isActive ? "brown" : "black" })}>Add</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/favorite"} style={({ isActive }) => ({ color: isActive ? "brown" : "black" })}>Favorites <span>({favoriteData.length})</span></NavLink>
                        </li>
                    </ul>
                </div>
         </div>
             </div>
            </div>
        </div>
    )
}

export default Navbar