import React from 'react';
import sectionHeaderStyles from '../styles/SectionHeader.module.css'; // Import the style module

function SectionHeader ({ focusTitle, titleText, titleHighlightText, HeaderDescriptionText }) {
  return (
    <div>
      <div className={sectionHeaderStyles['section-title']}> {/* Use the style module class */}
        {focusTitle && <h2>{focusTitle}</h2>}

        <h3>
          {titleText} <span>{titleHighlightText}</span>
        </h3>

        {HeaderDescriptionText && <p>{HeaderDescriptionText}</p>}
      </div>
    </div> 
  );
}

export default SectionHeader;
