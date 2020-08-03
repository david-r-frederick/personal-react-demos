import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import YouTube from 'react-youtube';
import Header from './Header/Header';
import Results from './Results/Results';
import Comments from './Comments/Comments';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: null,
            resultVideoTitles: null,
            resultVideoIds: null,
            searchString: null,
        };
    }

    searchHandler() {
        axios
            .get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDeMhcfA8lM8PGnMAkPl2n76hog-lAzgxc&type=video&q=${this.state.searchString}`
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

                <div className="App">
                    <YouTube
                        videoId={this.state.videoId ? this.state.videoId : null}
                        opts={{
                            playerVars: {
                                autoplay: 1,
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
                <Comments />
            </div>
        );
    }
}

export default App;
