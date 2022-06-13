import React from 'react'
import SkillsList from '../../components/elements/skillsList/skillsList'
import PortfolioNav from "../../components/page-components/portfolioNav"
import {getAllSkills} from '../../utils/api'

const Skills = ({skills}) => {
    console.log("skills page props", skills)
  return (
    <div className="min-h-screen bg-white">
    
      <PortfolioNav />
  
      <div className="flex-col justify-center">

        <div className="flex flex-col items-center pt-8 pb-8 ">


          <h1 className="text-black text-5xl font-bold  pr-8 pt-8">
             <span className="text-blue-500">Skills</span>
          </h1>
       

        </div>

        <div className="flex flex-wrap justify-center pb-12">
           <SkillsList skills={skills} /> 
        </div>
      </div>


    </div>
  )
}

export default Skills

export const getStaticProps = async () => {

  const getAllSkillsData = await getAllSkills()
  const skills = getAllSkillsData.data.skillCategories.data

  // console.log("getAllSkillsData", skills)

  return {
    props: {
       skills
    },
    revalidate: 1
  }
}

