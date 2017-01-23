import React from 'react';

const commentList = () => {
    return (
        <div className="timeline">
            <div className="timeline_item">
                <div className="timeline_icon timeline_icon_success">
                    <p className="md-user-letters md-bg-cyan">ML</p>
                </div>

                <article className="uk-comment">
                    <header className="uk-comment-header" style={{paddingTop: '8px'}}>
                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-3-4">
                                <p className="uk-comment-title">
                                    Marcelina Lueilwitz
                                    <span className="uk-comment-title uk-text-italic" style={{marginLeft: '10px'}}>posted note</span>
                                </p>
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
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna
                            aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit
                            amet,
                            onsetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed
                            diam
                            voluptua.
                        </p>
                    </div>
                </article>
            </div>
            <hr/>

            <div className="timeline_item">
                <div className="timeline_icon timeline_icon_success">
                    <p className="md-user-letters md-bg-cyan">ML</p>
                </div>

                <article className="uk-comment private-note" style={{paddingBottom: '1px'}}>
                    <header className="uk-comment-header" style={{paddingTop: '8px'}}>
                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-3-4">
                                <p className="uk-comment-title">
                                    Marcelina Lueilwitz
                                    <span className="uk-comment-title uk-text-italic">posted a private note</span>
                                </p>
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
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna
                            aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit
                            amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed
                            diam
                            voluptua.
                        </p>
                    </div>
                </article>
            </div>
            <hr/>

            <div className="timeline_item">
                <div className="timeline_icon timeline_icon_primary">
                    <i className="material-icons">&#xE0E1;</i>
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