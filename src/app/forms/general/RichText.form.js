import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactQuill from 'react-quill';


class RichText extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {text: props.form && props.form[props.fieldName]?props.form[props.fieldName]:''}
    }





    // componentDidUpdate(prevProps, prevState) {
    //
    //     if(prevProps!==this.props){
    //
    //         if(this.props.form && this.props.form[this.props.fieldName] && this.props.form[this.props.fieldName] !== prevProps.form[this.props.fieldName]){
    //
    //             this.setState({text: this.props.form[this.props.fieldName]});
    //             console.log('change '+this.props.form[this.props.fieldName],prevProps.form[this.props.fieldName]);
    //
    //         }
    //
    //         // if(this.props.form && this.props.form[this.props.fieldName]){
    //         //     this.setState({text:this.props.form[this.props.fieldName]});
    //         // }
    //     }
    // }



    handleChange=(value)=>{

        // console.log('handling change');
        if(this.props.formInputChangeHandler){

            this.props.formInputChangeHandler(this.props.fieldName,value);
        }else {
            this.setState({text: value});
        }
    };

    render() {

        let val=this.props.form && this.props.form[this.props.fieldName]?this.props.form[this.props.fieldName]:false;
        const value = val || this.props.task[this.props.fieldName] || '';

        let modules = {
            toolbar: [
                [{'header': [1, 2, false]}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image'],
                ['clean']
            ],
        };

        let formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ];


        return (

            <div>
            {this.props.label && <label className="uk-text-muted">{this.props.label}</label>}

            <ReactQuill valuee={this.state.text} theme="snow"
                        valueeee={this.props.form[this.props.fieldName]}
                        value={value}
                        modules={modules} formats={formats}
                        onChange={this.handleChange}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const task = state.tasks.task.data;
    return {
        task: task
    };
}

export default connect(mapStateToProps)(RichText);

// export default RichText;