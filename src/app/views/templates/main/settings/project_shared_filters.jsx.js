import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProjectSharedFilters = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Project shared filters</h1>
                </div>
                <hr/>
            </div>
        </div>
    );
};

ProjectSharedFilters.propTypes = {
    prop: PropTypes.object.isRequired
};

export default ProjectSharedFilters;
