import React, { Component, useEffect, useRef } from 'react';
import NextImage from '../elements/image';
import getAboutSection from '../../utils/api'

const About = ({aboutPageData}) => {

   const aboutRef = useRef()
   // console.log("About page props", contactDetails, about )

   const {about, contactDetails} = aboutPageData
   // console.log("contactDetails", contactDetails)



   // const sendReftoHeader = () => {
   //    props.headerRef(aboutRef)
   // }
   // useEffect(() => {
   //    sendReftoHeader()
   // }, [])

   return (
      <section id="about" ref={aboutRef} >
         <div className="flex justify-center md:justify-around max-w-screen-lg w-full p-4">

            <div className=" md:w-1/4   ">
                <NextImage media={contactDetails.iconImage} className=" md:rounded-full z-0 " /> 
            </div>

            <div className=" flex flex-col p-4  justify-center  ">


               <div>
                  <h2>{about.title}</h2>
               </div>
               <div>
                  <p className="">{about.bio}</p>
               </div>
             
                  <h2 className="">{contactDetails.title}</h2>
            
               <div>
                     {contactDetails.contactDetailItem.map((item, index) => {
                        return (
                           <div key={item.id}>
                             <p> {item.title}:   {item.text}</p>
                            
                           </div>
                        )

                     }
                     )}
               </div>

               <div className="mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a className="bg-grey mt-2" target="_blank" download href={contactDetails.cv}> View CV</a>
                  </button>
               </div>


            </div>
         </div>
      </section>
   );
}



export default About;

export const getStaticProps = async () => {
   
  const about = await getAboutSection()




   console.log("responseAboutSection", about)
 

   return {
      props: {
         // contactDetails: res.data.codingDv.data.attributes.contactDetails,
         // aboutPageData: res.data.codingDv.data.attributes
      }
   }
}