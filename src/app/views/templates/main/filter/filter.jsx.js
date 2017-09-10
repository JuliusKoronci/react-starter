import React from 'react';
import FilterForm from '../../../../components/Main/Filter/FilterForm';
import FilterTasks from '../../../../components/Main/Filter/FilterTasks';
import Modal from 'react-modal';

const Filter = (props) => {
// console.log(props.columns);



    const modalStyles={
        overlay : {
            position          : 'fixed',
            top               : 0,
            left              : 0,
            right             : 0,
            bottom            : 0,
            backgroundColor   : 'rgba(255, 255, 255, 0.75)'
        },
        content : {
            position                   : 'absolute',
            top                        : '50%',
            left                       : '50%',
            border                     : '1px solid #ccc',
            background                 : '#fff',
            overflow                   : 'auto',
            WebkitOverflowScrolling    : 'touch',
            borderRadius               : '4px',
            outline                    : 'none',
            padding                    : '20px',
            marginLeft:'-250px',
            marginTop:'-100px',
            height:'200px',
            width:'500px'

        }
    };


    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Filter</h1>
                </div>
                <hr/>

                <div className="uk-grid uk-grid-divider" style={{position:'relative'}} data-uk-grid-margin>


                    <Modal
                        isOpen={props.modalOpen}
                        onAfterOpen={props.modalAfterOpen}
                        onRequestClose={props.modalClose}
                        closeTimeoutMS={200}
                        style={modalStyles}
                        contentLabel="Modal"
                    >
                        <h1>Creating filter</h1>
                        <div className="uk-form-row">
                        Name of the new filter: <input name="title" type="text" value={props.newFilterForm.title} className="md-input" onChange={props.newFilterFormChange} />
                        </div>

                        { props.canModifyPublicFilters &&
                        <div className="uk-form-row">
                            <label>Public <input type="checkbox" name="public" value={props.newFilterForm.public} checked={props.newFilterForm.public} onClick={props.newFilterFormChange} /></label></div>}


                        {props.newFilterForm.error && <p>{props.newFilterForm.error}</p>}

                            <input type="button" className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light" onClick={props.newFilterFormSubmit} value="Create filter" />

                    </Modal>

                    <FilterForm {...props} />

                    <FilterTasks {...props} />


                </div>
            </div>
        </div>
    );
};


export default Filter;
