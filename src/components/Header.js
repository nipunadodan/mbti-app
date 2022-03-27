import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'text-center my-6'}>
            <h2 className={'text-3xl'}>MBTI Toolbox</h2>
            <p className={'text-sm text-gray-500'}>Toolbox full of MBTI stuff</p>
            <hr className={'w-1/6 md:w-1/12 mt-6 mx-auto'} />
            <nav className={'mt-3 mb-3 cuprum'}>
                <Link to={'/'}>Compare MBTI</Link> | <Link to={'/find'}>Find that Type</Link>
            </nav>
            <hr className={'w-1/6 md:w-1/12 mx-auto'} />
        </div>
    )
}

export default Header