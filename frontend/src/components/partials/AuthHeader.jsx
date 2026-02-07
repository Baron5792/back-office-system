import { NavLink, Outlet, useNavigate } from "react-router-dom";
import LogoImg from '../../assets/images/logo/logo.png';
import styles from '../../assets/css/auth/Header.module.css';
import { Dropdown } from 'react-bootstrap';
import ThemeToggle from "../../utils/ThemeButton";
import AvatarImg from '../../assets/images/avatar/default.png';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CheckAuthentication } from "../../service/CheckAuth";
import { useUser } from "../../utils/UserContext";

const AuthHeader = () => {
    const { user, refreshUser } = useUser();
    const openDashboard = () => {
        navigate('/auth');
    }

    // for products
    const [products, setProducts] = useState(false);
    const openProducts = (event) => {
        event.preventDefault();
        setProducts(!products);
    }

    const [expenses, setExpenses] = useState(false);
    const openExpenses = (event) => {
        event.preventDefault();
        setExpenses(!expenses);
    }

    const [purchases, setPurchases] = useState(false);
    const openPurchases = (event) => {
        event.preventDefault();
        setPurchases(!purchases);
    }

    const [sales, setSales] = useState(false);
    const openSales = (event) => {
        event.preventDefault();
        setSales(!sales);
    }

    const [salesReturn, setSalesReturn] = useState(false);
    const openSalesReturn = (event) => {
        event.preventDefault();
        setSalesReturn(!salesReturn);
    }

    const [purchaseReturn, setPurchaseReturn] = useState(false);
    const openPurchaseReturn = (event) => {
        event.preventDefault();
        setPurchaseReturn(!purchaseReturn);
    } 

    const [settings, setSettings] = useState(false);
    const openSettings = (event) => {
        event.preventDefault();
        setSettings(!settings);
    }

    const logOut = (event) => {
        event.preventDefault();
        toast.info('logout');
    }

    const [profile, setProfile] = useState(false);
    const openProfile = (event) => {
        event.preventDefault();
        setProfile(!profile);
    }

    const [manageUsers, setManageUsers] = useState(false);
    const manageTeam = (event) => {
        event.preventDefault();
        setManageUsers(!manageUsers);
    }

    const navigate = useNavigate();
    const navLinks = [
        { id: 'dashboard', name: 'Dashboard', to: '/auth', callBack: openDashboard, icon: 'bi bi-grid' },
        { id: 'Products', name: 'Products', to: '/auth/products', callBack: openProducts, icon: 'bi bi-box-seam' },
        { id: 'profile', name: 'Profile Settings', to: '/auth/profile', callBack: openProfile, icon: 'bi bi-person-gear' },
        { id: 'expenses', name: 'Expenses', to: '/auth/exppenses', callBack: openExpenses, icon: 'bi bi-wallet2' },
        { id: 'purchases', name: 'Purchases', to: '/auth/purchases', callBack: openPurchases, icon: 'bi bi-cart-check' },
        // { id: 'sales', name: 'Sales', to: '/auth/sales', callBack: openSales, icon: 'bi bi-graph-up-arrow' },
        // { id: 'sales return', name: 'Sales Return', to: '/auth/sales-return', callBack: openSalesReturn, icon: 'bi bi-arrow-return-left' },
        // { id: 'purchase return', name: 'Purchase Return', to: '/auth/purchase-return', callBack: openPurchaseReturn, icon: 'bi bi-arrow-counterclockwise' },
        { id: 'manageUsers', name: 'Manage Users', to: '/auth/users/', callBack: manageTeam, icon: 'bi bi-people' },
        { id: 'settings', name: 'Settings', to: '/auth/settings', callBack: openSettings, icon: 'bi bi-gear' },
        { id: 'reports', name: 'Logout', to: '/auth/logout', callBack: logOut, icon: 'bi bi-power' }
    ];

    // for products
    const productList = [
        { id: 'create', name: 'Create Product', to: '/auth/product/create-product' },
        { id: 'list', name: 'Product List', to: '/auth/product/product-list' },
    ]

    // for profile settings
    const profileList = [
        { id: 'profile', name: 'My Profile', to: '/auth/profile/' },
        { id: 'profile settings', name: 'Settings', to: '/auth/profile/settings' }
    ]

    // for expenses
    const expensesList = [
        { id: 'create', name: 'Create Expenses', to: '/auth/expenses/' },
        { id: 'list', name: 'Expenses List', to: '/auth/expenses/expenses-list' },
        { id: 'category', name: 'Expenses Category', to: '/auth/expenses/category' }
    ]

    // for purchases
    const purchasesList = [
        { id: 'create', name: 'Create Purchases', to: '/auth/purchases/' },
        { id: 'list', name: 'Purchases List', to: '/auth/purchases/urchases-list' }
    ]

    const manageTeamList = [
        { id: 'create', name: 'Create User', to: '/auth/users/create' },
        { id: 'manage', name: 'Manage Team', to: '/auth/users/manage' }
    ]

    const settingsList = [
        { id: 'password', name: 'Change Password', to: '/auth/settings/change-password' },
        { id: 'category', name: 'Category', to: '/auth/settings/category' },
        { id: '2fa', name: '2fa Authentication', to: '/auth/settings/2fa' }
    ]

    const [desktopSideNav, setDesktopSideNav] = useState(true);
    const openSideBar = () => {
        setDesktopSideNav(!desktopSideNav);
    }

    const [status, setStatus] = useState({ loading: true, authenticated: false });
    useEffect(() => {
        const verify = async () => {
            try {
                const result = await CheckAuthentication();
                setStatus({
                    loading: false,
                    authenticated: result.isAuthenticated
                });
                
                if (result.isAuthenticated === false) {
                    navigate('/account/login');
                }
            }

            catch (error) {
                toast.error(error.message || 'Something went wrong', {toastId: 'something-error'});
            }
        }
        verify();
    }, [])

    if (status.loading) {
        return (
            <>
                <div className="text-center small text-secondary my-5">
                    <span className="fa fa-spinner fa-spin"></span>
                </div>
            </>
        )
    }

    return (    
        <>
            <div className={`${styles['header_main_container']} container-fluid`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`${styles['left_top_nav']} col-12 col-md-4 col-lg-3`}>
                            <div className="d-flex justify-content-between">
                                <div className={styles['logo_img']}>
                                    <NavLink to={'/auth'}>
                                        <img src={LogoImg} alt="logo" />
                                    </NavLink>
                                </div>
                                <div>
                                    <button onClick={openSideBar} type="button" className={`btn btn-normal text-secondary ${desktopSideNav ? `bi bi-list`: `bi bi-x`} fs-4`}></button>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['right_top_nav']} col-12 col-md-8 col-lg-9`}>
                            <div className={`${styles['nav_link_container']} col-12 col-md-12 col-lg-6`}>
                                <div className="row">
                                    <div className="col-3 col-md-2 col-lg-2">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="normal" className={`${styles['notification_btn']} fs-5`}>
                                                <span className="bi bi-bell"></span>
                                                <span className={`${styles['notification_icon']}`}>1</span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className={styles['notification_dropdown']}>
                                                <div className="d-flex my-2">
                                                    <div>
                                                        <span className="bi bi-dot fs-5 text-success"></span>
                                                        <span></span>
                                                    </div>
                                                    <div className={styles['notify_message']}>
                                                        <p className="m-0">You have requested a withdrawal</p>
                                                        <p className="m-0">2 hrs ago</p>
                                                    </div>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-3 col-md-2 col-lg-2">
                                        <ThemeToggle /> 
                                    </div>
                                    {/* users avatar */}
                                    <div className="col-3 col-md2 col-lg-6">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="normal" className={styles['user_drop_btn']}>
                                                <div className="row">
                                                    <div className="col-12 col-md-12 col-lg-5">
                                                        <div className={styles['avatar']}>
                                                            <img src={AvatarImg} alt="avatar" />
                                                        </div>
                                                    </div>
                                                    {user && (
                                                        <div className={`${styles['users_info']} col-0 col-md-0 col-lg-7`}>
                                                            <p>{user.firstname + ' ' + user.lastname}</p>
                                                            <p>Admin</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className={styles['users_info_dropdown']}>
                                                <NavLink>My Profile</NavLink>
                                                <NavLink>Settings</NavLink>
                                                <NavLink>Logout</NavLink>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-3 col-md-2 col-lg-2">
                                        <button type="button" className="btn btn-normal bi bi-gear fs-4 text-secondary"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* sidebar for desktop */}
            <div className="container-fluid">
                <div className="row">
                    <div className={desktopSideNav ? `col-lg-3`: `d-none col-lg-0`}>
                        <div className={desktopSideNav ? `${styles['open_desktop_sideNav']}`: `${styles['close_desktop_sideNav']}`}>
                            <div className={desktopSideNav ? styles.open_desktop_sideNav : styles.close_desktop_sideNav}>
                                <div className={styles['desktop_sideNav_scroll']}>
                                    {navLinks && (
                                        <>
                                            <div className={styles['desktop_nav_links']}>
                                                {navLinks.map((links, index) => (
                                                    <div key={links.id || index + 1}>
                                                        <NavLink 
                                                            to={links?.to} 
                                                            onClick={links.callBack} 
                                                            end
                                                            className={({ isActive }) => isActive ? `${styles['active']}`: `${styles['notActive']}`}
                                                        >
                                                            <span className={`${links?.icon}`}></span> 
                                                            {links.name}
                                                        </NavLink>

                                                        {/* for sub links */}
                                                        {links.id === 'Products' && products && (
                                                            <div className={styles['sub_menu_container']}>
                                                                {productList.map((subItem) => (
                                                                    <NavLink 
                                                                        key={subItem.id} 
                                                                        to={subItem.to}
                                                                        className={({ isActive }) => 
                                                                            isActive ? styles.sub_active : styles.sub_notActive
                                                                        }
                                                                    >
                                                                        {subItem.name}
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {links.id === 'profile' && profile && (
                                                            <div className={styles['sub_menu_container']}>
                                                                {profileList.map((subItem) => (
                                                                    <NavLink 
                                                                        key={subItem.id} 
                                                                        to={subItem.to}
                                                                        className={({ isActive }) => 
                                                                            isActive ? styles.sub_active : styles.sub_notActive
                                                                        }
                                                                    >
                                                                        {subItem.name}
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {links.id === 'expenses' && expenses && (
                                                            <div className={styles['sub_menu_container']}>
                                                                {expensesList.map((subItem) => (
                                                                    <NavLink 
                                                                        key={subItem.id} 
                                                                        to={subItem.to}
                                                                        className={({ isActive }) => 
                                                                            isActive ? styles.sub_active : styles.sub_notActive
                                                                        }
                                                                    >
                                                                        {subItem.name}
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {links.id === 'purchases' && purchases && (
                                                            <div className={styles['sub_menu_container']}>
                                                                {purchasesList.map((subItem) => (
                                                                    <NavLink 
                                                                        key={subItem.id} 
                                                                        to={subItem.to}
                                                                        className={({ isActive }) => 
                                                                            isActive ? styles.sub_active : styles.sub_notActive
                                                                        }
                                                                    >
                                                                        {subItem.name}
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {links.id === 'manageUsers' && manageUsers && (
                                                            <div className={styles['sub_menu_container']}>
                                                                {manageTeamList.map((subItem) => (
                                                                    <NavLink 
                                                                        key={subItem.id} 
                                                                        to={subItem.to}
                                                                        className={({ isActive }) => 
                                                                            isActive ? styles.sub_active : styles.sub_notActive
                                                                        }
                                                                    >
                                                                        {subItem.name}
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {links.id === 'settings' && settings && (
                                                            <div className={styles['sub_menu_container']}>
                                                                {settingsList.map((subItem) => (
                                                                    <NavLink 
                                                                        key={subItem.id} 
                                                                        to={subItem.to}
                                                                        className={({ isActive }) => 
                                                                            isActive ? styles.sub_active : styles.sub_notActive
                                                                        }
                                                                    >
                                                                        {subItem.name}
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={desktopSideNav ? "col-lg-9" : "col-lg-12"} 
                        style={{ transition: 'all 0.5s ease' }}>
                        <Outlet />
                    </div>
                </div>
            </div>




            {/* sidebar for mobile */}
            <div className={desktopSideNav ? `${styles['close_mobile_nav']}`: `${styles['mobile_side_nav']}`}>
                <div className={styles['mobile_nav_links']}>
                    {navLinks && (
                        navLinks.map((links, index) => (
                            <div key={links.id || index}>
                                <NavLink 
                                    to={links?.to} 
                                    onClick={(event) => {
                                        if (links.callBack) links.callBack(event);
                                        // setDesktopSideNav(!desktopSideNav)
                                    }} 
                                    end
                                    className={({ isActive }) => isActive ? `${styles['mobile_active']}`: `${styles['mobile_notActive']}`}
                                >
                                    <span className={`${links?.icon}`}></span> 
                                    {links.name}
                                </NavLink>
                                {links.id === 'Products' && products && (
                                    <div className={styles['sub_menu_container']}>
                                        {productList.map((subItem) => (
                                            <NavLink 
                                                key={subItem.id} 
                                                to={subItem.to}
                                                className={({ isActive }) => 
                                                    isActive ? styles.sub_active : styles.sub_notActive
                                                }
                                            >
                                                {subItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}

                                {links.id === 'profile' && profile && (
                                    <div className={styles['sub_menu_container']}>
                                        {profileList.map((subItem) => (
                                            <NavLink 
                                                key={subItem.id} 
                                                to={subItem.to}
                                                className={({ isActive }) => 
                                                    isActive ? styles.sub_active : styles.sub_notActive
                                                }
                                            >
                                                {subItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}

                                {links.id === 'expenses' && expenses && (
                                    <div className={styles['sub_menu_container']}>
                                        {expensesList.map((subItem) => (
                                            <NavLink 
                                                key={subItem.id} 
                                                to={subItem.to}
                                                className={({ isActive }) => 
                                                    isActive ? styles.sub_active : styles.sub_notActive
                                                }
                                            >
                                                {subItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}

                                {links.id === 'purchases' && purchases && (
                                    <div className={styles['sub_menu_container']}>
                                        {purchasesList.map((subItem) => (
                                            <NavLink 
                                                key={subItem.id} 
                                                to={subItem.to}
                                                className={({ isActive }) => 
                                                    isActive ? styles.sub_active : styles.sub_notActive
                                                }
                                            >
                                                {subItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}

                                {links.id === 'manageUsers' && manageUsers && (
                                    <div className={styles['sub_menu_container']}>
                                        {manageTeamList.map((subItem) => (
                                            <NavLink 
                                                key={subItem.id} 
                                                to={subItem.to}
                                                className={({ isActive }) => 
                                                    isActive ? styles.sub_active : styles.sub_notActive
                                                }
                                            >
                                                {subItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}

                                {links.id === 'settings' && settings && (
                                    <div className={styles['sub_menu_container']}>
                                        {settingsList.map((subItem) => (
                                            <NavLink 
                                                key={subItem.id} 
                                                to={subItem.to}
                                                className={({ isActive }) => 
                                                    isActive ? styles.sub_active : styles.sub_notActive
                                                }
                                            >
                                                {subItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
            
            
        </>
    )
}

export default AuthHeader;