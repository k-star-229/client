const initState = {
  alertContent: null
};

const alert = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'POP_ALERT':
      return { ...state, ...payload };
    case 'CLEAR_ALERT':
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default alert;
