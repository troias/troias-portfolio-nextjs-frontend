import React from 'react'
import Link from 'next/link'

const projectsList = (props) => {

  
  const projects = props.projects 
  console.log("projectsListPropsprops", projects);

  return (
    <div className="w-full justify-center flex-wrap flex "> 
        { projects.map((project, index) => {
       
       const {name, body, link, slug  } = project.attributes
      
        // console.log("projectsList", project);
   
   
       const links = link.map((link, index) =>  ( <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold
           text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">
            <a href={link.url}> #{link.text}</a>
             </span>)
       )

       return (
      <div className="max-w-max ">
         <div class="card mt-5 ml-10 pr-8">
         <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-100">
             <img class="w-full" 
             src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
             <div class="px-6 py-4">
                 <div class="font-bold text-xl mb-2">{name}</div>
                 <p class="text-gray-700 text-base">
                      {body} 
                 </p>
             </div>
             <div class="px-6 pt-4 pb-2">
                  {/* {links}  */}
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
     </div>
       )
     })}
        
    </div>
  )
}

export default projectsList
