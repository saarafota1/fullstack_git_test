import React from 'react';


class EsComp extends React.Component {
    names = [
        { name: "Ori", phone: "444" },
        { name: "Rotem", phone: "1414141414" },
        { name: "Matan", phone: "2626262626" },
        { name: "Moshe", phone: "484848484" },
        { name: "Efrat", phone: "9898989898" }
    ]

    loopNames() {
        for (let name_from_index of this.names) {
            //let name_from_index = names[i];
            console.log(name_from_index);
        }

        var numbers = [1, 2, 3];

        // ES6
        var oddNumber = numbers.findIndex((x) => {
            return x % 2 != 1
        });

        //  < ES6
        var oddNumber = numbers.findIndex(function (x) {
            return x % 2 != 1
        });
        console.log(oddNumber); // 0 
    }

    componentDidMount() {
        // after component finished rendering
        this.loopNames();
    }

    componentWillMount() {
        // before component render
    }


    render() {
        return (
            <div>
                ES6 Comp
            </div>
        );
    }
}

export default EsComp;