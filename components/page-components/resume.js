const Resume = (props) => {

    // console.log("resumeComp props", props)
    const { education, work, skills } = props.resumeData

    console.log("resume skills", skills)

    // console.log("resumeComp education", education)

    const educationList = education.map((qualification, index) => {
        const { name, completed, institution } = qualification.qualification.data.attributes
        // console.log("resumeComp qualification", qualification.qualification.data.attributes)
        return (
            <div className=" ">
                <h3 className="flex justify-center">{institution}</h3>
                <p className="info flex justify-center ">{name} <span>&bull;</span>
                    <em className="date ">{completed}</em>
                </p>
                <p>{education.description}</p>
            </div>
        )
    }
    )

    const workList = work.map((job, index) => {
        const { title, company, body, duration } = job.job.data.attributes
        console.log("resumeComp job", job.job.data.attributes)
        return (
            <div key={company} className="">
                <h3 className="flex justify-center">{company}</h3>
                <p className="info flex justify-center  ">
                    {title}<span>&bull;</span> <em className="date">{duration}</em>
                </p>
                <p className="info p-5 flex justify-center ">
                    {body}
                </p>

            </div>
        )
    })

    const skillList = skills.map((skill, index) => {
        console.log("resumeComp skill", skill)
        const { name, description } = skill.skill_category.data.attributes
        return (
          
                <div class="card mt-5 ml-10 ">
                    <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-100">
                        <img class="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{name}</div>
                            <p class="text-gray-700 text-base">
                                {description}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">#tailwind</span>
                            <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">#frontendeverything</span>
                        </div>
                    </div>
                </div>
         
        )
    })

    return (
        <section id="resume">
            <div className="">
                <div className="education md:flex md:justify-between lg:justify-around  ">
                    <div className=" md:w-1/4">
                        <h1 className="flex justify-center" ><span>Education</span></h1>
                    </div>
                    <div className=" md:w-3/5  ">
                        <div className="">
                            {educationList}
                        </div>
                    </div>
                </div>

                <div className=" work md:flex  md:justify-between lg:justify-around ">
                    <div className=" md:w-1/4 ">
                        <h1 className="flex justify-center"><span>Employment</span></h1>
                    </div>
                    <div className="md:w-3/5 ">
                        {workList}
                    </div>
                </div>

                <div className=" skill  md:flex  md:justify-between lg:justify-around ">
                    <div className="md:w-1/4">
                        <h1 className="flex justify-center"><span>Skills</span></h1>
                    </div>

                  
                        {/* <p>{skillmessage} </p> */}
                        <div className="w-full pr-6  ">
                            <ul className="flex flex-wrap justify-center">
                                {skillList}
                            </ul>
                        </div>
                
                </div>
            </div>
        </section>
    );

}


export default Resume;
