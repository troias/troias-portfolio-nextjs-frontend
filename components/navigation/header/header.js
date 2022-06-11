
// import { FaChevronCircleDown } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react'

import Link from 'next/link';
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import { AiOutlineAlignRight, AiOutlineLinkedin } from 'react-icons/ai'
import { FaTimes, FaEnvelope } from 'react-icons/fa'
import { RiMessengerLine } from 'react-icons/ri'




const Header = React.forwardRef((props, ref) => {
  const router = useRouter()
  // console.log("Headerprops", props);

  const currentEmployment = props.headerData.contactDetails.currentEmployment
  const jobTitle = props.headerData.contactDetails.jobTitle
  const location = props.headerData.contactDetails.location
  const social_link = props.headerData.header_social_links



  const headerRef = useRef()
  const homeLinkRef = useRef()
  const aboutref = useRef()
  const contactref = useRef()
  const resumeref = useRef()
  const worksRef = useRef()
  const navRef = useRef()

  // console.log("navRef", ref);

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
      // console.log("roter.pathname", router.pathname);
      if (ref.current.childNodes[0].href === `${`${process.env.NEXT_PUBLIC_STRAPI_URL}${router.asPath}`}`) {
        // console.log("refs", ref.current.childNodes[0].href);
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


          <div onClick={toggleMenu} className="h-full w-full pt-4 ml-6 md:hidden">
            {!visable ?
              <AiOutlineAlignRight size={50} className=" bg-red-500 bg-opacity-80  rounded-md text-white " /> :
              <FaTimes size={50} className=" bg-red-500 text-white rounded-md bg-opacity-80 " />}
          </div>


          <nav ref={navRef} className={
            !isDesktop ||
              !desktop ?
              `${visable ? 'mobile' : 'hidden '}` :
              (`${!hidden ?
                (`${window.scrollY > ref.current[0].current.offsetTop ?
                  "  desktop active " :
                  "desktop"}`) : "hidden"}`)

          }>
            <ul className={""}>
              {menuItems.map((item, index) => {
                return (
                  <li key={index} ref={item.ref} onClick={toggleMenu} className={
                    item.cName === "current" ?
                      (`${item.id}` !== router.asPath ? (`${router.asPath === "/" ? "current " : "smoothscroll"}`) : "current ") :
                      "smoothscroll"
                  }  >
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                )
              }
              )}
            </ul>
          </nav>
        </div>

        <div className=" banner flex  items-center  z-0 ">
          <div className="banner-text pb-20 z-0">
            <h1 className="responsive-headline z-0">I'm <span className="text-red-500 ">Troy Flavell  </span></h1>
            <h3>A {location}  based {jobTitle} {currentEmployment} <span> </span><span></span>.</h3>
            <hr />
            <div>
              <h3> Get in touch with me @</h3>
              <div className="flex justify-center mt-4">
               
             
                    <a href={social_link[0].url} target="_blank" className="text-red-500 mr-2">
                      <RiMessengerLine size={30} className="text-red-500" />
                    </a>

                    <a href={social_link[1].url} target="_blank" className="text-red-500 mr-2">
                      <AiOutlineLinkedin size={30} className="text-red-500" />
                    </a>
                    <a href={`mailto:${social_link[2].url}`} target="_blank" className="text-red-500 mr-2">
                      <FaEnvelope size={30} className="text-red-500" />
                    </a>
             
          

              </div>


            </div>

          </div>

        </div>


      </header>
    </div>

  )
})




export default Header;