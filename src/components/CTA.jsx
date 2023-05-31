import React from 'react';
import styles from './styles/CTA.module.css';

function CTA ({ ctaTitle, ctaDescription, ctaButtonText, ctaButtonLink, ctaBackgroundImage }) {

  const ctaStyle = {
    background: `linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.8)), url("${ctaBackgroundImage}") center center`,
    backgroundSize: 'cover',
    padding: '60px 0'
  };

  return (
    <div>
      {/* ======= Cta Section ======= */}
      <section id="cta" className={`${styles.cta} cta`} style={ctaStyle}>
        <div className="container">
          <div className="text-center">
            <h3>{ctaTitle}</h3>
            <p>{ctaDescription}</p>
            <a className={`${styles["cta-btn"]} cta-btn`} href={ctaButtonLink}>
              {ctaButtonText}
            </a>
          </div>
        </div>
      </section>
      {/* End Cta Section */}
    </div>
  );
}

export default CTA;
