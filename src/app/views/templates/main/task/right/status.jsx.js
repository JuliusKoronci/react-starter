import React from 'react';

const status = () => {
    return (
        <div>
            <label className="uk-text-muted" style={{marginLeft: '51px'}}>Status</label>

            <div className="uk-input-group">
                <span className="uk-input-group-addon"><i className="material-icons">&#xE896;</i></span>
                <div data-uk-dropdown="{mode:'click'}">
                    <button className="md-btn md-btn-primary md-btn-wave-light md-btn-block" style={{paddingRight: '5px'}}>
                        <span style={{float: 'left'}}>NEW</span>
                        <span style={{float: 'right'}}><i className="material-icons">&#xE313;</i></span>
                    </button>
                    <div className="uk-dropdown">
                        <ul className="uk-nav uk-nav-dropdown">
                            <li>
                                <a href="#"><span className="uk-badge uk-badge-open">OPEN</span></a>
                            </li>
                            <li>
                                <a href="#"><span className="uk-badge uk-badge-solved">SOLVED</span></a>
                            </li>
                            <li>
                                <a href="#"><span className="uk-badge uk-badge-pending">PENDING</span></a>
                            </li>
                            <li>
                                <a href="#"><span className="uk-badge uk-badge-closed">CLOSED</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default status;