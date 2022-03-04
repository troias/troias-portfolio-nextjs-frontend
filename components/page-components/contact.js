
import { useFormik } from 'formik';
import * as Yup from 'yup';




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
                <h2>Get in Touch</h2>
            </div>
        <div className="flex justify-center  ">

        
            <form onSubmit={formik.handleSubmit} className=" ">
                <div className=" flex flex-col  w-[50vw] md:w-[30vw]   ">

               
                <label htmlFor="firstName" className="flex justify-center"> Name <span className="">*</span></label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="flex justify-center text-red-600" >{formik.errors.firstName}</div>
                ) : null}

                <label htmlFor="lastName" className="flex justify-center">Subject </label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="flex justify-center text-red-600">{formik.errors.lastName}</div>
                ) : null}

                <label htmlFor="email" className="flex justify-center">Email Address <span className="">*</span></label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="flex justify-center text-red-600">{formik.errors.email}</div>
                ) : null}

                <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        </section>
    );
};




export default Contact;