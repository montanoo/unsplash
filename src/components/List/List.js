import React from 'react';
import './List.css';

export class List extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <ul className="List">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}


// export default List;
