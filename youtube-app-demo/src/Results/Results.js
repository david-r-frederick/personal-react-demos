import React, { Component } from 'react';
import classes from './Results.module.css';

class results extends Component {
    render() {
        return (
            <div
                className={classes.resultsContainer}
            >
                {this.props.resultVideoTitles ? (
                    this.props.resultVideoTitles.map((title, index) => {
                        return (
                            <button
                                className={classes.resultBtn}
                                key={title}
                                onClick={() => this.props.setVidId(index)
                                }
                            >
                                {title}
                            </button>
                        );
                    })
                ) : <p>Results Will Display Here</p>}
            </div>
        );
    }
}

export default results;