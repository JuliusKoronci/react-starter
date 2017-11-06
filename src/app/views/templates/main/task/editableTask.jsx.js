import React from "react";
import TaskInfo from "./top/taskInfo.jsx";
// import TaskActions from "./top/taskActions.jsx";
import Summary from "./left/summary.jsx";
import Material from "./left/material.jsx";
import CommentForm from "./left/commentForm.jsx";
import CommentList from "./left/commentList.jsx";
import RightMain from "./right/main.jsx";
import NewTaskPannel from "./left/newTaskPannel.jsx";
import TaskButtonPanel from "./top/taskButtonPanel.jsx";

const editableTask = props => {
  return (
    <div className="md-card-content" style={props.formChanged ? {borderStyle:'solid',borderColor:'#8b4'}:{borderStyle:'solid',borderColor:'#fff'}}  >
      <div
        className="uk-form-row"
        style={
          props.formChangedd ? (
            { margin: "-8px", padding: "3px", border: "blue 1px solid" }
          ) : (
            {}
          )

        }
      >
        {props.newTask && <NewTaskPannel {...props} />}

        <TaskButtonPanel saveAction={props.saveAction} {...props} />
        <hr />

        <div className="uk-grid uk-grid-divider" data-uk-grid-margin>
          <div className="uk-width-medium-1-4">
              {/*{props.formChanged && <h1>Form changed</h1>}*/}
      <RightMain {...props} />
          </div>
          <div className="uk-width-medium-3-4">
          <TaskInfo {...props} />
          <Summary {...props} />
          <Material {...props} />
          <h3>Comments</h3>
                    <CommentList {...props} />
          <CommentForm {...props} />


          </div>
        </div>
      </div>
    </div>
  );
};

export default editableTask;
