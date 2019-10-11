import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingInfo: []
    };
    this.initialize = this.initialize.bind(this)
  }

  initialize() {
    axios.get('/listing')
      .then((response) => {
        console.log(response.data)
        this.setState({listingInfo: response.data})
      });
  }

  componentDidMount() {
    this.initialize()
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