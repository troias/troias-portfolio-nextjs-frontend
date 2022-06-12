import React from 'react'

const EducationList = props => {
   
    const education = props.education

    // console.log("EducationList", education)
    return (

        <>
            {education.data.map((qualification, index) => {

                return (
                <div className="  mb-8" key={qualification.id}>
     
                    <h3 className="flex justify-center ">{qualification.attributes.institution}</h3>
                    <p className="info flex justify-center pr-7 pl-7 mt-4 ">
                        <span>&bull; {qualification.attributes.name} </span> <br />
                    </p>
                    <p className="info flex justify-center pr-7 pl-7 ">
                        <em className="date ">Completed: {qualification.attributes.completed}</em>
                    </p>
                    {qualification.attributes.distinction ? <p className="info flex justify-center pr-7 pl-7 ">

                        <span className="pr-1">Distinction:  </span><em className="text-black font-medium"> {qualification.attributes.distinction}</em>
                    </p> : null}
                </div>
                )
            }
            )}
          
        </>
    )
}

export default EducationList
