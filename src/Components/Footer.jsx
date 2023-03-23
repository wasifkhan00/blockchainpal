import React from "react";
import githubIcon from './Images/github.png'
import linkedinIcon from './Images/linkedin.png'
import instagramIcon from './Images/instagram.png'
import twitterIcon from './Images/twitter.png'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerInside">
         

         
          <div className="box3">
            <h5>About Developer</h5>
            <p>Wasif Khan is a frontend react developer with 2 years of experience <br/>in frontend development and 4 months experience in nodeJs (backend).<br/>He has also 3 years of experience as a graphics designer and 2 years<br/>  of experience as a Content Writer.</p>
         
          </div>


          <div className="box2">
            
            <h5>About Website</h5>
            <p>This website is built on React that intends to provide historical live cryptocurrencies data to the users. The<br/> current data that is displayed in the graph is about 5 hours earlier data.  The<br/> personal data collected via google login is being saved to the mongodb database by the server for future sign up/login <br/>authentication feature of the website. If you have any queries regarding anything Please feel free to email<br/> the developer at ukhanwasif@gmail.com or reach out via social links provided. </p>
          </div>


          <div className="box1">
            <h5>Contact</h5>
            <a href="https://github.com/wasifkhan00" rel="noopener noreferrer" target="_blank"><img src={githubIcon} alt="" /></a>
            <a href="https://www.linkedin.com/in/ukhanwasif"rel="noopener noreferrer"  target="_blank"><img src={linkedinIcon} alt="" /></a>
            <a href="https://www.instagram.com/ludacris_lunaism" rel="noopener noreferrer" target="_blank"><img src={instagramIcon} alt="" /></a>
            <a href="https://twitter.com/RemingtonBrant2" rel="noopener noreferrer" target="_blank"><img src={twitterIcon} alt="" /></a>
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
