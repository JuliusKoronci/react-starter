import React, {Component} from 'react';

class PasswordChangeForm extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('did update');
    }

    render() {
        const {handleSubmit, formError, user, passwordState,passwordOnChange} = this.props;

        console.log('state',passwordState);
        return (
                        <div className="uk-grid-margin">
                        <div className="uk-grid-margin">
                            <h3 className="full_width_in_card heading_c">
                                Password reset
                            </h3>
                        </div>
                        <div className="uk-grid-margin">
                            <div className="uk-width-1-1">
                                {/*<div className="uk-grid-margin">*/}
                                    {/*<label>Old password</label>*/}
                                    {/*<input type="password" className="md-input"/>*/}
                                {/*</div>*/}
                                <div className="uk-grid-margin">
                                    <label>New password</label>
                                    <input type="password" className="md-input" value={passwordState.new} onChange={passwordOnChange.bind(null,'new')}/>
                                </div>
                                <div className="uk-grid-margin">
                                    <label>Repeat new password</label>
                                    <input type="password" className="md-input" value={passwordState.repeat} onChange={passwordOnChange.bind(null,'repeat')} />
                                </div>
                            </div>
                            <div className="uk-grid-margin">
                                {/*<Link className="md-btn md-btn-danger" to="/">Cancel</Link>*/}
                                <button type="submit" onClick={handleSubmit} className="md-btn md-btn-primary alignright" >Change password</button>
                            </div>
                        </div>
                            <br />
                            <br />
                    </div>

        );
    }
}

export default PasswordChangeForm;

