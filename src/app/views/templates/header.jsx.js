import React, {PropTypes} from 'react';
import UserAvatar from './main/_partials/userAvatar.jsx';
import {Link} from 'react-router';

const header = ({user, logout}) => {
    return (
        <header id="header_main">
            <div className="header_main_content">
                <nav className="uk-navbar">
                    <a href="#" id="sidebar_main_toggle" className="sSwitch sSwitch_left">
                        <span className="sSwitchIcon"/>
                    </a>
                    <div className="uk-navbar-flip">
                        <ul className="uk-navbar-nav user_actions">
                            <li><a href="#" id="full_screen_toggle" className="user_action_icon uk-visible-large"><i
                                className="material-icons md-24 md-light">&#xE5D0;</i></a></li>
                            <li><a href="#" id="main_search_btn" className="user_action_icon"><i
                                className="material-icons md-24 md-light">&#xE8B6;</i></a></li>
                            <li data-uk-dropdown="{mode:'click',pos:'bottom-right'}">
                                <a href="#" className="user_action_icon"><i
                                    className="material-icons md-24 md-light">&#xE7F4;</i><span
                                    className="uk-badge">16</span></a>
                                <div className="uk-dropdown uk-dropdown-xlarge">
                                    <div className="md-card-content">
                                        <ul className="uk-tab uk-tab-grid"
                                            data-uk-tab="{connect:'#header_alerts',animation:'slide-horizontal'}">
                                            <li className="uk-width-1-2 uk-active"><a href="#"
                                                                                      className="js-uk-prevent uk-text-small">Comments
                                                (3)</a></li>
                                            <li className="uk-width-1-2"><a href="#"
                                                                            className="js-uk-prevent uk-text-small">Messages
                                                (4)</a></li>
                                        </ul>
                                        <ul id="header_alerts" className="uk-switcher uk-margin">
                                            <li>
                                                <ul className="md-list md-list-addon">
                                                    <li>
                                                        <div className="md-list-addon-element">
                                                            <span className="md-user-letters md-bg-cyan">BS</span>
                                                        </div>
                                                        <div className="md-list-content">
                                                            <span className="md-list-heading">Branislav Susta added coment on task:</span>
                                                            <span className="md-list-heading"><a
                                                                href="pages_mailbox.html">#345 Quidem reiciendis modi optio ratione</a></span>
                                                            <span className="uk-text-small uk-text-muted">Ratione aliquam nihil sed facere culpa doloremque voluptatem provident quam adipisci.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="md-list-addon-element">
                                                            <span className="md-user-letters md-bg-cyan">BS</span>
                                                        </div>
                                                        <div className="md-list-content">
                                                            <span className="md-list-heading">Branislav Susta added coment on task:</span>
                                                            <span className="md-list-heading"><a
                                                                href="pages_mailbox.html">#345 Quidem reiciendis modi optio ratione</a></span>
                                                            <span className="uk-text-small uk-text-muted">Ratione aliquam nihil sed facere culpa doloremque voluptatem provident quam adipisci.</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div
                                                    className="uk-text-center uk-margin-top uk-margin-small-bottom">
                                                    <a href="messages.html"
                                                       className="md-btn md-btn-flat md-btn-flat-primary js-uk-prevent">Show
                                                        All</a>
                                                </div>
                                            </li>
                                            <li>
                                                <ul className="md-list md-list-addon">
                                                    <li>
                                                        <div className="md-list-addon-element">
                                                            <span className="md-user-letters md-bg-cyan">BS</span>
                                                        </div>
                                                        <div className="md-list-content">
                                                            <span className="md-list-heading">Branislav Susta changed deadline from 19.12.2016 to 20.12.2016</span>
                                                            <span className="md-list-heading"><a
                                                                href="pages_mailbox.html">#345 Quidem reiciendis modi optio ratione</a></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="md-list-addon-element">
                                                            <span className="md-user-letters md-bg-cyan">BS</span>
                                                        </div>
                                                        <div className="md-list-content">
                                                            <span className="md-list-heading">Branislav Susta changed deadline from 19.12.2016 to 20.12.2016</span>
                                                            <span className="md-list-heading"><a
                                                                href="pages_mailbox.html">#345 Quidem reiciendis modi optio ratione</a></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div
                                                    className="uk-text-center uk-margin-top uk-margin-small-bottom">
                                                    <a href="messages.html"
                                                       className="md-btn md-btn-flat md-btn-flat-primary js-uk-prevent">Show
                                                        All</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li data-uk-dropdown="{mode:'click',pos:'bottom-right'}">
                                <a href="#" className="user_action_image">
                                    <UserAvatar user={user}/>
                                </a>
                                <div className="uk-dropdown uk-dropdown-small">
                                    <ul className="uk-nav js-uk-prevent">
                                        <li><Link to='settings/default'>Settings</Link></li>
                                        <li>
                                            <Link to="profile">My profile</Link>
                                        </li>
                                        <li><a href="#" onClick={logout}>Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

header.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

export default header;