import React, {PropTypes, Component} from 'react';


class commentForm extends Component {

    constructor(props, context) {
        super(props, context);



    }

    fireFileInput=()=>{
        let inputAttachment;
        this.inputAttachment.click();
    };

    render() {


        const {task, sendComment, formChangeHandler, commentFormEmail, commentFormInternalNote, toggleState, commentFormBody, handleCommentFileUpload, commentFormAttachments} = this.props;

        let attachments = commentFormAttachments.map(att => {
            return <p key={att}>{att}</p>
        });



        return (
            <div className="uk-width-1-1">


                <ul className="uk-tab" data-uk-tab="{connect:'#tabs_1_content'}" id="tabs_1">
                    <li className={commentFormEmail ? "named_tab" : "uk-active"}><a href="#"
                                                                                    onClick={toggleState.bind(null, {
                                                                                        key: 'commentFormEmail',
                                                                                        value: false
                                                                                    })}>Reply</a></li>

                    {/*{task.canEdit && <li className={commentFormEmail?"uk-active":"named_tab"}><a href="#" onClick={toggleState.bind(null,{key:'commentFormEmail',value:true})}>Email</a></li>}*/}
                    {task.loggedUserProjectAcl.indexOf('resolve_task') !== -1 &&
                    <li className={commentFormEmail ? "uk-active" : "named_tab"}><a href="#"
                                                                                    onClick={toggleState.bind(null, {
                                                                                        key: 'commentFormEmail',
                                                                                        value: true
                                                                                    })}>Email</a></li>}

                </ul>

                <ul id="tabs_1_content" className="uk-switcher uk-margin">
                    {!commentFormEmail && <li className="uk-active">
                    <textarea cols="30" rows="4" id="border-full" className="md-input"
                              placeholder="Add comment..." name="commentFormBody" value={commentFormBody}
                              onChange={formChangeHandler.bind(null)}/>

                        {task.loggedUserProjectAcl.indexOf('edit_internal_note') !== -1 && <div>
                            <input type="checkbox" id="checkbox_demo_inline_1"
                                   data-md-icheck
                                   checked={ commentFormInternalNote }
                                   onChange={this.props.inputChangeHandler.bind(null, 'commentFormInternalNote', !commentFormInternalNote)}
                            />
                            <label htmlFor="checkbox_demo_inline_1" className="inline-label margin15">Internal
                                Note </label>
                        </div>
                        }


                    </li>}


                    {commentFormEmail && task.canEdit && <li className="uk-active">
                        <div className="mail-formular">
                            <input id="table-item" type="text" className="md-input" placeholder="To:"
                                   name="commentFormEmailTo"
                                   onChange={formChangeHandler.bind(null)}/>
                            <input id="table-item" type="text" className="md-input" placeholder="Cc:"
                                   name="commentFormEmailCc"
                                   onChange={formChangeHandler.bind(null)}/>
                            <input id="table-item" type="text" className="md-input" placeholder="Subject:"
                                   name="commentFormEmailSubject" onChange={formChangeHandler.bind(null)}/>
                            <textarea cols="30" rows="4" className="md-input" placeholder="Add comment..."
                                      name="commentFormBody" value={commentFormBody}
                                      onChange={formChangeHandler.bind(null)}/>

                            {task.loggedUserProjectAcl.indexOf('edit_internal_note') !== -1 && <div>
                                <input type="checkbox" id="checkbox_demo_inline_1"
                                       data-md-icheck
                                       checked={ commentFormInternalNote }
                                       onChange={this.props.inputChangeHandler.bind(null, 'commentFormInternalNote', !commentFormInternalNote)}
                                />
                                <label htmlFor="checkbox_demo_inline_1" className="inline-label margin15">Internal
                                    Note </label>
                            </div>
                            }


                        </div>
                    </li>}


                </ul>


                {attachments}




                <input type="file" name="comment-attachment" ref={input => this.inputAttachment = input}
                       onChange={handleCommentFileUpload} style={{display:'none'}}/>

                {/*<a className="md-btn-flat-primary" href="#">Add attachment</a>*/}
                <button className="md-btn md-btn-success md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light" onClick={this.fireFileInput}>Add attachment</button>


                <button className="md-btn md-btn-primary md-btn-small md-btn-wave-light" onClick={sendComment}>Add
                    Comment
                </button>



                <hr/>
            </div>
        )
    }
}

export default commentForm;
