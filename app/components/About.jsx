import React from "react"
import styles from '../styles/About.css';
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

import AboutData from '../data/aboutSnippets.json'

function InputButton(props) {
    return (
        <span className={styles.chatBoxInputButton}
            onClick={props.onClickHandler}>
            <img src={props.imageUrl} />
            {props.children}
        </span>
    )
}

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippets: []
        }
    }
    componentDidMount() {
        this.setState({ snippets: AboutData })
    }
    // Input handlers
    onNextHandler() {
        console.log("next button pressed");
    }
    onSkipHandler() {
        console.log("skip button pressed");
    }
    render() {
        return (
            <div className={styles.contentArea}>
                <div className={styles.chatBoxContainer}>
                    <div className={styles.chatBoxMessages}>
                        {/*Place snippets here*/}
                    </div>
                    <div className={styles.chatBoxInput}>
                        <InputButton imageUrl="/data/img/ic_play_arrow_white_36px.svg"
                            onClickHandler={this.onNextHandler}>
                            Next
                </InputButton>
                        <InputButton imageUrl="/data/img/ic_fast_forward_white_36px.svg"
                            onClickHandler={this.onSkipHandler}>
                            Skip to the end
                </InputButton>
                    </div>
                </div>
            </div>
        )
    }

}
