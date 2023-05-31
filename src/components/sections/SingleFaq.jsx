import React, { useState } from "react";

function SingleFaq({ SingleFaqTitle, SingleFaqContent, SingleFaqNumber }) {
  const [collapse, setCollapse] = useState("");
  const [icon, setIcon] = useState("bi bi-chevron-down");
  const [showDetails, setshowDetails] = useState(false);

  const setCollaps = () => {
    setCollapse(collapse === "" ? "show" : "");
    setIcon(collapse === "" ? "bi bi-chevron-up" : "bi bi-chevron-down");
    setshowDetails(!showDetails); // toggle showDetails state
  };

  return (
    <li>
      <div
        data-bs-toggle="collapse"
        className="collapsed question collapsed-question"
        href={"#faq" + SingleFaqNumber}
        onClick={setCollaps}
      >
        {SingleFaqTitle}
        <i className={icon + " icon-show"} />
      </div>

      { showDetails &&
        <div
          className="slide-up"
          id={"faq" + SingleFaqNumber}
          data-bs-parent=".faq-list"
        >
          <p>{SingleFaqContent}</p>
        </div>
      }
      
    </li>
  );
}

export default SingleFaq;
