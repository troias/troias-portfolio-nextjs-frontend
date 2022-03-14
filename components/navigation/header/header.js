
import { FaChevronCircleDown } from 'react-icons/fa';
import { useState } from 'react'




const Header = () => {

  const [visable, setVisable] = useState(false);
  const [fadeIn, fadeOut] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault();
    setVisable(!visable);

  }

  // fade in and out of primary Nav
  

  return (


    <nav id="nav-wrap ">

      {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

      <header id="home" className="">

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
        <div className="md:flex md:justify-center md:pt-2 sticky ">
          <ul id="nav" className=" md:fixed flex ">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>

        </div>


        <div className=" banner flex  items-center  ">
          <div className="banner-text pb-20">
            {/* <img alt="troias-portfolio-header-background" src={headerBackground} /> */}
            <h1 className="responsive-headline">I'm Troy Flavell </h1>
            <h3>A  Hamilton based  <span> React freelancer @WebDevIncNz</span>.</h3>
            <hr />
            <ul className="social">
              {/* {networks} */}
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