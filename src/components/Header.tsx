'use client'
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react'
import '@/styles/darkmode.css'
import Link from 'next/link';

type Props = {
    darkMode: boolean,
    setDarkMode: () => void,
}

const Header = ({ darkMode, setDarkMode }: Props) => {
    const [activeLink, setActiveLink] = useState<string>('/');

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    }
    const linkClass = (path: string) => `relative flex flex-row items-center h-11 focus:outline-none ${activeLink === path ? 'bg-hover-theme text-white-800 border-hover-theme dark:bg-gray-600' : 'hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-transparent hover:border-hover-theme dark:hover:border-gray-800'} pr-6`;
    return (
        <>
            <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
                <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-custom-theme dark:bg-gray-800 border-none">
                    <Link href="/" legacyBehavior>
                        <a onClick={() => handleLinkClick('/')} className={linkClass('/')}>
                            <Image className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" alt="" width={28} height={28} src={"/razorpay_logo.png"} />
                        </a>
                    </Link>
                    <span className="hidden md:block">Rewards & Recognition</span>
                </div>
                <div className="flex justify-between items-center h-14 bg-custom-theme dark:bg-gray-800">
                    <div className={`bg-white rounded flex items-center mr-4 p-2 shadow-sm border border-gray-200 w-[calc(100vw-232px)] md:w-[calc(100vw-432px)]`}>
                        <button className="outline-none focus:outline-none">
                            <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                        <input type="search" name="" id="" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
                    </div>
                    <ul className="flex items-center w-40">
                        <li>
                            <button
                                aria-hidden="true"
                                onClick={setDarkMode}
                                className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
                            >
                                {darkMode ? <svg
                                    x-show="isDark"
                                    width="24"
                                    height="24"
                                    className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke=""
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                </svg>
                                    : <svg
                                        x-show="!isDark"
                                        width="24"
                                        height="24"
                                        className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke=""
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>}
                            </button>
                        </li>
                        <li>
                            <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                        </li>
                        <li>
                            <a href="#" className="flex items-center mr-4 hover:text-blue-100" onClick={() => {
                                signOut();
                            }}>
                                <span className="inline-flex mr-1">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                </span>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header