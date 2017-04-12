import React from 'react';
import formatDate from '../../../../../services/formatedDate';

const commentList = ({task}) => {

    let comments = [];
    if (task && Object.keys(task.comments).length) {
        Object.keys(task.comments).map(key => {
            comments.unshift(task.comments[key]);
        });

    }

    return (
        <div className="timeline">


            {comments.map(comment => {
                let key = comment.id;
                let date = formatDate(comment.createdAt.date);
                let username = comment.createdBy.username;
                let avatar = <div className="timeline_icon timeline_icon_success"><p
                    className="md-user-letters md-bg-cyan">{username.charAt(0)}</p></div>;

                if (comment.email) {
                    avatar = <div className="timeline_icon timeline_icon_primary">
                        <i className="material-icons">&#xE163;</i>
                    </div>;
                }


                return <div className="timeline_item" key={key}>
                    {avatar}

                    <article className={comment.internal ? "uk-comment private-note" : "uk-comment"}>
                        <header className="uk-comment-header" style={{paddingTop: '8px'}}>
                            <div className="uk-grid" data-uk-grid-margin>


                                {!comment.email && <div className="uk-width-medium-3-4">

                                    <p className="uk-comment-title">
                                        {username}
                                        <span className="uk-comment-title uk-text-italic"
                                              style={{marginLeft: '10px'}}>{comment.internal ? 'posted a private note' : 'posted note'}</span>
                                    </p></div>}


                                {comment.email && <div className="uk-width-medium-3-4">
                                    <p className="uk-comment-title">
                                        <span className="uk-comment-title uk-text-italic">From:</span>
                                        {comment.createdBy.email}
                                    </p>
                                    <p className="uk-comment-title">
                                        <span className="uk-comment-title uk-text-italic">To:  </span>
                                        {comment.email_to}
                                    </p>
                                    <p className="uk-comment-title">
                                        <span className="uk-comment-title uk-text-italic">Cc:  </span>
                                        {comment.email_cc}
                                    </p>
                                    <br/>
                                    <p className="uk-comment-title">
                                        <span className="uk-comment-title uk-text-italic">Subject: </span>
                                        {comment.title}
                                    </p>
                                    <br/></div>}


                                <div className="uk-width-medium-1-4">
                                    <div className="uk-comment-meta text-allign-right">
                                        {date}
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div style={{marginLeft: '10px'}}>
                            <p>
                                {comment.body}
                            </p>

                            {comment.commentHasAttachments && comment.commentHasAttachments.length > 0 &&
                            <p className="md-color-blue-900">
                            <span>
                                <i className="material-icons md-color-blue-900">&#xE226;</i>Priloha 1
                            </span>
                            </p>
                            }
                        </div>
                    </article>
                    <hr/>
                </div>

            })}


            <div className="timeline_item">
                <div className="timeline_icon timeline_icon_primary">
                    <i className="material-icons">&#xE163;</i>
                </div>

                <article className="uk-comment">
                    <header className="uk-comment-header" style={{paddingTop: '8px'}}>
                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-3-4">
                                <p className="uk-comment-title">
                                    <span className="uk-comment-title uk-text-italic">From:</span>
                                    branislav.susta@gmail.com
                                </p>
                                <p className="uk-comment-title">
                                    <span className="uk-comment-title uk-text-italic">To:  </span>
                                    hotline@lansystems.sk
                                </p>
                                <p className="uk-comment-title">
                                    <span className="uk-comment-title uk-text-italic">Cc:  </span>
                                    hotline@lansystems.sk
                                </p>
                                <br/>
                                <p className="uk-comment-title">
                                    <span className="uk-comment-title uk-text-italic">Subject: </span>
                                    Mail Subject
                                </p>
                                <br/>
                            </div>

                            <div className="uk-width-medium-1-4">
                                <div className="uk-comment-meta text-allign-right">
                                    24/Jun/15 14:26
                                </div>
                            </div>
                        </div>
                    </header>

                    <div style={{marginLeft: '10px'}}>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr,
                            sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam
                            voluptua.Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et
                            dolore
                            magna aliquyam
                            erat, sed diam voluptua.
                        </p>

                        <p className="md-color-blue-900">
                            <span>
                                <i className="material-icons md-color-blue-900">&#xE226;</i>Priloha 1
                            </span>

                            <span>
                                <i className="material-icons md-color-blue-900">&#xE226;</i> Priloha 2
                            </span>
                        </p>

                    </div>
                </article>
            </div>
            <hr/>

        </div>
    );
};


export default commentList;