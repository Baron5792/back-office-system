import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PublicLayout from './layouts/Public';
import Home from './public/Home';
import Register from './public/auth/Register';
import Account from './layouts/Account';

const App = () => {
    return (
        <>
            <Routes>
                {/* public layout route */}
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<Home />} />

                    {/* for login and register */}
                    <Route element={<Account />} path='account'>
                        <Route element={<Register />} path='register' />
                    </Route>
                </Route>
            </Routes>


            {/* alert */}
            <ToastContainer 
                autoClose={1000}
                position='top-center'
                draggable={false}
                closeOnClick={false}

            />
        </>
    )
}

export default App;