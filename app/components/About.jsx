import React from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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

function SkillsAside(props) {
    return (
        <div className={props.cssStyle}>
            {props.pictureUrl && <img src={props.pictureUrl} className={styles.skillAsidePicture} />}
            <h3>{props.header}</h3>
            <div >
                <ReactCSSTransitionGroup className={styles.skillTagContainer}
                    transitionName="scale"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {
                        props.tags.map(function (tag, key) {
                            return (<b key={key} className={styles.skillTag}>{tag}</b>)
                        }, this)
                    }
                </ReactCSSTransitionGroup>
            </div>
        </div>
    )
}

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.personalAsideKey = "personal";
        this.technicalAsideKey = "technical";
        this.state = {
            snippets: [],
            currSnippetIndex: 0,
            skipTyping: false

        }
    }

    // lifecycle hooks
    componentWillMount() {
        this.setState({ snippets: AboutData })
    }
    shouldComponentUpdate(nextProps, nextState) {
        // if(this.state.currSnippetIndex >= this.state.snippets.length - 1)
        //     return false;
        return true;
    }
    // Callback handlers
    onNextHandler() {
        this.setNextSnippet(this.state.currSnippetIndex + 1);
    }
    onSkipHandler() {
        this.setState({ skipTyping: true });
        this.setNextSnippet(this.state.snippets.length - 1)
    }
    onTypingDoneHandler() {
        var currSnippet = this.state.snippets[this.state.currSnippetIndex];
        if (currSnippet.autoContinue === true) {
            this.setNextSnippet(this.state.currSnippetIndex + 1);
        }
    }
    // state mutation 
    setNextSnippet(index) {
        // increment the current snippet. Clamp.
        var index = Math.min(index, this.state.snippets.length - 1);
        this.setState({ currSnippetIndex: index })
    }
    // helpers
    sanitiseInputText(text) {
        if (text.charAt(0) != '>') {
            text = '> ' + text;
        }
        return text;
    }
    // add optional tags
    getTags(category) {
        var tags = [];

        for (var i = 0; i < this.state.currSnippetIndex + 1; i++) {
            let currSnippet = this.state.snippets[i];
            if (currSnippet.tags) {
                currSnippet.tags.map(function (tag) {
                    if (category == tag.category)
                        tags.push(tag.value);
                }, this)
            }
        }
        return tags;
    }
    renderSnippets() {
        // render static text
        var snippets = [];
        for (var i = 0; i < this.state.currSnippetIndex + (this.state.skipTyping ? 1 : 0); i++) {
            let currSnippet = this.state.snippets[i];
            snippets.push(
                <div key={i} className={styles.snippet}>
                    {this.sanitiseInputText(currSnippet.text)}
                </div>)
        }

        // render typist text
        if (this.state.skipTyping === false) {
            let currSnippet = this.state.snippets[this.state.currSnippetIndex];
            snippets.push(
                <Typist key={this.state.currSnippetIndex}
                    cursor={{ show: false }}
                    avgTypingDelay={32}
                    onTypingDone={this.onTypingDoneHandler.bind(this)}>
                    <div>{this.sanitiseInputText(currSnippet.text)}</div>
                </Typist>
            )
        }

        return snippets;
    }

    render() {
        return (
            <div className={styles.aboutContentArea}>
                <SkillsAside cssStyle={styles.skillsAsideLeft}
                    header="Personal"
                    pictureUrl="https://media.licdn.com/media/AAEAAQAAAAAAAAuIAAAAJDE1Y2U5N2FkLTA4YjMtNGFiMC05ZGM0LWI0MjE4YjQwY2U0Mw.jpg"
                    tags={this.getTags([this.personalAsideKey])} />

                <SkillsAside cssStyle={styles.skillsAsideRight}
                    header="Technical Skills"
                    tags={this.getTags([this.technicalAsideKey])} />

                <div className={styles.chatBoxContainer}>
                    <div className={styles.chatBoxMessages}>
                        {this.renderSnippets()}
                    </div>
                    <div className={styles.chatBoxInput}>
                        <InputButton imageUrl="/data/img/ic_play_arrow_white_36px.svg"
                            onClickHandler={this.onNextHandler.bind(this)}>
                            Next
                </InputButton>
                        <InputButton imageUrl="/data/img/ic_fast_forward_white_36px.svg"
                            onClickHandler={this.onSkipHandler.bind(this)}>
                            Skip to the end
                </InputButton>
                    </div>
                </div>
            </div>
        )
    }

}
