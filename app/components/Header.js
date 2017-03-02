var React = require("react")
var styles = require("../styles/index")

function Header(props) {
    return (
        <h1 style={styles.bigGlow}>{props.title}</h1>
    )
}

module.exports = Header