import React from 'react';
import Child from './Child';

function Parent({user}) {
    return (
        <div className="drill-box parent">
            <p className="drill-title">Parent</p>
            <Child/>
        </div>
    );
}

export default Parent;