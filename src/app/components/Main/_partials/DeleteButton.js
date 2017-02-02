import React, {PropTypes, Component} from 'react';

class DeleteButton extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {confirmingDelete: false};
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    setBack=()=>{
        this.setState({confirmingDelete: false});
        clearInterval(this.interval);
    }

    confirmDelete=()=>{
        this.setState({confirmingDelete:true});
        this.interval = setInterval(this.setBack,2000);
    };

    render() {
        const {handleDelete, id} = this.props;

        if(!this.state.confirmingDelete){
        return (
            <button className="md-btn md-btn-danger" onClick={this.confirmDelete} >Delete</button>
        )}else
            {return(
            <button className="md-btn md-btn-warning" onClick={handleDelete.bind(null, id)} >Are you sure?</button>)}


    }
}

DeleteButton.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};


export default DeleteButton;

