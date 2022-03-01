const Resume = (props) => {

    console.log("resumeComp props", props)
    const { education, work, skills } = props.resumeData

    console.log("resumeComp education", education)

    const educationList = education.map((qualification, index) => {
        const { name, completed, institution } = qualification.qualification.data.attributes
        console.log("resumeComp qualification", qualification.qualification.data.attributes)
        return (
            <div className="flex-col  ">
                <h3 className="flex justify-center">{institution}</h3>
                <p className="info flex justify-center ">{name} <span>&bull;</span>
                    <em className="date flex content-center">{completed}</em>
                </p>
                {/* <p>{education.description}</p> */}
            </div>
        )
    }
    )

    const workList = work.map((job, index) => {
        const { title, company, body, duration } = job.job.data.attributes
        console.log("resumeComp job", job.job.data.attributes)
        return (
            <div key={company} className="flex-col">
                <h3 className="flex justify-center">{company}</h3>
                <p className="info flex justify-center">
                    {title}<span>&bull;</span> <em className="date">{duration}</em>
                </p>
                <p className="info flex justify-center p-5">
                    {body}
                </p>

            </div>
        )
    })

    const skillList = skills.map((skill, index) => {
        // const { name } = skill.skill_categories.data.attributes
        console.log("resumeComp skill", skill.skill_categories.data)
        const skillCategoryList = skill.skill_categories.data.map((skillCategory, index) => {
            const { name } = skillCategory.attributes
            console.log("resumeComp skillCategory", name)
            return (
                <>
                    <h3>{name}</h3>
                </>
            )
        })
        return (
            <>
                <li key={skillCategoryList.name}>
                    {/* <span style={{width:skills.level}}className={className}></span> */}
                    <em>{skillCategoryList}</em>
                </li>
            </>
        )
    })





    return (
        <section id="resume">

            <div className="education  flex-col justify center  md:flex  md:justify-between">
                <div className="flex justify-center md:w-1/4 ">
                    <h1 className="" ><span>Education</span></h1>
                </div>

                <div className=" md:w-3/5  ">
                    <div className="flex-col justify-center p-5">
                        {educationList}
                    </div>

                </div>
            </div>


            <div className=" work flex-col justify-center md:flex  md:justify-between ">

                <div className="flex justify-center md:w-1/4 ">
                    <h1><span>Work</span></h1>
                </div>

                <div className="md:w-3/5 ">
                        {workList}
                </div>
            </div>



            <div className=" skill flex-col  md:flex  md:justify-between">

                <div className="md:w-1/4">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="">

                    {/* <p>{skillmessage} </p> */}

                    <div className="">
                        <ul className="">
                            {skillList}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

}


export default Resume;
