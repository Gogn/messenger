import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CreateMessage from "./createMessage";
import {useDispatch, useSelector} from "react-redux";
import {Button} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {setActiveChannel} from "../Store/Actions/actions";

const ChatHeader = ({openedChannel, channels, openedRoom, channelsForRooms}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '30px',
      backgroundColor: 'gray',
      padding: 10,
    }}>
      <div style={{
        backgroundColor: 'darkGray'
      }}>
        {openedRoom}
      </div>

      {channels && <ChannelSelector openedRoom={openedRoom} channels={channels} openedChannel={openedChannel} channelsForRooms={channelsForRooms} />}
    </div>
  )
}

const ChannelSelector = ({openedChannel, channelsForRooms, openedRoom}) => {
  const [showList, setShowList] = useState(false)
  const dispatch = useDispatch();

  const handleClick = (event, channel) => {
    setShowList(!showList)
    dispatch(setActiveChannel(channel))
  }

  let channelsList = []
  if (channelsForRooms[openedRoom]) {
    for (let channel of channelsForRooms[openedRoom]) {
      channelsList.push(
        <ListItem button onClick={(event) => handleClick(event, channel)}>
          <ListItemText primary={channel} />
        </ListItem>
      )
    }
  }

  if (showList) {
    return (
      <List style={{backgroundColor: 'lightGray'}} component="nav" aria-label="contacts">
        {channelsList}
      </List>
    )
  } else {
    return (
      <Button
        style={{height: '20px'}}
        variant="contained"
        onClick={() => setShowList(!showList)}
      >
        {openedChannel}
      </Button>
    )
  }
}

export default function Chat() {
  const openedChannel = useSelector(state => state.messages.openedChannel)
  const openedRoom = useSelector(state => state.messages.openedRoom)
  const channels = useSelector(state => state.messages.channels)
  const channelsForRooms = useSelector(state => state.messages.channelsForRooms)

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <ChatHeader openedChannel={openedChannel} channels={channels} openedRoom={openedRoom} channelsForRooms={channelsForRooms} />


        <CreateMessage />
      </Box>
    </Container>
  );
}
