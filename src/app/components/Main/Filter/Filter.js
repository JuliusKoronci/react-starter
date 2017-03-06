import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


import View from '../../../views/templates/main/filter/filter.jsx';


class Filter extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={filterFormVisible:false}
    }

    toggleFilter=(e)=>{
        this.setState({filterFormVisible:!this.state.filterFormVisible})
    };

    render() {

        return (
            <View {...this.props} toggleFilter={this.toggleFilter} />
        );
    }
}


function mapStateToProps(state) {
    return {
        filterFormVisible:state.filterFormVisible
    };
}
function mapDispatchToProps(dispatch) {
    //return {actions: bindActionCreators({...actions, ...asyncActions, ...systemActions}, dispatch)};
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
