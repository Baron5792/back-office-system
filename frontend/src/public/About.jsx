import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = `About - ${import.meta.env.VITE_APP_NAME}`;
    }, [])
    return (
        <>
            
        </>
    )
}

export default About;