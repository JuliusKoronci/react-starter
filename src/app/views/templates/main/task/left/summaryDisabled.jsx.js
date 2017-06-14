import React from 'react';


const summary = () => {
	return (
		<div>
			<div className="uk-margin-medium-bottom">
				<p dangerouslySetInnerHTML={{__html:''}} />
			</div>
			<div className="uk-margin-medium-bottom">
				<p dangerouslySetInnerHTML={{__html:''}} />
			</div>

			<div className="uk-margin-medium-bottom">
				<label className="uk-text-muted">Add work time</label>
				<input name="work_time" className="header_b md-input disabled" disabled={true} />


			</div>




		</div>
	);
};

export default summary;
