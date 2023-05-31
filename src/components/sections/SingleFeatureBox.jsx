import React from 'react';
import styles from '../styles/SingleFeatureBox.module.css';

function SingleFeatureBox ({ FeatureBoxIcon, FeatureBoxtitle, FeatureBoxContent }) {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 single_feature_box">
      <div className={styles.icon_box}>
        {FeatureBoxIcon && (
          <div className={styles.icon}>
            <i className={`bx ${FeatureBoxIcon}`} />
          </div>
        )}
        <h4 className={styles.title}>
          <a href="#">{FeatureBoxtitle}</a>
        </h4>
        <p className={styles.description}>{FeatureBoxContent}</p>
      </div>
    </div>
  );
}

export default SingleFeatureBox;
