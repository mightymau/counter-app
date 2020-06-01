import React from 'react'
//import PropTypes from 'prop-types'
import Counter from './counter';

class Counters extends React.Component {

  render () {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-warning btn-sm m-2">Reset</button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>

    );
  }





}

export default Counters;
