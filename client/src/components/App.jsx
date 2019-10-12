import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingInfo: [],
      id: 66
    };
    this.initialize = this.initialize.bind(this);
    this.getCurrentCalendar = this.getCurrentCalendar.bind(this)
  }

  initialize() {
    axios.get('/listing')
      .then((response) => {
        console.log(response.data)
        this.setState({
          listingInfo: response.data,
          id: response.data.listingId
        })
      });
  }

  getCurrentCalendar() {
    //var today = new Date();
    console.log("get current calender was invoked")
    // axios.get(`/currentCalendar?ID=66`)
    axios.get(`/currentCalendar?ID=${this.state.id}`)
      .then((response) => {
        console.log(response.data)
      });
  }

  componentDidMount() {
    //this.initialize()
    this.getCurrentCalendar();
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


// /something/:id
// --> /something/8989

// req.params

// /something
// --> /something?id=789

// req.query xxxx