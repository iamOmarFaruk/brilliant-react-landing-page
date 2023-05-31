import React from 'react';
import styles from './styles/FooterCredit.module.css';

function FooterCredit () {
  return (
    <>
      <div className={`${styles.container} container d-md-flex py-4`}>
        <div className="me-md-auto text-center text-md-start">
          <div className={`${styles.credits} copyright`}>
            © Copyright{" "}
            <strong>
              <span>BRILLIANT</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div className={`${styles['social-links']} text-center text-md-right pt-3 pt-md-0`}>
          <a href="#" className="twitter">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype" />
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin" />
          </a>
        </div>
      </div>
    </>
  );
}

export default FooterCredit;
