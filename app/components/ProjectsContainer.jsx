import React from "react"
import styles from '../styles/Projects.css';
import ProjectShort from './ProjectShort'
import ProjectData from '../data/projects.json'

export default class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectSpecs: []
        }
    }
    componentDidMount() {
        this.setState({projectSpecs: ProjectData.projectSpecs});
        console.log("state", this.state);
    }
    // load the data from the local projects file
    // iterate over the data and instantiate ProjectShort for each
    render() {
        return (
            <div>
                {this.state.projectSpecs.map(function(project, key) {
                    return <ProjectShort key={key} spec={project}/>
                })}
            </div>
        )
    }

}
