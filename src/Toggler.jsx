import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button className="toggler" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    );
  }
}

export default Toggler;