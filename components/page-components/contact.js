import React, {useEffect, useRef, useState, useCallback} from "react"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineMail } from 'react-icons/ai';
import Notification from "../elements/notification"





const Contact = (props) => {

    const [status, setStatus] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");

    console.log("status", status)

    const contactRef = useRef()

    const sendReftoHeader = useCallback(() => {
        props.headerRef(contactRef)
    }
    , [])

    useEffect(() => {
        sendReftoHeader()
    }, [sendReftoHeader])

    if (status === "success") {
  
        setTimeout(() => {
          setMessage("")
          setTitle("")
          setSubmitting(false);
          setStatus("")
          formik.resetForm();
     
      
        }, 3000);
    
        clearTimeout();
      }

    const formik = useFormik({
        initialValues: {
            name: '',
            subject: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string(), 
            subject: Yup.string(),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().required('Required')
        }),
        handleBlur: () => {
            // console.log('blur')
        },
        onSubmit: values => {
            // console.log('submit', values)
  

            // console.log('innerVals', JSON.stringify(data))


            setMessage("Pending")
            setTitle("Submitting investigation")
            setSubmitting(true);
            setStatus('pending')

            const sendFormData = async () => {
                const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}api/annon-leadform-submissions`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        data: {
                            name: values.name,
                            subject: values.subject,
                            email_address: values.email,
                            message: values.message
                        }
                    })

                })  
                const data = await response.json()
                console.log('data', data)

                if (!data.error ) {
                    setMessage('Message sent!')
                    setTitle('Message sent!')

                    setStatus('success')
                    const timer = setTimeout(() => {
                        setSubmitting(false)
                        clearTimeout(timer)
                    }, 1000);
                        
                }
                else {
                    setMessage('Message failed to send!')
                    setTitle('Message failed to send!')
                    setStatus('error')
                    const timer = setTimeout(() => {

                    setSubmitting(false)
                    formik.resetForm();
                    clearTimeout(timer)
                    }, 1000);
                }
            }
            sendFormData()
      


            
        },
    });
    return (
        <section id="contact"  ref={contactRef}>
                  {status && <Notification message={message} title={title} submitting={submitting} status={status} onClick={() => setSubmitting(false)} />}

            <div className="flex justify-center bg-gray-300 pt-8">

         

            <div className="flex-col justify-center max-w-screen-lg w-full  ">
                <div className="section-head flex justify-center">
                <a href={`mailto:troyflavel@gmail.com`} target="_blank" rel="noreferrer" className="mr-2">
                    <h2><AiOutlineMail className="text-6xl" /></h2>
                </a>
                </div>

                <form onSubmit={formik.handleSubmit} className="flex justify-center ">
                    <div className=" flex flex-col w-2/3  lg:w-2/4   ">

                        
                        <label htmlFor="name" className=" ml-2 "> Name </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className=""
                         
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="flex  text-red-600" >{formik.errors.name}</div>
                        ) : null}

                        <label htmlFor="subject" className="ml-2 mt-2 ">Subject </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.subject}
                            className=""
                          
                        />
                        {formik.touched.subject && formik.errors.subject ? (
                            <div className="flex  text-red-600">{formik.errors.subject}</div>
                        ) : null}

                        <label htmlFor="email" className="ml-2 mt-2">Email Address </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className=""
                          
                        />

                        {formik.touched.email && formik.errors.email ? (
                            <div className="flex  text-red-600">{formik.errors.email}</div>
                        ) : null}

                          <label htmlFor="message" className="ml-2 mt-2 ">Message </label>
                        <textarea 
                        id="message"
                         name="message" 
                          className="focus:text-blue-600    focus:border-blue-300" 
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.message}
                          />
                        {formik.touched.message && formik.errors.message ? (
                            <div className=" text-red-600">{formik.errors.message}</div>
                        ) : null}
                        
                        <div className="mt-4 flex justify-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 ">Submit</button>
                        </div>

                    </div>
                </form>
  
            </div>
            </div>
        </section>
    );
};




export default Contact;