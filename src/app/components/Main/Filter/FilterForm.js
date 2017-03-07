import React, {Component} from 'react';
import {Link} from 'react-router';
import {Creatable} from 'react-select';
import Select from 'react-select';
import ColumnVisible from '../../../views/templates/main/filter/columnVisible.jsx';


class FilterForm extends Component {

    render() {


        return (
            <div className={this.props.filterFormVisible ? "uk-width-medium-1-4" : 'hidden'} id="filterDiv">

                <a className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                   href="javascript:void(0)">CLEAR</a>
                <a className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                   href="javascript:void(0)">SAVE</a>
                <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                   href="javascript:void(0)">FILTER</a>


                <ul className="md-list md-list-addon">

                    <form className="uk-form-stacked uk-margin-top">
                        <label className="uk_dp_1 uk-text-muted">Filter Name</label>
                        <input type="text" className="md-input"/>
                    </form>


                    <form className="uk-form-stacked uk-margin-top">
                        <label className="uk_dp_1 uk-text-muted">Task Name</label>

                        <span className="alignright">

                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="title"
                                           columns={this.props.columns}/>

                        </span>
                        <input type="text" className="md-input"/>
                    </form>



                    <form className="uk-form-stacked uk-margin-top">
                        <label className="uk_dp_1 uk-text-muted">Status</label>
                        <span className="alignright">

                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="status"
                                           columns={this.props.columns}/>

                                        </span>
                        {/*Pouzity react-multiselect https://github.com/JedWatson/react-select*/}
                        <Creatable name="Status"
                                   className="md-input"
                                   joinValues={true}
                                   multi={true}
                                   options={[
                                       {value: 'New', label: 'New'},
                                       {value: 'Open', label: 'Open'},
                                       {value: 'Pending', label: 'Pendig'},
                                       {value: 'Closed', label: 'Closed'},
                                   ]}
                        />

                    </form>


                    <form className="uk-form-stacked uk-margin-top">
                        <label htmlFor="project" className="uk_dp_1 uk-text-muted">Project</label>
                        <span className="alignright">

                                        <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="project"
                                                       columns={this.props.columns}/>
                                    </span>
                        <Creatable name="Project"
                                   className="md-input"
                                   joinValues={true}
                                   multi={true}
                                   options={[
                                       {
                                           value: 'Projekty ku ktorym ma pouzivatel pristup',
                                           label: 'Projekty ku ktorym ma pouzivatel pristup'
                                       },
                                   ]}
                        />
                    </form>


                    <form className="uk-form-stacked uk-margin-top">
                        <label className="uk_dp_1 uk-text-muted">Created</label>
                        <span className="alignright">

                                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="created"
                                                           columns={this.props.columns}/>

                                         </span>
                        <Creatable name="Created"
                                   className="md-input"
                                   joinValues={true}
                                   multi={true}
                                   options={[
                                       {
                                           value: 'multiselect+autocomplete pouzivatelia',
                                           label: 'multiselect+autocomplete pouzivatelia'
                                       },
                                   ]}
                        />
                    </form>


                    <form className="uk-form-stacked uk-margin-top">
                        <label htmlFor="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Requester</label>
                        <span className="alignright">

                                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="requester"
                                                           columns={this.props.columns}/>


                                         </span>
                        <Creatable name="Requester"
                                   className="md-input"
                                   joinValues={true}
                                   multi={true}
                                   options={[
                                       {
                                           value: 'multiselect+autocomplete pouzivatelia',
                                           label: 'multiselect+autocomplete pouzivatelia'
                                       },
                                   ]}
                        />
                    </form>


                    <form className="uk-form-stacked uk-margin-top">
                        <label htmlFor="kUI_multiselect_basic" className="uk_dp_1 uk-text-muted">Company</label>
                        <span className="alignright">


                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="company"
                                           columns={this.props.columns}/>

                                         </span>
                        <Creatable name="Company"
                                   className="md-input"
                                   joinValues={true}
                                   multi={true}
                                   options={[
                                       {
                                           value: 'multiselect+autocomplete companies',
                                           label: 'multiselect+autocomplete companies'
                                       },
                                   ]}
                        />
                    </form>


                    <form className="uk-form-stacked uk-margin-top">
                        <label className="uk_dp_1 uk-text-muted">Assigned</label>
                        <span className="alignright">


                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="assigned"
                                           columns={this.props.columns}/>

                                         </span>
                        <Creatable name="Assigned"
                                   className="md-input"
                                   joinValues={true}
                                   multi={true}
                                   options={[
                                       {
                                           value: 'multiselect+autocomplete pouzivatelia',
                                           label: 'multiselect+autocomplete pouzivatelia'
                                       },
                                   ]}
                        />
                    </form>


                    <form className="uk-form-stacked uk-margin-top">
                        <label className="uk-text-muted">Context</label>
                        <span className="alignright">



                                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="context"
                                                           columns={this.props.columns}/>

                                        </span>
                        <Creatable name="Context"
                                   className="md-input"
                                   joinValues={true}
                                   multi={true}
                                   options={[
                                       {value: 'autocomplete context', label: 'autocomplete context'},
                                   ]}
                        />
                    </form>


                    <form className="uk-form-stacked uk-margin-top">
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


                    <hr/>
                    <p className="uk-text-muted">Started at</p>
                    <p>
                        <input type="radio" name="radio_demo" id="radio_demo_1" data-md-icheck/>
                        <label htmlFor="radio_demo_1" className="inline-label">Overdue</label>
                    </p>
                    <p>
                        <input type="radio" name="radio_demo" id="radio_demo_2" data-md-icheck/>
                        <label htmlFor="radio_demo_2" className="inline-label">Time range</label>
                    </p>

                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">
                            <label className="uk_dp_1 uk-text-muted">From:</label>
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
                    <hr/>

                    <p className="uk-text-muted">Deadline at</p>
                    <p>
                        <input type="radio" name="radio_demo" id="radio_demo_1" data-md-icheck/>
                        <label htmlFor="radio_demo_1" className="inline-label">Overdue</label>
                    </p>
                    <p>
                        <input type="radio" name="radio_demo" id="radio_demo_2" data-md-icheck/>
                        <label htmlFor="radio_demo_2" className="inline-label">Time range</label>
                    </p>

                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">
                            <label className="uk_dp_1 uk-text-muted">From:</label>
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
                    <hr/>

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
                    <hr/>

                    <input type="checkbox" name="checkbox_demo_mercury" id="checkbox_demo_1" data-md-icheck/>
                    <label htmlFor="checkbox_demo_1" className="inline-label">Archived</label>

                    <hr/>
                    <form className="uk-form-stacked uk-margin-top">
                        <label className="uk_dp_1 uk-text-muted">Custom select 1</label>
                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                         </span>
                        <Creatable name="Project"
                                   className="md-input"
                                   joinValues={true}
                                   multi={true}
                                   options={[
                                       {
                                           value: 'Projekty ku ktorym ma pouzivatel pristup',
                                           label: 'Projekty ku ktorym ma pouzivatel pristup'
                                       },
                                   ]}
                        />
                    </form>

                    <form className="uk-form-stacked uk-margin-top">
                        <label className="uk_dp_1 uk-text-muted">Custom input/text area</label>
                        <span className="alignright">
                                            <label className="uk_dp1 uk-text-muted">Column</label>
                                            <input type="checkbox" name="checkbox_demo_inline_mercury"
                                                   id="checkbox_demo_inline_1" data-md-icheck/>
                                        </span>
                        <input type="text" className="md-input"/>
                    </form>

                </ul>

            </div>
        );
    }
}


export default FilterForm;
