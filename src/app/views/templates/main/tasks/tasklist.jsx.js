import React, {PropTypes} from 'react';
import Task from './taskrow.jsx';
import Pagination from '../_partials/pagination.jsx';
import Tasklistcolumn from './tasklistcolumn.jsx';


const tasklist = ({tasks, loadTasksFunction, filter, heading, searchChange, orderByChange, searchText,state,reloadTasks, hasSearch, canOrder, orderBy, orderDirection}) => {

    // console.log(searchText)
    // console.log(state)

    return (
        <div className="md-card-content">
            <div className="uk-margin-bottom" data-uk-margin>
                <h1 className="heading_b uk-margin-bottom">{heading ? heading : 'Dashboard'}</h1>
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
                           href="#">CANCEL</a>
                        <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light alignright"
                           href="#">DELETE</a>
                    </span>

                </div>
            </div>
            &nbsp;
            <button className="md-btn md-btn-primary md-btn-small" type="button" data-uk-button>Bulk Actions
            </button>


            {hasSearch && <span> <input type="text" name="search" value={searchText} onChange={searchChange} /> <button onClick={reloadTasks}>search</button> </span>}


            <p/>
            <div className="uk-overflow-container uk-margin-bottom">
                <table
                    className="uk-table uk-table-align-vertical uk-table-nowrap tablesorter tablesorter-altair"
                    id="ts_issues">
                    <thead>
                    <tr>
                        <th className="uk-width-1-10 uk-text-center small_col">
                            <input type="checkbox" data-md-icheck className="check_all"/>
                        </th>
                        {/*<th className="uk-text-center ">Key</th>*/}
                        <th><Tasklistcolumn title="Key" name="id" clickHandler={orderByChange} canOrder={canOrder} orderBy={orderBy} orderDirection={orderDirection} /></th>
                        <th><Tasklistcolumn title="Title" name="title" clickHandler={orderByChange} canOrder={canOrder} orderBy={orderBy} orderDirection={orderDirection} /></th>
                        <th><Tasklistcolumn title="Requester" name="requester" clickHandler={orderByChange} canOrder={canOrder} orderBy={orderBy} orderDirection={orderDirection} /></th>
                        <th><Tasklistcolumn title="Company" name="company" clickHandler={orderByChange} canOrder={canOrder} orderBy={orderBy} orderDirection={orderDirection} /></th>
                        <th><Tasklistcolumn title="Assignee" name="assigned" clickHandler={orderByChange} canOrder={canOrder} orderBy={orderBy} orderDirection={orderDirection} /></th>
                        <th><Tasklistcolumn title="Created" name="createdTime" clickHandler={orderByChange} canOrder={canOrder} orderBy={orderBy} orderDirection={orderDirection} /></th>
                        <th><Tasklistcolumn title="Deadline" name="deadlineTime" clickHandler={orderByChange} canOrder={canOrder} orderBy={orderBy} orderDirection={orderDirection} /></th>
                        <th><Tasklistcolumn title="Status" name="status" clickHandler={orderByChange} canOrder={canOrder} orderBy={orderBy} orderDirection={orderDirection} /></th>

                        {/*<th><span data-order-by="status" onClick={orderByChange}>Status</span></th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.data.map((task, i) => {
                        return <Task task={task} key={i} index={i}/>
                    })}
                    </tbody>
                </table>
            </div>

            <Pagination links={tasks._links} total={tasks.total} page={tasks.page}
                        loadFunction={loadTasksFunction}/>

        </div>
    );
};


tasklist.propTypes = {
    tasks: PropTypes.object.isRequired
};

export default tasklist;