import React, {PropTypes} from 'react';

const summary = (prop) => {
    return (
        <div>
            description
            work done
            working hours
        </div>
    );
};

summary.propTypes = {
    prop: PropTypes.object.isRequired
};

export default summary;