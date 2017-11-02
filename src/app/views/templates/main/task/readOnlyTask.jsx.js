import React, { PropTypes } from "react";
import TaskInfo from "./top/taskInfoReadOnly.jsx";
// import TaskActions from './top/taskActions.jsx';
import Summary from "./left/summaryReadOnly.jsx";
import Material from "./left/materialReadOnly.jsx";
import CommentForm from "./left/commentForm.jsx";
import CommentList from "./left/commentList.jsx";
import RightMain from "./right/mainReadOnly.jsx";
import TaskButtonPanel from "./top/taskButtonPanelReadOnly.jsx";

const readOnlyTask = props => {
  return (
    <div className="md-card-content">
      <div className="uk-form-row">
        <TaskButtonPanel saveAction={props.saveAction} {...props} />
        <hr />
        <div className="uk-grid uk-grid-divider" data-uk-grid-margin>
          <div className="uk-width-medium-1-4">
          <RightMain {...props} />

          </div>
          <div className="uk-width-medium-3-4">
          <TaskInfo {...props} />
          <Summary {...props} canEdit={false} />
          <Material task={props.task} />
          <CommentForm {...props} />
          <CommentList {...props} />

          </div>
        </div>
      </div>
    </div>
  );
};

readOnlyTask.propTypes = {
  task: PropTypes.object.isRequired
};

export default readOnlyTask;
