import React, {PropTypes, Component} from 'react';
// import { SketchPicker } from 'react-color';

class Colorpicker extends Component {

    onChange = (color) => {
        this.props.input.onChange(color.hex);
    };

    render() {
        // return (
        //     <div>
        //         <input type="hidden" value={this.props.input.value}  name={this.props.input.name} {...this.props.input}/>
        //     <SketchPicker onChangeComplete={this.onChange} color={this.props.input.value} />
        //     </div>
        // );
    }
}

Colorpicker.propTypes = {
    fieldName: PropTypes.string,
    defaultValue: PropTypes.string
};

export default Colorpicker;