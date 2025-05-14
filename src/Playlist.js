import React from 'react';
import PlaylistTrack from './PlaylistTrack';

class Playlist extends React.Component{
 
  render() {
    return(
      <div className="List">
        <ul>
          {
            this.props.playlist.map((track) => {
              return(
                <PlaylistTrack track={track} onTrackDelete = {this.props.onTrackDelete} key = {track._id} />
              )
            })
          }
        </ul>
      </div> 
    )
  }
}

export default Playlist;