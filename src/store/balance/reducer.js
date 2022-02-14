const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "balance/deposit": {
      //always console.log to check your action.payload
      console.log("action", action)
      return {
        ...state,
        amount: state.amount + action.payload
      }
    }
    default: {
      return state;
    }
  }
}