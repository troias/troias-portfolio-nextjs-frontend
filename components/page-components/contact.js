import React, { useState } from 'react';




const Contact = (props) => {

    return (
        <section id="contact">

            <div className="">

            <div className="section-head flex justify-center">

                <div className="">

                    <h1 className="text-white"><span>Get In Touch.</span></h1>

                </div>

                <div className="">

                    {/* <p className="lead">{data?.message}</p> */}

                </div>

            </div>

            <div className="flex-col items-center w-[420px]">
                <div className=""> 

                    <form id="contactForm" name="contactForm" className="flex-col justify-center">
                     

                            <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                 <input value="" type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)} /> 
                            </div>

                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                 <input value="" type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e => setEmail(e.target.value)} /> */}
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                 <input value="" type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)} /> */}
                            </div>

                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                 <textarea value="" cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea> 
                            </div>

                            <div>
                              <button type='submit'  className="submit">Submit</button> 
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                      
                    </form>

                 
               
                </div>


                <aside className="footer-widgets">
                    <div className="widget widget_contact">

                        <h4>Address and Phone</h4>
                        <p className="address">
                            {/* {data?.name}<br />
                            {data?.address.street} <br />
                            {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
                            <span>{data?.phone}</span> */}
                        </p>
                    </div>

                    <div className="widget widget_tweets">

                    </div>
                </aside>
            </div>


            
            </div>
        </section>
    );
}

export default Contact;