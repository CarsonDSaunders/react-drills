import React from 'react';

class NewTask extends React.Component {
    constructor() {
        super();

        this.state = {
            input: '',
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(val) {
        this.setState({ input: val })
    }

    handleClick() {
        this.props.add(this.state.input)
        this.setState({ input: ''});
    }

    render() {
        return (
            <div>
                <input onChange={e => this.handleChange(e.target.value)} />
                <button onClick={this.handleClick}>Add Task</button>
            </div>
        )
    }
}

export default NewTask;