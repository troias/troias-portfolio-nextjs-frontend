import React from 'react'
import WorkList from "../elements/workList/workList"

const Work = ({work}) => {
  console.log("InnerWork", work);
  return (
    <div className=" work md:flex  md:justify-around ">
    <div className=" md:w-1/4 ">
        <h1 className="flex justify-center lg:justify-start"><span>Employment</span></h1>
    </div>
    <div className="md:w-3/5 ">
         <WorkList work={work} /> 
    </div>
</div>
  )
}

export default Work
