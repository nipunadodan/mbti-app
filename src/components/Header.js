import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import ThemeToggle from "./common/ThemeToggle";

const NavMenu = () => {
    return (
        <>
        <Link to={'/compare'}><li className={'py-4 mr-2 border-b border-gray-200 dark:border-gray-600 text-center block cuprum'}>Compare MBTI</li></Link>
        <Link to={'/find'}><li className={'py-4 mr-2 border-b border-gray-200 dark:border-gray-600 text-center block cuprum'}>Find that Type</li></Link>
        <Link to={'/who'}><li className={'py-4 mr-2 text-center block cuprum'}>Filter 'em</li></Link>
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
            <header className={'flex pt-3 pb-6 px-2 items-center'}>
                <i className={'la la-bars text-xl py-2 px-4 cursor-pointer'} onClick={menuToggle}></i>
                <h2 className={'text-2xl flex-grow text-center'}><Link to={'/'}>MBTI Toolbox</Link></h2>
                <ThemeToggle/>
            </header>
            {menuOpen
                ? <nav className={'text-xl mb-6 bg-gray-100 dark:bg-gray-700'}>
                      <NavMenu/>
                  </nav>
                : <></>
            }
        </>
    )
}

export default Header