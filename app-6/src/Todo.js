import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
            {this.props.tasks}
            </ul>
        )
    }
}

export default Todo;