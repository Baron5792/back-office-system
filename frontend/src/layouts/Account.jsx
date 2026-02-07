import { Outlet } from "react-router-dom";
import styles from '../assets/css/public/Account.module.css';
import AccountImg from '../assets/images/account/chart-transaction-green.png';
import GirlImg from '../assets/images/account/portrait-of-smiling.jpg';

const Account = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className={`${styles['input_container']} container-fluid`}>
                            <div className="row">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7">
                        <div className={styles['main_image']}>
                            <div className={styles['girl_img']}>
                                <img src={GirlImg} alt="girl-smiling" />
                            </div>
                            <div className={styles['account_img']}>
                                <img src={AccountImg} alt="account image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;