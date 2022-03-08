
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineMail } from 'react-icons/ai';




const Contact = (props) => {

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
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <section id="contact">
            <div className="section-head flex justify-center">
                <h2><AiOutlineMail className="text-6xl"/></h2>
            </div>
        <div className="flex justify-center  ">

        
            <form onSubmit={formik.handleSubmit} className="w-4/6 sm:w-2/4 md:w-2/5 lg:w-2/6 xl:w-1/4">
                <div className=" flex flex-col    ">

               
                <label htmlFor="firstName" className=" "> Name <span className="">*</span></label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className="cursor-pointer mb-2"
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
                    className="cursor-pointer mb-2"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="flex  text-red-600">{formik.errors.lastName}</div>
                ) : null}

                <label htmlFor="email" className=" ">Email Address <span className="">*</span></label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="cursor-pointer mb-2"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className=" text-red-600">{formik.errors.email}</div>
                ) : null}
                    <div className="mt-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 ">Submit</button>
                    </div>
               
                </div>
            </form>
            </div>
        </section>
    );
};




export default Contact;