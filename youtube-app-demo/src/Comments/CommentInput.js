import React, { Component } from 'react';

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
            <input
                className="commentInput"
                value={this.state.inputValue}
                onChange={(event) =>
                    this.setState({ inputValue: event.target.value })
                }
                onClick={() => {
                    if(!this.state.inputClicked) {
                        this.setState({inputClicked: true, inputValue: ''});   
                    }
                }}
                onKeyDown={(event) => {
                    if(event.key === 'Enter'){
                        this.props.addComment(this.state.inputValue);
                        this.setState({ inputClicked: false, inputValue: ''});}
                }
                }
            ></input>
        );
    }
}

export default comments;
