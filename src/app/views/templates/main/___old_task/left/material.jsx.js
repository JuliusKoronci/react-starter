import React from 'react';
import MaterialForm from '../../../../../forms/Task/Material.form';
import configResolver from '../../../../../../config/configResolver';

const material = ({ task, options, actions, canEdit }) => {
	return (
		<div>
			<label className="uk-text-muted">Material</label>
			<div className="md-card uk-margin-medium-bottom">
				<div className="md-card-content">
					<div className="uk-overflow-container">
						<table className="uk-table uk-text-nowrap">
							<thead>
							<tr>
								<th>Name</th>
								<th>Quantity</th>
								<th>Unit</th>
								<th>Price</th>
								<th>Price total</th>

							</tr>
							</thead>
							<tbody>
							{task.invoiceableItems && task.invoiceableItems.map((material, i) => {
									return (
										<tr key={i}>
											<td>{material.title}</td>
											<td>{material.amount}</td>
											<td>{material.unit.shortcut}</td>
											<td>{material.unit_price}</td>
											<td>{material.amount * material.unit_price}</td>
										</tr>
									);
								}
							)}
							{canEdit && <MaterialForm options={options.unit} task={task}
													  addMaterial={(id, data) => {
                                              const config = configResolver.addMaterial(data, id);
                                              actions.createEntity(config.values, config);
                                          }} />}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default material;
