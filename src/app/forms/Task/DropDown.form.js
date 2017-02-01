import React, {PropTypes, Component} from 'react';

class DropDown extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            selected: this.props.defaultValue,
            className: this.props.className || 'md-btn md-btn-default md-btn-wave-light md-btn-block'
        }
    }

    shouldShowDropdown = () => {
        let className = 'uk-dropdown ';
        if (this.state.open) {
            className += 'uk-dropdown-active uk-dropdown-shown uk-dropdown-bottom';
        }

        return className;
    };

    toggleDropDown = () => {
        this.setState({
            open: !this.state.open
        })
    };

    changeSelectedOption = (selected) => {
        this.setState({
            selected,
            open: false
        });
        let data = {
            [this.props.fieldName]: selected
        };

        if (this.props.additionalInfo) {
            data = Object.assign(data, this.props.additionalInfo);
        }

        console.log(data);
        this.props.action(
            data
            ,
            this.props.taskId
        )
    };

    render() {
        return (
            <div className="">
                {this.state.selected ? this.renderButton() : this.renderNotSelectedOption()}
                <div className={this.shouldShowDropdown()}>
                    <ul className="uk-nav uk-nav-dropdown">
                        {this.renderOptions()}
                    </ul>
                </div>
            </div>
        );
    }

    renderNotSelectedOption = () => {
        return (
            <button onClick={this.toggleDropDown} className={this.state.className}
                    style={{paddingRight: '5px'}}>
                <span style={{float: 'left'}}>Select an option</span>
            </button>
        );
    };
    renderButton = () => {

        const defOption = this.props.options.filter((option) => {
            return option.value === this.state.selected;
        })[0];

        if (!defOption) {
            return this.renderNotSelectedOption();
        }
        const style = {paddingRight: '5px'};
        if (defOption.color) {
            style['background'] = defOption.color;
        }
        return (
            <button onClick={this.toggleDropDown} className={defOption.selectedClassName}
                    style={style}>
                <span style={{float: 'left'}}>{defOption.label} &nbsp; {this.props.customLabel && '(' + this.props.customLabel + ')'}</span>
            </button>
        );
    };

    renderOptions = () => {

        return this.props.options.map((option, key) => {
            if (option.value === this.state.selected || option.is_active === false) {
                return;
            }
            return (
                <li key={key}>
                    <a onClick={this.changeSelectedOption.bind(null, option.value)} href="#"><span
                        className={option.className}>{option.label}</span></a>
                </li>
            );
        });

    };
}

DropDown.propTypes = {
    options: PropTypes.array.isRequired,
    action: PropTypes.func.isRequired,
    defaultValue: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    fieldName: PropTypes.string.isRequired,
    taskId: PropTypes.number.isRequired,
};


export default DropDown;