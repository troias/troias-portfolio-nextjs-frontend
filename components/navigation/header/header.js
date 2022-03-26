
// import { FaChevronCircleDown } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';

const Header = React.forwardRef((props, ref) => {
  let headerRefData
  // const test = useRef(props.sectionRefData)
  // console.log("test", test)


  // console.log(
  // "aboutRefPageNavRef", aboutref)

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




  console.log("headerRefFromRef", ref);
  console.log("headerRefData", props.sectionRefData)

  //  console.log("headerProps", headerRefData)

  const [visable, setVisable] = useState(false);
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [current, setCurrent] = useState(false);

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
  useEffect(() => {
    headerRefData = props.sectionRefData
    console.log("headerRefInnerData", props.sectionRefData)
  }, [])
  const addCurrNavItem = () => {

    const scroll = window.scrollY;
    const sections = [...ref.current]

    let [about, resume, portfolio, contact] = sections

    const aboutSectionHeight = about[0].current.offsetTop
    const aboutSectionHeightBottom = about[0].current.offsetHeight + aboutSectionHeight

    const resumeSectionHeight = resume[0].current.offsetTop
    const resumeSectionHeightBottom = resume[0].current.offsetHeight + resumeSectionHeight

    const contactSectionHeight = contact[0].current.offsetTop
    const contactSectionHeightBottom = contact[0].current.offsetHeight + contactSectionHeight

    const portfolioSectionHeight = portfolio[0].current.offsetTop
    const portfolioSectionHeightBottom = portfolio[0].current.offsetHeight + portfolioSectionHeight

    console.log("navref", navhomeLinkRef)

    if (scroll < aboutSectionHeight) {
      if (homeLinkRef.current) {
        const curr = homeLinkRef.current && homeLinkRef.current 
        const navcurr = navhomeLinkRef.current && navhomeLinkRef.current

        console.log("navCurr", curr)
      
        curr && curr.classList.add("current")
        navcurr && navcurr.classList.add("current")
        const navprev = navaboutref.current && navaboutref.current 
        navprev && navprev.classList.remove("current")
      
      } 
    }
    if (scroll > aboutSectionHeight) {
      const prev = homeLinkRef.current && homeLinkRef.current 
      const navprev = navhomeLinkRef.current && navhomeLinkRef.current 
      prev && prev.classList.remove("current")
      navprev && navprev.classList.remove("current")
      const curr = aboutref.current  && aboutref.current 
      const navcurr = navaboutref.current && navaboutref.current
      curr && curr.classList.add("current")
      navcurr && navcurr.classList.add('current')

      console.log("navprev", navprev)
      console.log("navcurr", navcurr)

    }

    if (scroll > aboutSectionHeightBottom) {

      const curr = aboutref.current && aboutref.current 
     const  navcurr = navaboutref.current && navaboutref.current 
     curr && curr.classList.remove('current')
     navcurr && navcurr.classList.remove('current')
    }

    if (scroll < aboutSectionHeightBottom) {
      if (resumeref.current) {
       const curr = resumeref.current ? resumeref.current : navresumeref.current
       const navcurr = navresumeref.current ? navresumeref.current : resumeref.current
        curr.classList.remove('current')
        navcurr.classList.remove('current')
      }
    }


    if (scroll > resumeSectionHeight) {
      const prev = aboutref.current ? aboutref.current : navaboutref.current
      const navprev = navaboutref.current ? navaboutref.current : navaboutref.current
      prev && prev.classList.remove('current')
      navprev && navprev.classList.remove('current')
      const curr = resumeref.current ? resumeref.current : navresumeref.current
      const navcurr = navresumeref.current ? navresumeref.current : resumeref.current
      // if (!navcurr) {
      //   navcurr.classList.add('current')
      //   curr.classList.add('current')
      // }
      
      curr && curr.classList.add('current')
      nav && navcurr.classList.add('current')

      if (scroll < aboutSectionHeightBottom) {
        prev && prev.classList.remove('current')
        navprev && navprev.classList.remove('current')
      }

    }

    if (scroll > resumeSectionHeightBottom) {
      const curr = resumeref.current ? resumeref.current : navresumeref.current
      const navcurr = navresumeref.current ? navresumeref.current : resumeref.current
      curr && curr.classList.remove('current')
      navcurr && navcurr.classList.remove('current')
    }

    if (scroll < resumeSectionHeightBottom) {
      if (worksRef.current) {
        const curr = worksRef.current ? worksRef.current : navworksRef.current
        const navcurr = navworksRef.current ? navworksRef.current : worksRef.current
        curr && curr.classList.remove('current')
        navcurr && navcurr.classList.remove('current')
      }
    }

    if (scroll > portfolioSectionHeight) {
      const prev = resumeref.current ? resumeref.current : navresumeref.current
      const navprev = navresumeref.current ? navresumeref.current : resumeref.current
      prev && prev.classList.remove('current')
      navprev && navprev.classList.remove('current')
      const curr = worksRef.current ? worksRef.current : navworksRef.current
      const navcurr = navworksRef.current ? navworksRef.current : worksRef.current
      curr && curr.classList.add('current')
      navcurr && navcurr.classList.add('current')
      if (scroll < resumeSectionHeightBottom) {
        prev && prev.classList.remove('current')
        navprev && navprev.classList.remove('current')
      }
    }

    if (scroll > portfolioSectionHeightBottom) {
      const curr = worksRef.current ? worksRef.current : navworksRef.current
      const navcurr = navworksRef.current ? navworksRef.current : worksRef.current
     curr && curr.classList.remove('current')
      navcurr && navcurr.classList.remove('current')

    }

    if (scroll > contactSectionHeight) {
      const prev = worksRef.current  ? worksRef.current : navworksRef.current
      const navprev = navworksRef.current ? navworksRef.current : worksRef.current
      prev && prev.classList.remove('current')
      navprev && navprev.classList.remove('current')

    }

    if (scroll > contactSectionHeight) {
      const curr = contactref.current ? contactref.current : navcontactref.current
      const navcurr = navcontactref.current ? navcontactref.current : contactref.current
      curr && curr.classList.add('current')
      navcurr && navcurr.classList.add('current')
    }
    if (scroll < contactSectionHeight) {
      if (contactref.current) {
        const curr = contactref.current ? contactref.current : navcontactref.current
        const navcurr = navcontactref.current ? navcontactref.current : contactref.current
        curr && curr.classList.remove('current')
        navcurr&& navcurr.classList.remove('current')
      }

    }




    console.log("scroll", scroll);
    console.log("aboutSectionHeightBottom", aboutSectionHeightBottom);
















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
        <div className="" >
        <div className="">

          {visable ?
            <div  className="z-100  flex justify-center  bg-opacity-50   ">
              <ul id="mobile-nav" className="w-11/12 bg-opacity-20 h-full pb-5 " >
              <li ref={navhomeLinkRef}  className="current" ><a className="smoothscroll" href="#home">Home</a></li>
              <li  ref={navaboutref}><a className="smoothscroll" href="#about">About</a></li>
              <li  ref={navresumeref}><a className="smoothscroll" href="#resume">Resume</a></li>
              <li  ref={navworksRef} ><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li ref={navcontactref}><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul>
            </div> : null}
        </div>
        </div>
        </div>



        {/* desktop-nav */}

         <CSSTransition in={!hidden} className="hidden md:flex" timeout={15} unmountOnExit>
          <div className={`md:flex md:justify-center md:pt-2 sticky `}>
            <ul id="nav" className={`${show && 'opaque  z-50 '}`}>
              <li ref={homeLinkRef} className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li ref={aboutref}><a className="smoothscroll" href="#about" >About</a></li>
              <li ref={resumeref} ><a className="smoothscroll" href="#resume">Resume</a></li>
              <li ref={worksRef} ><a className="smoothscroll" href="#portfolio">Works</a></li>
         
              <li ref={contactref}><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>

          </div>
        </CSSTransition> 

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