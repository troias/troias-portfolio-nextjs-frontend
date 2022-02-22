const Resume = (props) => {

    console.log("resumeComp props", props)
    const { education, work, skills } = props.resumeData

    console.log("resumeComp education", education)

    const educationList = education.map((qualification, index) => {
        const { name, completed, institution } = qualification.qualification.data.attributes
        console.log("resumeComp qualification", qualification.qualification.data.attributes)
        return (
            <div >
                <h3>{institution}</h3>
                <p className="info">{name} <span>&bull;</span><em className="date">{completed}</em></p>
                {/* <p>{education.description}</p> */}
            </div>
        )
    }
    )

    const workList = work.map((job, index) => {
        const { title, company, body, duration } = job.job.data.attributes
        console.log("resumeComp job", job.job.data.attributes)
        return (
            <div key={company} className="flex-col justify-center">
                <h3 className="">{company}</h3>
                <p className="info">{title}<span>&bull;</span> <em className="date">{duration}</em></p>
                <p>{body}</p>
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

            <div className=" education flex-col items-center">
                <div className="flex justify-center">
                    <h1 className="" ><span>Education</span></h1>
                </div>

                <div className="nine columns main-col flex justify-end">
                    <div className="row item ">
                        <div className="twelve columns ">
                            {educationList}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row work flex-col justify-center">

                <div className="three columns header-col flex justify-center">
                    <h1><span>Work</span></h1>
                </div>

                <div className="nine columns main-col ">
                    {workList}
                </div>
            </div>



            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">

                    {/* <p>{skillmessage} </p> */}

                    <div className="bars">
                        <ul className="skills">
                            {skillList}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

}


export default Resume;
