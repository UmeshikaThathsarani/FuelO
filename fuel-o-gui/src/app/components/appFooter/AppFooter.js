import React from 'react';
import './AppFooter.css';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  GithubOutlined
} from '@ant-design/icons';




function AppFooter() {
    return(
      <div className="footer-container">
        <div className="about-us">
          <p>About Us:</p>
          <p style={{textAlign: "justify"}}>I am Umeshika Mahaliyadda, an undedrgraduate at IIT, Sri Lanka. 
            This website was developed for my final year project.</p>
        </div>
        <div className="social">
          <p>Contact Us :</p>
          <p>(+94) 76 86 60 203</p>
          <p>Follow Us :</p>
          <p><TwitterOutlined/> &nbsp;&nbsp; <YoutubeOutlined/> &nbsp;&nbsp;
          <InstagramOutlined/> &nbsp;&nbsp; <FacebookOutlined/> &nbsp;&nbsp; 
          <GithubOutlined /> </p>
        </div>
        <div className="copyright-text">
          <p>Copyright &copy; 2023 Fuel-O by Umeshika Mahaliyadda. All Rights Reserved</p>
        </div>
      </div>
    );
}

export default AppFooter;
