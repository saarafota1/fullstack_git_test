import React from 'react';

class AjaxComp extends React.Component {

    state = {
        data: "Test Fetch"
    }
    getData() {
        console.log(this.state.data);

        fetch("http://www.omdbapi.com/?s=black&apikey=21af947d")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                this.state.data = JSON.stringify(res);
                this.setState({});
            }, (error) => {
                console.log("Error:", error);
            })


        this.callFetch("http://www.omdbapi.com/?s=black&apikey=21af947d","POST",{name:"saar"}).then((res)=>{

        });
    }

    callFetch(url, type, data) {
        return fetch(url, {
            method: type, // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then(response => response.json()); // parses JSON response into native JavaScript objects 
    }


    // AjaxCall(url,type,Data,callback){
    //     $.ajax({
    //         url:url,
    //         type:type,
    //         data:data,
    //         success:callback(data),
    //         error:function(xhr){
    //             console.log("Error",xhr);
    //         }
    //     })
    // }


    render() {
        return (
            <div>
                <div className="Data">
                    {this.state.data}
                    <div className="btn btn-danger" onClick={this.getData.bind(this)}>Get Data</div>
                </div>
            </div>
        )
    }
}

export default AjaxComp;