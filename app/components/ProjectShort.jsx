import React, { PropTypes } from "react"
import styles from '../styles/ProjectShort.css';

export default function ProjectShort(props) {
    var picture;
    if (props.spec.picture) {
        picture = <img src={props.spec.picture}
            className={styles.picture} />
    }
    else {
        picture = <div className={styles.picture} />
    }
    return (
        <div className={styles.outerBox}>
            <div className={styles.innerBox}>
                <div className={styles.topInfo}>
                    <h3 className={styles.header}>{props.spec.header}</h3>
                    {picture}
                    <div className={styles.subheader}>{props.spec.subheader}</div>
                </div>
                <p>{props.spec.summary}</p>
            </div>
        </div>
    )
}


ProjectShort.propTypes = {
    spec: PropTypes.shape({
        header: PropTypes.string.isRequired,
        picture: PropTypes.string,
        subheader: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
    })
}
