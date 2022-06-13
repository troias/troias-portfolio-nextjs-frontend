import Link from 'next/link'
import { useEffect, useRef, useCallback } from 'react'
import ProjectsList from '../elements/projectsList/projectsList'


const Portfolio = (props) => {

  // console.log("baseProps", props);
  const porfolioRef = useRef()

  const sendReftoHeader = useCallback(() => {
    props.headerRef(porfolioRef)
  } , [])

  useEffect(() => {
    sendReftoHeader()
  }, [sendReftoHeader])

  const projects = props.portfolioData.data.projects.data

  //  console.log("PortfolioComponentArr", projects);




  return (
    <section id="portfolio" className=" w-full" ref={porfolioRef}>
      <div className="flex justify-center border-t pt-8  ">
        <h1 className="   lg:justify-start font-[opensans-bold] text-2xl leading-tight  mb-6 mt-2 ml-6 uppercase "><span className="border-b-4
    border-b-[#11ABB0] 
    pb-2">Featured Projects</span></h1>
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