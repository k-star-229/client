const initState = {
  error: null,
  //   firstname: null,
  //   lastname: null,
  //   sex: null,
  //   age: null,
  user: {},
  isLoading: false
};

const getUser = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_USER_START':
      return { ...state, isLoading: true };
    case 'GET_USER_SUCCESS':
      // console.log(payload._id, ' in reducer');
      return {
        ...state,
        ...payload,
        isLoading: false
      };
    case 'GET_USER_ERROR':
      return { ...state, ...payload, isLoading: false };
    // case 'INIT_DELETE':
    //   return { ...state, ...payload };
    default:
      return state;
  }
};

export default getUser;
