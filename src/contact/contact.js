import React from 'react';
import Header from '../header/header';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faFacebook,
    faLinkedinIn,
    faGithubSquare,
    faTwitterSquare,
    faStackOverflow,
       } from '@fortawesome/free-brands-svg-icons';
import  './contact.css';


function Contact() {
    return (
        <div className="contact_page">
            <Header />
            <div>
            <h2 className="contact_head">Contact </h2>

             <div className="all_sm_container container">

                <div className="linkedin_container sm_container ">
                 <p>LinkedIn</p>
                 <a href="https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/" className="sm_link" >
                     <FontAwesomeIcon icon={faLinkedinIn}  className="sm_icon"/>
                 </a>
                </div>
             
                <div className="github_container sm_container">
                 <p>GitHub</p>
                 <a href="https://github.com/mj-suryavarma"  className="sm_link" >
                     <FontAwesomeIcon icon={faGithubSquare} className="sm_icon"/>
                 </a>
                </div>
             
                <div className="twitter_container sm_container">
                 <p>Twitter</p>
                 <a href="https://twitter.com/mj_suryavarma"  className="sm_link" >
                     <FontAwesomeIcon icon={faTwitterSquare} className="sm_icon"/>
                 </a>
                </div>
             
                <div className="stackoverflow_container sm_container">
                 <p>Stack Overflow</p>
                 <a href="https://stackoverflow.com/users/16942358/suryavarma-mj"  className="sm_link" >
                     <FontAwesomeIcon icon={faStackOverflow} className="sm_icon"/>
                 </a>
                </div>
             
                <div className="facebook_container sm_container">
                 <p>FaceBook</p>
                 <a href="https://www.facebook.com/mjithendrasuryavarma/" 
                  className="sm_link" >
                     <FontAwesomeIcon icon={faFacebook} className="sm_icon" />
                 </a>
                </div>
             
             </div>
            </div>
     </div>
    )
}

export default Contact
