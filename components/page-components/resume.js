const Resume = (props) => {

    // console.log("resumeComp props", props)
    const { education, work, skills } = props.resumeData

    // console.log("resumeComp education", education)

    const educationList = education.map((qualification, index) => {
        const { name, completed, institution } = qualification.qualification.data.attributes
        // console.log("resumeComp qualification", qualification.qualification.data.attributes)
        return (
            <div className=" ">
                <h3 className="flex justify-center">{institution}</h3>
                {/* <p className="info flex justify-center ">{name} <span>&bull;</span>
                    <em className="date ">{completed}</em>
                </p> */}
                {/* <p>{education.description}</p> */}
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
        // console.log("resumeComp skill", skill.skill_categories.data)
        const skillCategoryList = skill.skill_categories.data.map((skillCategory, index) => {
            const { name } = skillCategory.attributes
            // console.log("resumeComp skillCategory", name)
            return (
                <div>
                    <h3>{name}</h3>
                </div>
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
            <div className="">
            <div className="education md:flex md:justify-between ">
                <div className=" md:w-1/4">
                    <h1 className="flex justify-center" ><span>Education</span></h1>
                </div>
                <div className=" md:w-3/5  ">
                    <div className="">
                        {educationList}
                    </div>
                </div>
            </div>

            <div className=" work md:flex  md:justify-between ">
                <div className=" md:w-1/4 ">
                    <h1 className="flex justify-center"><span>Work</span></h1>
                </div>
                <div className="md:w-3/5 ">
                        {workList}
                </div>
            </div>

            <div className=" skill  md:flex  md:justify-between">
                <div className="md:w-1/4">
                    <h1 className="flex justify-center"><span>Skills</span></h1>
                </div>

                <div className="">
                    {/* <p>{skillmessage} </p> */}
                    <div className="md:w-3/5">
                        <ul className="">
                            {skillList}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );

}


export default Resume;
