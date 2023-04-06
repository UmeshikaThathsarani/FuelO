import React from 'react';
import './AppFooter.css';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined
} from '@ant-design/icons';




function AppFooter() {
    return(
      <div className="footer-container">
        <div className="about-us">
          <p>We are a group of students of IIT, Sri Lanka.
            Making this webpage for one of our project module.</p>
        </div>
        <div className="mobile">
          <p>Contact on : (+94) 76 86 60 203</p>
        </div>
        <div className="social">
          <p>Follow on : <TwitterOutlined/>  <YoutubeOutlined/>
          <InstagramOutlined/>  <FacebookOutlined/></p>
        </div>
        <div className="copyright-text">
          <p>Copyright &copy; 2021 TeamX, Sri Lanka. All Rights Reserved</p>
        </div>
      </div>
    );
}

export default AppFooter;
