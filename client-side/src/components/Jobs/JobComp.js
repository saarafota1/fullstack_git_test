import React from 'react';
import WarningBanner from '../WarningBanner/WarningBanner';
import JobsFormComp from './JobFormComp';


class JobsComp extends React.Component {
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

    componentDidMount() {
        this.getJobs();
    }
    getJobs() {
        fetch('/jobs')
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                this.state.jobs = res.data;
                this.setState({});
            })
            .catch((err) => {
                console.log("Error: ", err);
            })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="table table-dark">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>Position</th>
                                        <th>Description</th>
                                        <th>Salary</th>
                                        <th>Seniority</th>
                                        <th>Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.jobs.map((job) => {
                                            return (
                                                <tr>
                                                    <td>{job.position}</td>
                                                    <td>{job.description}</td>
                                                    <td>{job.salary}</td>
                                                    <td>{job.seniority}</td>
                                                    <td>{job.start_date}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <JobsFormComp getJobs={this.getJobs.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }


}

export default JobsComp;