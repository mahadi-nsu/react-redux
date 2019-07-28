import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  //   state = {
  //     age: 20
  //   };

  //   onAgeUp = () => {
  //     this.setState({
  //       ...this.state,
  //       age: this.state.age + 1
  //     });
  //   };

  //   onAgeDown = () => {
  //     this.setState({
  //       ...this.state,
  //       age: this.state.age - 1
  //     });
  //   };

  render() {
    return (
      <div>
        <div>
          Age : <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Up</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
