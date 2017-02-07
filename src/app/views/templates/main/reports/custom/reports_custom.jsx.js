import React from 'react';
import {Link} from 'react-router';
import Pagination from '../../_partials/pagination.jsx';
import {generateRoute} from '../../../../../../config/router';

const reports_custom = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-grid" data-uk-grid-margin>
                    <div className="uk-width-medium-3-4">
                        <h1 className="heading_b">Report custom</h1>
                    </div>
                    <div className="uk-width-medium-1-4">
                        <span><i className="material-icons md-24 alignright">&#xE8AD;</i></span>
                    </div>
                </div>
                <hr/>

                <div className="uk-grid uk-grid-divider">
                    <div className="uk-width-medium-1-4">
                        <ul className="md-list md-list-addon">
                            <div className="k-button-group">
                                <button className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                                        data-uk-modal="{target:'#modal_default'}">SAVE
                                </button>
                                <a className="md-btn md-btn-warning md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                                   href="javascript:void(0)">CLEAR</a>
                                <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                                   href="javascript:void(0)">FILTER</a>
                            </div>
                            <p></p>
                            <form className="uk-form-stacked ">
                                <label className="uk_dp_1 uk-text-muted">Name</label>
                                     <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <input type="text" className="md-input"/>
                            </form>

                            <p></p>
                            <form className="uk-form-stacked ">
                                <label className="uk_dp_1 uk-text-muted">Description</label>
                                     <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <input type="text" className="md-input"/>
                            </form>

                            <p></p>
                            <form className="uk-form-stacked">
                                <label for="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Status</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <select id="kUI_multiselect_basic" multiple="multiple"
                                        data-placeholder="Select status...">
                                    <option>NEW</option>
                                    <option>SOLVED</option>
                                </select>
                            </form>
                            <p></p>
                            <form className="uk-form-stacked">
                                <label for="project" className="uk_dp_1 uk-text-muted">Project</label>
                                    <span className="alignright">
                                        <label className="uk_dp1 uk-text-muted">Column</label>
                                        <input type="checkbox" name="checkbox_demo_inline_mercury"
                                               id="checkbox_demo_inline_1" data-md-icheck/>
                                    </span>
                                <select id="project" multiple="multiple" data-placeholder="Select projects...">
                                    <option>Project 1</option>
                                    <option>Project 2</option>
                                </select>
                            </form>
                            <p></p>
                            <form className="uk-form-stacked">
                                <label for="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Created</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                                <select id="created" multiple="multiple" data-placeholder="Select created...">
                                    <option>user1</option>
                                    <option>user2</option>
                                </select>
                            </form>
                            <p></p>
                            <form className="uk-form-stacked">
                                <label for="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Requester</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                                <select id="requester" multiple="multiple" data-placeholder="Select requester...">
                                    <option>user1</option>
                                    <option>user2</option>
                                </select>
                            </form>
                            <p></p>
                            <form className="uk-form-stacked">
                                <label for="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Company</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                                <select id="company" multiple="multiple" data-placeholder="Select company...">
                                    <option>user1</option>
                                    <option>user2</option>
                                </select>
                            </form>
                            <p></p>
                            <form className="uk-form-stacked">
                                <label for="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Assigned</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                                <select id="assigned" multiple="multiple" data-placeholder="Select assigned...">
                                    <option selected>me</option>
                                    <option selected>unasigned</option>
                                    <option>user1</option>
                                    <option>user2</option>
                                </select>
                            </form>
                            <p></p>
                            <form className="uk-form-stacked">
                                <label className="uk-text-muted">Tag</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <select id="selec_adv_1" name="selec_adv_1" multiple
                                        data-placeholder="Select context...">
                                </select>
                            </form>
                            <p></p>
                            <form className="uk-form-stacked">
                            <div className="uk-grid" data-uk-grid-margin>
                                <div className="uk-width-medium-1-2">
                                    <label className="uk_dp_1 uk-text-muted">Created From:</label>
                                    <input type="text" className="md-input"/>
                                </div>
                                <div className="uk-width-medium-1-2">
                                    <label className="uk_dp1 uk-text-muted">To:</label>
                                       <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                    <input type="text" className="md-input"/>
                                </div>
                            </div>
                        </form>
                        <p></p>
                        <hr/>
                        <label className="uk_dp_1 uk-text-muted">Started at</label>
                                     <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                        <p>
                            <input type="radio" name="radio_demo" id="radio_demo_1" data-md-icheck/>
                            <label for="radio_demo_1" className="inline-label">Overdue</label>
                        </p>
                        <p>
                            <input type="radio" name="radio_demo" id="radio_demo_2" data-md-icheck/>
                            <label for="radio_demo_2" className="inline-label">Time range</label>
                        </p>
                        <p></p>
                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp_1 uk-text-muted">From:</label>
                                <input type="text" className="md-input"/>
                            </div>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp1 uk-text-muted">To:</label>
                                <input type="text" className="md-input"/>
                            </div>
                        </div>
                        <hr/>
                        <p></p>
                        <label className="uk_dp_1 uk-text-muted">Deadline at</label>
                                     <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                        <p>
                            <input type="radio" name="deadline" id="deadline_1" data-md-icheck/>
                            <label for="deadline_1" className="inline-label">Overdue</label>
                        </p>
                        <p>
                            <input type="radio" name="deadline" id="deadline_2" data-md-icheck/>
                            <label for="deadline_2" className="inline-label">Time range</label>
                        </p>
                        <p></p>
                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp_1 uk-text-muted">From:</label>
                                <input type="text" className="md-input"/>
                            </div>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp1 uk-text-muted">To:</label>
                                <input type="text" className="md-input"/>
                            </div>
                        </div>
                        <hr/>
                        <p></p>
                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp_1 uk-text-muted">Closed From:</label>
                                <input type="text" className="md-input"/>
                            </div>
                            <div className="uk-width-medium-1-2">
                                <label className="uk_dp1 uk-text-muted">To:</label>
                                       <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                                <input type="text" className="md-input"/>
                            </div>
                        </div>
                        <p></p>
                        <hr/>
                        <input type="checkbox" name="checkbox_demo_mercury" id="checkbox_demo_1" data-md-icheck/>
                        <label for="checkbox_demo_1" className="inline-label">Archived</label>
                        <p></p>
                        <hr/>
                        <form className="uk-form-stacked">
                            <label for="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Custom select 1</label>
                                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                            <select id="custom1" multiple="multiple" data-placeholder="Select custom...">
                                <option>user1</option>
                                <option>user2</option>
                            </select>
                        </form>
                        <p></p>
                        <form className="uk-form-stacked ">
                            <label className="uk_dp_1 uk-text-muted">Custom input/text area</label>
                                     <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                            <input type="text" className="md-input"/>
                        </form>
                        <p></p>
                    </ul>
                </div>
                    <div className="uk-width-medium-3-4">
                        <table className="uk-table uk-text-nowrap">
                            <thead>
                            <tr>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                            </tr>
                            <tr>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                            </tr>
                            <tr>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default reports_custom;
