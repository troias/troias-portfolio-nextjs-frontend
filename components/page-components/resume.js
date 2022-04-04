import React, { useEffect, useRef } from "react"
import SkillsList from "../elements/skillsList/skillsList"
import Link from 'next/link'

const Resume = (props) => {

    const resumeRef = useRef()

    const sendReftoHeader = () => {
        props.headerRef(resumeRef)
    }

    useEffect(() => {
        sendReftoHeader()
    }, [])
    // console.log("resumeComp props", props)
    const { education, work, skills } = props.resumeData
    console.log("ResumePageSkills", skills)


    // console.log("resumeComp education", education)

    const educationList = education.map((qualification, index) => {
        const { name, completed, institution, distinction } = qualification.qualification.data.attributes
        // console.log("resumeComp qualification", qualification.qualification.data.attributes)
        return (
            <div className=" ">
                <h3 className="flex justify-center">{institution}</h3>
                <p className="info flex justify-center pr-7 pl-7 ">
                    <span>&bull; {name} </span> <br />
                </p>
                <p className="info flex justify-center pr-7 pl-7 ">
                    <em className="date ">Completed: {completed}</em>
                </p>
                {distinction ? <p className="info flex justify-center pr-7 pl-7 ">

                    <span className="pr-1">Distinction:  </span><em className="text-black font-medium"> {distinction}</em>
                </p> : null}
            </div>
        )
    }
    )

    const workList = work.map((job, index) => {
        const { title, company, body, duration } = job.job.data.attributes

        return (
            <div key={company} className="flex justify-center">
                <div className="w-11/12 max-w-md">


                    <h3 className="flex justify-center">{company}</h3>
                    <div className="flex justify-center">
                        <p className="info   space-x-3  ">
                            {title}<span>&bull;</span> <em className="date">{duration}</em>
                        </p>
                    </div>
                    <div className="w-3/5">
                        <p className="info flex   ">

                            {body}
                        </p>
                    </div>
                </div>
            </div>
        )
    })

    // const skillList = skills.map((skill, index) => {

    //     const { name, description } = skill.skill_category.data.attributes
    //     return (

    //         <div class="card mt-5 ml-10 pr-8">
    //             <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-100">
    //                 <img class="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
    //                 <div class="px-6 py-4">
    //                     <div class="font-bold text-xl mb-2">{name}</div>
    //                     <div className="">
    //                     <p class="text-gray-700 text-base ">
    //                         {description}
    //                     </p>
    //                     </div>
    //                 </div>
    //                 <div class="px-6 pt-4 pb-2">
    //                     <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">#tailwind</span>
    //                     <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">#frontendeverything</span>
    //                 </div>
    //             </div>
    //         </div>

    //     )
    // })

    return (
        <section id="resume" ref={resumeRef}>
            <div className="flex justify-center bg-[#fff]   pt-24  pb-16  ">


                <div className="flex-col max-w-screen-lg w-full  ">
                    <div className="education md:flex md:justify-between lg:justify-around  ">
                        <div className=" md:w-1/4">
                            <h1 className="flex justify-center lg:justify-start " ><span>Education</span></h1>
                        </div>
                        <div className=" md:w-3/5  ">
                            {educationList}

                        </div>
                    </div>

                    <div className=" work md:flex  md:justify-between lg:justify-around ">
                        <div className=" md:w-1/4 ">
                            <h1 className="flex justify-center lg:justify-start"><span>Employment</span></h1>
                        </div>
                        <div className="md:w-3/5 ">
                            {workList}
                        </div>
                    </div>

                    <div className=" skill ">
                        <div className="flex justify-center border-t pt-8">
                            <h1 className="   lg:justify-start  "><span>Featured Skills</span></h1>
                        </div>


                        {/* <p>{skillmessage} </p> */}
                        <div className="max-w-screen-lg   ">
                            <div className="flex flex-wrap justify-center">
                                <SkillsList skills={skills} />
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
            </div>
        </section>
    );
}




export default Resume;
