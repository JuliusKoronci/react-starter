import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required} from '../../../config/validation';
import {renderField, renderMulticheckbox} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';
import configAcl from '../../../config/configRoles';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

class RoleForm extends Component {



    // componentDidUpdate(){
    //     console.log(this.props.company);
    // }


    addValue = (value) => {
        console.log('add ' + value);
    };
    removeValue = (value) => {
        console.log('remove ' + value);
    };

    checkClick = (e) => {
        //e.target.checked ? this.addValue.bind(null,acl) : this.removeValue.bind(null,acl)
        console.log(e.target.checked)
    };


    render() {
        const {handleSubmit,  handleDelete, heading, editing} = this.props;
        return (

            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">{heading}</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-1 max-width-1000px">
                            <div className="uk-margin-bottom">
                                <Field name="is_active" type="checkbox" validate={[]} component={renderField}
                                       label="Active"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="order" type="text" validate={[required]} component={renderField}
                                       label="Order"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="title" type="text" validate={[required]} component={renderField}
                                       label="Role Name" labelStyle={{fontWeight:'bold'}} />
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="homepage" type="text" validate={[required]} component={renderField}
                                       label="Homepage"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="description" type="text" validate={[required]} component={renderField}
                                       label="Description"/>
                            </div>



                             {/*let fruitsArray = [apple, orange, cherry,...];*/}

                             {/*{fruitsArray.map((fruit, index) =>*/}
                             {/*<div key={index}>*/}
                             {/*<input*/}
                             {/*type="checkbox"*/}
                             {/*value={fruit}*/}
                             {/*onChange={e => e.target.checked ? fruits.addField(e.target.value) : fruits.removeField(fruits.indexOf(e.target.value))} />*/}
                             {/*</div>*/}
                             {/*)}*/}



                            <div className="uk-margin-bottom">
                                <Field name="acl" type="text" validate={[required]} component={renderMulticheckbox} options={configAcl}
                                       label="ACL"/>
                            </div>




                            {/*{configAcl.map((acl, i) => {*/}

                                {/*const fieldName = 'acl.' + acl;*/}
                                {/*console.log(this.props.acl);*/}
                                {/*/!*const checked=Array.isArray(this.props.acl) && this.props.acl.indexOf(acl)!=-1?'checked':'';*!/*/}
                                {/*const checked=!!(this.props.acl && typeof this.props.acl[acl] != "undefined" && this.props.acl[acl]);*/}

                                {/*return (*/}
                                    {/*<div key={i}>*/}
                                        {/*<label >*/}
                                            {/*<input name={fieldName} type="checkbox" value={acl}*/}
                                                   {/*label={acl} onClick={this.checkClick} defaultChecked={checked} checked={checked} />*/}
                                            {/*{acl} {checked}*/}
                                        {/*</label>*/}
                                    {/*</div>*/}

                                {/*)*/}
                            {/*})*/}
                            {/*}*/}






                            <div className="uk-margin-bottom">
                                <Link className="md-btn md-btn-danger" to={generateRoute('roles')}>Cancel</Link>
                                {editing && this.props.role.id &&
                                <DeleteButton handleDelete={handleDelete} id={this.props.role.id}/>}
                                <button className="md-btn md-btn-primary alignright" type="submit">
                                    SAVE
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        );
    }
}


function mapStateToProps(state, ownProps) {


    const roleId = ownProps.params.roleId;
    const role = state.roles.data.filter((role) => parseInt(role.id, 10) === parseInt(roleId, 10));



    if (role.length > 0) {
        let initialValues = role[0];
        // let acl = Object.assign({}, eval(initialValues.acl));
        // let acl = eval(initialValues.acl);

        // console.log(eval(initialValues.acl));

        // let acl = (initialValues.acl +'').split(',');
        // let acl = eval(initialValues.acl);

        // let acl = (initialValues.acl +'').split(',');
        // console.log(acl);


        // let newAcl={};

        // configAcl.map(value => {
        //      // console.log({[value]:initialValues.acl.indexOf(value)!=-1});
        //
        //
        //     // console.log('Array? '+Array.isArray(acl));
        //
        //
        //     newAcl[value] = acl.indexOf(value) != -1;
        //
        //
        //     //
        //     // try {
        //     //     newAcl[value] = acl.indexOf(value) != -1;
        //     // }catch(e){
        //     //     console.log(acl, e);
        //     // }
        //
        //
        //
        //     // return {[value]:!!initialValues.acl.indexOf(value)};
        //     // newAcl.push({value:!!initialValues.acl.indexOf(value)});
        //     // return value: !!initialValues.acl.indexOf(value)
        //     }
        // );


        // const generatedAcl = configAcl.map(value => {
        //     return {
        //
        //         value: !!initialValues.acl.indexOf(value),
        //         label: value
        //     }
        // });


        // console.log('obj',newAcl);

        // initialValues.acl = generatedAcl;
        // initialValues.acl = newAcl;
        // initialValues['aclko']=newAcl;


        return {
            initialValues: initialValues,
            enableReinitialize: true
            // acl:newAcl
        };
    }

    return {initialValues:{'is_active':true},enableReinitialize: true};

    // return {acl:{}};

}

RoleForm = reduxForm({
    form: 'roleForm'
})(RoleForm);

export default connect(mapStateToProps)(RoleForm);

