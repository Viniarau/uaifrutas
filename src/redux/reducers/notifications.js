import {UPDATE_UNREAD_NOTIFICATIONS} from './../actionsTypes';

const initialState = {
  unread: 0,
  notifications: [],
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_UNREAD_NOTIFICATIONS: {
      return {
        ...state,
        unread: action.payload,
      };
    }

    default:
      return state;
  }
};

export default notificationsReducer;
