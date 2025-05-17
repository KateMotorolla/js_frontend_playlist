import React from 'react';
import { connect } from 'react-redux';

import { playlistDelete, playlistUpdateState } from './actions';

class PlaylistTrack extends React.Component{
  constructor(props) {
    super(props);

    this.onStatusClick = this.onStatusClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  onStatusClick(e) {
    e.preventDefault();

    fetch(`playlist/${this.props.track._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        liked: !this.props.track.liked
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        console.log('Updated');
        this.props.dispatch(playlistUpdateState(this.props.track._id))
      }
      else {
        console.log('Not updated');
      }
    });
  }
  onDeleteClick(e) {
    e.preventDefault();

    fetch(`playlist/${this.props.track._id}`, {method: 'DELETE'
    }).then((res) => {
      if (res.status === 200) {
        console.log('Deleted');
        this.props.dispatch(playlistDelete(this.props.track._id));
      }
      else {
        console.log('Not deleted');
      }
    })
  }
  render() {    
    return (
      <tr>
        <td><button onClick={this.onStatusClick} className=  "btn" id = "like">{this.props.track.liked? <i className = "fa fa-heart"></i> : <i className = "fa fa-heart-o"></i>}</button></td>
        <td>{this.props.track.name}</td>
        <td>{this.props.track.style}</td>
        <td><button className = "btn" id = "delete" onClick={this.onDeleteClick}>Delete</button></td>
      </tr>
    );
  }
}

export default connect()(PlaylistTrack);
