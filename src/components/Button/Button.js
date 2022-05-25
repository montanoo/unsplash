import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    handleChangeTitle() {
        this.props.onClick('Benvenuti nel mio blog :)')
    }

    render() {
        return (
            <button className="Button" onClick={this.handleChangeTitle}>
                {this.props.textButton}
            </button>
        )
    }
}

export default Button;