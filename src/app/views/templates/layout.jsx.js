import React from 'react';
import Header from './header.jsx'
import Sidebar from './sidebar.jsx';

export default ({children, user, actions, filter, sidebarIsShown}) => {
    return (
        <div>
            <Header user={user} logout={actions.logout} sidebarIsShown={sidebarIsShown} toggleSidebar={actions.toggleSidebar} />
            <Sidebar filter={filter} />
            <div id="page_content">
                <div id="page_content_inner">
                    <div className="md-card">
                            {children}
                    </div>
                </div>
            </div>
        </div>
    );
}