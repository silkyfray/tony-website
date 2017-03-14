import React from "react" 
import Header from "./Header"
require('./main.css')
import styles from '../styles/Main.css'

export default function Main(props) {
    return (
        <div>
            <Header title="Tony Nikolov" />
            <div style={{width:"100%"}}>
                {props.children}
            </div>
        </div>
    )
}
