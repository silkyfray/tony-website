import React from "react" 
import Header from "./Header"
require('../main.css');

export default function Main(props) {
    return (
        <div className="main-container">
            <Header title="Tony Nikolov" />
            {props.children}
        </div>
    )
}
