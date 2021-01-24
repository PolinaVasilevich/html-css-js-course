const initialCounterState = {
  count: 0,
};

const counter = (state = initialCounterState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default counter;
