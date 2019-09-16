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

    deleteCar(id) {
        console.log(id);
        fetch('/cars', {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify({ car_id: id }),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                this.getCars();
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
                                        <th>Type</th>
                                        <th>Year</th>
                                        <th>Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.cars.map((car) => {
                                            return (
                                                <tr>
                                                    <td>{car.type}</td>
                                                    <td>{car.year}</td>
                                                    <td>{car.color}</td>
                                                    <td><i className="fa fa-trash" onClick={this.deleteCar.bind(this, car.id)}></i></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <CarFormComp getCars={this.getCars.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }


}

export default CarComp;