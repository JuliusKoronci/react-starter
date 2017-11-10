import React from "react";
// import Select from '../../../../../forms/Task/Select.form';
import Select from "../../../../../forms/general/Select.form";
import { sort_by } from "../../../../../services/general";

const main = ({
  inputChangeHandler,
  newTaskProject,
  userProjects,
  newTaskAssigner,
  options
}) => {
  let assignedOptions = options.assigner.map(r => {
    return { id: r.id, title: r.username };
  });

  console.log("new task assigner:", newTaskAssigner);
  assignedOptions.sort(
    sort_by("title", false, function(a) {
      return a.toUpperCase();
    })
  );
  userProjects.sort(
    sort_by("title", false, function(a) {
      return a.toUpperCase();
    })
  );

  options.project = userProjects;

  return (
    <div className="md-list md-list-addon">
      <Select
        label="Project"
        icon="&#xE2C8;"
        defaultValue={newTaskProject || ""}
        optionss={options.project}
        options={options.project.map(r => {
          return {
            value: r.id,
            label: r.title
          };
        })}
        value={newTaskProject}
        name="newTaskProject"
        aaction={e => {
          inputChangeHandler("newTaskProject", e.target.value);
        }}
        action={inputChangeHandler}
      />

      <Select
        label="Assigned"
        icon="&#xE7FD;"
        name="newTaskAssigner"
        ddefaultValue={0}
        value={
          newTaskAssigner && newTaskAssigner[0] && newTaskAssigner[0]["userId"]
            ? newTaskAssigner[0]["userId"]
            : ""
        }
        optionss={assignedOptions}
        vvalue={newTaskAssigner ? newTaskAssigner : ""}
        options={assignedOptions.map(r => {
          return {
            value: r.id,
            label: r.title
          };
        })}
        aaction={e => {
          inputChangeHandler("newTaskAssigner", [{ userId: e.target.value }]);
        }}
        action={inputChangeHandler}
      />
    </div>
  );
};

export default main;
