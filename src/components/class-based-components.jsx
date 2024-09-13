import { Component } from "react";

class ClassBasedComponents extends Component {
  handleClick = () => {
    this.setState({
      showText: !this.state.showText,
    });
  };
  state = {
    showText: false,
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.showText ? <h4>class based Component</h4> : null}
        <button onClick={this.handleClick}>Toggle</button>
      </div>
    );
  }
}

export default ClassBasedComponents;
