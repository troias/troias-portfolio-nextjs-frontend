import React from 'react'
import Link from 'next/link'
import SkillsList from "../elements/skillsList/skillsList"

const FeaturedSkills = (props) => {

    // title/skillmessage
    console.log("featureSkills", props);

    const skills = props.featuredSkills.data
    const featuredSkills = skills.filter(skill => skill.attributes.featured === true)
  return (
    
    <div className="max-w-screen-lg w-full ">


    <div className=" skill  bg-gray-300">
        <div className="flex justify-center border-t pt-8">
            <h1 className="   lg:justify-start  "><span>Featured Skills</span></h1>
        </div>


        {/* <p>{skillmessage} </p> */}
        <div className="max-w-screen-lg   ">
            <div className="flex flex-wrap justify-center">
                  <SkillsList skills={featuredSkills} /> 
            </div>

            <div className="flex justify-center w-full pt-8">
                <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded">
                    <Link href="/skills" className="text-white">
                        View All Skills
                    </Link>
                </button>
            </div>

        </div>

    </div>


</div>
  )
}

export default FeaturedSkills
