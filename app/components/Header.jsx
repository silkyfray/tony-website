import React from "react"
import { ReactRouter, Link } from "react-router"
import styles from '../styles/Header.css'


function NavLink(props) {
    return (
        <li>
            <Link className={styles.navigationLink} activeClassName={styles.navigationLinkActive} style={{ textDecoration: "none" }} to={props.link}>
                {props.children}
            </Link>
        </li>
    )
}

export default function Header(props) {
    return (
        <div style={{position: "relative"}}>
            <h1 style={{display: "inline"}}>{props.title}</h1>
            <a href="https://www.linkedin.com/in/antonionikolov"><img src='/data/img/Linkedin.png' width="32px" height="32px" style={{ marginLeft: "10px"}}/></a>
            <div style={{ fontSize: "10px", position: "absolute", right:"15px", top:"15px" }}>
                App created with <a href="https://facebook.github.io/react/"><i>React.js</i></a>
            </div>
            <ul className={styles.navigationBar}>
                <NavLink link="/projects">Projects</NavLink>
                <NavLink link="/about">About</NavLink>
                {/*<NavLink link="/contact">Contact</NavLink>*/}
            </ul>
        </div>

    )
}
