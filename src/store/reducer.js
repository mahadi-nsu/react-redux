const initialState = {
  age: 20,
  history: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGE_UP":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({ age: state.age - action.value })
      };

    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({ age: state.age - action.value })
      };

    default:
      return state;
  }
};

export default reducer;
