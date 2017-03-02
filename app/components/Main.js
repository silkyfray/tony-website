var React = require("react")
var Header = require("./Header")
require('../main.css');

function Main(props) {
    return (
        <div className="main-container">
            <Header title="Hi, I am Tony" />
            {props.children}
        </div>
    )
}

module.exports = Main