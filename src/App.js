import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Playlist from './Playlist';
import PlaylistAdd from './PlaylistAdd';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      playlist: []
    }

    this.onTrackDelete = this.onTrackDelete.bind(this);
    this.onTrackAdd = this.onTrackAdd.bind(this);
  }
  
  componentDidMount() {
    fetch('playlist').then(function(res) {
      return res.json();
    }).then((data) => {
      this.setState({
        playlist: data
      });
    });
  }

  onTrackDelete(_id) {
    this.setState({
      playlist: this.state.playlist.filter(function(track) {
        return track._id !== _id;
      })
    });
  }

  onTrackAdd(track) {
    this.setState({
      playlist: [...this.state.playlist, track]
    });
  }

  render() {    
    return (
      <div className="App">
        <Router>
          <Routes>
             <Route path="/" element = {<Playlist playlist = {this.state.playlist} onTrackDelete = {this.onTrackDelete} />} />
              <Route path="/add" element = {<PlaylistAdd onTrackAdd = {this.onTrackAdd} />} />
          </Routes>
        </Router>  
      </div>
    );
  }
}

export default App;
