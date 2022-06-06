const initState = {
  error: null,
  //   firstname: null,
  //   lastname: null,
  //   sex: null,
  //   age: null,
  user: {},
  isLoading: false,
  success:false
};

const createProfile = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_USER_START':
      return { ...state, isLoading: true };
    case 'CREATE_PROFILE_SUCCESS':
      return {
        ...state,
        ...payload,
        success: true
      };
    case 'GET_USER_ERROR':
      return { ...state, ...payload, isLoading: false };
    // case 'INIT_DELETE':
    //   return { ...state, ...payload };
    default:
      return state;
  }
};

export default createProfile;
