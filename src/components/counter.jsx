import React, { Component } from 'react';
class Counter extends Component {
    // state ={
    //     value: this.props.counter.value,
    // }
    formatCount(){
        return this.props.counter.value === 0 ? 'Zero': this.props.counter.value;
    }

   
    // handleIncrement = () => {
         
    // }
    // handleDecrement = () => {
    //     if(this.props.counter.value != 0){
    //         this.setState({value: this.state.value - 1})}
    //     else{
    //     this.setState({value: 0})}
    // }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning": "primary";
        return classes;
    }
    render() { 
        console.log("Counter component rendered!");
        return( <div>
                    {/* <button className="btn btn-primary btn-sm m-3" onClick={this.props.onReset}>Reset</button> */}
                    <span style={{fontSize: 20}}className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button className="btn btn-secondary btn-sm" onClick= {() => {this.props.onIncrement(this.props.counter); }}>Increment</button>
                    <button style={{margin: 10}} className='btn btn-secondary btn-sm' onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                    <button className="btn btn-primary btn-sm m-2" onClick={() => this.props.onResetFromChild(this.props.counter)}>reset</button>
                </div>
        );

    };
    componentDidUpdate(prevProps, prevState){
        console.log("Previous state", prevState);
        console.log("Previous Props", prevProps);
    }
    componentWillUnmount(){
        console.log("Component unmounted");
    }
    
}
 
 export default Counter;