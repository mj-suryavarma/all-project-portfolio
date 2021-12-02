import React from 'react';
import Header from '../header/header';
import './home.css';
import webDesign from '../gifsrc/webdes.gif'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="home_page">
            <Header />
            <div className="dark_theme"></div>
              <div className="welcome_container">
                  <h2>Hi, I'm suryavarma jithendra</h2>
                  <h4>I'm a self-taught web developer and a freelancer</h4>
                  <Link to="/projects"><button type="button" className="btn btn-primary mt-3" >See My All Projects</button></Link>
              </div>

            <div className="container gif_container">
            <img src={webDesign} alt="web development gif" className="web_dev_gif">
            </img>
            </div>
            
        </div>

    )
}

export default Home
