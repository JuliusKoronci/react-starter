import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { Creatable } from 'react-select';
import Select from 'react-select';

const FilterTasks = (prop) => {
    return (

                    <div className="uk-width-medium-3-4" id="tasksDiv">
                        <a className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                           href="javascript:void(0)">DELETE</a>


                        <button className="md-btn md-btn-primary md-btn-small" type="button" id="filterButon" value="Hide">
                            <span className="menu_icon"><i className="material-icons md-color-white">&#xE152;</i></span>
                            <span className="menu_title">SHOW</span>
                        </button>


                        <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                           href="javascript:void(0)">BULK ACTION</a>

                        <div className="uk-overflow-container uk-margin-bottom">
                            <table className="uk-table uk-table-align-vertical uk-table-nowrap tablesorter tablesorter-altair" id="ts_issues">
                                <thead>
                                <tr>
                                    <th className="uk-width-1-10 uk-text-center small_col"><input type="checkbox" data-md-icheck className="check_all" /></th>
                                    <th className="uk-text-center ">Key</th>
                                    <th>Title</th>
                                    <th>Owner</th>
                                    <th>Company</th>
                                    <th>Assignee</th>
                                    <th>Created</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row" /></td>
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
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row" /></td>
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
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row" /></td>
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


                                <tr>
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row" /></td>
                                    <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-4</span></td>
                                    <td>
                                        <a href="page_issue_details.html" className="uk-text-large"> Nisi consequatur quo qui et.</a>
                                        <p>
                                        </p>
                                    </td>
                                    <td>Reinhold Abernathy</td>
                                    <td>Company 1</td>
                                    <td>Agent 1</td>
                                    <td>11/Jun/16</td>
                                    <td>19/Jun/16</td>
                                    <td><span className="uk-badge uk-badge-pending">PENDING</span></td>
                                </tr>


                                <tr>
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row"/></td>
                                    <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-5</span></td>
                                    <td>
                                        <a href="page_issue_details.html" className="uk-text-large"> Et et ut ut culpa et inventore excepturi.</a>
                                        <p>
                                        </p>
                                    </td>
                                    <td>Dereck Renner</td>
                                    <td>Company 1</td>
                                    <td>Agent 1</td>
                                    <td>13/Jun/16</td>
                                    <td>8/Jun/16</td>
                                    <td><span className="uk-badge uk-badge-pending">PENDING</span></td>
                                </tr>


                                <tr>
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row"/></td>
                                    <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-6</span></td>
                                    <td>
                                        <a href="page_issue_details.html" className="uk-text-large"> Quasi autem nihil a incidunt aut laudantium.</a>
                                        <p>
                                        </p>
                                    </td>
                                    <td>Nakia Stehr</td>
                                    <td>Company 1</td>
                                    <td>Agent 1</td>
                                    <td>15/Jun/16</td>
                                    <td>14/Jun/16</td>
                                    <td><span className="uk-badge uk-badge-pending">PENDING</span></td>
                                </tr>


                                <tr>
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row" /></td>
                                    <td className="uk-text-center"><span className="uk-text-small uk-text-muted uk-text-nowrap">ALTR-7</span></td>
                                    <td>
                                        <a href="page_issue_details.html" className="uk-text-large"> Et fugiat sunt quia eos voluptatibus.</a>
                                        <p>
                                        </p>
                                    </td>
                                    <td>Judah Leuschke</td>
                                    <td>Company 1</td>
                                    <td>Agent 1</td>
                                    <td>15/Jun/16</td>
                                    <td>11/Jun/16</td>
                                    <td><span className="uk-badge uk-badge-pending">PENDING</span></td>
                                </tr>


                                <tr>
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row" /></td>
                                    <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-8</span></td>
                                    <td>
                                        <a href="page_issue_details.html" className="uk-text-large"> Sapiente consequuntur in ea animi suscipit laudantium voluptatem.</a>
                                        <p>
                                        </p>
                                    </td>
                                    <td>Fermin Hettinger</td>
                                    <td>Company 1</td>
                                    <td>Agent 1</td>
                                    <td>14/Jun/16</td>
                                    <td>26/Jun/16</td>
                                    <td><span className="uk-badge uk-badge-pending">PENDING</span></td>
                                </tr>


                                <tr>
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row" /></td>
                                    <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-9</span></td>
                                    <td>
                                        <a href="page_issue_details.html" className="uk-text-large"> Debitis ut blanditiis ut molestiae aut voluptatem modi molestias.</a>
                                        <p>
                                        </p>
                                    </td>
                                    <td>Justice Johns</td>
                                    <td>Company 1</td>
                                    <td>Agent 1</td>
                                    <td>25/Jun/16</td>
                                    <td>28/Jun/16</td>
                                    <td><span className="uk-badge uk-badge-pending">PENDING</span></td>
                                </tr>


                                <tr>
                                    <td className="uk-text-center uk-table-middle small_col"><input type="checkbox" data-md-icheck className="check_row" /></td>
                                    <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">ALTR-10</span></td>
                                    <td>
                                        <a href="page_issue_details.html" className="uk-text-large"> Est non et et.</a>
                                        <p>
                                        </p>
                                    </td>
                                    <td>Abe Carter</td>
                                    <td>Company 1</td>
                                    <td>Agent 1</td>
                                    <td>16/Jun/16</td>
                                    <td>26/Jun/16</td>
                                    <td><span className="uk-badge uk-badge-pending">PENDING</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

    );
};


export default FilterTasks;
