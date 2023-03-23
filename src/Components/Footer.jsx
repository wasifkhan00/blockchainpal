import React from "react";
import githubIcon from "./Images/github.png";
import linkedinIcon from "./Images/linkedin.png";
import instagramIcon from "./Images/instagram.png";
import twitterIcon from "./Images/twitter.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerInside">
          <div className="box1">
            <h5>Contact</h5>
            <a
              href="https://github.com/wasifkhan00"
              rel="noopener noreferrer"
              target="_blank">
              <img src={githubIcon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/ukhanwasif"
              rel="noopener noreferrer"
              target="_blank">
              <img src={linkedinIcon} alt="" />
            </a>
            <a
              href="https://www.instagram.com/ludacris_lunaism"
              rel="noopener noreferrer"
              target="_blank">
              <img src={instagramIcon} alt="" />
            </a>
            <a
              href="https://twitter.com/RemingtonBrant2"
              rel="noopener noreferrer"
              target="_blank">
              <img src={twitterIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="endFooter">
          <p className="copyright">&#169; Copyright 2022</p>
          <p className="d">Developed and Designed By Wasif Khan</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
