import React from 'react';

class PlaylistAdd extends React.Component{
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
      this.props.onTrackAdd(data);
    });
  }
  render() {
    return(
      <form onSubmit={this.onAddFormSubmit}>
        <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder='Name'/>
        <input type="text" value={this.state.style} onChange={this.onStyleChange} placeholder='Style'/>
        <input type="submit" value="Add" />
      </form>
        )
  }
}

export default PlaylistAdd;