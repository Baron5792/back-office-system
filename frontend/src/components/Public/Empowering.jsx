import styles from '../../assets/css/public/Empowering.module.css';
import CactusImg from '../../assets/images/empowering/Cactus.png';
import LeafeImg from '../../assets/images/empowering/Leafe-1.png';
import MintyImg from '../../assets/images/empowering/Minty.png';
import ProLineImg from '../../assets/images/empowering/ProLine.png';
import TraceImg from '../../assets/images/empowering/Trace-1.png';

export default function Empowering() {
    const images = [CactusImg, LeafeImg, MintyImg, ProLineImg, TraceImg];
    return (
        <>  
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={styles['empowering_text']}>
                            <p>Empowering Countless</p>
                            <p>Businesses Worldwide</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-8">
                        <div className={styles['slider_container']}>
                            <div className={styles['slider_track']}>
                                {/* Render the images twice for the infinite loop effect */}
                                {[...images, ...images].map((img, index) => (
                                    <div className={styles['slide']} key={index}>
                                        <img src={img} alt={`brand-${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}