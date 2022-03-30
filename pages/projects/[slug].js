import React, {useEffect} from 'react'
import { getPortfolioData } from '../../utils/api'
import Head from 'next/head'





// import Link from 'next/link'
// import logo from '../../assets/images/logo.svg'
// import Image from 'next/image'


export const ProjectDetails = (props) => {


    console.log("project detail props", props)
    return (
        <>
        <Head>
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        </Head>
        
        <div className="bg-white flex justify-center">
            
            <div className="max-w-screen-lg pr-8 pl-8">
                <div className="flex justify-center">
                    <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold pt-8 pb-8 ">
                        Project Details
                    </h1>
                </div>
                <div>
                    {/* <img class="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" /> */}

                    <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner relative w-full overflow-hidden">
                            <div class="carousel-item active float-left w-full">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                    class="block w-full"
                                    alt="Wild Landscape"
                                />
                            </div>
                            <div class="carousel-item float-left w-full">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                    class="block w-full"
                                    alt="Camera"
                                />
                            </div>
                            <div class="carousel-item float-left w-full">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                    class="block w-full"
                                    alt="Exotic Fruits"
                                />
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
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
