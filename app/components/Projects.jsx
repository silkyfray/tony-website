import React from "react"
require('../main.css');

function ProjectShort(props) {
    return (
        <div className="project-short">
            <div className="project-short-inner">
                <div className="project-short-topinfo">
                    <h3 className="project-short-header">Long Long Long Long Long Name Long Long Long Long Long Name</h3>
                    <img src="http://vignette2.wikia.nocookie.net/uncyclopedia/images/4/44/White_square.png/revision/latest?cb=20061003200043"
                        className="project-short-image" />
                    <div className="project-short-subheader">2017 Personal</div>
                </div>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
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
