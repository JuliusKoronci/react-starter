import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/tasks.action';
import configResolver from '../../../../config/configResolver';

import View from '../../../views/templates/main/filter/filter.jsx';


class Filter extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            filterFormVisible:true,
            visibleFields:{'taskName':true},

            columns:{
                title:{label:'Title',visible:true},
                status:{label:'Status'},
                project:{label:'Project'},
                created:{label:'Created'},
                requester:{label:'Requester'},
                company:{label:'Company'},
                assigned:{label:'Assigned'},
                context:{label:'Context'},
                owner:{label:'Owner'},
                deadline:{label:'Deadline'},

            }
        }
    }

    componentDidMount() {
        this.config = configResolver.tasksConfig('project', 131);
        this.props.actions.requestTasks(this.config);
    }


    toggleFilter=(e)=>{
        this.setState({filterFormVisible:!this.state.filterFormVisible})
    };

    toggleRowVisibility=(e)=>{
        let name=e.target.name;
        let checked=!!e.target.checked;


        if(this.state.columns[name]) {
            this.setState({
                // visibleFields: Object.assign({},this.state.visibleFields, {[name]:checked })
                columns: Object.assign({}, this.state.columns, this.state.columns[name]['visible'] = checked)
            });
        }

    };



    render() {
        return (
            <View {...this.props} toggleFilter={this.toggleFilter} filterFormVisible={this.state.filterFormVisible} toggleRowVisibility={this.toggleRowVisibility}
            visibleFields={this.state.visibleFields} columns={this.state.columns} />
        );
    }
}


function mapStateToProps(state) {
    return {
        filterFormVisible:state.filterFormVisible,
        tasks: state.tasks,
    };
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({...actions}, dispatch)};

}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
