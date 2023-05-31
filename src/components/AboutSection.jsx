import React from 'react'
import SectionHeader from './sections/SectionHeader'

function AboutSection() {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container"> 

          <SectionHeader
            focusTitle="ABOUT"
            titleText="Learn More"
            titleHighlightText="About Us"
            HeaderDescriptionText="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
          />


          <div className="row content">
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line" /> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="ri-check-double-line" /> Duis aute irure dolor
                  in reprehenderit in voluptate velit
                </li>
                <li>
                  <i className="ri-check-double-line" /> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <a href="#" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>



          
        </div>
      </section>
      {/* End About Section */}
    </div>
  )
}

export default AboutSection