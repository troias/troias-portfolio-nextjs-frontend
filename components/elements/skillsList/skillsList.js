import React from 'react'
import NextImage from '../image'
import Link from 'next/link'





 const SkillsList = ({skills}) => {

  // console.log("skillsListList", skills)
   

    // console.log("skillsList props", props.skills);

    const skillsList = skills.map((skill, index) => (    <div key={skill.id} className="card mt-5 ml-10 pr-8">
    <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-100 p-4" >
           <NextImage media={skill.attributes.icon} />   

   
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{skill.attributes.name}</div>
            <div className="">
            <p className="text-gray-700 text-base ">
                {skill.attributes.description}
            </p>
            </div>
        </div>
        
        {skill.attributes.project_categories.data.map((project_category, index) => (
               <>
               <div className="px-6 pt-4 pb-2" key={project_category.id}> 
        
                <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">#{project_category.attributes.name}</span> 
            </div> 
       
               </>
        ))}
            
            <div className="px-6 pb-4">
               <btn className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 <Link href={`/skills/${skill.attributes.slug}`} >
                    View Skill
                 </Link>
               
               </btn>
               </div>
    </div>
</div> ))
        
  return (
    <>
       {skillsList} 
    </>
  )
}

export default SkillsList
