
import { FaChevronCircleDown } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react'
import classnames from 'classnames';
import {CSSTransition} from 'react-transition-group';




const Header = () => {




  const ref = useRef()


  const [visable, setVisable] = useState(false);
  const [show, setShow] = useState(false);
  const [fadeIn, fadeOut] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [hidden, setHidden] = useState(false);



  const toggleMenu = (event) => {
    event.preventDefault();
    setVisable(!visable);

  }
  // console.log("window", window.innerWidth)

  const addBackGroundOnNav = () => {
    const scroll = window.scrollY;
    if (scroll > ref.current.offsetHeight / 4) {
      setHidden(true);
    }
    if (scroll > ref.current.offsetHeight) {
      setHidden(false);
      setShow(true);
    }
    if (scroll === 0) {
      setHidden(false);
      setShow(false);
    }

  }

  // const setElHeight = () => {
  //   const h = ref.current.offsetHeight;
  //   setHeaderElHeight(h);
  // }


  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
  ------------------------------------------------------*/

  useEffect(() => {
    // setElHeight();
    // window.addEventListener('resize', setElHeight);
    window.addEventListener('scroll', addBackGroundOnNav)

    return () => {
      // window.removeEventListener('resize', setElHeight);
      window.removeEventListener('scroll', addBackGroundOnNav
      )
    }


  }, [hidden])



  // const controlNavBar = () => {
  //   if (window.scrollY > 100) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // }

  // useEffect(() => { 
  //   window.addEventListener('scroll', controlNavBar);

  //   return () => {
  //     window.removeEventListener('scroll', controlNavBar);
  //   }

  // }, [])

  // $(window).on('scroll', function() {

  //   var h = $('header').height();
  //   var y = $(window).scrollTop();
  //     var nav = $('#nav-wrap');

  //    if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
  //       nav.fadeOut('fast');
  //    }
  //     else {
  //        if (y < h*.20) {
  //           nav.removeClass('opaque').fadeIn('fast');
  //        }
  //        else {
  //           nav.addClass('opaque').fadeIn('fast');
  //        }
  //     }

  // });

  // console.log("show", show)


  return (


    <nav id="nav-wrap ">

      {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

      <header id="home" className="" ref={ref} >

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


       <CSSTransition in={!hidden} className="fade" timeout={300} unmountOnExit >
           <div className={`md:flex md:justify-center md:pt-2 sticky z-50   `}>
          
              <ul id="nav" className={` ${show && 'transition ease-in-out delay-[2000] opaque ' } `}>
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
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
}


export default Header;