import {UPDATE_UNREAD_NOTIFICATIONS} from './actionsTypes';

export const updateUnreadNotifications = qtd => ({
  type: UPDATE_UNREAD_NOTIFICATIONS,
  payload: qtd,
});
