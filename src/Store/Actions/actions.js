import api from '../../Api/messagesApi'
import {emit} from "../../Api";

export function getMessages() {
  return async dispatch => {
    dispatch({
      type: "GET_Messages",
    });

    const onSuccess = (success) => {
      dispatch({
        type: "GET_Messages_SUCCESS",
        payload: success,
      });
      return success
    }
    const onError = (error) => {
      dispatch({
        type: "GET_Messages_ERROR",
        payload: error,
      });
      return error
    }

    try {
      const success = await emit()
      return onSuccess(success)
    } catch (err) {
      return onError(err)
    }
  };
}

export function createMessage(title) {
  return async (dispatch) => {
    dispatch({
      type: "CREATE_Message",
    });

    try {
      const Message = await api.createMessage(title);

      dispatch({
        type: "CREATE_Message_SUCCESS",
        payload: Message,
      });
    } catch (err) {
      dispatch({
        type: "CREATE_Message_SUCCESS",
        payload: err.message || "Failed to create Message!",
      });
    }
  };
}

export function patchMessage(id, title) {
  return async (dispatch) => {
    dispatch({
      type: "PATCH_Message",
    });

    try {
      const newMessage = api.patchMessage(id, title);      dispatch({
        type: "PATCH_Message_SUCCESS",
        payload: newMessage,
      });
    } catch (err) {
      dispatch({
        type: "PATCH_Message_SUCCESS",
        payload: err.message || "Failed to patch Message!",
      });
    }
  };
}

export function deleteMessage(id) {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_Message",
    });

    try {
      await api.deleteMessage(id);      dispatch({
        type: "DELETE_Message_SUCCESS",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "DELETE_Message_SUCCESS",
        payload: err.message || "Failed to delete Message!",
      });
    }
  };
}

export function setActiveRoom(room) {
  return async (dispatch) => {
    dispatch({
        type: "OPEN_ROOM",
        payload: room,
      });
  };
}

export function setActiveChannel(channel) {
  return async (dispatch) => {
    dispatch({
      type: "OPEN_CHANNEL",
      payload: channel,
    });
  };
}
