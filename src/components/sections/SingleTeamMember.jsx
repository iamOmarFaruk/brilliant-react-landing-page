import React from 'react';
import styles from '../styles/SingleTeamMember.module.css';







function SingleTeamMember ({
  TeamMemberImage,
  TeamMemberName,
  TeamMemberJobTitle }) {
  return (
    <>
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className={styles.member}>
          <div className={`${styles.member} ${styles.memberImg}`}>
            <img
              src={`assets/img/team/`+TeamMemberImage}
              className="img-fluid"
              alt={TeamMemberName}
            />
            <div className={`${styles.member} ${styles.social}`}>
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className={styles.memberInfo}>
            <h4 className={styles.memberInfoTitle}>{ TeamMemberName}</h4>
            <span>{ TeamMemberJobTitle}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleTeamMember;
