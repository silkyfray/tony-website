import React from "react" 
require('../main.css');

function ProjectShort(props) {
    return (
        <div className="project-short">
            <div className="project-short-inner">
                Project No.
            </div>
        </div>
    )
}

export default function Projects(props) {
    return (
        <div className="content-area">
            <ProjectShort />
            <ProjectShort />
            <ProjectShort />
            <ProjectShort />
        </div>
    )
}
