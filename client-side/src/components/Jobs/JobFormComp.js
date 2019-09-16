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
        car_id: "",
        show_warning: false,
        error: "",
        green_message: true,
        jobs: [],
        cars: []
    }

    componentDidMount() {
        this.getCars();
    }
    getCars() {
        fetch('/cars')
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                this.state.cars = res.data;
                this.setState({});
            })
            .catch((err) => {
                console.log("Error: ", err);
            })
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    saveJob() {
        let new_job = {
            position: this.state.position,
            description: this.state.description,
            salary: this.state.salary,
            car_id: this.state.car_id,
            seniority: this.state.seniority,
            start_date: this.state.start_date,
            user_id: 0
        }

        fetch("/jobs", {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(new_job),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((res) => {
                console.log(res);
                if (res.success) {
                    //alert(res.message);
                    this.state.show_warning = true;
                    this.state.error = res.message;
                    this.props.getJobs();
                    this.green_message = true;
                    this.setState({ type: "", year: "", color: "" });

                } else {
                    this.state.show_warning = true;
                    this.state.error = res.message;
                    this.green_message = false;
                    this.setState({});
                }
            }, (error) => {
                console.log("Error:", error);
            })

    }

    render() {
        return (
            <div>
                <WarningBanner success={this.state.green_message} warn={this.state.show_warning} message={this.state.error} />
                <div className="form">
                    <div className="form-group">
                        <label>Position:</label>
                        <input type="text" name="position" className="form-control" value={this.state.position} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Salary:</label>
                        <input type="text" name="salary" className="form-control" value={this.state.salary} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Seniority:</label>
                        <input type="text" name="seniority" className="form-control" value={this.state.seniority} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Start Date:</label>
                        <input type="date" name="start_date" className="form-control" value={this.state.start_date} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Car:</label>
                        <select name="car_id" onChange={this.handleChange.bind(this)} >
                            <option value="-1">Select a Car</option>
                            {
                                this.state.cars.map(car => {
                                    return (
                                        <option key={car.id} value={car.id}>{car.type}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="btn btn-success" onClick={this.saveJob.bind(this)}>Save</div>
                </div>
            </div>
        )
    }


}

export default JobsFormComp;