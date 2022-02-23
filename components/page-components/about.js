import React, { Component } from 'react';

const About = (props) => {


   console.log("About page props", props)
   const {bio, body, contactDetails, title} = props.aboutPageData
   const {name, email, phone, address, website} = contactDetails


    return (
      <section id="about">
      <div className="flex justify-end w-11/12">
         <div className="">
          
            {/* <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" /> */}
         </div>
         <div className="">
            <h2>About Me</h2>

           <p>{bio}</p> 
            <div className="">
               <div className=" contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{address}<br />
						    </span><br />
						   {/* <span>{phone}</span><br />
                     <span>{email}</span> */}
					   </p>
               </div>
               <div className="columns download">
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