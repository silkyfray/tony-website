import React from "react"
import { styles } from "../styles/index"

export default function Header(props) {
    return (
        <div>
            <h1 style={styles.bigGlow}>{props.title}</h1>
            <ul className="navigation-bar">
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

    )
}
