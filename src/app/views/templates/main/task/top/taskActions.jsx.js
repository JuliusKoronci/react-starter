import React, {PropTypes} from 'react';

const taskActions = ({task}) => {
    return (
        <div className="uk-width-medium-1-4">
            <span className=""><i className="material-icons md-24 uk-align-right">&#xE5CD;</i></span>
            <span className=""><i className="material-icons md-24 uk-align-right">&#xE83A;</i></span>
            <span><i className="material-icons md-24 uk-align-right">&#xE8AD;</i></span>
            <span><i className="material-icons md-24 uk-align-right">&#xE92B;</i></span>
        </div>
    );
};

taskActions.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskActions;