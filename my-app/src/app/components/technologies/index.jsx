import React from "react";
import css from "./styles.css";

const Technologies = () => {
  return (
    <section className="styledSection">
      <article className="styledTech">
        <div className="styledContainer">
          <div className="styledShape"></div>
          <div className="styledSeparator"></div>
          <div className="styledContent">
            <div className="styledLogo" data-color="green"></div>

            <div className="styledText">
              <h5>Web Design</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
            
          </div>
        </div>
      </article>

      <article className="styledTechTwo">
        <div className="styledContainer">
          <div className="styledShapeTwo"></div>
          <div className="styledSeparatorTwo"></div>
          <div className="styledContent">
            
            <div className="styledLogo" data-color="pink"></div>

            <div className="styledText">
              <h5>Web Design</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>

          </div>
        </div>
      </article>

      <article className="styledTech">
        <div className="styledContainer">
          <div className="styledShape"></div>
          <div className="styledSeparator"></div>
          <div className="styledContent">
            <div className="styledLogo" data-color="blue"></div>

            <div className="styledText">
              <h5>Web Design</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Technologies;
