import React from 'react';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="inline-block text-center transition duration-500 ease-in-out rounded-full py-1 px-4 mt-6 bg-gray-100 dark:bg-gray-700 cursor-pointer">
            {theme === 'dark' ? (
                <i
                    className="text-gray-500 dark:text-gray-400 text-xl la la-moon"
                />
            ) : (
                <i
                    className="text-gray-500 dark:text-gray-400 text-xl la la-sun"
                />
            )}
        </div>
    );
};

export default Toggle;