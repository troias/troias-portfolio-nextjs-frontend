import React from 'react'
import { getPortfolioData } from '../../utils/api'
import ProjectsList from '../../components/elements/projectsList/projectsList'

const Index = (props) => {


    const projects = props.portfolioData.projects
    console.log("portfolioCompPropsData", projects);

    return (
        <div className="min-h-screen bg-white flex justify-center ">
            <div className=" flex-col max-w-screen-lg w-full flex-wrap   ">
               

                    <div className="flex flex-col items-center pt-8 pb-8 ">


                        <h1 className="text-black text-5xl font-bold">
                            Hello, I'm <span className="text-blue-500">Troias</span>
                        </h1>
                        
                        <p className="text-black text-2xl">
                            I'm a software engineer based in London, UK.
                        </p>
                    </div>
              
                
                 
                    <div id=" " className=" flex w-full  ">
                        <ProjectsList projects={projects} />
                    </div>
                </div>

              
        </div>
    )
}

export default Index

export const getStaticProps = async () => {
    const data = await getPortfolioData()
    const {
        title,
        body,
        bio,
        projects,
        qualifications,
        contactDetails,
        employment,
        skills,
    } = data.data.codingDv.data.attributes

    const aboutPageData = {
        contactDetails,
        title,
        body,
        bio,
    }

    const portfolioData = {
        projects: projects,
    }

    const resumeData = {
        education: qualifications,
        work: employment,
        skills: skills,
    }

    return {
        props: {
            aboutPageData,
            portfolioData,
            resumeData,
        },
    }
}

