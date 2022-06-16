import React, { useState } from 'react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { CSSTransition } from 'react-transition-group';


const PortfolioNav = () => {

    const [active, setActive] = useState(false)
    const toggleMenu = () => {
        setActive(!active)
    }

    
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  

    return (
        <>
            <div className="flex justify-center bg-gray-800">


                <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 max-w-screen-lg w-full">

                    <Link href="/" className="cursor-default">
                        <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                            <svg className="fill-current h-8 w-8 mr-2 hover:text-teal-200" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                            <span className="font-semibold text-xl tracking-tight hover:text-teal-200">Troias</span>
                        </div>
                    </Link>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={toggleMenu}>
                            <svg className="fill-current h-3 w-3 hover:text-teal-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>

                    </div>



                    <div className={"hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto "} >
                        <ul className="text-sm lg:flex-grow text-white flex justify-end">
                       
                            <li className="mr-3">
                            <Link href="/projects" className="mr-2 block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white">
                                Projects
                            </Link>
                            </li>
                            <li className="mr-3">
                            <Link href="/skills" className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white mr-4">
                                Skills
                            </Link>
                            </li>
                            <li className="mr-3">
                            <Link href="/#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">
                            Contact
                        </Link> 
                            </li>
                        </ul>
                   
                    </div>
                </nav>



            </div>

             <div className="flex justify-center bg-white pt-1" > 
                <CSSTransition in={active && isMobile}  timeout={300} className="portfolioNavBar   w-11/12 max-w-screen-lg flex justify-center bg-gray-700 "  unmountOnExit >


                    <div className={`${!isMobile && 'hidden'} ` }>



                        <ul className="flex-col justify-center items-center text-2xl text-white pb-8 pt-8  w-full    ">
                            <li className="py-4  hover:bg-gray-600 flex justify-center">
                                <Link href="/" className=" px-3 py-2 rounded  border-teal-400  hover:text-teal-200 text-white mr-4 ">
                                Home
                                </Link>
                            </li>
                            <li className="py-4  hover:bg-gray-600 flex justify-center ">
                                <Link href="/projects" className=" px-3 py-2  rounded  border-teal-400 hover:text-teal-200 hover:bg-gray-600 text-white">
                                   Projects
                                </Link>
                            </li>
                            <li className="py-4  hover:bg-gray-600 flex justify-center">
                                <Link href="/skills" className=" px-3 py-2  rounded  border-teal-400 hover:text-teal-200 hover:bg-gray-600 text-white">
                                   Skills
                                </Link>
                            </li>
                            <li className="py-4  hover:bg-gray-600 flex justify-center text-white">
                                <Link href="/#contact" className=" px-3 py-2  rounded  border-teal-400 hover:text-teal-200 hover:bg-gray-600 text-white">
                                    Contact
                                </Link>
                            </li>
    
                        </ul>
                    </div>
                </CSSTransition>
             </div> 
        </>
    )
}

export default PortfolioNav
