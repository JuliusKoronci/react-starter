import React, {PropTypes} from 'react';
import { Creatable } from 'react-select';
import Task from './taskrow.jsx';
import Pagination from '../_partials/pagination.jsx';

const FilterTasks = (props) => {




    return (
                    <div className={props.filterFormVisible?"uk-width-medium-3-4":"uk-width-medium-4-4"} id="tasksDiv">
                        <a className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                           href="javascript:void(0)">DELETE</a>


                        <button className="md-btn md-btn-primary md-btn-small" type="button" id="filterButon" value="Hide" onClick={props.toggleFilter.bind(null)} >
                            <span className="menu_icon"><i className="material-icons md-color-white">&#xE152;</i></span>
                            <span className="menu_title">{props.filterFormVisible?'HIDE':'SHOW'}</span>
                        </button>


                        <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                           href="javascript:void(0)">BULK ACTION</a>

                        <div className="uk-overflow-container uk-margin-bottom">
                            <table className="uk-table uk-table-align-vertical uk-table-nowrap tablesorter tablesorter-altair" id="ts_issues">
                                <thead>
                                <tr>
                                    <th className="uk-width-1-10 uk-text-center small_col"><input type="checkbox" data-md-icheck className="check_all" /></th>


                                    <th className="uk-text-center ">Key</th>


                                    { Object.keys(props.columns).map((key, i)=>{
                                        let name=key;
                                        if(props.columns.hasOwnProperty(name)&& typeof props.columns[name] !== 'undefined' && (!!props.columns[name])) {
                                            return <th key={i}>{name}</th>;
                                            {/*return <th key={i}>{props.columns[name].label}</th>;*/}
                                        }
                                    })
                                    }


                                    {/*
                                     <th>Owner</th>
                                     <th>Company</th>
                                     <th>Assignee</th>
                                     <th>Created</th>
                                     <th>Deadline</th>
                                     <th>Status</th>
                                     */}
                                </tr>
                                </thead>
                                <tbody>

                                {props.tasks.data.map((task, i) => {
                                    return <Task task={task} key={i} index={i} columns={props.columns} />
                                })}


                                </tbody>
                            </table>
                        </div>

                        <Pagination links={props.tasks._links} total={props.tasks.total} page={props.tasks.page}
                                    loadFunction={props.loadTasksFunction}/>

                    </div>

    );
};


/*

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

*/



export default FilterTasks;
