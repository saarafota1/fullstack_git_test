import React from 'react';
import WarningBanner from '../WarningBanner/WarningBanner';


class CarFormComp extends React.Component {
    state = {
        type: "",
        year: "",
        color: "",
        job_id: "",
        show_warning: false,
        error: "",
        cars: []
    }

    render() {
        return (
            <div>
                Cars Form
            </div>
        )
    }


}

export default CarFormComp;