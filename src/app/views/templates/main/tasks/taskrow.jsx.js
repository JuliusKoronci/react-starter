import React, {PropTypes} from 'react';

const taskrow = ({task}) => {
    return (
        <tr>
            <td className="uk-text-center uk-table-middle small_col">
                <input type="checkbox" data-md-icheck className="check_row" />
            </td>
            <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-1</span></td>
            <td>
                <a href="page_issue_details.html" className="uk-text-large"> Velit omnis sed voluptatibus exercitationem dolor autem cupiditate.</a>
                <p className="uk-margin-remove"> <span className="uk-badge uk-badge-success">major</span>
                    <span className="uk-badge uk-badge-warning">critical</span>
                    <span className="uk-badge uk-badge-danger">blocker</span>
                    <span className="uk-badge uk-badge-info">minor</span>
                </p>
            </td>
            <td>Zachary Larson</td>
            <td>Company 1</td>
            <td>Agent 1</td>
            <td>22/Jun/16</td>
            <td>16/Jun/16</td>
            <td><span className="uk-badge uk-badge-open">OPEN</span></td>
        </tr>
    );
};

taskrow.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskrow;