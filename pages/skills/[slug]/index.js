import React from 'react'
import Link from 'next/link'
import PortfolioNav from '../../../components/page-components/portfolioNav'
import {getAllSkills} from '../../../utils/api'
import Image from "../../../components/elements/image"

const SkillItem = ({skills}) => {

  console.log("skills", skills)
  // const name = skills.attributes.name
  return (

    <>
      {
        skills.map((skillCat, index) => (
          <div className="min-h-screen bg-white ">

          <PortfolioNav />
          <div className="w-full flex justify-center ">
            <h1 className="pt-8 pb-8 text-grey-800 text-5xl font-bold   ">{skillCat.attributes.name}</h1>
          </div>
          <div className="flex justify-center min-h-screen">
    
    
            <div className="max-w-screen-lg  w-full">
              <div className="pr-2 pl-2 flex justify-around">
               
                <div className="w-64 h-64">
                <Image media={skillCat.attributes.icon}/>
                </div>
                <div className="w-2/5 flex items-center">
                  <p>
                  {skillCat.attributes.description}
    
                  </p>
                </div>
              </div>
    
              <div className="flex justify-center pt-8">
              
                
                    <a className=" text-black font-bold py-2 px-4">View All {skillCat.attributes.name} Skills</a>
                
              
              </div>
    
    
    
    
              <div className="pb-8 pt-8">
        
    
                <div className="flex justify-around flex-wrap pr-2 pl-2  ">
    
                
    
          {
            skillCat.attributes.skills.data.map((skill, index) => (
              <table className="shadow-lg bg-white w-full  ">
              <tr>
                <Link href={`/skills/${skillCat.attributes.slug}/${skill.attributes.slug}`}>
           
                 <td className="border px-8 py-4">{skill.attributes.name}</td> 
                 </Link>
               
              </tr>
            </table>
            )
            )
          }
               
    
    
                </div>
              </div>
    
    
            </div>
          </div>
        </div>
        
        )
        )

      }

  </>
  )
}

export default SkillItem

export const getStaticPaths = async () => {

  const data = await getAllSkills()

  console.log("getStaticPathsData", data );

   const skills = data.data.skillCategories.data

  console.log("skills",  skills);


 const paths = skills.map(skills => {
     console.log("pathsInner",  skills)
     const { slug } = skills.attributes
     console.log("slug", slug)
     return { params: { slug: slug } }
 })

  console.log("paths", paths)

 return {
     paths,
     fallback: false
 }




}

export const getStaticProps = async (ctx) => {



 

  const { slug } = ctx.params
  console.log("SkillContext", slug)

  const data = await getAllSkills()

    const getAllSkillsCat = data.data.skillCategories.data.filter(skill => skill.attributes.slug === slug)

  //   console.log("getAllSkillsCat", getAllSkillsCat);



  // console.log("getStaticPropsData", data.data.skillCategories.data );

  return {
    props: {
       skills: getAllSkillsCat
    }
  }
}
