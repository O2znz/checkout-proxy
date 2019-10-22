import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingInfo: []
    };
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}


export default App;