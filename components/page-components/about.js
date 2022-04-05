import React, { Component, useEffect, useRef } from 'react';
import NextImage from '../elements/image';

const About = (props, ref) => {

   const aboutRef = useRef()
   console.log("About page props", props)
   const { bio, body, contactDetails, title } = props.aboutPageData
   const { name, email, phone, address, website, iconImage } = contactDetails

   // console.log("About page ref", aboutRef)

   // console.log("About page Image", iconImage)

   const sendReftoHeader = () => {
      props.headerRef(aboutRef)
   }
   useEffect(() => {
      sendReftoHeader()
   }, [])

   return (
      <section id="about" ref={aboutRef} >
         <div className="flex justify-center md:justify-around max-w-screen-lg w-full p-4">

            <div className=" md:w-1/4   ">
               <NextImage media={iconImage} className=" md:rounded-full z-0 " />
            </div>

            <div className=" flex flex-col p-4  justify-center  ">


               <div>
                  <h2>About Me</h2>
               </div>
               <div>
                  <p className="">{bio}</p>
               </div>
               <p>
                  <h2 className="">Contact Details</h2>
               </p>
               <div>
                  <p className="">
                    
               
                     {address}
                     <br />
                     +64278494900
                     {/* <span>{phone}</span><br />
                     <span>{email}</span> */}
                  </p>
               </div>


            </div>
         </div>
      </section>
   );
}



export default About;