import React from 'react'

function Hero ({
  heroImage,
  headingText,
  headingSubText,
  headingButtonText,
  headingButtonLink

}) {
  
  const heroStyle = {
    background: `url("assets/img/${heroImage}") center center`,
  };


  return (
    <div>
    
      {/* ======= Hero Section ======= */}
      <section id="hero" style={heroStyle}>
        <div className="hero-container">
          <div className='col-md-8'>
            <h3>
              Welcome to <strong>BRILLIANT TEAM</strong>
            </h3>
            <h1>{headingText}</h1>
            <h2>
              {headingSubText}
            </h2>
            <a href={headingButtonLink} className="btn-get-started scrollto">
              {headingButtonText}
            </a>
          </div>
        </div>
      </section>
      {/* End Hero */}
    
    </div>
  )
}

export default Hero