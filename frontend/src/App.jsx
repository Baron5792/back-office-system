import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PublicLayout from './layouts/Public';
import Home from './public/Home';
import Register from './public/auth/Register';
import Account from './layouts/Account';
import Login from './public/auth/Login';
import About from './public/About';
import Contact from './public/Contact';
import AuthHeader from './components/partials/AuthHeader';
import Dashboard from './auth/Dashboard';

const App = () => {
    return (
        <>
            <Routes>
                {/* public layout route */}
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route element={<About />} path='about' />
                    <Route element={<Contact />} path='contact' />

                    {/* for login and register */}
                    <Route element={<Account />} path='account'>
                        <Route element={<Register />} path='register' />
                        <Route element={<Login />} path='login' />
                    </Route>
                </Route>


                {/* for authenticated users */}
                <Route element={<AuthHeader />} path='auth'>
                    <Route element={<Dashboard />} index />
                </Route>
            </Routes>

            


            {/* alert for application */}
            <ToastContainer 
                autoClose={1000}
                position='top-center'
                draggable={false}
                closeOnClick={false}
                hideProgressBar={true}
                newestOnTop={false}
            />
        </>
    )
}

export default App;