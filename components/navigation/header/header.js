
// import { FaChevronCircleDown } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react'
import {CSSTransition} from 'react-transition-group';

const Header = React.forwardRef((props, ref) => {
  let headerRefData
  // const test = useRef(props.sectionRefData)
  // console.log("test", test)


  // console.log(
  // "aboutRefPageNavRef", aboutref)

  const headerRef = useRef()
  const aboutref = useRef()
  const homeLinkRef = useRef()
  const contactref = useRef()
  const resumeref = useRef()
  const worksRef = useRef()
  const testimonialsref = useRef()



  console.log("headerRefFromRef", ref);
  console.log("headerRefData", props.sectionRefData )

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

    let [about, resume, portfolio, contact ] = sections
   
    const aboutSectionHeight = about[0].current.offsetTop
    const aboutSectionHeightBottom = about[0].current.offsetHeight + aboutSectionHeight

    const resumeSectionHeight = resume[0].current.offsetTop
    const resumeSectionHeightBottom = resume[0].current.offsetHeight + resumeSectionHeight

    const contactSectionHeight = contact[0].current.offsetTop
    const contactSectionHeightBottom = contact[0].current.offsetHeight + contactSectionHeight

    const portfolioSectionHeight = portfolio[0].current.offsetTop
    const portfolioSectionHeightBottom = portfolio[0].current.offsetHeight + portfolioSectionHeight


    if (scroll < aboutSectionHeight ) {
      if (homeLinkRef.current) {
         const curr = homeLinkRef.current
      curr.classList.add("current")
      }
     
    }
    if(scroll > aboutSectionHeight ) {
      const prev = homeLinkRef.current
      prev.classList.remove("current")
       const curr = aboutref.current
       curr.classList.add('current')
     
    } 

    if(scroll > aboutSectionHeightBottom ) {
      curr = aboutref.current 
      curr.classList.remove('current')
    } 

    if (scroll < aboutSectionHeightBottom ) {
      if ( resumeref.current) {
        curr = resumeref.current
        curr.classList.remove('current')
      }
    }


     if (scroll > resumeSectionHeight) {
      const prev = aboutref.current 
      prev.classList.remove('current')
       const curr = resumeref.current
      curr.classList.add('current')

      if (scroll < aboutSectionHeightBottom) {
        prev.classList.remove('current')
      }

     }

      if (scroll > resumeSectionHeightBottom) {
        curr = resumeref.current
        curr.classList.remove('current')
      }

      if (scroll < resumeSectionHeightBottom) {
        if (worksRef.current) {
          curr = worksRef.current
          curr.classList.remove('current')
        }
      }

      if (scroll > portfolioSectionHeight) {
        const prev = resumeref.current
        prev.classList.remove('current')
        const curr = worksRef.current
        curr.classList.add('current')
        if (scroll < resumeSectionHeightBottom) {
          prev.classList.remove('current')
        }
      }

      if (scroll > portfolioSectionHeightBottom) {
        curr = worksRef.current
        curr.classList.remove('current')
      }
      
      if (scroll > contactSectionHeight) {
        const prev = worksRef.current
        prev.classList.remove('current')
  
      }

      if (scroll > contactSectionHeight) {
        curr = contactref.current
        curr.classList.add('current')
      }
      if (scroll < contactSectionHeight) {
        if (contactref.current) {
          curr = contactref.current
          curr.classList.remove('current')
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
        <div class="md:hidden flex items-center pl-7 pt-4 fixed " onClick={toggleMenu} >
          <button class="outline-none mobile-menu-button">
            <svg
              class="w-10 h-10 text-[#F06000]"
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

        {visable ? <ul id="mobile-nav" className="sm:hidden bg-gray-800 max-w-screen-sm bg-opacity-50">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
          <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          <li><a className="smoothscroll" href="#contact">Contact</a></li>
        </ul> : null}

        {/* desktop-nav */}

       <CSSTransition in={!hidden} className="" timeout={15} unmountOnExit>
           <div className={`md:flex md:justify-center md:pt-2 sticky ` }>
               <ul id="nav" className={`${show && 'opaque  z-50 '}`}> 
                <li ref={homeLinkRef} className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li  ref={aboutref}><a className="smoothscroll" href="#about" >About</a></li>
                <li ref={resumeref} ><a className="smoothscroll" href="#resume">Resume</a></li>
                <li ref={worksRef} ><a className="smoothscroll" href="#portfolio">Works</a></li>
                {/* <li  ref={testimonialsref}><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                <li  ref={contactref}><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul>

           </div>
         </CSSTransition>
       
        <div className=" banner flex  items-center  ">
          <div className="banner-text pb-20">
            {/* <img alt="troias-portfolio-header-background" src={headerBackground} /> */}
            <h1 className="responsive-headline">I'm Troy Flavell </h1>
            <h3>A  Hamilton based  <span> React freelancer @WebDevIncNz</span>.</h3>
            <hr />
            <ul className="social">
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