import React from "react"
import ProjectShort from './ProjectShort'
import ProjectData from '../data/projects.json'

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import styles from '../styles/Projects.css';

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
            currSelectValues: this.getSelectValues(ProjectData.projectSpecs)
        }
    }


    sliderChangeHandler(value) {
        this.setState({ currMinYears: value[0], currMaxYears: value[1] });
    }
    selectChangeHandler(value) {
        this.setState({ currSelectValues: value });
    }
    componentDidMount() {
        var projects = ProjectData.projectSpecs;
        // sort from most recent to least
        projects.sort(function (a, b) { return a.year < b.year; })
        this.setState({ projectSpecs: ProjectData.projectSpecs });
        // get the range of years
        var minMax = this.getMinMaxYears(projects);
        this.setState({ minYears: minMax[0] - 1, maxYears: minMax[1] });
        this.setState({ currMinYears: minMax[0] - 1, currMaxYears: minMax[1] });
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
    getSelectValues(projects) {
        var uniqueTypes = [...new Set(projects.map(project => project.category))];
        var selectValues = uniqueTypes.map(function (type) { return { value: type, label: type } })
        return selectValues;
    }
    getRenderProjects() {
        var selectCategories = this.state.currSelectValues;

        var result = this.state.projectSpecs.map(function (project, key) {
            // check that the category is selected
            var isCategorySelected = selectCategories.some(function(cat){return cat.value == project.category;});
            {/*project is within the years and selected category boundaries*/ }
            if (isCategorySelected && project.year >= this.state.currMinYears && project.year <= this.state.currMaxYears)
                return <ProjectShort key={key} spec={project} />
        }, this)
        // remove undefined and null projects
        result = result.filter(function(project) {return !!project});
        if(!result.length)
        {
            return <div>Nothing really happened :(</div>
        }
        return result;
    }
    render() {
        return (
            <div>
                <div className={styles.filterToolbar}>
                    <Select className={styles.selectDropdown} multi
                        placeholder="Select categories..."
                        options={this.getSelectValues(this.state.projectSpecs)}
                        value={this.state.currSelectValues}
                        onChange={this.selectChangeHandler.bind(this)} />
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
                <div className={styles.contentArea}>
                    {this.getRenderProjects()}
                </div>
            </div>
        )
    }

}
