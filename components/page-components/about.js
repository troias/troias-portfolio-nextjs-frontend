import React, { Component } from 'react';
import NextImage from '../elements/image';

const About = (props) => {


   console.log("About page props", props)
   const {bio, body, contactDetails, title} = props.aboutPageData
   const {name, email, phone, address, website, iconImage} = contactDetails

   console.log("About page Image", iconImage)
    return (
      <section id="about">
      <div className="flex justify-center md:justify-around ">

         <div className=" md:w-1/4  ">
             <NextImage media={iconImage} className=" md:rounded-full"  /> 
         </div>

         <div className=" flex-col content-center  mr-6 md:w-3/5 md:items-center">
            <h2>About Me</h2>
           <p>{bio}</p> 
            <div className="">
               <div className=" contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span className=" ">{address}<br />
						    </span><br />
						   {/* <span>{phone}</span><br />
                     <span>{email}</span> */}
					   </p>
               </div>
               <div className="download">
                  <p>
                     {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a> */}
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }


export default About;