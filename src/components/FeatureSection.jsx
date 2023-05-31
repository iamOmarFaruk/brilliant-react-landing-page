import React from 'react'
import SectionHeader from './sections/SectionHeader'
import SingleFeatureBox from './sections/SingleFeatureBox'

function FeatureSection() {
  return (
    <div>
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
          

          <SectionHeader
            focusTitle="SERVICES"
            titleText="We do offer awesome"
            titleHighlightText="Services"
            HeaderDescriptionText="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
          />


          <div className="row">
            
            <SingleFeatureBox
              FeatureBoxIcon="bxl-react"
              FeatureBoxtitle="Service Title"
              FeatureBoxContent="This is awesome icon description text"
            />

            <SingleFeatureBox
              FeatureBoxIcon="bx-file"
              FeatureBoxtitle="Service Title"
              FeatureBoxContent="This is awesome icon description text"
            />

            <SingleFeatureBox
              FeatureBoxIcon="bx-tachometer"
              FeatureBoxtitle="Service Title"
              FeatureBoxContent="This is awesome icon description text"
            />

            <SingleFeatureBox
              FeatureBoxIcon="bx-world"
              FeatureBoxtitle="Service Title"
              FeatureBoxContent="This is awesome icon description text"
            />


          </div>
        </div>
      </section>
      {/* End Services Section */}
    </div>
  )
}

export default FeatureSection