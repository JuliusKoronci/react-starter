import React, {PropTypes} from 'react';

const tasklist = (props) => {
    return (
        <div className="md-card-content">
            <div className="uk-margin-bottom" data-uk-margin>
                <h1 className="heading_b uk-margin-bottom">DO IT</h1>
            </div>
            <hr/>
            <button
                className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                data-uk-modal="{target:'#modal_delete'}">DELETE
            </button>
            <div className="uk-modal" id="modal_delete">
                <div className="uk-modal-dialog">
                    <button type="button" className="uk-modal-close uk-close"/>
                    <h2>Delete selected tasks ?</h2>
                    <span>
                        <a className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                           href="javascript:void(0)">CANCEL</a>
                        <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light alignright"
                           href="javascript:void(0)">DELETE</a>
                    </span>

                </div>
            </div>
            &nbsp;
            <button className="md-btn md-btn-primary md-btn-small" type="button" data-uk-button>Bulk Actions</button>
            <p/>
            <div className="uk-overflow-container uk-margin-bottom">
                <table className="uk-table uk-table-align-vertical uk-table-nowrap tablesorter tablesorter-altair" id="ts_issues">
                    <thead>
                    <tr>
                        <th className="uk-width-1-10 uk-text-center small_col">
                            <input type="checkbox" data-md-icheck className="check_all" />
                        </th>
                        <th className="uk-text-center ">Key</th>
                        <th>Title</th>
                        <th>Requester</th>
                        <th>Company</th>
                        <th>Assignee</th>
                        <th>Created</th>
                        <th>Deadline</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>

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


                    <tr>
                        <td className="uk-text-center uk-table-middle small_col">
                            <input type="checkbox" data-md-icheck className="check_row" />
                        </td>
                        <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-2</span></td>
                        <td>
                            <a href="page_issue_details.html" className="uk-text-large"> Quidem reiciendis modi optio ratione consequatur nam numquam.</a>
                            <p className="uk-margin-remove"> <span className="uk-badge uk-badge-success">major</span>
                                <span className="uk-badge uk-badge-warning">critical</span>
                                <span className="uk-badge uk-badge-danger">blocker</span>
                                <span className="uk-badge uk-badge-info">minor</span>
                            </p>
                        </td>
                        <td>Vicky Halvorson</td>
                        <td>Company 1</td>
                        <td>Agent 1</td>
                        <td>26/Jun/16</td>
                        <td>8/Jun/16</td>
                        <td><span className="uk-badge uk-badge-new">NEW</span></td>
                    </tr>


                    <tr>
                        <td className="uk-text-center uk-table-middle small_col">
                            <input type="checkbox" data-md-icheck className="check_row" />
                        </td>
                        <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-3</span></td>
                        <td>
                            <a href="page_issue_details.html" className="uk-text-large"> Consectetur ut tempore quo molestias ut sunt rem vitae.</a>
                            <p className="uk-margin-remove"> <span className="uk-badge uk-badge-success">major</span>
                                <span className="uk-badge uk-badge-warning">critical</span>
                                <span className="uk-badge uk-badge-danger">blocker</span>
                                <span className="uk-badge uk-badge-info">minor</span>
                            </p>
                        </td>
                        <td>Abagail Effertz</td>
                        <td>Company 1</td>
                        <td>Agent 1</td>
                        <td>23/Jun/16</td>
                        <td>12/Jun/16</td>
                        <td><span className="uk-badge uk-badge-closed">CLOSED</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

tasklist.propTypes = {
    props: PropTypes.object.isRequired
};

export default tasklist;