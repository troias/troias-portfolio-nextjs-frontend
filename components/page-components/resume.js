const Resume = (props) => {

    console.log("resumeComp props", props)
    const { education, work, skills } = props.resumeData

    console.log("resumeComp education", education)

    const educationList = education.map((qualification, index) => {
        const { name,completed, institution } = qualification.qualification.data.attributes
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


    return (
        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                             {educationList} 
                        </div>
                    </div>
                </div>
            </div>


            <div className="row work">

                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>

                <div className="nine columns main-col">
                    {/* {work} */}
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
                            {/* {skills} */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

}


export default Resume;
