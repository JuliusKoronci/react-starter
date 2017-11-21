// @flow
import {
  TASKS_RECEIVED,
  TASK_RECEIVED,
  TASK_UPDATED,
  OPTIONS_RECEIVED,
  AFTER_TASK_ATTACHMENT_DELETED,
  AFTER_TASK_ATTACHMENT_UPLOADED,
  TASK_COMMENT_ADDED,
  PROJECT_ASSIGNERS_RECEIVED
} from "../../constants";

const defaultState: { data: Array<Object>, _links: Object } = {
  data: [],
  _links: {},
  total: 0,
  page: 1,
  numberOfPages: 0,
  options: {
    status: [],
    project: [],
    requester: [],
    company: [],
    tag: [],
    assigner: [],
    unit: [],
    taskAttributes: []
  },
  task: {}
};

export default function tasks(
  state: Object = defaultState,
  action: Object
): Object {
  switch (action.type) {
    case TASKS_RECEIVED:
      return { ...state, ...action.data };
    case TASK_RECEIVED:
      return {
        ...state,
        task: action.data
      };
    case TASK_UPDATED:
      return {
        ...state,
        task: action.data,
        data: state.data.map(task => {
          if (task.id === action.taskId) {
            return Object.assign({}, task, action.data);
          }
          return task;
        })
      };
    case OPTIONS_RECEIVED:
      return {
        ...state,
        options: action.data
      };

    case PROJECT_ASSIGNERS_RECEIVED:
      // console.log(action.data);
      // console.log({...state.options, ...action.data});
      return {
        ...state,
        options: { ...state.options, ...action.data }
      };

    case TASK_COMMENT_ADDED:
      console.log(action.data.comment);
      // console.log(state.task);
      let commentId = action.data.comment.id;
      // let comments = Object.assign({}, state.task.data.comments, {
      //   [commentId]: action.data.comment
      // });
      let comments = [...state.task.data.comments, action.data.comment];

      // console.log("state task comments", state.task.data);
      console.log("save comments", comments);

      // let newState = {
      //   ...state,
      //   task: {
      //     ...state.task,
      //     data: {
      //       ...state.task.data,
      //       comments
      //     }
      //   }
      // };
      // console.log("state task", state.task);
      // console.log("new state task:", newState.task);
      // return { ...state };
      // TODO
      return {
        ...state,
        task: {
          ...state.task,
          data: {
            ...state.task.data,
            comments
          }
        }
      };

    case AFTER_TASK_ATTACHMENT_DELETED:
      return {
        ...state,
        task: {
          ...state.task,
          data: {
            ...state.task.data,
            taskHasAttachments: state.task.data.taskHasAttachments.filter(
              att => {
                return att.slug !== action.deletedAttachmentSlug;
              }
            )
          }
        }
      };

    case AFTER_TASK_ATTACHMENT_UPLOADED:
      return {
        ...state,
        task: {
          ...state.task,
          data: {
            ...state.task.data,
            taskHasAttachments: action.data.taskHasAttachments
          }
        }
      };

    default:
      return state;
  }
}
