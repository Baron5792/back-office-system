import { useEffect } from "react";

const Dashboard = () => {
    useEffect(() => {
        document.title = `Dashboard - ${import.meta.env.VITE_APP_NAME}`;
    }, [])
    return (
        <>
            <p>Dashboard</p>
            <p></p>
        </>
    )
}

export default Dashboard;