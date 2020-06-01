import React from 'react'
//import PropTypes from 'prop-types'
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends React.Component {

  state = {
    counters : [
      { id: 1, value: 4},
      { id: 2, value: 1},
      { id: 3, value: 3},
      { id: 4, value: 0}
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter};
    counters[index].value++;

    //console.log(this.state.counters[0]);
    this.setState({counters})
  }
  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value = 0;
      return c;
    });

    //console.log(counters);
    this.setState({ counters });


  }
  handleDelete = (counterId) => {

      const counters = this.state.counters.filter( c => c.id !== counterId);
      console.log(counters);

      this.setState({ counters: counters })
  }
  getTotal() {
    //console.log('hello');
    //console.log(this.state.counters.reduce((total, counter) => { return total += counter.value },0 ));
    //return 0;
    return this.state.counters.reduce((total, counter) => { return total += counter.value },0 )
  }

  render() {
    return (
    <React.Fragment>
      <NavBar totalCount={this.getTotal()} />
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
           />
      </main>
    </React.Fragment>
  );
  }
}

export default App;
