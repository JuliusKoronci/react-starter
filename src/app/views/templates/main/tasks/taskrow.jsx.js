import React, {PropTypes} from 'react';

const taskrow = ({task}) => {
    return (
        <tr>
            <td className="uk-text-center uk-table-middle small_col">
                <input type="checkbox" data-md-icheck className="check_row" />
            </td>
            <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-1</span></td>
            <td>
                <a href="page_issue_details.html" className="uk-text-large">{task.title}</a>
                <p className="uk-margin-remove"> <span className="uk-badge uk-badge-success">major</span>
                    <span className="uk-badge uk-badge-warning">critical</span>
                    <span className="uk-badge uk-badge-danger">blocker</span>
                    <span className="uk-badge uk-badge-info">minor</span>
                </p>
            </td>
            <td>{task.createdBy.username}</td>
            <td>{task.createdBy.company.title}</td>
            <td>Agent 1</td>
            <td>{task.createdAt.date}</td>
            <td>{task.deadline}</td>
            <td><span className="uk-badge uk-badge-open">OPEN</span></td>
        </tr>
    );
};

taskrow.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskrow;