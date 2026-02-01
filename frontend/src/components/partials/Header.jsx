import { NavLink } from 'react-router-dom';
import styles from '../../assets/css/public/Header.module.css';
import Logo from '../../assets/images/logo/logo.png';
import { useEffect, useState } from 'react';
import ThemeToggle from '../../utils/ThemeButton';

const PublicHeader = () => {
    const navLinks = [
        { id: 'home', name: 'Home', to: '/' },
        { id: 'about', name: 'About', to: 'about' },
        { id: 'services', name: 'Services', to: 'services' },
        { id: 'contact', name: 'Contact', to: 'contact' }
    ];

    // for sticky header
    const [sticky, setSticky] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            }

            else {
                setSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <div className={`${styles['header']} ${sticky ? `${styles['sticky_header']}`: ''} container-fluid`}>
                <div className={`container`}>
                    <div className="row">
                        {/* logo */}
                        <div className="col-8 col-md-8 col-lg-2">
                            <div className={styles['logo']}>
                                <NavLink to={'/'}>
                                    <img src={Logo} alt={`${import.meta.env.VITE_APP_NAME} logo`} />
                                </NavLink>
                            </div>
                        </div>
                        {/* links */}
                        <div className={`${styles['desktop_nav_links']} col-0 col-md-0 col-lg-6`}>
                            <div className={styles['nav_links']}>
                                {navLinks && (
                                    navLinks.map((links) => (
                                        <NavLink to={links.to} key={links.id}>{links?.name}</NavLink>
                                    ))
                                )}
                            </div>
                        </div>
                        {/* additional button */}
                        <div className={`${styles['toggle_btn']} col-lg-2 col-2 col-md-2`}>
                            <ThemeToggle />
                        </div>
                        {/* login button */ }
                        <div className={`${styles['login_btn']} col-lg-2 col-0 col-md-2`}>
                            <NavLink to={'account/login'}>
                                <button type="button" className='btn btn-info text-white bi bi-box-arrow-in-right'></button>
                            </NavLink>
                        </div>
                         <div className={`${styles['menu_btn']} col-lg-2 col-2 col-md-2`}>
                            <button onClick={() => setMobileMenu(!mobileMenu)} type="button" className={`btn btn-normal text-secondary ${mobileMenu ? `bi bi-x`: `bi bi-list`}`}></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu nav */}
            <div className={`${mobileMenu ? `${styles['display_mobile_menu']}`: `${styles['hide_mobile_menu']}`}`}>
                <div className={`${styles['mobile_menu_logo']}`}>
                    <img src={Logo} alt={`${import.meta.env.VITE_APP_NAME} logo`} />
                </div>
                {/* mobile menu links */}
                <div className={`${styles['mobile_menu_links']}`}>
                    {navLinks && (
                        navLinks.map((links) => (
                            <NavLink to={links?.to} key={links?.id}>{links?.name}</NavLink>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default PublicHeader;