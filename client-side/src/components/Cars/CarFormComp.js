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
        green_message: true,
        success: true,
        cars: []
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    saveCar() {
        let new_car = {
            type: this.state.type,
            year: this.state.year,
            color: this.state.color,
            job_id: "3"
        }

        fetch("/cars", {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(new_car),
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
                    this.props.getCars();
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
                        <label>Type:</label>
                        <input type="text" name="type" className="form-control" value={this.state.type} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Year:</label>
                        <input type="text" name="year" className="form-control" value={this.state.year} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Color:</label>
                        <input type="text" name="color" className="form-control" value={this.state.color} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="btn btn-success" onClick={this.saveCar.bind(this)}>Save</div>
                </div>
            </div>
        )
    }


}

export default CarFormComp;