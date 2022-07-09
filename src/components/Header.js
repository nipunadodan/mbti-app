import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import ThemeToggle from "./common/ThemeToggle";

const NavMenu = () => {
    return (
        <>
            <li className={'py-2 mr-2 text-center block cuprum'}><Link to={'/compare'}>Compare MBTI</Link></li>
            <li className={'py-2 mr-2 text-center block cuprum'}><Link to={'/find'}>Find that Type</Link></li>
            <li className={'py-2 mr-2 text-center block cuprum'}><Link to={'/who'}>Who is here</Link></li>
        </>
    )
}

const Header = () => {
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    const menuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <header className={'flex pt-3 pb-6 px-2'}>
                <i className={'la la-bars py-2 px-4 cursor-pointer'} onClick={menuToggle}></i>
                <h2 className={'text-2xl flex-grow text-center'}><Link to={'/'}>MBTI Toolbox</Link></h2>
                <ThemeToggle/>
            </header>
            {menuOpen
                ?<nav className={'text-xl'}>
                    <NavMenu/>
                </nav>
                : <></>
            }
        </>
    )
}

export default Header