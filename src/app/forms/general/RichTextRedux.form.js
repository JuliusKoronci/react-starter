import React, {Component} from 'react';
import ReactQuill from 'react-quill';


class RichText extends Component {

    // constructor(props, context) {
    //     super(props, context);
    // }


    handleChange=(value)=>{
        this.props.input.onChange(value);
    };


    render() {

        const value = this.props.input.value;

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

            <ReactQuill theme="snow"
                        value={value}
                        modules={modules} formats={formats}
                        onChange={this.handleChange}/>
            </div>
        );
    }
}

export default RichText;