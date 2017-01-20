import React from 'react';

const commentForm = () => {
    return (
        <div className="uk-width-1-1">
            <ul className="uk-tab" data-uk-tab="{connect:'#tabs_1_content'}" id="tabs_1">
                <li className="uk-active"><a href="#">Reply</a></li>
                <li className="named_tab"><a href="#">Email</a></li>
            </ul>
            <ul id="tabs_1_content" className="uk-switcher uk-margin">
                <li className="uk-active">
                    <textarea cols="30" rows="4" id="border-full" className="md-input"
                              placeholder="Add reply..."/>

                    <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                           data-md-icheck/>
                    <label htmlFor="checkbox_demo_inline_1" className="inline-label margin15">Internal Note </label>
                    <a className="md-btn-flat-primary" href="#">Add attachment</a>
                    <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light" href="#">Add</a>
                </li>
                <li>
                    <div className="mail-formular">
                        <input id="table-item" type="text" className="md-input" placeholder="To:"/>
                        <input id="table-item" type="text" className="md-input" placeholder="Cc:"/>
                        <input id="table-item" type="text" className="md-input" placeholder="Subject:"/>
                        <textarea cols="30" rows="4" className="md-input" placeholder=""/>

                        <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                               data-md-icheck/>
                        <label htmlFor="checkbox_demo_inline_1" className="inline-label margin15">Internal Note </label>
                        <a className="md-btn-flat-primary" href="#">Add attachment</a>
                        <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light" href="#">Add</a>
                    </div>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default commentForm;