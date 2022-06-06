const initState = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  error: null,
  isLoading: false,
  editSuccess: false
};

const editUser = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'EDIT_USER_START':
      return { ...state, isLoading: true };
    case 'EDIT_USER_SUCCESS':
      return {
        ...state,
        ...payload,
        isLoading: false,
        editSuccess: true,
        error: null
      };
    case 'EDIT_USER_ERROR':
      return { ...state, ...payload, isLoading: false };
    case 'INIT_EDIT':
      return { ...state, ...payload, error: null };
    default:
      return state;
  }
};

export default editUser;
