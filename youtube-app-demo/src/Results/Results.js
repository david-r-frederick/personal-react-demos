import React, { Component } from 'react';
import classes from './Results.module.css';

class results extends Component {
    render() {
        return (
            <div
                className={
                    this.props.resultVideoTitles !== null
                        ? classes.resultsContainer
                        : classes.noResults
                }
            >
                {this.props.resultVideoImgURLs ? (
                    this.props.resultVideoImgURLs.map((url, index) => {
                        return (
                            <button
                                key={url}
                                onClick={() => this.props.setVidId(index)}
                            >
                                <img
                                    className={classes.image}
                                    alt={url}
                                    src={url}
                                ></img>
                                <p>
                                    {this.props.resultVideoTitles[
                                        index
                                    ].replace(/&#39;/g, "'")}
                                </p>
                            </button>
                        );
                    })
                ) : (
                    <p>Results Will Display Here</p>
                )}
            </div>
        );
    }
}

export default results;
