import React from 'react';
import Header from '../header/header';
import projectdata from './projectdata';
import './projects.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
            //   const projectdata = projectdata()

    const projectsListDisplay = () => {
        return  projectdata.map((data )=>
        { 
        return <div key={data.id} className="project_container col-xs-6 col-sm-4"> 
        <h2 className="project_name">{data.name}</h2> 
          <p className="project_type" >{data.type}</p>
         <div> 
         </div>
        <div className="project_link_icon_container">
          <div className="source_icon_container">
          <a href={data.git_source} target="_blank" rel="noreferrer" className="source_icon_link">
            <FontAwesomeIcon icon={faGithub} className="source_icon"/>
            </a>
            <div></div>
        </div>

           <div className="open_icon_container">
           <a href={data.url} target="_blank" rel="noreferrer" className="open_icon_link">
               <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="open_icon" />
               </a> 
           </div>
        </div>
         </div>
      })
      
    }    

    return (
        <div className="project_page">
            <Header />
            <h2 className="project_heading">Projects</h2>
            <div className="all_project_container row">
                {projectsListDisplay()}
            </div>
        
        </div>
    )
}

export default Projects
