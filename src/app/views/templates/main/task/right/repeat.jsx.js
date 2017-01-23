import React from 'react';

const repeat = () => {
    return (
        <div style={{marginTop: '20px'}}>
            <label className="uk-text-muted" style={{marginLeft: '51px'}}>Repeat</label>

            <div className="uk-input-group">
                <span className="uk-input-group-addon"><i className="material-icons">&#xE040;</i></span>
                <div className="uk-button-dropdown" data-uk-dropdown="{mode:'click'}">
                    <button className="md-btn md-btn-block">
                        every 1 day<i className="material-icons">&#xE5CD;</i>
                    </button>
                </div>
            </div>

            <div className="uk-dropdown uk-dropdown-shown uk-dropdown-top"
                 style={{marginLeft: '50px'}}>
                <ul className="uk-nav uk-nav-dropdown">
                    <li>
                        <div className="repeat-dropdown">
                            <label className="uk-text-muted" htmlFor="uk_dp_1">Start date</label>
                            <input className="md-input" type="text" id="uk_dp_1"
                                   data-uk-datepicker="{format:'DD.MM.YYYY'}"/>
                        </div>
                    </li>
                    <li>
                        <div className="repeat-dropdown">
                            <label className="uk-text-muted">Every</label>
                            <input type="text" className="md-input"/>
                        </div>
                    </li>
                    <li>
                        <div className="repeat-dropdown">
                            <label className="uk-text-muted" htmlFor="uk_dp_1">Time</label>
                            <select id="select_demo_1" className="md-input">
                                <option value="">Day</option>
                                <option value="b">Week</option>
                                <option value="c">Month</option>
                                <option value="c">Year</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div className="repeat-dropdown">
                            <label className="uk-text-muted">Repetitions number</label>
                            <input type="text" className="md-input" value="no limit"/>
                        </div>
                    </li>
                    <li>
                        <div className="repeat-dropdown">
                            <a className="md-btn md-btn-primary  md-btn-block md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                               href="#">
                                Save
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default repeat;