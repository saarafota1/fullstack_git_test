import React from 'react';
import WarningBanner from '../WarningBanner/WarningBanner';
import CarFormComp from './CarFormComp';


class CarComp extends React.Component {
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
                <div className="row">
                    <div className="col-md-6">
                        Table
                    </div>
                    <div className="col-md-6">
                        <CarFormComp />
                    </div>
                </div>
            </div>
        )
    }


}

export default CarComp;