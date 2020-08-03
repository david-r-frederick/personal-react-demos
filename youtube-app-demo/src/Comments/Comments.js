import React, { Component } from 'react';
import classes from './Comments.module.css';

class comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'Leave a comment...',
            inputClicked: false,
        };
    }

    render() {
        return (
            <div className={classes.commentContainer}>
                <input
                    className={classes.commentInput}
                    value={this.state.inputValue}
                    onChange={(event) =>
                        this.setState({ inputValue: event.target.value })
                    }
                    onClick={() => {
                        if(!this.state.inputClicked) {
                            this.setState({inputClicked: true, inputValue: ''});   
                        }
                    }}
                ></input>
            </div>
        );
    }
}

export default comments;
