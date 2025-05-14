import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import PlaylistTrack from './PlaylistTrack';

class Playlist extends React.Component{
 
  render() {
    return(
      <div className="List">
        <NavLink to='/add'>Add track</NavLink>
        <ul>
          {
            this.props.playlist.map((track) => {
              return(
                <PlaylistTrack track={track} key={track._id} />
              )
            })
          }
        </ul>
      </div> 
    )
  }
}

function mapStateToProps(state) {
  return {
    playlist: [...state.playlist]
  }
}
export default connect(mapStateToProps)(Playlist);