import React from 'react';
import WarningBanner from '../WarningBanner/WarningBanner';


class JobsFormComp extends React.Component {
    state = {
        user_id: "",
        position: "",
        description: "",
        salary: "",
        seniority: "",
        start_date: "",
        show_warning: false,
        error: "",
        jobs: []
    }

    render() {
        return (
            <div>
                Jobs Form
            </div>
        )
    }


}

export default JobsFormComp;