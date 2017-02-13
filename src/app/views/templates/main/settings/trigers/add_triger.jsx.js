import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const add_triger = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom">
                    <h1 className="heading_b uk-margin-bottom">Add triger</h1>
                </div>
                <hr/>
                <div className="uk-grid">
                    <div className="uk-width-medium-1-1">
                        <div className="uk-margin">
                            <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                                   data-md-icheck/>
                            <label className="uk_dp1 uk-text-muted">Active</label>
                        </div>
                        <div className="uk-margin">
                            <label>Automated task name</label>
                            <input type="text" className="md-input label-fixed" value="task overdue"/>
                        </div>
                        <div className="uk-margin">

                            <label>Description</label>
                            <input type="text" className="md-input label-fixed"
                                   value="change status pending to solved when is task start overdue"/>
                        </div>

                        <div className="uk-margin-bottom">
                            <h2 className="uk-margin-bottom">Meet these conditions:</h2>
                        </div>
                        <hr/>

                        <div className="uk-grid">
                            <div className="div-width-50px">
                                <h3>IF</h3>
                            </div>

                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Task attributes
                                    </option>
                                    <option value="a">Status</option>
                                    <option value="a">...</option>
                                </select>
                            </div>
                            <div className="uk-form-width-small">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Is</option>
                                    <option value="a">Is not</option>
                                    <option value="a">Less than</option>
                                    <option value="a">Greater than</option>
                                </select>
                            </div>

                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>attribute value</option>
                                    <option value="a">Input when input</option>
                                    <option value="a">Select attributes when select</option>
                                    <option value="a">Date picker when date</option>
                                </select>
                            </div>

                            <div>
                                <a className="md-btn md-btn-danger" href="#"><i className="material-icons">
                                    &#xE5CD;</i></a>
                            </div>
                        </div>
                        <hr/>
                        <div className="uk-grid">
                            <div className="div-width-50px">
                                <h3>AND</h3>
                            </div>
                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Task attributes
                                    </option>
                                    <option value="a">Status</option>
                                    <option value="a">...</option>
                                </select>
                            </div>
                            <div className="uk-form-width-small">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Is</option>
                                    <option value="a">Is not</option>
                                    <option value="a">Less than</option>
                                    <option value="a">Greater than</option>
                                </select>
                            </div>

                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>attribute value</option>
                                    <option value="a">Input when input</option>
                                    <option value="a">Select attributes when select</option>
                                    <option value="a">Date picker when date</option>
                                </select>
                            </div>

                            <div>
                                <a className="md-btn md-btn-danger" href="#"><i className="material-icons">
                                    &#xE5CD;</i></a>
                            </div>
                        </div>
                        <hr/>
                        <div className="uk-grid">
                            <div className="div-width-50px">
                                <h3>AND</h3>
                            </div>
                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Task attributes
                                    </option>
                                    <option value="a">Status</option>
                                    <option value="a">...</option>
                                </select>
                            </div>
                            <div className="uk-form-width-small">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Is</option>
                                    <option value="a">Is not</option>
                                    <option value="a">Less than</option>
                                    <option value="a">Greater than</option>
                                </select>
                            </div>

                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>attribute value</option>
                                    <option value="a">Input when input</option>
                                    <option value="a">Select attributes when select</option>
                                    <option value="a">Date picker when date</option>
                                </select>
                            </div>

                            <div>
                                <a className="md-btn md-btn-success" href="#">ADD CONDITION</a>
                            </div>
                        </div>


                        <hr/>
                        <h2 className="uk-text-center">OR</h2>
                        <hr/>

                        <div className="uk-grid">
                            <div className="div-width-50px">
                                <h3>IF</h3>
                            </div>
                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Task attributes
                                    </option>
                                    <option value="a">Status</option>
                                    <option value="a">...</option>
                                </select>
                            </div>
                            <div className="uk-form-width-small">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Is</option>
                                    <option value="a">Is not</option>
                                    <option value="a">Less than</option>
                                    <option value="a">Greater than</option>
                                </select>
                            </div>

                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>attribute value</option>
                                    <option value="a">Input when input</option>
                                    <option value="a">Select attributes when select</option>
                                    <option value="a">Date picker when date</option>
                                </select>
                            </div>

                            <div>
                                <a className="md-btn md-btn-success" href="#">ADD CONDITION</a>
                            </div>
                        </div>
                        <hr/>
                        <div className="uk-margin">
                            <a className="md-btn md-btn-success" href="#">Add condition group</a>
                        </div>
                        <div className="uk-margin">
                            <h2 className="uk-margin-bottom">Perform these actions:</h2>
                        </div>


                        <hr/>

                        <div className="uk-grid">
                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Task attributes
                                    </option>
                                    <option value="a">Status</option>
                                    <option value="a">...</option>
                                </select>
                            </div>
                            <div className="uk-form-width-small">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Update</option>
                                </select>
                            </div>

                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>attribute value</option>
                                    <option value="a">Input when input</option>
                                    <option value="a">Select attributes when select</option>
                                    <option value="a">Date picker when date</option>
                                </select>
                            </div>

                            <div>
                                <a className="md-btn md-btn-danger" href="#"><i className="material-icons">
                                    &#xE5CD;</i></a>
                            </div>
                        </div>
                        <hr/>

                        <div className="uk-grid">
                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Task attributes
                                    </option>
                                    <option value="a">Status</option>
                                    <option value="a">...</option>
                                </select>
                            </div>
                            <div className="uk-form-width-small">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Update</option>
                                </select>
                            </div>

                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>attribute value</option>
                                    <option value="a">Input when input</option>
                                    <option value="a">Select attributes when select</option>
                                    <option value="a">Date picker when date</option>
                                </select>
                            </div>

                            <div className="uk-form-width-small">
                                <a className="md-btn md-btn-danger" href="#"><i className="material-icons">
                                    &#xE5CD;</i></a>
                            </div>
                        </div>


                        <div className="uk-margin">
                            <label>Subject</label>
                            <input type="password" className="md-input"/>
                        </div>
                        <div className="uk-margin">
                            <label>Email body</label>
                            <textarea cols="30" rows="4" className="md-input">Ut cumque quae laboriosam id et placeat ullam autem perferendis voluptate id tempora optio temporibus consequatur qui ut in sit praesentium rerum temporibus dignissimos expedita necessitatibus totam nisi placeat omnis id tempora itaque velit in vel reiciendis cum quia commodi qui ipsum repudiandae.</textarea>
                        </div>
                        <hr/>
                        <div className="uk-grid">
                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Task attributes
                                    </option>
                                    <option value="a">Status</option>
                                    <option value="a">...</option>
                                </select>
                            </div>
                            <div className="uk-form-width-small">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>Update</option>
                                </select>
                            </div>

                            <div className="uk-form-width-medium">
                                <select id="select_demo_1" className="md-input">
                                    <option value="" disabled selected hidden>attribute value</option>
                                    <option value="a">Input when input</option>
                                    <option value="a">Select attributes when select</option>
                                    <option value="a">Date picker when date</option>
                                </select>
                            </div>

                            <div className="uk-form-width-small">
                                <a className="md-btn md-btn-success" href="#">ADD ACTION</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-margin">
                    <a className="md-btn md-btn-danger" href="#">Delete</a>
                    <a className="md-btn md-btn-primary alignright" href="settings_units.html">Save</a>
                </div>
            </div>
        </div>
    );
};


export default add_triger;
