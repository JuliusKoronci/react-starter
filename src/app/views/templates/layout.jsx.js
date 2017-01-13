import React from 'react';

export default (props) => {
    const {children, actions} = props;

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a onClick={actions.logout} href="#">Logout</a></li>
                    </ul>
                </nav>
            </header>
            {children}
        </div>
    );
}