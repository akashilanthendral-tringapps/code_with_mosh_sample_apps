import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';
import React, {Component} from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component{

  state ={
    counters:[
        {id: 1, value: 4 },
        {id: 2, value: 0 },
        {id: 3, value: 0 },
        {id: 4, value: 0 },
        {id: 5, value: 0}
    ]
}
constructor(props){
  super(props);
  console.log('App constructor', this.props);
};
componentDidMount(){
  console.log("App Component mounted!");
};
//Method to handle if the user clicks Increment!
handleIncrement = (counter_) => {
    // const newCounters = this.state.counters.map( counter => {
    //     if(counter.id === counterID){
    //         return {id: counterID, value: counter.value + 1};
    //     }
    //     return counter;
    // })
    // console.log("this.state.counters: ", this.state.counters);
    // console.log("newCounters: ",newCounters);
    // this.setState({counters: newCounters}); 

    //Mosh implementation below...

    const newCounters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter_);
    console.log(index);
    newCounters[index] = {...counter_};
    newCounters[index].value++;
    this.setState({counters: newCounters});

}
handleReset =()=>{
    const newCounters = this.state.counters.map(counter => {
        return {id: counter.id, value: 0};
    });
    this.setState({counters: newCounters});

}
handleDelete =(counterID) =>{
    const counters = this.state.counters.filter(counter => counter.id != counterID);
    this.setState({counters})
};
handleResetFromChild =(counter_)=>{
    const newCounters = this.state.counters.map(counter => {
        if(counter_.id == counter.id){
            return {id: counter.id, value: 0};
        }
        return counter;
    });
    this.setState({counters: newCounters});
};

  render(){
    console.log("App Component rendered");
    return(<React.Fragment>
              <Navbar totalCounters = {this.state.counters.filter(counter => counter.value > 0).length}/>
              <main className='container'><Counters
                  onReset={this.handleReset} 
                  onIncrement={this.handleIncrement}
                  onDelete={this.handleDelete}
                  onResetFromChild={this.handleResetFromChild}
                  onReset={this.handleReset}
                  counters={this.state.counters}/>
               </main>
            </React.Fragment>
    );
  }
}

export default App;
