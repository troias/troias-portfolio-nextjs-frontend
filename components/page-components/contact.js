import React, {useEffect, useRef} from "react"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineMail } from 'react-icons/ai';




const Contact = (props) => {

    const contactRef = useRef()

    const sendReftoHeader = () => {
        props.headerRef(contactRef)
    }

    useEffect(() => {
        sendReftoHeader()
    }, [])

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        handleBlur: () => {
            // console.log('blur')
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <section id="contact"  ref={contactRef}>
            <div className="flex justify-center bg-gray-300 pt-8">

         

            <div className="flex-col justify-center max-w-screen-lg w-full  ">
                <div className="section-head flex justify-center">
                    <h2><AiOutlineMail className="text-6xl" /></h2>
                </div>

                <form onSubmit={formik.handleSubmit} className="flex justify-center ">
                    <div className=" flex flex-col w-2/3  lg:w-2/4   ">


                        <label htmlFor="firstName" className=" "> Name </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            className=""
                            placeholder="name"
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="flex  text-red-600" >{formik.errors.firstName}</div>
                        ) : null}

                        <label htmlFor="lastName" className="flex ">Subject </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            className=""
                            placeholder="Subject"
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="flex  text-red-600">{formik.errors.lastName}</div>
                        ) : null}

                        <label htmlFor="email" className=" ">Email Address </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className=""
                            placeholder="Email Address"
                        />
                          <label htmlFor="email" className=" ">Message </label>
                        <textarea id="email" name="email" placeholder="Message" className="focus:text-blue-600    focus:border-blue-300" />
                        {formik.touched.email && formik.errors.email ? (
                            <div className=" text-red-600">{formik.errors.email}</div>
                        ) : null}
                        
                        <div className="mt-4 flex justify-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 ">Submit</button>
                        </div>

                    </div>
                </form>
                {/* <div id="go-top">
               <a className="smoothscroll " title="Back to Top" href="#home">
                  <FaChevronCircleUp className="hover:bg-[#0F9095] rounded-[100%]" />
               </a>
            </div> */}
            </div>
            </div>
        </section>
    );
};




export default Contact;