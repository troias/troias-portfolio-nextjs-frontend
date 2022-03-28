
// import { FaChevronCircleDown } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import {AiOutlineAlignRight} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa' 



const Header = React.forwardRef((props, ref) => {
 





  const router = useRouter()
  console.log("routerInformation", router);


  const headerRef = useRef()
  const homeLinkRef = useRef()
  const aboutref = useRef()
  const contactref = useRef()
  const resumeref = useRef()
  const worksRef = useRef()


  const menuItems = [
    {
      title: "Home",
      url: "#Home",
      cName: "nav-links",
      ref: homeLinkRef,
      id: '#Home',
      path: '/#Home',
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
  // const [show, setShow] = useState(false);
  // const [hidden, setHidden] = useState(false);
  // const [current, setCurrent] = useState(false);
  console.log("desktop", desktop);
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

  // const addBackGroundOnNav = () => {
  //   const scroll = window.scrollY;
  //   if (scroll > headerRef.current.offsetHeight / 4) {
  //     setHidden(true);
  //   }
  //   if (scroll > headerRef.current.offsetHeight) {
  //     setHidden(false);
  //     setShow(true);
  //   }
  //   if (scroll === 0) {
  //     setShow(false);
  //     setHidden(false);

  //   }
  // }

  const checkDimensions = () => {
    console.log("innderDimensions", window.innerWidth)
    if (window.innerWidth > 768) {
      setDesktop(true)
    }
    else { setDesktop(false) }
  }

  const setIntialNavItem = () => {
    const refs  = [homeLinkRef, aboutref, resumeref, worksRef, contactref]
    refs.forEach(ref => {
      if (ref.current.childNodes[0].href === `${`http://localhost:3000${router.asPath}`}`) {
        console.log("refs", ref.current.childNodes[0].href);
        ref.current.childNodes[0].classList.add("current");
      } else {
        ref.current.childNodes[0].classList.remove("current");
      }

    })
  }



  useEffect(() => {
    // window.addEventListener("scroll", addBackGroundOnNav);
    setDesktop(isDesktop)
    window.addEventListener("resize", checkDimensions);
    checkDimensions()
    setIntialNavItem()
    return () => {
      // window.removeEventListener("scroll", addBackGroundOnNav);
    }
  }, [router.asPath])



  return (
    <div id="nav-wrap ">
      <header id="home" className="" ref={headerRef} >
        <div onClick={toggleMenu}>
        { !visable ? <AiOutlineAlignRight  className="mobile-button" /> : <FaTimes className="mobile-button"/>}
         </div>
        {console.log("isDesktop",  isDesktop, desktop, visable,)}

        <nav className={!isDesktop || !desktop  ? `${visable ? 'mobile' : 'hidden ' }` : 'desktop'  }>
        <ul className={""}>
          {menuItems.map((item, index) => {
           

      
      
            return (
            
                <li key={index} ref={item.ref} className={item.cName}  >
                  <Link href={item.path} >{item.title}</Link>
                </li>
           
            )
          }
          )}
             </ul>
         </nav>

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