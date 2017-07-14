import React, {Component} from 'react';
import {connect} from 'react-redux';
import configResolver from '../../../config/configResolver';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/users.action';

class PasswordChangeForm extends Component {


    constructor(props, context) {
        super(props, context);

        this.userId=props.params && props.params.userId?props.params.userId:props.userId;
        this.passwordResetConfig = configResolver.passwordResetConfig(this.userId);
        this.state = {password: {new: '', repeat: '', error: ''}};
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.params.userId!==this.props.params.userId){
    //         this.userId=this.props.params.userId;
    //         this.passwordResetConfig = configResolver.passwordResetConfig(this.userId);
    //     }
    // }

    passwordOnChange = (name, e) => {
        const value=e.target.value;
        let password=Object.assign({},this.state.password);
        password[name]=value;
        this.setState({password:password});
    };

    handlePasswordChangeSubmit = (e) => {

        let password=Object.assign({},this.state.password);

        // console.log(password);

        if(this.state.password.new!==this.state.password.repeat){
            password.error='passwords don\'t match';
        }
        else if(this.state.password.new.length<8){
            password.error='password has to have at least 8 characters';
        }
        else{
            password.error='';
            password.new='';
            password.repeat='';
            const values={password:this.state.password.new,password_repeat:this.state.password.repeat};

            // const userId=this.props.params.userId || this.props.userId;

            this.props.actions.resetPassword(this.userId, values, this.passwordResetConfig);

        }
        this.setState({password:password});
        // console.log(password);
    };




    render() {

        // let passwordState=this.state.password;
        let passwordOnChange=this.passwordOnChange;
        let handleSubmit=this.handlePasswordChangeSubmit;

        return (
                        <div className="uk-grid-margin">
                        <div className="uk-grid-margin">
                            <h3 className="full_width_in_card heading_c">
                                Password reset
                            </h3>
                        </div>
                        <div className="uk-grid-margin">
                            <div className="uk-width-1-1">
                                <div className="uk-grid-margin">
                                    <label>New password</label>
                                    <input type="password" className="md-input" value={this.state.password.new} onChange={passwordOnChange.bind(null,'new')}/>
                                </div>
                                <div className="uk-grid-margin">
                                    <label>Repeat new password</label>
                                    <input type="password" className="md-input" value={this.state.password.repeat} onChange={passwordOnChange.bind(null,'repeat')} />
                                </div>
                            </div>
                            <div className="uk-grid-margin">
                                <button type="submit" onClick={handleSubmit} className="md-btn md-btn-primary alignright" >Change password</button>

                                {this.state.password.error!=='' && <p className="">{this.state.password.error}</p>}

                            </div>
                        </div>
                            <br />
                            <br />
                    </div>

        );
    }
}



function mapStateToProps(state) {
    return {
        userId: state.auth.user.id,
        user: state.profile.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeForm);

