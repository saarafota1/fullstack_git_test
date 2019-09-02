import React from 'react';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning alert alert-danger mt-3">
            Warning Message: {props.message}
        </div>
    );
}

export default WarningBanner;