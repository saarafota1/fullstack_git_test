import React from 'react';


class StateProp extends React.Component {

    state = {
        name: "Saar Afuta",
        age: 32,
        phone: "0502323233",
        puppies: [
            { name: "Dog1", img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2276,w_4043,x_0,y_23/f_auto,q_auto,w_1100/v1553128862/shape/mentalfloss/536413-istock-459987119.jpg" },
            { name: "Dog2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSNy2RDKw7zSFkPD14ZnT30nVFI5tO0A-ZY-yOETBD2lrf75q" },
            { name: "Dog3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeG9Yxcdbc9fOlzRmWb5RVbbF0KH5pko3t2znXXnMwPIDhUJBc" }
        ]
    }


    componentDidMount() {
        this.changeAfterSeconds();
    }
    changeName(e) {
        this.state.name = e.target.value; // target = element that was triggerd (input)
        this.setState({});
    }


    handleChange(e) {
        let elem_name = e.target.name;
        this.state[elem_name] = e.target.value;
        this.setState({});
    }

    render() {
        return (
            <div>
                State Prop
                <h2>{this.state.name}</h2>
                <div>
                    <input type="text" placeholder="Name..." name="name" onChange={this.handleChange.bind(this)} value={this.state.name} />
                    <input type="text" placeholder="Age..." name="age" onChange={this.handleChange.bind(this)} value={this.state.age} />
                    <input type="text" placeholder="Phone..." name="phone" onChange={this.handleChange.bind(this)} value={this.state.phone} />

                </div>
                <button onClick={this.changeBack.bind(this)}>Change Back To Saar</button>
                {this.state.age}, {this.state.phone}
                <div className="img-grid">
                    {
                        this.state.puppies.map(
                            (val) => {
                                return <div><h3>{val.name}</h3><img src={val.img} /></div>
                            }
                        )
                    }
                </div>
            </div>
        )
    }

    changeBack() {
        this.state.puppies.pop();
        this.setState({ name: "Saar Afuta" });
        this.changeAfterSeconds();
    }

    changeAfterSeconds() {
        setTimeout(() => {
            this.setState({ name: "Dani Levi" });
        }, 3000);
    }
}

export default StateProp;