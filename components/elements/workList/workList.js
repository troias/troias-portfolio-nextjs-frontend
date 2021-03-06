import React from 'react'

const WorkList = ({ work }) => {

    // console.log("WorkList", work);



    return (
        <>
            {work.data.map((job, index) => {

                return (
                    <div key={job.id} className="flex justify-center">
                        <div className="w-11/12 max-w-md">
                            <h3 className="flex justify-center">{job.attributes.company}</h3>
                            <div className="flex pl-4  ">
                                <p className="info   space-x-3 w-2/3  ">
                                    {job.attributes.title}<span className=" "> &bull;</span> <em className="date">{job.attributes.duration}</em>
                                </p>
                            </div>
                            <div className="flex justify-center pl-4 pr-4">
                                <div className=" ">
                                    <p className="info flex   space-x-3  ">


                                        {job.attributes.body}

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
