const initialState = {
  data: [],
  channels: [],
  roomIds: [],
  getLoading: false,
  getError: '',
  openedRoom: '',
  openedChannel: '',
  channelsForRooms: {},
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

      let channelsForRooms = {}

      if (state.data.length===0) {
        channelsForRooms = {
          [action.payload.roomId]: [action.payload.channelId]
        }
      } else {state.data.forEach((item, i) => {
        if (!channelsForRooms[item.roomId]) {
          channelsForRooms = {
            ...channelsForRooms,
            [item.roomId]: []
          }
        }
        if (!channelsForRooms[item.roomId].some((channelId) => channelId === item.channelId)) {
          channelsForRooms[item.roomId].push(item.channelId)
        }
      })}

      return {
        ...state,
        channels: newChannels,
        roomIds: newRooms,
        data: [...state.data, action.payload],
        getLoading: false,
        channelsForRooms: channelsForRooms,
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

    case 'OPEN_CHANNEL':
      console.log('OPEN_CHANNEL')
      return {
        ...state,
        openedChannel: action.payload
      };

    default:
      return state

  }
}
