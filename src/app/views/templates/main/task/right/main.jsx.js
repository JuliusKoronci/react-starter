import React, {PropTypes} from 'react';
import Status from './status.jsx';
import Project from './project.jsx';
import Requester from './requester.jsx';
import Company from './company.jsx';
import Assigned from './assigned.jsx';
import StartDate from './startDate.jsx';
import DeadlineDate from './deadlineDate.jsx';
import CloseDate from './closeDate.jsx';
import Repeat from './repeat.jsx';
import Attachment from './attachment.jsx';
import Tag from './tag.jsx';
import Custom from './custom.jsx';

const main = ({task, actions}) => {
    return (
        <div className="md-list md-list-addon">
            <Status task={task} action={actions.taskUpdated}/>
            <Project/>
            <Requester/>
            <Company/>
            <Assigned/>
            <StartDate/>
            <DeadlineDate/>
            <CloseDate/>
            <Repeat/>
            <Attachment/>
            <Tag/>
            <Custom/>
        </div>
    );
};

main.propTypes = {
    task: PropTypes.object.isRequired
};

export default main;