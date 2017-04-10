import React from 'react';

const commentForm = () => {
    return (
        <div className="uk-width-1-1">
            <ul className="uk-tab" data-uk-tab="{connect:'#tabs_1_content'}" id="tabs_1">
                <li className="uk-active"><a href="#" disabled={true}>Reply</a></li>
                <li className="named_tab"><a href="#" disabled={true}>Email</a></li>
            </ul>
            <ul id="tabs_1_content" className="uk-switcher uk-margin">
                <li className="uk-active">
                    <textarea cols="30" rows="4" id="border-full" className="md-input" disabled={true}
                              placeholder="Add reply..."/>

                    <input disabled={true} type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                           data-md-icheck/>
                    <label htmlFor="checkbox_demo_inline_1" className="inline-label margin15" disabled={true}>Internal Note </label>

                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default commentForm;