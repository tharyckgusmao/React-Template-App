import React,{Component} from 'react';

export default class Home extends Component{

  render(){
    return (

      <div>
        Counter: {this.props.counter}
        <button onClick={this.props.counterIncrement}>INCREMENT</button>
        <button onClick={this.props.counterDecrement}>DECREMENT</button>
      </div>

    )


  }

}
