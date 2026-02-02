import { useEffect } from "react";

const Register = () => {
    useEffect(() => {
        document.title = `Register - ${import.meta.env.VITE_APP_NAME}`;
    }, [])
    return (
        <>
            <p>register</p>
        </>
    )
}

export default Register;