export const initialState = {
  counter: 0,
};

export default (state = {}, action) => {
  if (action.type === 'incr') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  return state;
};
