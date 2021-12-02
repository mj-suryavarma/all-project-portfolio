import React,{useState} from 'react'
import './header.css';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


function Header() {

    const [isToggle,setIsToggle] = useState(false)
    const toggleHandler = () => {
           setIsToggle(!isToggle);
    }

    const themeHandler = () => {
        setIsToggle(false)
    }

    return (<div className="header_bar">
            <Link to="/" style={{textDecoration:'none',color:'white'}}> <div className="logo">
                 &lt;MSJ&#47;&gt;
              </div> </Link>  
              <div className="nav_container nav-bar navbar-expand"> 
              <nav className="nav_bar nav">
                <li className="nav-item">
                    <a href="/" rel="noreferer" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" rel="noreferer"
                     className="nav-link">Contact</a>
                </li>               
                 <li className="nav-item">
                    <a href="/projects" rel="noreferer"
                     className="nav-link">Projects</a>
                </li>
              </nav>
              </div>
              <FontAwesomeIcon icon={faBars} className="bar_icon" onClick={toggleHandler} />
             {/* <div className="menu_bg"></div> */}
            
             <div className="menu_bar_container"  onClick={themeHandler}
             style={isToggle ? {display:'block'} : {display:'none'} }>
             </div>
              <div className="menu_bar bg-light" style={isToggle ? {display:'block'} : {display:'none'} }>
                  <div className="x_bar" onClick={toggleHandler}>X</div>
              <nav className="nav menu">
                <li className="nav-item">
                    <a href="/" rel="noreferrer" className="nav-link menu_link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/contact"  rel="noreferrer" className="nav-link menu_link">Contact</a>
                </li>               
                 <li className="nav-item">
                    <a href="projects"  rel="noreferrer" className="nav-link menu_link">Projects</a>
                </li>
              </nav>
              </div>
        </div>
    )
}

export default Header
