import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";

const ShowMessages = () => {
  const openedChannel = useSelector(state => state.messages.openedChannel)
  const openedRoom = useSelector(state => state.messages.openedRoom)
  const currentUser = useSelector(state => state.messages.currentUser)
  const messages = useSelector(state => state.messages.data)
  let messageHistory

  if (openedRoom) {
    messageHistory = messages.filter((message) => message.roomId===openedRoom)
      .map((message, index) => {
        if (message.channelId === openedChannel) {
          if (message.roomId !== currentUser) {
            return (
              <div style={{marginBottom: 20}}>
                <div style={{backgroundColor: 'gray'}}>
            <span>
              {message.body}
              <br /><br />
              {message.roomId}
            </span>
                </div>
                <div style={{
                  backgroundColor: 'transparent',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}>
                  <div style={{height: 20, width: 20, backgroundColor: 'gray'}} />
                </div>
              </div>
            )
          } else {
            return (
              <div style={{marginBottom: 20}}>
                <div style={{backgroundColor: 'gray'}}>
              <span>
                {message.body}
                <br /><br />
                {message.roomId}
              </span>
                </div>
                <div
                  style={{backgroundColor: 'transparent', width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                  <div style={{height: 20, width: 20, backgroundColor: 'gray'}} />
                </div>
              </div>
            )
          }
        }
    })
  } else {
      messageHistory = messages.map((message, index) => {
        if (message.channelId === openedChannel) {
          if (message.roomId !== currentUser) {
            return (
              <div style={{marginBottom: 20, marginTop: 20}}>
                <div style={{backgroundColor: 'gray'}}>
            <span>
              {message.body}
              <br /><br />
              {message.roomId}
            </span>
                </div>
                <div  style={{backgroundColor: 'transparent', width: '100%', display:'flex', justifyContent:'flex-start'}}>
                  <div style={{height: 20, width: 20, backgroundColor: 'gray'}} />
                </div>
              </div>
            )
          } else {
            return (
              <div style={{marginBottom: 20}}>
                <div style={{backgroundColor: 'gray'}}>
              <span>
                {message.body}
                <br /><br />
                {message.roomId}
              </span>
                </div>
                <div style={{backgroundColor: 'transparent', width: '100%', display:'flex', justifyContent:'flex-end'}}>
                  <div style={{height: 20, width: 20, backgroundColor: 'gray'}} />
                </div>
              </div>
            )
          }

        }

      })
    }

  return messageHistory
}

export default function ChatHistory() {
  const [value, onChangeText] = useState('');
  const openedChannel = useSelector(state => state.messages.openedChannel)
  const openedRoom = useSelector(state => state.messages.openedRoom)
  const messages = useSelector(state => state.messages.data)

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <ShowMessages />
      </Box>
    </Container>
  );
}
