import React, { useEffect, useRef, useCallback } from "react"


import Education from "../sections/education"
import Work from "../sections/work"
import FeaturedSkills from "../sections/featuredSkills"

const Resume = (props) => {
    // console.log("resumeProps", props);

     const education = props.resumeData.data.qualifications
     const work = props.resumeData.data.jobs
     const featuredSkills = props.resumeData.data.skillCategories

    //  console.log("work", work);
    const resumeRef = useRef()

    const sendReftoHeader = useCallback(() => {
        props.headerRef(resumeRef)
    }
    , [])

    useEffect(() => {
        sendReftoHeader()
    }, [])
    // console.log("resumeComp props", props)
    // const { education, work, skills } = props.resumeData
    // console.log("ResumePageSkills", skills)


    //  console.log("featuredSkillsn", featuredSkills)







    return (
        <section id="resume" ref={resumeRef}>
            <div className="flex justify-center  pt-8      ">
                <div className="flex-col   ">
                    <div className="  flex justify-center">
                        <div className="max-w-screen-lg w-full">
                          <Education education={education} /> 
                            <Work work={work}/> 
                        </div>
                    </div>

                    <div className="bg-gray-300 flex justify-center w-screen">
                        <FeaturedSkills  featuredSkills={featuredSkills}/>  
                    </div>

                </div>
            </div>
        </section>
    );
}




export default Resume;
