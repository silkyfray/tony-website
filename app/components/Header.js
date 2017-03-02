import React from "react"
import {styles} from "../styles/index"

export default function Header(props) {
    return (
        <h1 style={styles.bigGlow}>{props.title}</h1>
    )
}
