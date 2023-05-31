import React from 'react';
import SectionHeader from './sections/SectionHeader';
import SingleFaq from './sections/SingleFaq';
function FAQ () {
  return (
    <div>
      <section id="faq" className="faq"> 
        <div className="container">
          <SectionHeader
            focusTitle="F.A.Q"
            titleText="Frequently Asked"
            titleHighlightText="Questions"
          />

          <ul className="faq-list"> 
            <SingleFaq
              SingleFaqTitle="lorem ipsum doler site amit"
              SingleFaqContent="Phasellus vehicula velit eget leo sagittis euismod. Aenean finibus erat eget mattis finibus. Etiam pellentesque enim enim, ut pulvinar massa"
              SingleFaqNumber={1}
            />

             <SingleFaq
              SingleFaqTitle="Another Test"
              SingleFaqContent="Phasellus vehicula velit eget leo sagittis euismod. Aenean finibus erat eget mattis finibus. Etiam pellentesque enim enim, ut pulvinar massa"
              SingleFaqNumber={3}
            />

          
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
