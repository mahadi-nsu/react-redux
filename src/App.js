import React, { Component } from "react";
import { connect } from "react-redux";

// import css
import "./App.css";

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
        <div className="age">
          Age : <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
        <div>
          <h3>History</h3>
          <ul>
            {this.props.history.map(element => (
              <li
                key={element.id}
                className="historyItem"
                onClick={() => this.props.onDelItem(element.id)}
              >
                {element.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onDelItem: id => dispatch({ type: "DEL_ITEM", key: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
