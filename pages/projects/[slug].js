import React, { useState, useEffect } from 'react'
import {  getProjectsData } from '../../utils/api'
import Head from 'next/head'
import Image from 'next/image'
import NextImage from "../../components/elements/image"
import PortfolioNav from '../../components/page-components/portfolioNav'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { CSSTransition, SwitchTransition } from 'react-transition-group';





// import Link from 'next/link'
// import logo from '../../assets/images/logo.svg'



export const ProjectDetails = ({project, techStackArr}) => {
    console.log("project details", project);

    // const images = props.project.project.data.attributes.images.data
    // const links = props.project.project.data.attributes.link
    // const description = props.project.project.data.attributes.body
    // const icon = props.project.project.data.attributes

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currSlide, setCurrSlide] = useState(false)




    // console.log("currIndex", currentIndex);
    // console.log("images", images)
    // console.log("links", links)
    // console.log("description", description);
    // console.log("icon", icon);


    const handleOnNextClick = (event) => {
        event.preventDefault();
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

        // setCurrentIndex(count)
        setCurrSlide(true)



    };
    const handleOnPrevClick = () => {

        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

        setCurrSlide(true)
    };


    // console.log("object", currSlide,);
    return (
        <>
            <Head>
              

            </Head>
                <PortfolioNav />
            <div className="bg-white flex justify-center">

                <div className="max-w-screen-lg pr-8 pl-8 ">
                    <div className="flex justify-center">
                        <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold pt-8 pb-8 ">
                            Project Details
                        </h1>
                    </div>

                    <div className="max-w-screen-lg m-auto ">

                        <div className="relative w-full flex  select-none  justify-center">
                            {/* {console.log("count", currentIndex)} */}
                            {/* {
                                images.map((image, index) => {
                                    // console.log("checkCurrImage",  checkCurrImage(index));
                                    const currImage = (index === currentIndex) ? true : false
                                    console.log("imagedasd", image, index, currImage, currentIndex);
                                    return (
                                        <SwitchTransition 
                                            key={currImage ? true : false}
                                            addEndListener={(node, done) => {
                                                node.addEventListener("transitionend", done, false);
                                            }}
                                    
                                            className="carosel"
                                        >
                                            <CSSTransition in={currImage} timeout={150} className="carosel" key={index} >
                                                <>
                                                    {currImage && <Image className="carosel" src={`http://localhost:1337${image.attributes.url}`} width={image.attributes.width} height={image.attributes.height} />
                                                    }
                                                </>
                                            </CSSTransition>
                                        </SwitchTransition>
                                    )
                                })

                            } */}

                            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                                <button onClick={handleOnPrevClick} className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition">
                                    <AiOutlineVerticalRight size={35} />
                                </button>
                                <button onClick={handleOnNextClick} className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition">
                                    <AiOutlineVerticalLeft size={35} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col  items-center pt-8 pb-8 md:flex-row">

                        <div className="w-3/5 pb-8 flex justify-center md:w-1/2  ">
                            {/* {links.map((link, index) => {
                                return (
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 " key={index}>
                                    <a href={link.url} target="_blank" className=" ">
                                        {link.text}
                                        
                                    </a>
                                    </button>
                                )
                            }
                            )} */}
                       
                 
                        </div>

                        <div className="w-3/5 md:w-1/2">
                            <p>
                               {/* {description} */}
                            </p>

                        </div>

                    </div>

                    <div className="pb-12 pt-12 flex">
                        <div className="pr4 w-1/2 flex items-center justify-center font-sans text-4xl subpixel-antialiased italic font-semibold tracking-normal  ">
                            <h3 className=" ">
                                stack #
                            </h3>
                        </div>

                        <div className="w-11/12 ">
                            <ul className="flex justify-around">
                                {/* {props.techStackArr.map((tech, index) => {
                                    const image = tech.attributes.icon.data
                                    console.log("innerImage", image);
                                    return (
                                        <li className="mr-2" key={index}>
                                            <Image className="carosel" src={`http://localhost:1337${image.attributes.url}`} width={image.attributes.width} height={image.attributes.height} /> 
                                        </li>
                                    )
                                })} */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const getStaticPaths = async () => {

    const data = await getProjectsData()

     console.log("data", data );

     const projects = data.data.projects.data

     console.log("projects",  projects);


    const paths = projects.map(project => {
        console.log("pathsInner",  project)
        const { slug } = project.attributes
        return { params: { slug: slug } }
    })

    console.log("paths", paths)

    return {
        paths,
        fallback: false
    }

 


}


export const getStaticProps = async (ctx) => {

    const data = await getProjectsData()

    
    const convertedData = await data
    console.log("convertedData", convertedData);
        // console.log("convertedData", convertedData);
        // console.log("SingularProjectFetchTest", convertedData.data.projects.data);
       const projectSkill = convertedData.data.projects.data.find(project => project.attributes.slug === ctx.params.slug)
          console.log("projectSkillsc", projectSkill.attributes);
        //  const projectSkill = convertedData.data.projects.data.find(project => project.data.attributes.name === ctx.params.slug)
          const techStackArr = projectSkill.attributes.skill_categories.data
          const project = projectSkill.attributes
    //    console.log("gferqgqg", data.data.projects.data);
        // console.log( "techStackArr", techStackArr);


    // const project = projects.find(project => {
    //     const { slug } = project.project.data.attributes
    //     return slug === ctx.params.slug
    // })

    // console.log("projectData", project.project.data.attributes);

    return {

        props: {
               project,
              techStackArr
        }


    }
}

export default ProjectDetails
