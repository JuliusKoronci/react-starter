import React from 'react';
import RightMain from './right/mainNewTask.jsx';
import TaskButtonPanel from './top/taskButtonPanel.jsx';
import RichText from '../../../../forms/general/RichText.form';


const creatingTask = (props) => {
    return (
        <div className="md-card-content form-inputs-disabled">

            <div className="uk-form-row">
                {/*{props.newTask && <NewTaskPannel {...props} />}*/}
                <div className="uk-grid" data-uk-grid-margin>


                    <TaskButtonPanel saveAction={props.saveAction}/>
                    <hr />
                    <div className="md-input-wrapper md-input-filled">
                        <input type="text" className="md-input header_b" style={{fontSize: '22px', lineHeight: '26px'}}
                               value={props.newTaskTitle} placeholder="New task name" autoFocus={true}
                               onChange={props.newTaskTitleChangeHandler.bind(null)}
                            // props.newTaskTitleChangeHandler.bind(null)
                        />
                        <span className="md-input-bar "/></div>


                </div>
                <hr />
                <div className="uk-grid uk-grid-divider" data-uk-grid-margin>
                    <div className="uk-width-medium-3-4">

                        <div>
                            <div className="uk-margin-medium-bottom">
                                <RichText fieldName="newTaskDescription" label="Description" form={props.form}
                                          action={props.inputChangeHandler} value={props.newTaskDescription}/>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-medium-1-4">
                        <RightMain {...props} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default creatingTask;
