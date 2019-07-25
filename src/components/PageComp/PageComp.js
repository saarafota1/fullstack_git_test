import React from 'react';


function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
      </div>
    );
}

class PageComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true, ifTest: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        // if( this.state.showWarning == true ){
        //     this.state.showWarning = false;
        // }else{
        //     this.state.showWarning = true;
        // }
        // this.setState({});

        //var x = !true; // false
        //var x = !false; // true

        //this.state.showWarning = !this.state.showWarning;
        //this.setState({});

        this.setState({
            showWarning: !this.state.showWarning
        });
    }

    render() {
        if (this.state.ifTest) {
            return (
                <div>
                    <WarningBanner warn={this.state.showWarning} />
                    <button onClick={this.handleToggleClick}>
                        {this.state.showWarning ? 'Hide' : 'Show'}
                    </button>
                </div>
            );
        } else {
            return (
                <div>

                    Else....
                </div>
            )
        }

    }
}

export default PageComp;
