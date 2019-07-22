import React from 'react';

var count = 1;
class BankComp extends React.Component {
    state = {
        selected_user: 4,
        selected_bank: "0",
        bank_account: {
            user_id: 0,
            balance: 0,
            debt: 0,
            bank_name: "",
            bank_number: 0
        },
        users: [
            { name: "Ori", phone: "444", id: 1, username: "saar", password: "1234", email: "bla" },
            { name: "Ori1", phone: "444", id: 2, username: "saar1", password: "1234", email: "bla" },
            { name: "Ori2", phone: "444", id: 3, username: "saar2", password: "1234", email: "bla" },
            { name: "Ori3", phone: "444", id: 4, username: "saar3", password: "1234", email: "bla" },
            { name: "Ori4", phone: "444", id: 5, username: "saar4", password: "1234", email: "bla" },
        ],
        bank_accounts: [
            {
                user_id: 2,
                balance: 5000,
                debt: 30000,
                bank_name: "poalim",
                bank_number: 11
            },
            {
                user_id: 3,
                balance: 5000,
                debt: 30000,
                bank_name: "leumi",
                bank_number: 12
            },
            {
                user_id: 4,
                balance: 12000,
                debt: 15000,
                bank_name: "poalim",
                bank_number: 11
            },
            {
                user_id: 1,
                balance: 15000,
                debt: 0,
                bank_name: "poalim",
                bank_number: 11
            }
        ],
        banks: [
            {
                name: "poalim",
                number: 11
            },
            {
                name: "leumi",
                number: 12
            }
        ]
    }

    componentDidMount() {

        // setInterval(() => {
        //     this.state.selected_user = count;

        //     if (count < 5) {
        //         count++;
        //     }
        //     this.setState({});
        // }, 2000);
    }

    handleChange(e) {
        this.state[e.target.name] = e.target.value;
        this.setState({});
        //this.setState({[e.target.name]:e.target.value});
    }
    searchBankAccount() {
        for (let i = 0; i < this.state.bank_accounts.length; i++) {
            if (this.state.bank_accounts[i].user_id == this.state.selected_user && this.state.bank_accounts[i].bank_number == this.state.selected_bank) {
                this.state.bank_account = this.state.bank_accounts[i];
                this.setState({});
                return;
            }
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>User</label>
                            <select className="form-control" name="selected_user" onChange={this.handleChange.bind(this)} value={this.state.selected_user} >
                                <option value="0">Select a User</option>
                                {
                                    this.state.users.map(
                                        (user) => {
                                            return <option value={user.id}>{user.name}</option>
                                        }
                                    )
                                }
                            </select>
                            {this.state.selected_user}
                        </div>
                        <div className="form-group">
                            <label>Bank</label>
                            <select className="form-control" name="selected_bank" onChange={this.handleChange.bind(this)} value={this.state.selected_bank} >
                                <option value="0">Select a Bank</option>
                                {
                                    this.state.banks.map(
                                        (bank) => {
                                            return <option value={bank.number}>{bank.name}</option>
                                        }
                                    )
                                }
                            </select>
                            {this.state.selected_bank}
                        </div>
                        <div className="btn btn-danger" onClick={this.searchBankAccount.bind(this)}>Search</div>
                    </div>
                    <div className="col-md-6">
                        <fieldset>
                            <legend>Bank Account</legend>
                            <div>
                                <div>
                                    <label>Bank:</label> {this.state.bank_account.bank_name}
                                </div>
                                <div>
                                    <label>Balance:</label> {this.state.bank_account.balance}
                                </div>
                                <div>
                                    <label>Debt:</label> {this.state.bank_account.debt}
                                </div>
                                <div>
                                    <label>Bank Number:</label> {this.state.bank_account.bank_number}
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    };
}

export default BankComp;