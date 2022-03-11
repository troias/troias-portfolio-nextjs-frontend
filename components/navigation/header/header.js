
import { FaChevronCircleDown } from 'react-icons/fa';




const Header = () => {

  return (


    <nav id="nav-wrap ">

      {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

      <header id="home">

        <ul id="nav" className="hidden nav md:flex md:justify-center md:pt-2 ">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
          <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          <li><a className="smoothscroll" href="#contact">Contact</a></li>
        </ul>
        <div className=" banner flex items-center ">
          <div className="banner-text ">
            {/* <img alt="troias-portfolio-header-background" src={headerBackground} /> */}
            <h1 className="responsive-headline">I'm Troy Flavell </h1>
            <h3>A  Hamilton based  <span> React freelancer @WebDevIncNz</span>.</h3>
            <hr />
            <ul className="social">
              {/* {networks} */}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><FaChevronCircleDown /></a>
        </p>
      </header>



    </nav>


  );
}


export default Header;