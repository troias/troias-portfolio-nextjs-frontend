import React from 'react'

const WorkList = ({ work }) => {

    console.log("WorkList", work);

  

    return (
        <>
            {work.data.map((job, index) => {
                console.log("workListInner", job);
                return (
                    <div key="" className="flex justify-center">
                        <div className="w-11/12 max-w-md">
                            <h3 className="flex justify-center">{job.attributes.company}</h3>
                            <div className="flex justify-center">
                                <p className="info   space-x-3  ">
                                    {job.attributes.title}<span> &bull;</span> <em className="date">{job.attributes.duration}</em>
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-3/5">
                                    <p className="info flex   ">

                                       Job Description: {job.attributes.body}
                                      
                                    </p>
                                    <p className="info flex">
                                    Location: {job.attributes.location}
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                )
            }
            )}


    </>

            )
    

  
}

export default WorkList
