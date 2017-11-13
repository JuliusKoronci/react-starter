import React from "react";
// import RTE from '../../../../../forms/rte/RTE.form';
import RichText from "../../../../../forms/general/RichText.form";
import Input from "../../../../../forms/Task/Input.form";
import Tag from "../right/tag.jsx";

const summary = ({
  task,
  actions,
  canEdit,
  formInputChangeHandler,
  form,
  options
}) => {
  return (
    <div>
      <div className="uk-margin-medium-bottom">
        {canEdit && (
          <Tag
            tagValues={form.tags}
            options={options.tag.map(tag => {
              return {
                value: tag.id,
                label: tag.title
              };
            })}
            setValues={values => {
              formInputChangeHandler("tags", values);
              // const config = configResolver.addTags(values, task.id);
              // actions.patchEntity(config, config.values);
            }}
          />
        )}
        {!canEdit && <p>Read Only tags</p>}
      </div>
      <div className="uk-margin-medium-bottom">
        {canEdit && (
          <RichText
            fieldName="description"
            label="Description"
            form={form}
            action={formInputChangeHandler}
          />
        )}
        {!canEdit && (
          <p dangerouslySetInnerHTML={{ __html: task.description }} />
        )}
      </div>

      {/* <div className="uk-margin-medium-bottom">
        {canEdit && (
          <RichText
            fieldName="work"
            label="Work Done"
            form={form}
            action={formInputChangeHandler}
          />
        )}
        {!canEdit && <p dangerouslySetInnerHTML={{ __html: task.work }} />}
      </div> */}

      {canEdit && (
        <div className="uk-margin-medium-bottom">
          <label className="uk-text-muted">Add work time</label>
          <Input
            fieldName="work_time"
            className="header_b md-input"
            taskId={task.id}
            number={true}
            form={form}
            formInputChangeHandler={formInputChangeHandler}
          />
        </div>
      )}
    </div>
  );
};

export default summary;
