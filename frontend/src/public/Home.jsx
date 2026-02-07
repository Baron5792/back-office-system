import styles from '../assets/css/public/Home.module.css';
import { NavLink } from 'react-router-dom';
import FriendlyAfrican from '../assets/images/home featured/friendly-african.png';
import Revenue from '../assets/images/home featured/revenue.png';
import Payment from '../assets/images/home featured/payment.png';
import Stock from '../assets/images/home featured/stock.png';
import ScrollFadeIn from '../utils/ScrollFadeIn';
import Sales from '../assets/images/home featured/sales-figure.png';
import Empowering from '../components/Public/Empowering';
import PosAssistant2 from '../assets/images/home featured/pos-point-of-sale-terminal-at-register-in-restaurant-2.jpg';
import Graph from '../assets/images/home featured/Graph-2.png';
import Loyalty from '../assets/images/home featured/Costumer-loyalty-2-e1694746847996.png';
import Inventory from '../assets/images/home featured/stock-table-1.png';
import Staff from '../assets/images/home featured/staff-access-2-e1694746966647.png';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = `Home - ${import.meta.env.VITE_APP_NAME}`;
    }, [])
    return (
        <>
            {/* fully integrated system */}
            <div className={`${styles['document_body']} my-3`}>
                <div className={styles['document_border']}>
                    <div className={styles['integrated_system']}>
                        <p>Fully Integrated {import.meta.env.VITE_APP_TITLE} <span className='fa fa-spinner fa-spin text-success'></span></p>
                    </div>
                    
                    <div className={styles['description']}>
                        <p>The Simple, Secure, and Scalable Way to Run Your Business</p>
                    </div>

                    <div className={styles['more_description']}>
                        <p className=''>Centralize your business management in one powerful dashboard. Monitor global inventory, track staff productivity, and maximize your profits with data-driven clarity.</p>
                    </div>

                    {/* register -- learn more */}
                    <div className={styles['register_more']}>
                        <NavLink to={'account/register'}>
                            <button type="button">Get Started</button>
                        </NavLink>
                        <NavLink to={'about'}>
                            <button type="button">Learn More</button>
                        </NavLink>
                    </div>
                </div>  

                {/* images border */}
                <div className={styles['image_border']}>
                    {/* girl with POS */}
                    <div className={styles['african']}>
                        <img src={FriendlyAfrican} alt={'african woman'} />
                    </div>
                    {/* revenue image */}
                    <ScrollFadeIn>
                        <div className={styles['revenue_image']}>
                            <img src={Revenue} alt="revenue" />
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn>
                        <div className={styles['payment_image']}>
                            <img src={Payment} alt="payment image" />
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn>
                        <div className={styles['stock_img']}>
                            <img src={Stock} alt="stock image" />
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn>
                        <div className={styles['sales_image']}>
                            <img src={Sales} alt="sales figure" />
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>

            <Empowering />

            {/* enhance shop management */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className={styles['assistant_image_2']}>
                            <img src={PosAssistant2} alt={`${import.meta.env.VITE_APP_TITLE} image`} />
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className={styles['assistant_description_title']}>
                            <p>Enhance Shop Management Smoother and More Efficient</p>
                        </div>
                        <div>
                            <span className='bi bi-quote fs-1'></span>
                            <p className='container'> Stop juggling multiple tools and start managing your business from a single, centralized dashboard. Our platform automates your daily workflows, protects your sensitive data with enterprise-grade security, and grows alongside your success—from your first shop to your fiftieth. </p>
                            <span className='bi bi-quote fs-1' style={{ transform: 'rotate(180deg)' }}></span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className={styles['empowering_title']}>
                    <p>Empowering Business Key Feature</p>
                    <p>Automate your lending workflow with advanced machine learning. Transform the way your institution evaluates creditworthiness through real-time predictive analytics and comprehensive applicant profiling.</p>
                </div>

                <div className="row">
                    <div className={`${styles['empowering_container']} col-12 col-md-12 col-lg-7`}>
                        <div className={styles['empowering_desc']}>
                            <p>Data-Driven Decision-Making</p>
                            <p>Identify your top-selling products, track sales trends, and adjust your inventory and marketing strategies accordingly.</p>
                        </div>
                        <div className={styles['empowering_image']}>
                            <img src={Graph} alt="Data-Driven Decision-Making" />
                        </div>
                    </div>
                    <div className={`${styles['empowering_container']} col-12 col-md-12 col-lg-5`}>
                        <div className={styles['empowering_desc']}>
                            <p>Customer Loyalty</p>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                        <div className={styles['empowering_image']}>
                            <img src={Loyalty} alt="Data-Driven Decision-Making" />
                        </div>
                    </div>
                    <div className={`${styles['empowering_container']} col-12 col-md-12 col-lg-6`}>
                        <div className={styles['empowering_desc']}>
                            <p>Inventory Control</p>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                        <div className={styles['empowering_image']}>
                            <img src={Inventory} alt="Data-Driven Decision-Making" />
                        </div>
                    </div>
                    <div className={`${styles['empowering_container']} col-12 col-md-12 col-lg-6`}>
                        <div className={styles['empowering_desc']}>
                            <p>Staff Management</p>
                            <p>Customized access for staff to prevent unauthorized access sensitive data</p>
                        </div>
                        <div className={styles['empowering_image']}>
                            <img src={Staff} alt="Data-Driven Decision-Making" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;