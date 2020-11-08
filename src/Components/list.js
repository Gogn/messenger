import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {setActiveRoom} from "../Store/Actions/actions";

const ChannelList = ({messages = {}}) => {
  const dispatch = useDispatch();

  const lastMessages = []

  for (let channel of messages.channels) {

    let messagesOfChannel = messages.data.filter((message, i) => {
      if (message.channelId === channel) return message
    }).sort((a, b) => b.ts - a.ts)

    lastMessages.push(
      <div
        key={channel}
        onClick={()=>dispatch(setActiveRoom(channel))}
      >
        <div>
          {messagesOfChannel[0].ts.toString()}
        </div>
        <div>
          {channel}
        </div>
      </div>
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
