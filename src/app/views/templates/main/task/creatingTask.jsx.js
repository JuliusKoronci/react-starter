import React from 'react';
import RightMain from './right/mainNewTask.jsx';
import TaskButtonPanel from './top/taskButtonPanel.jsx';
import RichText from '../../../../forms/general/RichText.form';



const creatingTask = (props) => {
    return (
        <div className="md-card-content form-inputs-disabled">
                {/*{props.newTask && <NewTaskPannel {...props} />}*/}
                  <TaskButtonPanel saveAction={props.saveAction} deleteButton={false} errors={props.errors} />
                  <hr/>


                  <div className="uk-grid uk-grid-divider">
                    <div className="uk-width-medium-3-4">
                      <div className="md-input-wrapper md-input-filled uk-margin-medium-bottom">
                          <input
                               type="text"
                               className="md-input"
                               value={props.newTaskTitle} placeholder="New task name" autoFocus={true}
                               onChange={props.newTaskTitleChangeHandler.bind(null)}
                            // props.newTaskTitleChangeHandler.bind(null)
                        />
                        </div>
                         <RichText
                            fieldName="newTaskDescription"
                            label="Description"
                            form={props.form}
                            action={props.inputChangeHandler}
                            value={props.newTaskDescription}/>
                  </div>
                    <div className="uk-width-medium-1-4">
                        <RightMain {...props} />
                    </div>

            </div>
        </div>
    );
};

export default creatingTask;
