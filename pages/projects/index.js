import React from 'react'
import { getProjectsData } from '../../utils/api'
import ProjectsList from '../../components/elements/projectsList/projectsList'
import PortfolioNav from '../../components/page-components/portfolioNav'

const Index = ({portfolioData, projectsPageData}) => {


     const projects = portfolioData.data.projects.data
     console.log("portfolioCompPropsData", projectsPageData);
     const intro = projectsPageData.data.projectsPage.data.attributes.intro
     const body = projectsPageData.data.projectsPage.data.attributes.body

    return (
        <div>
            <PortfolioNav />
        
        <div className="min-h-screen bg-white flex justify-center ">
            <div className=" flex-col max-w-screen-lg w-full flex-wrap   ">
               
                    <div className="flex flex-col items-center pt-8 pb-8 ">

                        <h1 className="text-black text-5xl font-bold  pr-8 pt-8">
                        {intro} <span className="text-blue-500">Troy</span>
                        </h1>
                        <div className="w-3/5 md:w-2/3 lg:w-11/12">
                        <p className="text-black text-2xl pl-10 pr-10 pt-8">
                            {body}
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

    const portfolioData = await getProjectsData()
    const getProjectPageData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `
            query {
                projectsPage {
                  data {
                    attributes {
                      intro
                      body
                    }
                  }
                }
              }
                  
               `
        })
    })
    const projectsPageData = await getProjectPageData.json()

    

    return {
        props: {
            portfolioData,
            projectsPageData
        },
    }
}

