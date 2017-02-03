import React from 'react';

const add_automated_task = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add automated task</h1>
                </div>
                <hr/>
                <div className="uk-grid">
                    <div className="uk-width-medium-1-2">
                        <div className="uk-margin-bottom">
                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                                   data-md-icheck/>
                            <label className="uk_dp1 uk-text-muted">Active</label>
                        </div>
                        <div className="uk-margin-bottom">
                            <label>Automated task name</label>
                            <input type="text" className="md-input label-fixed" value="task overdue"/>
                        </div>
                        <div className="uk-margin-bottom">
                            <label>Description</label>
                            <input type="text" className="md-input label-fixed"
                                   value="change status pending to solved when is task start overdue"/>
                        </div>
                        <hr/>

                        <table className="uk-table uk-text-nowrap">
                            <thead>
                            <tr>
                                <th className="uk-text-center"><h1>IF</h1></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="uk-text-center">
                                    <label>Status</label>
                                    <input type="text" className="md-input label-fixed" value="PENDING"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="uk-text-center">
                                    <select id="select_demo_1" className="md-input">
                                        <option value="" disabled selected hidden>AND</option>
                                        <option value="a">OR</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="uk-text-center">
                                    <label>Start date</label>
                                    <input type="text" className="md-input label-fixed" value="overdue"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="uk-margin-bottom">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary alignright" href="settings_units.html">Save</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default add_automated_task;
