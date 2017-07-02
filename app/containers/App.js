import React, {Component} from 'react';

export default class App extends Component {
  render(){
    return(
      <section>
        {this.props.children}
      </section>
    )
  }
}
