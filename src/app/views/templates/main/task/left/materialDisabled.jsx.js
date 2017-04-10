import React from 'react';


const material = ({}) => {
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


							<tr>
								<td>
									<input type="text" id="table-item" disabled={true}
										   className={'md-input'}/>
								</td>
								<td>
									<input type="text" id="table-item" disabled={true}
										    className={'md-input '}/>
								</td>
								<td>
									<select id="table-item" className={'md-input'}> disabled={true}
									</select>
								</td>
								<td>
									<input type="text" id="table-item" disabled={true}
										   className={'md-input'}/>
								</td>
								<td>
									<div className="uk-width-medium-1-6">
										<a id="table-item" disabled={true}
										   className="md-btn md-btn-flat md-btn-flat-primary md-btn-wave disabled">
											Add item
										</a>
									</div>
								</td>

							</tr>

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default material;
