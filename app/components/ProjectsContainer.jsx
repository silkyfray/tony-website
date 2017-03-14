

import React from "react"
import styles from '../styles/Projects.css';
import ProjectShort from './ProjectShort'
import ProjectData from '../data/projects.json'

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectSpecs: [],
            minMaxYears: { min: 0, max: 0 }
        }
    }
    getMinMaxYears(projectSpecs) {
        var min = projectSpecs.reduce(function (prev, curr) {
            return prev.year <= curr.year ? prev : curr;
        }).year;
        var max = projectSpecs.reduce(function (prev, curr) {
            return prev.year >= curr.year ? prev : curr;
        }).year;
        return { "min": min, "max": max }
    }

    sliderChanged(value){
        console.log("value:", value);
    }

    componentDidMount() {
        this.setState({ projectSpecs: ProjectData.projectSpecs });
        // get the range of years
        this.setState({ minMaxYears: this.getMinMaxYears(ProjectData.projectSpecs) });
    }
    // load the data from the local projects file
    // iterate over the data and instantiate ProjectShort for each
    render() {
        return (
            <div>
                <div className={styles.yearSlider}>
                    <Range min={this.state.minMaxYears.min}
                        max={this.state.minMaxYears.max}
                        defaultValue={[0,0]}
                        value={[this.state.minMaxYears.min, this.state.minMaxYears.max]}
                        dots = {true}
                        marks = {{2014: 2014, 2016: 2016}}
                        onChange={this.sliderChanged}
                        />
                </div>
                <div className={styles.contentArea}>
                    {this.state.projectSpecs.map(function (project, key) {
                        return <ProjectShort key={key} spec={project} />
                    })}
                </div>
            </div>
        )
    }

}
