import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import YouTube from 'react-youtube';
import Header from './Header/Header';
import Results from './Results/Results';
import CommentInput from './Comments/CommentInput';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: null,
            resultVideoTitles: null,
            resultVideoIds: null,
            searchString: null,
            comments: [],
        };
    }

    searchHandler() {
        axios
            .get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC3MyXW8saacX0g22HEwGFkLuju69XxGws&type=video&q=${this.state.searchString}`
            )
            .then((response) => {
                this.setState({
                    resultVideoTitles: response.data.items.map((el) => {
                        return el.snippet.title;
                    }),
                    resultVideoIds: response.data.items.map((el) => {
                        return el.id.videoId;
                    }),
                });
            })
            .catch((err) => alert(err));
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Header
                        changed={(text) => {
                            this.setState({
                                searchString: text,
                            });
                        }}
                        pressed={(key) => {
                            if (key === 'Enter') {
                                this.searchHandler();
                            }
                        }}
                        search={() => this.searchHandler()}
                    />
                </div>
                <div style={{
                    width: '80%'
                }}>
                    <div className="videoSection">
                        <YouTube
                            videoId={this.state.videoId ? this.state.videoId : null}
                            opts={{
                                width: 740,
                                height: 460,
                                playerVars: {
                                    autoplay: 1
                                },
                            }}
                        />
                        <Results
                            resultVideoTitles={this.state.resultVideoTitles}
                            setVidId={(index) => {
                                this.setState({
                                    videoId: this.state.resultVideoIds[index],
                                });
                            }}
                        />
                    </div>
                    <div className="commentSection">
                        <CommentInput
                            addComment={(text) => {
                                this.setState((prevState) => {
                                    return {
                                        comments: prevState.comments.concat(text),
                                    };
                                });
                            }}
                        />
                        {this.state.comments.map((el) => {
                            return <p className="comment">{el}</p>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
