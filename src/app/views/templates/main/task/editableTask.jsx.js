import React from 'react';
import TaskInfo from './top/taskInfo.jsx';
import TaskActions from './top/taskActions.jsx';
import Summary from './left/summary.jsx';
import Material from './left/material.jsx';
import CommentForm from './left/commentForm.jsx';
import CommentList from './left/commentList.jsx';
import RightMain from './right/main.jsx';


const editableTask = (props) => {
    return (
        <div>
            <div className="top">
                <TaskInfo {...props}/>
                <TaskActions {...props}/>
            </div>
            <div className="left">
                <Summary {...props}/>
                <Material {...props}/>
                <CommentForm {...props}/>
                <CommentList {...props}/>
            </div>
            <div className="right">
                <RightMain {...props}/>
            </div>
        </div>
    );
};

export default editableTask;