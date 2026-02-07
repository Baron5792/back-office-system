import { useEffect, useState } from "react";
import styles from '../../assets/css/public/Account.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmission = async (event) => {
        event.preventDefault();
        if (!formData.email) {
            toast.error('An email is required to proceed', {toastId: 'invalid-email'});
            return false;
        }

        if (!formData.password) {
            toast.error('Passwor is required to proceed', {toastId: 'invalid email'});
            return false;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}api/auth/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const request = await response.json();
            if (request.success === false) {
                toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
                return false;
            }

            toast.success('login successful');
            navigate('/auth');
        }

        catch (error) {
            toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
        }
    }

    useEffect(() => {
        document.title = `Login - ${import.meta.env.VITE_APP_NAME}`;
    }, [])
    return (
        <>
            <div className={styles['account_title']}>
                <p>Log Into Account</p>
            </div>
            <form onSubmit={handleSubmission}>
                <div className="row">
                    <div className="form-group col-12 col-md-12 col-lg-12 mb-3">
                        <label htmlFor="email">Email <span className="text-danger">*</span></label>
                        <input type="email" onChange={handleInput} value={formData.email} name="email" className="form-control" id="" />
                    </div>

                    <div className="form-group col-12 col-md-12 col-lg-12 mb-3">
                        <label htmlFor="password">Password <span className="text-danger">*</span></label>
                        <input type="password" onChange={handleInput} value={formData.password} name="password" className="form-control" id="" />
                    </div>

                    <div className={`${styles['submit_btn']}`}>
                        <button type="submit">Submit</button>
                    </div>

                    <div className={`${styles['account_link']}`}>
                        <p>Don't have an account yet? <NavLink to={'/account/register'}>Create account</NavLink></p>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;