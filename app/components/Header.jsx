import React from "react"
import { ReactRouter, Link } from "react-router"
import { styles } from "../styles/index"


function NavLink(props) {
    return (
        <li>
            <Link className="navigation-link" activeClassName="navigation-link-active" style={{textDecoration: "none"}} to={props.link}>
                {props.children}
            </Link>
        </li>
    )
}

export default function Header(props) {
    return (
        <div>
            <h1 style={styles.bigGlow}>{props.title}</h1>
            <ul className="navigation-bar">
                <NavLink link="/projects">Projects</NavLink>
                <NavLink link="/about">About</NavLink>
                <NavLink link="/contact">Contact</NavLink>
            </ul>
        </div>

    )
}
