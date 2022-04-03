import Link from 'next/link'
import {useEffect, useRef} from 'react'
import ProjectsList from '../elements/projectsList/projectsList'


    const Portfolio = (props) => {

      console.log("baseProps", props);
      const porfolioRef = useRef()

      const sendReftoHeader = () => {
          props.headerRef(porfolioRef)
      }

      useEffect(() => {
        sendReftoHeader()
    }, [])
      
        const projects = props.portfolioData

      console.log("PortfolioComponentArr", projects);




    return (
      <section id="portfolio"   className=" " ref={porfolioRef}>
          <div className="">
            <h1 className="flex justify-center  text-white">Featured Projects</h1>
            </div>
        <div className="flex justify-center">  
        <div className="flex max-w-screen-lg w-full flex-wrap ">

      
    
       
            <div id="portfolio-wrapper " className=" flex flex-col w-full items-center md:flex-row md:items-baseline md:justify-center">
                       <ProjectsList projects={projects} /> 
            </div> 
            <div className="flex justify-center w-full pt-8">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link href="/projects">
                  <a className="text-white">View All Projects</a>
                </Link>
              </button>
              </div>
      </div>
      </div>
   
   </section>
    );
  }


export default Portfolio;