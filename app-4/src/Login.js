import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }

        this.handleClick = this.handleClick.bind( this )
    }

    handleChangeU(val) {
        this.setState({username: val})
    }

    handleChangeP(val) {
        this.setState({password: val})
    }
    
    handleClick() {
        alert(`Username: ${this.state.username} & Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Username' onChange={e => this.handleChangeU(e.target.value)} />
                <input type='text' placeholder='Password' onChange={e => this.handleChangeP(e.target.value)} />
                <button onClick={this.handleClick}>Login</button>
            </div>
        )
    }
}