import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {setActiveRoom, setActiveChannel} from "../Store/Actions/actions";

const ChannelList = ({messages}) => {
  const dispatch = useDispatch();

  const handleClick = (channel, roomId) => {
    dispatch(setActiveRoom(roomId))
    dispatch(setActiveChannel(channel))
  }

  const lastMessages = []

  for (let channel of messages.channels) {

    let messagesOfChannel = messages.data.filter((message, i) => {
      if (message.channelId === channel) return message
    }).sort((a, b) => b.ts - a.ts)
    lastMessages.push(
      <Box
        key={channel}
        onClick={() => handleClick(channel, messagesOfChannel[0].roomId)}
        style={{display:'flex', flexDirection:'row', marginBottom: 20, backgroundColor: '#ffc099', cursor: 'pointer'}}
        component={"button"}
      >
        <div style={{flex:4,borderRight: '1px solid black'}}>
          <div style={{borderBottom: '1px solid black'}}>
            {messagesOfChannel[0].roomId}
          </div>
          <div style={{flex:4,borderBottom: '1px solid black'}}>
            {messagesOfChannel[0].ts.toString()}
          </div>
          <div>
            {messagesOfChannel[0].body}
          </div>
        </div>
        <div style={{flex:1}}>
          {channel}
        </div>
      </Box>
    )

  }

  return lastMessages
}


export default function List() {
  const messages = useSelector(state => state.messages)
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <ChannelList messages={messages} />
      </Box>
    </Container>
  );
}
