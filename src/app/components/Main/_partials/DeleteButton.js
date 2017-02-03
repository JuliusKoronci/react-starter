import React, {PropTypes, Component} from 'react';
import DeleteButtonView from '../../../views/templates/main/_partials/deleteButton.jsx';
import ConfirmDeleteButtonView from '../../../views/templates/main/_partials/confirmDeleteButton.jsx';

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
            <DeleteButtonView confirmDelete={this.confirmDelete} />
        )}else
            {return(
            <ConfirmDeleteButtonView handleDelete={handleDelete} entityId={id} />
            )}


    }
}

DeleteButton.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};


export default DeleteButton;

