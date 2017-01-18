import React from 'react';
import Header from './header.jsx'
import Sidebar from './sidebar.jsx';

export default ({children, user, actions}) => {
    return (
        <div>
            <Header user={user} logout={actions.logout}/>
            <Sidebar user={user} />
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