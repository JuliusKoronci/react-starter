import React from "react";
import MaterialForm from "../../../../../forms/Task/Material.form";
import configResolver from "../../../../../../config/configResolver";

const material = ({ task, options, actions, canEdit }) => {
  return (
    <div>
      <label className="uk-text-muted">Works</label>
      <div className="md-card uk-margin-medium-bottom">
        <div className="md-card-content">
          <div className="uk-overflow-container">
            <table className="uk-table uk-text-nowrap">
              <thead>
                <tr>
                  <th className="uk-text-center uk-table-middle small_col" />
                  <th>Name</th>
                  <th className="uk-text-right">Assigned</th>
                  <th className="uk-text-right">Hours</th>
                  <th className="uk-text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <td className="uk-text-center uk-table-middle small_col">
                  <input
                    type="checkbox"
                    data-md-icheck="true"
                    class="check_row"
                    value="on"
                  />
                </td>
                <td>Instalácia PC</td>
                <td className="uk-text-right">bsusta</td>
                <td className="uk-text-right">5</td>
                <td className="uk-text-right">
                  <i className="material-icons">&#xE254;</i>
                  <i className="material-icons">&#xE872;</i>
                </td>
                <tr>
                  <td className="uk-text-center uk-table-middle small_col">
                    <input
                      type="checkbox"
                      data-md-icheck="true"
                      class="check_row"
                      value="on"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="table-item"
                      value=""
                      className="md-input "
                    />
                  </td>
                  <td className="uk-text-right">
                    {" "}
                    <input
                      type="text"
                      id="table-item"
                      value=""
                      className="md-input "
                    />
                  </td>
                  <td className="uk-text-right">
                    {" "}
                    <input
                      type="text"
                      id="table-item"
                      value=""
                      className="md-input "
                    />
                  </td>
                  <td className="uk-text-right">
                    <a
                      id="table-item"
                      className="md-btn md-btn-flat md-btn-flat-primary md-btn-wave"
                    >
                      Add
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <label className="uk-text-muted">Material</label>
      <div className="md-card uk-margin-medium-bottom">
        <div className="md-card-content">
          <div className="uk-overflow-container">
            <table className="uk-table uk-text-nowrap">
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="uk-text-right">Quantity</th>
                  <th className="uk-text-right">Unit</th>
                  <th className="uk-text-right">Price</th>
                  <th className="uk-text-right">Price total</th>
                </tr>
              </thead>
              <tbody>
                {task.invoiceableItems &&
                  task.invoiceableItems.map((material, i) => {
                    return (
                      <tr key={i}>
                        <td>{material.title}</td>
                        <td className="uk-text-right">{material.amount}</td>
                        <td className="uk-text-right">
                          {material.unit.shortcut}
                        </td>
                        <td className="uk-text-right">{material.unit_price}</td>
                        <td className="uk-text-right">
                          {material.amount * material.unit_price}
                        </td>
                      </tr>
                    );
                  })}
                {canEdit && (
                  <MaterialForm
                    options={options.unit}
                    task={task}
                    addMaterial={(id, data) => {
                      const config = configResolver.addMaterial(data, id);
                      actions.createEntity(config.values, config);
                    }}
                  />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default material;
