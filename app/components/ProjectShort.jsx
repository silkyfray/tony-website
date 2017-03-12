import React, { PropTypes } from "react"
import styles from '../styles/ProjectShort.css';

function ShareButton(props) {
    return (
        <a href={props.destinationUrl}>
            <img src={props.buttonUrl} className={styles.shareButton} />
        </a>
    )
}

export default function ProjectShort(props) {
    var picture = props.spec.pictureUrl ? <img src={props.spec.pictureUrl} className={styles.picture} />
        : picture = <div className={styles.picture} />;

    return (
        <div className={styles.outerBox}>
            <div className={styles.innerBox}>
                <div className={styles.topInfo}>
                    <h3 className={styles.header}>{props.spec.header}</h3>
                    {picture}
                    <div className={styles.subheader}>{props.spec.year}|{props.spec.category}</div>
                    {props.spec.githubUrl && <ShareButton destinationUrl={props.spec.githubUrl} buttonUrl="/data/img/githubIcon.svg" />}
                    {props.spec.youtubeUrl && <ShareButton destinationUrl={props.spec.youtubeUrl} buttonUrl="/data/img/youtubeIcon.svg" />}
                    {props.spec.documentUrl && <ShareButton destinationUrl={props.spec.documentUrl} buttonUrl="/data/img/documentIcon.svg" />}
                </div>
                <p>{props.spec.summary}</p>
            </div>
        </div>
    )
}


ProjectShort.propTypes = {
    spec: PropTypes.shape({
        header: PropTypes.string.isRequired,
        pictureUrl: PropTypes.string,
        year: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        githubUrl: PropTypes.string,
        youtubeUrl: PropTypes.string,
        documentUrl: PropTypes.string
    })
}
