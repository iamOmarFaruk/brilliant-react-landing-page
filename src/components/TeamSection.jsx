import React from 'react'
import SectionHeader from './sections/SectionHeader'
import SingleTeamMember from './sections/SingleTeamMember'

function TeamSection() {
  return (
    <div>
      {/* ======= Team Section ======= */}
      <section id="team" className="team">
        <div className="container">
          <SectionHeader
            focusTitle="TEAM"
            titleText="Our Awesome"
            titleHighlightText="TEAM"
            HeaderDescriptionText="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
          />

          
          <div className="row">
            
            <SingleTeamMember
              TeamMemberImage="team-1.jpg"
              TeamMemberName="Walter White"
              TeamMemberJobTitle="Chief Executive Officer"
            />

            <SingleTeamMember
              TeamMemberImage="team-2.jpg"
              TeamMemberName="Sarah Jhonson"
              TeamMemberJobTitle="Product Manager"
            />

            <SingleTeamMember
              TeamMemberImage="team-3.jpg"
              TeamMemberName="William Anderson"
              TeamMemberJobTitle="CTO"
            />

            <SingleTeamMember
              TeamMemberImage="team-4.jpg"
              TeamMemberName="Amanda Jepson"
              TeamMemberJobTitle="Accountant"
            />
           
          </div>
        </div>
      </section>
      {/* End Team Section */}
    </div>
  )
}

export default TeamSection