import React from 'react';
import './../tableComp/tableComp.css';
import FormComp from '../formComp/formComp';
class TableComp extends React.Component {
    names = [
        { name: "Ori", phone: "444" },
        { name: "Rotem", phone: "1414141414" },
        { name: "Matan", phone: "2626262626" },
        { name: "Moshe", phone: "484848484" },
        { name: "Efrat", phone: "9898989898" }
    ]
    componentDidMount() { // $(document).ready();/ window.onload

    }

    render() {
        return (
            <div>
                <h2>Users</h2>

                <FormComp />
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            /* 
                                for( let i = 0; i < names.length ; i++ ){
                                    myFunc( names[i],i);
                                    return <tr><td>{names[i].name}</td><td>{names[i].phone}</td></tr>
                                }
                            */
                            this.names.map(
                                (val, index) => {
                                    return (
                                        <tr key={index} >
                                            <td key={index + val.name}>{val.name}</td>
                                            <td key={index + val.phone}>{val.phone + ", " + index}</td>
                                        </tr>
                                    )
                                }



                                /* 
                                    function(val){
                                        return <tr><td>{val.name}</td><td>{val.phone}</td></tr>
                                    }
                                */
                            )
                        }

                    </tbody>
                </table>

                {
                    // ES6
                    [1, 2, 3, 4].map(param_by_index => {
                        return <div key={param_by_index}>{param_by_index}</div>
                    })
                }
                {
                    //ES6
                    [1, 2, 3, 4].map((param_by_index) => {
                        return <div key={param_by_index}>{param_by_index}</div>
                    })
                }
                {
                    // < ES6
                    [1, 2, 3, 4].map(
                        function (val) {
                            return <div key={val}>{val}</div>
                        }
                    )
                }
            </div>
        );
    }
}

export default TableComp;