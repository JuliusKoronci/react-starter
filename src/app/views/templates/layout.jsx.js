import React from 'react';
import Header from './header.jsx'
import Sidebar from './sidebar.jsx';

export default ({children}) => {
    return (
        <div>
            <Header prop={{}}/>
            <Sidebar  prop={{}}/>
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