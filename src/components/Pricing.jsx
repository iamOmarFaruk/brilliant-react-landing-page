import React from 'react'
import SectionHeader from './sections/SectionHeader'
import PricingTable from './sections/PricingTable'

function Pricing () {
  return (
    <>
      {/* ======= Pricing Section ======= */}
      <section id="pricing" className="pricing">
        <div className="container">
          
          <SectionHeader
            focusTitle="PRICING"
            titleText="Our Competing"
            titleHighlightText="Prices"
            HeaderDescriptionText="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
          />

          <div className="row">
          
            <PricingTable recomended={false} />
            <PricingTable recomended={true} />
            <PricingTable recomended={false} />

            


            



           



            
          </div>
        </div>
      </section>
      {/* End Pricing Section */}
    </>
  )
}

export default Pricing