import React, { useRef, useState } from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Contact from '../components/page-components/contact'
import About from '../components/page-components/about'
import Resume from '../components/page-components/resume'
import Portfolio from '../components/page-components/portfolio'
import { getAboutSection, getHeaderDetails, getResumeData, getProjectsData } from '../utils/api'
import Header from '../components/navigation/header/header'



export default function Home({ aboutPageData, headerData, resumeData, portfolioData }) {

  //  console.log("portfolioData", portfolioData)



  const [headerRef, setHeaderRef] = useState([])

  const ref = useRef(headerRef)


  const headerRefArr = (arg) => {
    setHeaderRef((prev) => [...prev, arg])


    ref.current.push(arg)



  }






  //  console.log("aboutPageData", props.aboutPageData)

  return (
    <div className="">
      <Head>
        <title>Troy Flavell | Portfolio</title>
        <meta name="description" content="A portfolio made by Troy Favell" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header ref={ref} sectionRefData={headerRef} headerData={headerData} />
      <main className="">
        <About headerRef={headerRefArr} aboutPageData={aboutPageData} />
        <Resume headerRef={headerRefArr} resumeData={resumeData} />

        <div id="portfolio-wrapper " className=" flex flex-col w-full items-center md:flex-row md:items-baseline md:justify-center">
          <Portfolio portfolioData={portfolioData} headerRef={headerRefArr} />
        </div>
        <Contact headerRef={headerRefArr} />
      </main>

    </div>
  )
}

export const getStaticProps = async () => {




  const about = await getAboutSection()
  // console.log("first about", about)

  const headerDetails = await getHeaderDetails()
  // console.log("headerDetails", headerDetails);

  const resumeData = await getResumeData()
  //  console.log("getResumeData", resumeData);

  const portfolioData = await getProjectsData()
  // console.log("portfolioData", portfolioData);


  return {

    props: {
      aboutPageData: about.data.codingDv.data.attributes,
      headerData: headerDetails.data.codingDv.data.attributes,
      resumeData: resumeData,
      portfolioData: portfolioData
    },
    revalidate: 1
  }
}
