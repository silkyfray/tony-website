

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
            minYears: 0,
            maxYears: 0,
            currMinYears: 0,
            currMaxYears: 0,
        }
    }
    getMinMaxYears(projectSpecs) {
        var min = projectSpecs.reduce(function (prev, curr) {
            return prev.year <= curr.year ? prev : curr;
        }).year;
        var max = projectSpecs.reduce(function (prev, curr) {
            return prev.year >= curr.year ? prev : curr;
        }).year;
        return [min, max]
    }

    sliderChangeHandler(value) {
        this.setState({ currMinYears: value[0], currMaxYears: value[1] });
    }

    componentDidMount() {
        this.setState({ projectSpecs: ProjectData.projectSpecs });
        // get the range of years
        var minMax = this.getMinMaxYears(ProjectData.projectSpecs);
        this.setState({ minYears: minMax[0], maxYears: minMax[1] });
        this.setState({ currMinYears: minMax[0], currMaxYears: minMax[1] });
    }
    render() {
        return (
            <div>
                <div className={styles.filterToolbar}>
                    <div className={styles.yearSlider}>
                        <Range min={this.state.minYears}
                            max={this.state.maxYears}
                            value={[this.state.currMinYears, this.state.currMaxYears]}
                            dots={true}
                            marks={{ [this.state.minYears]: this.state.minYears, [this.state.maxYears]: this.state.maxYears }}
                            onChange={this.sliderChangeHandler.bind(this)}
                        />
                    </div>
                </div>
                {<div className={styles.contentArea}>
                    {this.state.projectSpecs.map(function (project, key) {
                        if (project.year >= this.state.currMinYears && project.year <= this.state.currMaxYears)
                            return <ProjectShort key={key} spec={project} />
                    }, this)}
                </div>}
            </div>
        )
    }

}
