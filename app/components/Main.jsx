import React from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from "./Header"
import Footer from "./Footer"
require('./main.css')
import styles from '../styles/Main.css'

export default function Main(props) {
    return (
        <div className={styles.appContainer}>
            <Header title="Tony Nikolov" />
            <div className={styles.mainContainer}>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {React.cloneElement(props.children, {key: props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
            <Footer />
        </div>
    )
}
