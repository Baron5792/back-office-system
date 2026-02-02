import styles from '../../assets/css/Footer.module.css';
import Logo from '../../assets/images/logo/logo.png';

const PublicFooter = () => {
    return (
        <>
            <div className={styles['main_container']}>
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-md-4 col-lg-4">
                            <div className={styles['footer_logo']}>
                                <img src={Logo} alt="Logo" />
                            </div>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4">
                            <div className={styles['footer_text']}>
                                <p>{import.meta.env.VITE_APP_NAME}</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4">
                            <div className={styles['footer_text']}>
                                <p>@{new Date().getFullYear()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PublicFooter;