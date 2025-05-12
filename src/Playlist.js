import React from 'react';

class Playlist extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      liked: this.props.track.liked
    }
    this.onStatusClick = this.onStatusClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onStatusClick(e) {
    e.preventDefault();

    this.setState({
      liked: !this.state.liked
    });
  }

  onDeleteClick(e) {
    e.preventDefault();

    fetch(`playlist/${this.props.track._id}`, {method: 'DELETE'
    }).then((res) => {
        if (res.status === 200) {
            console.log('Deleted');
            this.props.onTrackDelete(this.props.track._id);
        }
        else {
            console.log('Not deleted');
        }
    })
  } 

  render() {
    return(
       <li> 
        <span>{this.props.track.name} </span>
        <span><i>{this.props.track.style} </i></span>
        <span onClick={this.onStatusClick}><b>{this.state.liked? 'Liked' : 'Not liked'} </b></span>
        <button onClick={this.onDeleteClick}>Delete</button>
      </li>
    )
  }
}

export default Playlist;