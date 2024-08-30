import { TOGGLE_THEME } from './themeTypes';

const initialState = {
  mode: 'light', // Default to light mode
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default themeReducer;
