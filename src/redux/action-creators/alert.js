const popAlert = alert => {
  return {
    type: 'POP_ALERT',
    payload: { alertContent: alert }
  };
};

const clearAlert = () => {
  return {
    type: 'CLEAR_ALERT',
    payload: { alertContent: null }
  };
};

export const setAlert = alert => dispatch => {
  dispatch(popAlert(alert));
  setTimeout(() => dispatch(clearAlert()), 2000);
};

// export const setAlertByWarning = (warning, item) => dispatch => {
//   let alert = '';
//   switch (warning) {
//     case 'empty':
//       alert = item + ' cannot be empty!';
//       dispatch(popAlert(alert));
//       break;
//     case 'match':
//       alert = item + ' does not match!';
//       dispatch(popAlert(alert));
//       break;
//     default:
//       break;
//   }
// };
