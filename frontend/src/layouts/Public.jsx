import { Outlet } from "react-router-dom"
import PublicHeader from "../components/partials/Header"
import PublicFooter from "../components/partials/Footer"

const PublicLayout = () => {
    return (
        <>
            <PublicHeader/>
            <Outlet />
            <footer>
                <PublicFooter />
            </footer>
        </>
    )
}

export default PublicLayout;