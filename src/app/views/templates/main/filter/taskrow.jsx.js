import React, { PropTypes } from "react";
import TagList from "../_partials/tags.jsx";
import TaskAssignees from "../tasks/taskrow/task_assignees.jsx";
import TaskStatus from "../tasks/taskrow/task_status.jsx";
import { Link } from "react-router";
import dateFormat from "../../../../services/formatedDate";

const taskrow = ({ task, columns }) => {
  // console.log(columns);

  return (
    <tr>
      <td className="uk-text-center uk-table-middle small_col">
        <input type="checkbox" data-md-icheck className="check_row" />
      </td>

      <td className="uk-text-center">
        <span className="uk-text-muted uk-text-nowrap">{task.id}</span>
      </td>

      {columns.map((col, i) => {
        if (col.title) {
          return (
            <td key={i}>
              <Link className="uk-text-large" to={"/tasks/" + task.id}>
                {task.title}
              </Link>{" "}
              {!task.canEdit ? "(READ-ONLY)" : ""}
              <TagList task={task} />
            </td>
          );
        }

        if (col.status) {
          return (
            <td key={i}>
              <TaskStatus task={task} />
            </td>
          );
        }

        if (col.project) {
          return <td key={i}>{task.project.title}</td>;
        }

        if (col.creator) {
          return <td key={i}>{task.createdBy.username}</td>;
        }

        if (col.requester) {
          return <td key={i}>{task.requestedBy.username}</td>;
        }

        if (col.taskCompany) {
          return <td key={i}>{task.company.title}</td>;
        }

        if (col.assigned) {
          return (
            <td key={i}>
              <TaskAssignees task={task} />
            </td>
          );
        }

        if (col.tag) {
          return (
            <td key={i}>
              {task.tags.map(tag => {
                return tag.title;
              })}
            </td>
          );
        }

        if (col.createdTime) {
          return (
            <td key={i}>
              {task.createdAt && task.createdAt.date
                ? dateFormat(task.createdAt.date)
                : "-"}
            </td>
          );
        }
        if (col.startedTime) {
          return (
            <td key={i}>
              {task.startedAt && task.startedAt.date
                ? dateFormat(task.startedAt.date)
                : "-"}
            </td>
          );
        }
        if (col.deadlineTime) {
          return (
            <td key={i}>
              {task.deadline && task.deadline.date
                ? dateFormat(task.deadline.date)
                : "-"}
            </td>
          );
        }
        if (col.closedTime) {
          return (
            <td key={i}>
              {task.closedAt && task.closedAt.date
                ? dateFormat(task.closedAt.date)
                : "-"}
            </td>
          );
        }

        return null;
      })}

      {/*{columns[0].title && <td>*/}
      {/*<Link className="uk-text-large" to={'/tasks/' + task.id}>{task.title}</Link>*/}
      {/*<TagList task={task}/>*/}
      {/*</td>}*/}

      {/*{columns[1].status && <td><TaskStatus task={task}/></td>}*/}

      {/*{columns[2].project && <td>{task.project.title}</td>}*/}

      {/*{columns[3].creator && <td>{task.createdBy.username}</td>}*/}

      {/*{columns[4].requester && <td>{task.requestedBy.username}</td>}*/}

      {/*{columns[5].company && <td>{task.company.title}</td>}*/}

      {/*{columns[6].assigned && <td><TaskAssignees task={task}/></td>}*/}

      {/*{columns[7].tag && <td>{task.tags.map((tag)=>{return tag.title})}</td>}*/}

      {/*{columns[8].created && <td>{task.createdAt && task.createdAt.date?dateFormat(task.createdAt.date):'-'}</td>}*/}
      {/*{columns[9].started && <td>{task.startedAt && task.startedAt.date?dateFormat(task.startedAt.date):'-'}</td>}*/}
      {/*{columns[10].deadline && <td>{task.deadline && task.deadline.date?dateFormat(task.deadline.date):'-'}</td>}*/}
      {/*{columns[11].closed && <td>{task.closedAt && task.closedAt.date?dateFormat(task.closedAt.date):'-'}</td>}*/}
    </tr>
  );
};
taskrow.propTypes = {
  task: PropTypes.object.isRequired
};

export default taskrow;
