
// import { FaChevronCircleDown } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'

const Header = React.forwardRef((props, ref) => {
  let headerRefData






  const router = useRouter()
  console.log("router", router);


  const headerRef = useRef()


  const homeLinkRef = useRef()
  const navhomeLinkRef = useRef()
  const aboutref = useRef()
  const navaboutref = useRef()
  const contactref = useRef()
  const navcontactref = useRef()
  const resumeref = useRef()
  const navresumeref = useRef()
  const worksRef = useRef()
  const navworksRef = useRef()

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




  console.log("headerRefFromRef", ref);
  console.log("headerRefData", props.sectionRefData)

  //  console.log("headerProps", headerRefData)

  const [visable, setVisable] = useState(false);
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [current, setCurrent] = useState(false);

  const isDesktop = () => {
    return useMediaQuery({
      query: '(min-device-width:768px)'
    })

  }

  console.log("isDesktop", isDesktop())

  // console.log("HeaderRef", ref )
  // console.log("current", current)
  // console.log("show", show)

  const toggleMenu = (event) => {
    event.preventDefault();
    setVisable(!visable);

  }

  const addBackGroundOnNav = () => {
    const scroll = window.scrollY;
    if (scroll > headerRef.current.offsetHeight / 4) {
      setHidden(true);
    }
    if (scroll > headerRef.current.offsetHeight) {
      setHidden(false);
      setShow(true);
    }
    if (scroll === 0) {
      setShow(false);
      setHidden(false);

    }
  }



  // const sections = [...ref.current]
  // let [about, resume, portfolio, contact] = sections
  // const aboutSectionHeight = about[0].current.offsetTop
  // const aboutSectionHeightBottom = about[0].current.offsetHeight + aboutSectionHeight

  // const resumeSectionHeight = resume[0].current.offsetTop
  // const resumeSectionHeightBottom = resume[0].current.offsetHeight + resumeSectionHeight

  // const contactSectionHeight = contact[0].current.offsetTop


  // const portfolioSectionHeight = portfolio[0].current.offsetTop
  // const portfolioSectionHeightBottom = portfolio[0].current.offsetHeight + portfolioSectionHeight

  const addCurrNavItem = () => {

    const scroll = window.scrollY;

    console.log("navref", router)

    // if (scroll < aboutSectionHeight) {
    //   if (homeLinkRef.current) {
    //     const curr = homeLinkRef.current && homeLinkRef.current 
    //     const navcurr = navhomeLinkRef.current && navhomeLinkRef.current

    //     console.log("navCurr", curr)

    //     curr && curr.classList.add("current")
    //     navcurr && navcurr.classList.add("current")
    //     const navprev = navaboutref.current && navaboutref.current 
    //     navprev && navprev.classList.remove("current")

    //   } 
    // }
    // if (scroll > aboutSectionHeight) {
    //   const prev = homeLinkRef.current && homeLinkRef.current 
    //   const navprev = navhomeLinkRef.current && navhomeLinkRef.current 
    //   prev && prev.classList.remove("current")
    //   navprev && navprev.classList.remove("current")
    //   const curr = aboutref.current  && aboutref.current 
    //   const navcurr = navaboutref.current && navaboutref.current
    //   curr && curr.classList.add("current")
    //   navcurr && navcurr.classList.add('current')

    //   console.log("navprev", navprev)
    //   console.log("navcurr", navcurr)

    // }

    // if (scroll > aboutSectionHeightBottom) {

    //   const curr = aboutref.current && aboutref.current 
    //  const  navcurr = navaboutref.current && navaboutref.current 
    //  curr && curr.classList.remove('current')
    //  navcurr && navcurr.classList.remove('current')
    // }

    // if (scroll < aboutSectionHeightBottom) {
    //   if (resumeref.current) {
    //    const curr = resumeref.current ? resumeref.current : navresumeref.current
    //    const navcurr = navresumeref.current ? navresumeref.current : resumeref.current
    //     curr.classList.remove('current')
    //     navcurr.classList.remove('current')
    //   }
    // }


    // if (scroll > resumeSectionHeight) {
    //   const prev = aboutref.current ? aboutref.current : navaboutref.current
    //   const navprev = navaboutref.current ? navaboutref.current : navaboutref.current
    //   prev && prev.classList.remove('current')
    //   navprev && navprev.classList.remove('current')
    //   const curr = resumeref.current ? resumeref.current : navresumeref.current
    //   const navcurr = navresumeref.current ? navresumeref.current : resumeref.current


    //   curr && curr.classList.add('current')
    //   nav && navcurr.classList.add('current')

    //   if (scroll < aboutSectionHeightBottom) {
    //     prev && prev.classList.remove('current')
    //     navprev && navprev.classList.remove('current')
    //   }

    // }

    // if (scroll > resumeSectionHeightBottom) {
    //   const curr = resumeref.current ? resumeref.current : navresumeref.current
    //   const navcurr = navresumeref.current ? navresumeref.current : resumeref.current
    //   curr && curr.classList.remove('current')
    //   navcurr && navcurr.classList.remove('current')
    // }

    // if (scroll < resumeSectionHeightBottom) {
    //   if (worksRef.current) {
    //     const curr = worksRef.current ? worksRef.current : navworksRef.current
    //     const navcurr = navworksRef.current ? navworksRef.current : worksRef.current
    //     curr && curr.classList.remove('current')
    //     navcurr && navcurr.classList.remove('current')
    //   }
    // }

    // if (scroll > portfolioSectionHeight) {
    //   const prev = resumeref.current ? resumeref.current : navresumeref.current
    //   const navprev = navresumeref.current ? navresumeref.current : resumeref.current
    //   prev && prev.classList.remove('current')
    //   navprev && navprev.classList.remove('current')
    //   const curr = worksRef.current ? worksRef.current : navworksRef.current
    //   const navcurr = navworksRef.current ? navworksRef.current : worksRef.current
    //   curr && curr.classList.add('current')
    //   navcurr && navcurr.classList.add('current')
    //   if (scroll < resumeSectionHeightBottom) {
    //     prev && prev.classList.remove('current')
    //     navprev && navprev.classList.remove('current')
    //   }
    // }

    // if (scroll > portfolioSectionHeightBottom) {
    //   const curr = worksRef.current ? worksRef.current : navworksRef.current
    //   const navcurr = navworksRef.current ? navworksRef.current : worksRef.current
    //  curr && curr.classList.remove('current')
    //   navcurr && navcurr.classList.remove('current')

    // }

    // if (scroll > contactSectionHeight) {
    //   const prev = worksRef.current  ? worksRef.current : navworksRef.current
    //   const navprev = navworksRef.current ? navworksRef.current : worksRef.current
    //   prev && prev.classList.remove('current')
    //   navprev && navprev.classList.remove('current')

    // }

    // if (scroll > contactSectionHeight) {
    //   const curr = contactref.current ? contactref.current : navcontactref.current
    //   const navcurr = navcontactref.current ? navcontactref.current : contactref.current
    //   curr && curr.classList.add('current')
    //   navcurr && navcurr.classList.add('current')
    // }
    // if (scroll < contactSectionHeight) {
    //   if (contactref.current) {
    //     const curr = contactref.current ? contactref.current : navcontactref.current
    //     const navcurr = navcontactref.current ? navcontactref.current : contactref.current
    //     curr && curr.classList.remove('current')
    //     navcurr&& navcurr.classList.remove('current')
    //   }

    // }




















  }

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
  ------------------------------------------------------*/

  useEffect(() => {
    window.addEventListener('scroll', addBackGroundOnNav)
    window.addEventListener('scroll', addCurrNavItem)

    return () => {
      window.removeEventListener('scroll', addBackGroundOnNav
      )
      window.removeEventListener('scroll', addCurrNavItem)
    }
  }, [])

  return (
    <nav id="nav-wrap ">
      <header id="home" className="" ref={headerRef} >
        {/* <!-- Mobile menu button --> */}
        <div className="fixed w-full z-50 pb-10 " >


          <div class="md:hidden flex items-center pl-5 pt-4  bg-opacity-50  " onClick={toggleMenu} >



            <button class="outline-none mobile-menu-button bg-[#F06000] mb-3 ">
              <svg
                class="w-10 h-10 text-white "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          {/* <div className="" >
            <div className=" flex justify-center"> */}

  

              {console.log("visable", visable)}
              {/* desktop over md */}
              {visable && 
              <div className="flex justify-center md:hidden ">
                <div className={`flex-col  w-11/12     pt-2 sticky  md:bg-transparent  `}>
                  {menuItems.map((item, index) => {
                    console.log("ItemPath", item.path)
                    return (
                      <ul id="mobile-nav" className={`  pb-5`}>
                        <li key={index} ref={item.ref} className={` ${router.asPath === item.path ? "current" : "scrollsmooth"}`}>
                          <Link href={item.path}>{item.title}</Link>
                        </li>
                      </ul>

                    )
                  }
                  )}
                </div>
              </div>
              }
              {console.log("isDesktop1", isDesktop())}
              {/* desktop over md */}
               {
                isDesktop() && 
                <div className={`flex justify-center ${show && 'opaque  z-50 '}  `}>
          {      menuItems.map((item, index) => {
                  return (
                    <ul id="nav" className={` `}>
                      <li key={index} ref={item.ref} className={` ${router.asPath === item.path ? "current" : "scrollsmooth"}`}>
                        <Link href={item.path}>{item.title}</Link>
                      </li>
                    </ul>
                   
                  )
                }) }
                </div>

              } 

              {/* <CSSTransition in={!hidden} className=" flex justify-center  bg-opacity-50 md:flex" timeout={15} unmountOnExit>
              </CSSTransition> */}
            </div>
          {/* </div>
        </div> */}



        {/* desktop-nav */}



        <div className=" banner flex  items-center  z-0 ">
          <div className="banner-text pb-20 z-0">
            {/* <img alt="troias-portfolio-header-background" src={headerBackground} /> */}
            <h1 className="responsive-headline z-0">I'm Troy Flavell </h1>
            <h3>A  Hamilton based  <span> React freelancer @WebDevIncNz</span>.</h3>
            <hr />
            <ul className="social ">
              {/* {networks} */}
              {/* <span className="text-white">{headerElHeight} </span>
              <br />
              <span className="text-white"> {scrollPos}</span> */}
            </ul>
          </div>
        </div>

        {/* <p className="scrolldown">
          <a className="smoothscroll" href="#about"><FaChevronCircleDown /></a>
        </p> */}
      </header>
    </nav>

  );
})




export default Header;