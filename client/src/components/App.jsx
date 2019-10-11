import React, { Component } from 'react';
import axios from 'axios';
//import {mount, shallow} from 'enzyme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingInfo: [],
      test: 2
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

// const appWrap = mount(<App/>)

// test('expects App to have state listingInfo', () => {
//     expect(appWrap).toHaveState('listingInfo');
// });


export default App;