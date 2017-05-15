import React, {PropTypes, Component} from 'react';
import {apiGetBlob} from '../../../api/api';


class Image extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
            loaded:false,
            fetchFromApi:props.fetchFromApi,
            imageSrc:props.src
        };
    }


    componentDidUpdate(){
        if(this.props.fetchFromApi && !this.state.loaded && !this.state.loading ) {
            let url = this.props.src;
            this.setState({loading: true});
            // let data =
                apiGetBlob(url)
                .then((data) => {
                    let urlCreator = window.URL || window.webkitURL;
                    let imageBlob = urlCreator.createObjectURL(data);
                    this.setState({imageSrc:imageBlob, loading: false,loaded:true});
                });
        }
    }



    render() {
        const props = this.props;
        const params = {
            style: props.style ? props.style : {},
            className: props.className ? props.className : '',
        };

        if (this.state.loading && this.state.fetchFromApi) {
            return (
                <img {...params} src={props.staticSrc} alt="" />
            )
        } else {
            return (
                <img {...params} src={this.state.imageSrc} alt="" />
            );
        }
    }
}


Image.propTypes = {
    staticSrc:PropTypes.string,
    src: PropTypes.string,
    fetchFromApi: PropTypes.bool
};

export default Image;