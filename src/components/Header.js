import React from "react";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation()
    //console.log(location)
    return (
        <div className={'text-center mt-12 mb-6'}>
            <Link to={'/'}>
                <h2 className={'text-3xl'}>MBTI Toolbox</h2>
            </Link>
            <p className={'text-sm text-gray-500'}>Toolbox full of MBTI stuff</p>
            {location.pathname === '/'
                ?   <>
                        <hr className={'w-2/6 md:w-2/12 mt-16 mx-auto'} />
                        <nav className={'my-10 cuprum text-2xl md:text-5xl'}>
                            <Link to={'/compare'}>Compare MBTI</Link> | <Link to={'/find'}>Find that Type</Link>
                        </nav>
                        <hr className={'w-2/6 md:w-2/12 mx-auto'} />
                    </>
                :   <>
                        <hr className={'w-1/6 md:w-1/12 mt-6 mx-auto'} />
                        <nav className={'mt-3 mb-3 cuprum'}>
                            <Link to={'/compare'}>Compare MBTI</Link> | <Link to={'/find'}>Find that Type</Link>
                        </nav>
                        <hr className={'w-1/6 md:w-1/12 mx-auto'} />
                    </>
            }

        </div>
    )
}

export default Header