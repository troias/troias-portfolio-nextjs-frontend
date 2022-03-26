import Link from 'next/link'
import {useEffect, useRef} from 'react'


    const Portfolio = (props) => {

      const porfolioRef = useRef()

      const sendReftoHeader = () => {
          props.headerRef([porfolioRef])
      }

      useEffect(() => {
        sendReftoHeader()
    }, [])
      
      const {projects} = props.portfolioData

      const projectsList = projects.map((project, index) => {
       
        const {name, body, link,slug  } = project.project.data.attributes
       
        
        const links = link.map((link, index) => {
          return (
            <>
           <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out"><a href={link.url}> #{link.text}</a> </span>
 
            </>
          )
        }
        )
        return (
       
          <div class="card mt-5 ml-10 ">
          <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-100">
              <img class="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
              <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{name}</div>
                  <p class="text-gray-700 text-base">
                       {body} 
                  </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                  {links}
              </div>
              <div class="px-6 pb-4">
                <btn class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link href={`/projects/${slug}`}>
                    <a class="text-white">View Project</a>
                  </Link>
                </btn>
                </div>
          </div>
      </div>
   
        )
      })


    return (
      <section id="portfolio" className="flex justify-center"  ref={porfolioRef}>
      <div className="flex max-w-screen-lg w-full">
         <div className="">
            <h1 className="flex justify-center  text-white">Projects.</h1>
            <div id="portfolio-wrapper" className="">
                 {projectsList} 
            </div>
          </div>
      </div>
   </section>
    );
  }


export default Portfolio;