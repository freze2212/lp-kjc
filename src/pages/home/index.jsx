import styles from './style.module.css';
import bgVideo from '../../assets/videos/video.webm';
import bgVideoMobile from '../../assets/videos/video-mobile.webm';
import logo from '../../assets/images/logo.png';
import admin_email from '../../assets/images/admin-email.png';
import kjc_vietnam from '../../assets/images/kjc-vietnam.gif';
import kjc_brazil from '../../assets/images/kjc-brazil.gif';
import kjc_philippines from '../../assets/images/kjc-philippines.gif';
import kjc_myanmar from '../../assets/images/kjc-myanmar.gif';
import kjc_pakistan from '../../assets/images/kjc-pakistan.gif';
import megalive_t6 from '../../assets/images/megalive-t6.gif';
import megalive_t7 from '../../assets/images/megalive-t7.gif';
import footer_decor from '../../assets/images/footer-decor.png';
import kjc_warning from '../../assets/images/kjc-warning.png';
import tham_gia_ngay_btn_t6 from '../../assets/images/tham-gia-ngay-btn-t6.gif';
import tham_gia_ngay_btn_t7 from '../../assets/images/tham-gia-ngay-btn-t7.gif';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from 'react-bootstrap';
import './styles.css';

export default function HomePage() {
  const [isShowWarning, setIsShowWarning] = useState(false);

  const TARGET_LINK = "https://gg8846.com/?id=622761070";

  return (
    <>
      <div className={`d-flex flex-column align-items-center justify-content-md-center pt-md-0 pt-5 ${styles.home}`}>
        <video
          className={`z-1 ${styles.backgroundVideo}`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={isMobile ? bgVideoMobile : bgVideo} type="video/webm" />
        </video>

        <div className={`col-lg-3 col-md-5 col-9 z-2 ${styles.logo}`}>
          <img className={`w-100`} src={logo} alt="logo" />
        </div>
        <div className={`col-lg-2 col-md-4 col-6 z-2 mt-md-5 mt-3 ${styles.adminEmail}`}>
          <Link to='mailto:admin@kjc.com'>
            <img className={`w-100`} src={admin_email} alt="admin-email" />
          </Link>
        </div>

        <div className='container d-flex flex-wrap justify-content-center align-items-center z-2 mt-md-5 mt-3'>
          <div className={`${styles.country}`}>
            <Link to={TARGET_LINK} target='_blank'>
              <img className='w-100' src={kjc_vietnam} alt="kjc-vietnam" />
              <div className='mt-md-3 mt-2'>VIỆT NAM</div>
            </Link>
          </div>
          <div className={`${styles.country}`}>
            <Link onClick={() => setIsShowWarning(true)}>
              <img className='w-100' src={kjc_brazil} alt="kjc-brazil" />
              <div className='mt-md-3 mt-2'>BRAZIL</div>
            </Link>
          </div>
          <div className={`${styles.country}`}>
            <Link onClick={() => setIsShowWarning(true)}>
              <img className='w-100' src={kjc_philippines} alt="kjc-philippines" />
              <div className='mt-md-3 mt-2'>PHILIPPINES</div>
            </Link>
          </div>
          <div className={`mt-md-0 mt-3 ${styles.country}`}>
            <Link onClick={() => setIsShowWarning(true)}>
              <img className='w-100' src={kjc_myanmar} alt="kjc-myanmar" />
              <div className='mt-md-3 mt-2'>MYANMAR</div>
            </Link>
          </div>
          <div className={`mt-md-0 mt-3 ${styles.country}`}>
            <Link onClick={() => setIsShowWarning(true)}>
              <img className='w-100' src={kjc_pakistan} alt="kjc-pakistan" />
              <div className='mt-md-3 mt-2'>PAKISTAN</div>
            </Link>
          </div>
        </div>

        {
          isMobile && (
            <div className={`w-100 z-2 position-absolute start-0 bottom-0 ${styles.footerDecor}`}>
              <img className='w-100 h-100 object-fit-fill' src={footer_decor} alt="footer-decor" />
            </div>
          )
        }
      </div>

      {
        isShowWarning && (
          <Modal
            show={isShowWarning}
            onHide={() => setIsShowWarning(false)}
            centered
          >
            <Modal.Body className='p-0'>
              <img className='w-100' src={kjc_warning} alt="kjc_warning" />
            </Modal.Body>
          </Modal>
        )
      }
    </>
  );
}