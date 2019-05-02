import React from 'react'
import ProjectContainer from './ProjectContainer'
import Row from 'react-bootstrap/Row'
import ProjectsData from './ProjectsData'

function Main(){

    const ProjectCon = ProjectsData.map(project => <ProjectContainer key={project.id} img={project.img} title={project.title}  text={project.text} />)

    return(
        <div className="Main-Container">
            
            <h2 style={{textAlign: 'left', marginLeft: '65px'}}>// Projects</h2>
                <Row className="Row-Projects" style={{display: 'inline-flex', margin: 'auto', padding:'10px', flexWrap: 'nowrap'}}>
                    {ProjectCon}
                </Row> 
            
            
        </div>   
    )
}


export default Main