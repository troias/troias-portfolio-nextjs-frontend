import React from 'react'
import { getPortfolioData } from '../../utils/api'
import Link from 'next/link'
import logo from '../../assets/images/logo.svg'
import Image from 'next/image'


export const ProjectDetails = (props) => {
    console.log("project detail props", props)
    return (
        <div className="bg-white h-full w-full">
            <nav className="h-full w-full text-white bg-[#2B2B2B] ">

                <ul id="nav" className=" flex justify-between md:pt-2 text-white">
                    <a href="#" class="flex items-center">
                        <Link href="/">
                        <Image
                            src={logo}
                            alt="troias-portfolio-logo"
                            width={100}
                            height={50}
                            className=""
                        />
                        </Link>
                    </a>
                    <li className=" text-white"><Link href="/" className="text-white">Home</Link></li>

                </ul>
            </nav>

            <div id="main" className="  w-full   ">
                <section id="top-section" className="flex justify-center min-h-[50vh] bg-black " >
                    <div  >
                        <h1 className="text-2xl text-center">#</h1>
                    </div>
                    <div>
                        image
                    </div>

                </section>
                <section id="bottom-section" className="  justify-center min-h-[50vh] bg-gray-400">
                    <div>links</div>
                    <div>body</div>
                    <div>stack</div>

                </section>




            </div>

        </div>
    )
}


export const getStaticPaths = async () => {

    const data = await getPortfolioData()
    const projects = data.data.codingDv.data.attributes.projects
    const paths = projects.map(project => {
        const { slug } = project.project.data.attributes
        return { params: { slug: slug } }
    })
    console.log("paths", paths)
    return {
        paths,
        fallback: false
    }


}


export const getStaticProps = async () => {
    const data = await getPortfolioData()

    const {

        projects,

    } = data.data.codingDv.data.attributes

    const portfolioData = {
        projects: projects,

    }

    return {
        props: {
            portfolioData
        }


    }
}

export default ProjectDetails
