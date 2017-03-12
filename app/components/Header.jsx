import React from "react"
import { ReactRouter, Link } from "react-router"
import styles from '../styles/Header.css'


function NavLink(props) {
    return (
        <li>
            <Link className={styles.navigationLink} activeClassName={styles.navigationLinkActive} style={{textDecoration: "none"}} to={props.link}>
                {props.children}
            </Link>
        </li>
    )
}

export default function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul className={styles.navigationBar}>
                <NavLink link="/projects">Projects</NavLink>
                <NavLink link="/about">About</NavLink>
                <NavLink link="/contact">Contact</NavLink>
            </ul>
        </div>

    )
}
