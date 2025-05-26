import React from 'react';
import Parent from './Parent';
import UserContext from './UserContext'

function GrandParent() {
    return (
        <div className="drill-box grandparent">
            <p className="drell-title">GrandParent</p>
            <UserContext.Provider value="라이언">
                <Parent/>
            </UserContext.Provider>
        </div>
    );
}

export default GrandParent;