import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { Creatable } from 'react-select';
import Select from 'react-select';

const Filter = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Filter</h1>
                </div>
                <hr/>

                <div className="uk-grid uk-grid-divider" data-uk-grid-margin>
                    <div className="uk-width-medium-1-4" id="filterDiv">

                        <a className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                           href="javascript:void(0)">CLEAR</a>
                        <a className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                           href="javascript:void(0)">SAVE</a>
                        <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                           href="javascript:void(0)">FILTER</a>


                        <ul className="md-list md-list-addon">

                            <form className="uk-form-stacked uk-margin-top">
                                <label className="uk_dp_1 uk-text-muted">Filter Name</label>
                                <input type="text" className="md-input" />
                            </form>

                            <form className="uk-form-stacked uk-margin-top">
                                <label className="uk_dp_1 uk-text-muted">Task Name</label>
                                     <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <input type="text" className="md-input" />
                            </form>

                            <form className="uk-form-stacked uk-margin-top">
                                <label className="uk_dp_1 uk-text-muted">Status</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                {/*Pouzity react-multiselect https://github.com/JedWatson/react-select*/}
                                <Creatable name="Status"
                                           className="md-input"
                                           joinValues={true}
                                           multi={true}
                                           options={[
                                { value: 'New', label: 'New' },
                                { value: 'Open', label: 'Open' },
                                { value: 'Pending', label: 'Pendig' },
                                { value: 'Closed', label: 'Closed'},
                                ]}
                                />

                            </form>

                            <form className="uk-form-stacked uk-margin-top">
                                <label for="project" className="uk_dp_1 uk-text-muted">Project</label>
                                    <span className="alignright">
                                        <label className="uk_dp1 uk-text-muted">Column</label>
                                        <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                    </span>
                                <Creatable name="Project"
                                           className="md-input"
                                           joinValues={true}
                                           multi={true}
                                           options={[
                                { value: 'Projekty ku ktorym ma pouzivatel pristup',label: 'Projekty ku ktorym ma pouzivatel pristup' },
                                ]}
                                />
                            </form>

                            <form className="uk-form-stacked uk-margin-top">
                                <label className="uk_dp_1 uk-text-muted">Created</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                                <Creatable name="Created"
                                           className="md-input"
                                           joinValues={true}
                                           multi={true}
                                           options={[
                                { value: 'multiselect+autocomplete pouzivatelia',label: 'multiselect+autocomplete pouzivatelia' },
                                ]}
                                />
                            </form>

                            <form className="uk-form-stacked uk-margin-top">
                                <label for="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Requester</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                                <Creatable name="Requester"
                                           className="md-input"
                                           joinValues={true}
                                           multi={true}
                                           options={[
                                { value: 'multiselect+autocomplete pouzivatelia',label: 'multiselect+autocomplete pouzivatelia' },
                                ]}
                                />
                            </form>

                            <form className="uk-form-stacked uk-margin-top">
                                <label for="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Company</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                                <Creatable name="Company"
                                           className="md-input"
                                           joinValues={true}
                                           multi={true}
                                           options={[
                                { value: 'multiselect+autocomplete companies',label: 'multiselect+autocomplete companies' },
                                ]}
                                />
                            </form>

                            <form className="uk-form-stacked uk-margin-top">
                                <label className="uk_dp_1 uk-text-muted">Assigned</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                                <Creatable name="Assigned"
                                           className="md-input"
                                           joinValues={true}
                                           multi={true}
                                           options={[
                                { value: 'multiselect+autocomplete pouzivatelia',label: 'multiselect+autocomplete pouzivatelia' },
                                ]}
                                />
                            </form>

                            <form className="uk-form-stacked uk-margin-top">
                                <label className="uk-text-muted">Context</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <Creatable name="Context"
                                           className="md-input"
                                           joinValues={true}
                                           multi={true}
                                           options={[
                                { value: 'autocomplete context',label: 'autocomplete context' },
                                ]}
                                />
                            </form>

                            <form className="uk-form-stacked uk-margin-top">
                            <div className="uk-grid" data-uk-grid-margin>
                                <div className="uk-width-medium-1-2">
                                    <label className="uk_dp_1 uk-text-muted">Created From:</label>
                                    <input type="text" className="md-input" />
                                </div>
                                <div className="uk-width-medium-1-2">
                                    <label className="uk_dp1 uk-text-muted">To:</label>
                                       <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                    <input type="text" className="md-input" />
                                </div>
                            </div>
                        </form>

                        <hr/>
                        <p className="uk-text-muted">Started at</p>
                        <p>
                            <input type="radio" name="radio_demo" id="radio_demo_1" data-md-icheck />
                            <label for="radio_demo_1" className="inline-label">Overdue</label>
                        </p>
                        <p>
                            <input type="radio" name="radio_demo" id="radio_demo_2" data-md-icheck />
                            <label for="radio_demo_2" className="inline-label">Time range</label>
                        </p>

                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp_1 uk-text-muted">From:</label>
                                <input type="text" className="md-input"  />
                            </div>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp1 uk-text-muted">To:</label>
                                       <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <input type="text" className="md-input" />
                            </div>
                        </div>
                        <hr/>

                        <p className="uk-text-muted">Deadline at</p>
                        <p>
                            <input type="radio" name="radio_demo" id="radio_demo_1" data-md-icheck />
                            <label for="radio_demo_1" className="inline-label">Overdue</label>
                        </p>
                        <p>
                            <input type="radio" name="radio_demo" id="radio_demo_2" data-md-icheck />
                            <label for="radio_demo_2" className="inline-label">Time range</label>
                        </p>

                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp_1 uk-text-muted">From:</label>
                                <input type="text" className="md-input" />
                            </div>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp1 uk-text-muted">To:</label>
                                       <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <input type="text" className="md-input" />
                            </div>
                        </div>
                        <hr/>

                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp_1 uk-text-muted">Closed From:</label>
                                <input type="text" className="md-input" />
                            </div>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp1 uk-text-muted">To:</label>
                                       <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <input type="text" className="md-input" />
                            </div>
                        </div>
                        <hr/>

                        <input type="checkbox" name="checkbox_demo_mercury" id="checkbox_demo_1" data-md-icheck />
                        <label for="checkbox_demo_1" className="inline-label">Archived</label>

                        <hr/>
                        <form className="uk-form-stacked uk-margin-top">
                            <label className="uk_dp_1 uk-text-muted">Custom select 1</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                            <Creatable name="Project"
                                       className="md-input"
                                       joinValues={true}
                                       multi={true}
                                       options={[
                                { value: 'Projekty ku ktorym ma pouzivatel pristup',label: 'Projekty ku ktorym ma pouzivatel pristup' },
                                ]}
                            />
                        </form>

                        <form className="uk-form-stacked uk-margin-top">
                            <label className="uk_dp_1 uk-text-muted">Custom input/text area</label>
                                     <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                            <input type="text" className="md-input" />
                        </form>

                    </ul>

                    </div>

                    <div className="uk-width-medium-3-4" id="tasksDiv">
                        <a className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                           href="javascript:void(0)">DELETE</a>
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
                </div>
            </div>
        </div>
    );
};

Filter.propTypes = {
    prop: PropTypes.object.isRequired
};

export default Filter;
