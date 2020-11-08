const initialState = {
  data: [],
  channels: [],
  roomIds: [],
  getLoading: false,
  getError: '',
  openedRoom: '',
}

export default function appReducer(state = initialState, action) {

  switch (action.type) {

    case 'GET_Messages':
      console.log('GET_Messages')
      return {
        ...state,
        getLoading: true,
        getError: '',
      };

    case 'GET_Messages_SUCCESS':
      console.log('GET_Messages_SUCCESS')

      let newChannels
      if (!state.channels.some((channel) => channel === action.payload.channelId )) {
        newChannels = [...state.channels, action.payload.channelId]
      } else {
        newChannels = state.channels
      }

      let newRooms
      if (!state.roomIds.some((roomId) => roomId === action.payload.roomId )) {
        newRooms = [...state.roomIds, action.payload.roomId]
      } else {
        newRooms = state.roomIds
      }
      console.log('state data: ',[...state.data, action.payload])
      return {
        ...state,
        channels: newChannels,
        roomIds: newRooms,
        data: [...state.data, action.payload],
        getLoading: false,
      };

    case 'GET_Messages_ERROR':
      return {
        ...state,
        getLoading: false,
        getError: action.payload,
      };

    case 'OPEN_ROOM':
      console.log('OPEN_ROOM')
      return {
        ...state,
        openedRoom: action.payload
      };

    default:
      return state

  }
}
