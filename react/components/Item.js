var React = require("react");

export default class Item extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: props.initialCount
    }
  }

  _increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (<div onClick={this._increment}>{this.state.count}</div>);
  }
}


