import React from 'react'
import { getPortfolioData } from '../../utils/api'
import ProjectsList from '../../components/elements/projectsList/projectsList'
import PortfolioNav from '../../components/page-components/portfolioNav'

const Index = (props) => {


    const projects = props.portfolioData.projects
    console.log("portfolioCompPropsData", projects);

    return (
        <div>
            <PortfolioNav />
        
        <div className="min-h-screen bg-white flex justify-center ">
            <div className=" flex-col max-w-screen-lg w-full flex-wrap   ">
               

                    <div className="flex flex-col items-center pt-8 pb-8 ">


                        <h1 className="text-black text-5xl font-bold  pr-8 pt-8">
                            Hello, I'm <span className="text-blue-500">Troy</span>
                        </h1>
                        <div className="w-3/5 md:w-2/3 lg:w-11/12">
                        <p className="text-black text-2xl pl-10 pr-10 pt-8">
                            I'm a front end developer based in Hamilton, NZ. I'm passionate about building things that people love. 
                             <span className="pl-2">Here is a list of some of the things I've built.  </span>
                        </p>
                        </div>
                   
                    </div>
              
                
                 
                    <div id=" " className=" flex  w-full pb-8 ">
                        <ProjectsList projects={projects} />
                    </div>
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

