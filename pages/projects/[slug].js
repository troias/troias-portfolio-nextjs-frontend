import React, { useState, useEffect } from 'react'
import { getPortfolioData } from '../../utils/api'
import Head from 'next/head'
import Image from 'next/image'
import NextImage from "../../components/elements/image"
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { CSSTransition } from 'react-transition-group';



  
// import Link from 'next/link'
// import logo from '../../assets/images/logo.svg'



export const ProjectDetails = (props) => {
    console.log("project details", props);

    const images = props.project.project.data.attributes.images.data

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currSlide, setCurrSlide]= useState(false)




    console.log("currIndex", currentIndex);
    console.log("images", images)
    
    let count = 0;
    const handleOnNextClick = (event) => {
        event.preventDefault();
        count = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
        // count = (count + 1) % images.length
        // setCurrSlide(!currSlide)
        setCurrentIndex(count)
       
        
    
     };
    const handleOnPrevClick = () => {
        console.log("clicked");
        count = (currentIndex + images.length - 1) % images.length
        
        setCurrSlide(!currSlide)
        setCurrentIndex(count)
       
        console.log("currIndex", currentIndex)
    
     };
 
        

  

        console.log("object", currSlide);
    return (
        <>
            <Head>
                <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
              
            </Head>

            <div className="bg-white flex justify-center">

                <div className="max-w-screen-lg pr-8 pl-8 ">
                    <div className="flex justify-center">
                        <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold pt-8 pb-8 ">
                            Project Details
                        </h1>
                    </div>

                    <div className="max-w-screen-lg m-auto ">
                        
                        <div className="w-full relative select-none ">
                        {/* {  console.log("count", currentIndex)} */}
                        <CSSTransition 

                            in={
                                currSlide
                            }
                        
                        timeout={{
                            enter: 150,
                            exit: 150   
                        }} className="my-node" >
                        
                            <NextImage media={images[currentIndex]} className="" />
                   
                          
                            </CSSTransition> 
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
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ">
                                YouTube
                            </button>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ">
                                github
                            </button>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                website
                            </button>
                        </div>

                        <div className="w-3/5 md:w-1/2">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>

                        </div>

                    </div>

                    <div className="pb-8 pt-8 flex">
                        <div className="pr4">
                            <h3>
                                stack
                            </h3>
                        </div>

                        <div className="w-11/12">
                            <ul className="flex justify-center">
                                <li>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                        class="block w-[150px] h'[150px]"
                                        alt="Exotic Fruits"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                        class="block w-[150px] h'[150px]"
                                        alt="Exotic Fruits"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                        class="block w-[150px] h'[150px]"
                                        alt="Exotic Fruits"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const getStaticPaths = async () => {

    const data = await getPortfolioData()
    console.log("insac", data.data.codingDv.data.attributes.projects[0].project.data.attributes);
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


export const getStaticProps = async (ctx) => {
    const data = await getPortfolioData()

    const {

        projects,

    } = data.data.codingDv.data.attributes

    const project = projects.find(project => {
        const { slug } = project.project.data.attributes
        return slug === ctx.params.slug
    })

    const portfolioData = {
        projects: projects,

    }

    return {
        props: {
            project
        }


    }
}

export default ProjectDetails
