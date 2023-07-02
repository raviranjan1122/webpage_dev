import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <>
      <div className="flexRow header justifyCntr alignCntr">
        <div className="flexRow alignCntr menuContainer">
          <div className="flexAutoRow">
            <a href="/">
              {/* <img className="iqLogo" alt="iqLogo" src="https://www.lg.com/lg5-common-gp/images/common/header/logo-b2c.jpg" /> */}
              <img className="iqLogo" alt="iqLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgovQs-Ju2YGLSRXLwuG0VmqWLodmOSlK3Q&usqp=CAU" />
            </a>
          </div>
          <div className="flexMinWidthRow">
            <nav className="flexRow">
              <ul className="flexRow ulMenu justifyEnd">
                <li className="flexInline listMenu">
                  <span className="flexRow listAnchorSpan pdngMD alignCntr justifyCntr ">
                    Solutions
                    <div className="flexCol drpDwnMnu">
                      <small>ABC</small>

                      <small>XYZ</small>

                      <small>TPL</small>
                    </div>
                  </span>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/product"
                  >
                    Product
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/software"
                  >
                    Software
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/support"
                  >
                    Support
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/aboutus"
                  >
                    About Us
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/constactus"
                  >
                    Constact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
