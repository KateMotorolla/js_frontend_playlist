import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { playlistAdd } from './actions';

class PlaylistAddInner  extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      style: ''
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onStyleChange = this.onStyleChange.bind(this);
    this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
  }

  onNameChange(e) {
    e.preventDefault();

    this.setState({
      name: e.target.value
    });
  }

  onStyleChange(e) {
    e.preventDefault();

    this.setState({
      style: e.target.value
    });
  }

  onAddFormSubmit(e) {
    e.preventDefault();

    fetch('playlist', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        style: this.state.style,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
       this.props.dispatch(playlistAdd(data._id, data.name, data.style))
      this.props.history('/');
    });
  }
  render() {
    return(
      <div className="Add">
        <NavLink to='/'>Back to list</NavLink>
        <form onSubmit={this.onAddFormSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder='Name'/>
          <input type="text" value={this.state.style} onChange={this.onStyleChange} placeholder='Style'/>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

const PlaylistAdd = (props) => {
  return (
    <PlaylistAddInner {...props} history = {useNavigate()} />
  )
}

export default connect()(PlaylistAdd);