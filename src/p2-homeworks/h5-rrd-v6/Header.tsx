import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Pages';
import './HW5.css';
import burger_menu from '../../assets/burger_menu.svg'

function Header() {
    let [show, setShow] = useState<boolean>(false)

    let navClass = show ? "nav_show nav" : "nav"

    const onMouseEnterHandler = () => {
        setShow(true)
    }
    const onMouseLeaveHandler = () => {
        setShow(false)
    }

    return (

        <nav className={navClass}
             onMouseEnter={onMouseEnterHandler}
             onMouseLeave={onMouseLeaveHandler}>

            <NavLink className={({isActive}) => isActive ? "active link" : "link"}
                     to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
            <NavLink className={({isActive}) => isActive ? "active link" : "link"} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={({isActive}) => isActive ? "active link" : "link"} to={PATH.JUNIOR_PLUS}>Junior
                +</NavLink>

            <img className="menu-img" src={burger_menu} alt="burger-menu"/>
        </nav>


    )
}

export default Header
