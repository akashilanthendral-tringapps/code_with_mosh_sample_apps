import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {

    render() { 
        // console.log("Counters component rendered!");
        return (<div>
            <button className='btn btn-primary btn-sm m-3' onClick={this.props.onReset}>Reset All</button>
            {this.props.counters.map( counter => <Counter  onResetFromChild={this.props.onResetFromChild} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} counter={counter} key={counter.id} />
            )}
        </div>);
    }
}
 
export default Counters;