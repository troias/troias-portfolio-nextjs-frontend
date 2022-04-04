
// import { FaChevronCircleDown } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react'

import Link from 'next/link';
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'



const Header = React.forwardRef((props, ref) => {
  const router = useRouter()
  // console.log("routerInformation", router);
  

  const headerRef = useRef()
  const homeLinkRef = useRef()
  const aboutref = useRef()
  const contactref = useRef()
  const resumeref = useRef()
  const worksRef = useRef()
  const navRef = useRef()

  console.log("navRef", ref);

  const menuItems = [
    {
      title: "Home",
      url: "#Home",
      cName: "current",
      ref: homeLinkRef,
      id: '#Home',
      path: '/',
    },
    {
      title: "About",
      url: "#About",
      cName: "nav-links",
      ref: aboutref,
      id: '#About',
      path: '/#about',
    },
    {
      title: "Resume",
      url: "#Resume",
      cName: "nav-links",
      ref: resumeref,
      id: '#Resume',
      path: '/#resume',

    },
    {
      title: "Portfolio",
      url: "#Portfolio",
      cName: "nav-links",
      ref: worksRef,
      id: '#Portfolio',
      path: '/#portfolio',
    },
    {
      title: "Contact",
      url: "#Contact",
      cName: "nav-links-mobile",
      ref: contactref,
      id: '#Contact',
      path: '/#contact',
    }

  ];

  const [visable, setVisable] = useState(false);
  const [desktop, setDesktop] = useState(false)
  const [hidden, setHidden] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-device-width:768px)'
  })

  const toggleMenu = (event) => {
    event.preventDefault();
    setVisable(!visable);

  }

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
  ------------------------------------------------------*/

  const addBackGroundOnNav = () => {
    const scroll = window.scrollY;

    if (headerRef.current) {

 

    if (scroll > headerRef.current.offsetHeight / 4) {
      setHidden(true);
    }
    if (scroll > headerRef.current.offsetHeight) {
      setHidden(false);
    }
  }

    if (scroll === 0) {
      setHidden(false);
    }
  }


  const checkDimensions = () => {

    if (window.innerWidth > 768) {
      setDesktop(true)
    }
    else { setDesktop(false) }
  }

  const setIntialNavItem = () => {
    const refs = [homeLinkRef, aboutref, resumeref, worksRef, contactref]
    refs.forEach(ref => {
      console.log("roter.pathname", router.pathname);
      if (ref.current.childNodes[0].href === `${`http://localhost:3000${router.asPath}`}`) {
        console.log("refs", ref.current.childNodes[0].href);
        ref.current.childNodes[0].classList.add("current");
      } else {
        ref.current.childNodes[0].classList.remove("current");
      }
    })
  }

  // const overAboutTop = window.scrollY > ref.current[0].current.offsetTop 
  // console.log("overAboutTop", overAboutTop);
  

  useEffect(() => {
    window.addEventListener("scroll", addBackGroundOnNav);
    setDesktop(isDesktop)
    window.addEventListener("resize", checkDimensions);
    checkDimensions()
    setIntialNavItem()
    return () => {
      window.removeEventListener("scroll", addBackGroundOnNav);
    }
  }, [router.asPath])

    
 

  return (
    <div id="nav-wrap ">
      <header id="home" className="" ref={headerRef} >
        <div className=" fixed z-10   ">

       
        <div onClick={toggleMenu} className="h-full w-full">
          {!visable ? <AiOutlineAlignRight className="mobile-button " /> : <FaTimes className="mobile-button " />}
        </div>
      

        <nav ref={navRef} className={
          !isDesktop ||
            !desktop ?
            `${visable ? 'mobile' : 'hidden '}` :
            (`${!hidden ?
              (`${window.scrollY > ref.current[0].current.offsetTop  ?
                "  desktop active " :
                "desktop"}`) : "hidden"}`)

        }>
          <ul className={""}>
            {menuItems.map((item, index) => {
              return (
                <li key={index} ref={item.ref} className={
                  item.cName === "current" ?
                    (`${item.id}` !== router.asPath ? (`${router.asPath === "/" ? "current " : "smoothscroll"}`) : "current ") :
                    "smoothscroll"
                }  >
                  <Link href={item.path} >{item.title}</Link>
                </li>
              )
            }
            )}
          </ul>
        </nav>
        </div>

        <div className=" banner flex  items-center  z-0 ">
          <div className="banner-text pb-20 z-0">
            <h1 className="responsive-headline z-0">I'm Troy Flavell </h1>
            <h3>A  Hamilton based  <span> React freelancer @WebDevIncNz</span>.</h3>
            <hr />
          </div>
        </div>

      </header>
    </div>

  )
})




export default Header;