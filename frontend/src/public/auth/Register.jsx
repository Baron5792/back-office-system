import { useEffect, useState } from "react";
import styles from '../../assets/css/public/Account.module.css';
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const [submitBtn, setSubmitBtn] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitBtn(true);
        try {
            const response = await fetch (`${import.meta.env.VITE_APP_API_URL}api/auth/register`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const request = await response.json();
            if (request.success === false) {
                setTimeout(() => {
                    toast.error(request.message || 'Something went wrong', {toastId: 'error'});
                    setSubmitBtn(false);
                }, 3000);
                return false;
            }

            toast.success('Registration successful!', {toastId: 'success'});
            navigate('/account/login');
        }

        catch (error) {
            setTimeout(() => {
                toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
                setSubmitBtn(false);
            })
        }
    }

    useEffect(() => {
        document.title = `Register - ${import.meta.env.VITE_APP_NAME}`;
    }, [])
    return (
        <>
            <div className={styles['account_title']}>
                <p>Create an Account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group col-6 col-md-6 col-lg-6 mb-3">
                        <label htmlFor="firstname">First Name <span className="text-danger">*</span></label>
                        <input type="text" onChange={handleInput} value={formData.firstname} name="firstname" className="form-control" id="" />
                    </div>

                    <div className="form-group col-6 col-md-6 col-lg-6 mb-3">
                        <label htmlFor="lastname">Last Name <span className="text-danger">*</span></label>
                        <input type="text" onChange={handleInput} value={formData.lastname} name="lastname" className="form-control" id="" />
                    </div>

                    <div className="form-group col-12 col-md-12 col-lg-12 mb-3">
                        <label htmlFor="email">Email <span className="text-danger">*</span></label>
                        <input type="email" onChange={handleInput} value={formData.email} name="email" className="form-control" id="" />
                    </div>

                    <div className="form-group col-12 col-md-12 col-lg-12 mb-3">
                        <label htmlFor="password">Password <span className="text-danger">*</span></label>
                        <input type="password" onChange={handleInput} value={formData.password} name="password" className="form-control" id="" />
                    </div>

                    <div className="form-group col-12 col-md-12 col-lg-12 mb-3">
                        <label htmlFor="confirm password">Confirm Password <span className="text-danger">*</span></label>
                        <input type="password" onChange={handleInput} value={formData.confirm_password} name="confirm_password" className="form-control" id="" />
                    </div>

                    <div className={`${styles['submit_btn']}`}>
                        <button type="submit" disabled={submitBtn}>{submitBtn ? (
                            <span>Verifying...<i className="fa fa-spinner fa-spin small"></i></span>
                        ): (
                            <span>Submit</span>
                        )}</button>
                    </div>

                    <div className={`${styles['account_link']}`}>
                        <p>Already have an account? <NavLink to={'/account/login'}>Log In</NavLink></p>
                    </div>
                </div>
            </form>
            
        </>
    )
}

export default Register;