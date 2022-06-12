import React from 'react'
import NextImage from '../image'
import Link from 'next/link'





 const SkillsList = ({skills}) => {

  // console.log("skillsListList", skills)
   

    // console.log("skillsList props", props.skills);

    const skillsList = skills.map((skill, index) => (    <div class="card mt-5 ml-10 pr-8">
    <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-100 p-4" key={index}>
           <NextImage media={skill.attributes.icon} />   
          {/* {console.log("skills", skill)} */}
   
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{skill.attributes.name}</div>
            <div className="">
            <p class="text-gray-700 text-base ">
                {skill.attributes.description}
            </p>
            </div>
        </div>
        
        {skill.attributes.project_categories.data.map((project_category, index) => (
               <>
               <div class="px-6 pt-4 pb-2"> 
        
                <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">#{project_category.attributes.name}</span> 
            </div> 
       
               </>
        ))}
            
            <div class="px-6 pb-4">
               <btn class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
