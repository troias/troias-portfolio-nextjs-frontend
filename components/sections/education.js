import React from 'react'
import EducationList from "../elements/educationList/educationList"

 const Education = ({education}) => {
   console.log("educationProps", education);
  return (
    <div className="education md:flex md:justify-around  ">
    <div className=" md:w-1/4">
        <h1 className="flex justify-center lg:justify-start " ><span>Education</span></h1>
    </div>
    <div className=" md:w-3/5  ">

        <EducationList education={education} /> 

    </div>
</div>
  )
}

export default Education
