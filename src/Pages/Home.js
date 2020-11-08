import React, {useEffect, useState} from 'react';
import '../Home.css';
import List from "../Components/list";
import Grid from "@material-ui/core/Grid";
import Chat from "../Components/chat";
import AllMessages from "../Components/allMessages";
import {getMessages} from "../Store/Actions/actions";
import {Button} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [getData, setGetData] = useState(false)
  const dispatch = useDispatch();

  useEffect(()=>{
    if (getData === true) { getMessages() }
  })

  const subscribeToMessages = async() => {
    dispatch(getMessages())
  }

  return (
    <div style={{flexGrow: 1}}>

      <Button variant="contained" color="primary" onClick={ () => subscribeToMessages() }>
        @
      </Button>

      <Grid style={{
        textAlign: "center",
        backgroundColor: '#f2f2f2',
      }} container spacing={0}>

        <Grid item xs={12} sm={3}>
          <div style={{
            textAlign: "center",
            background: 'gray',
          }}>
            <List />
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div style={{
            textAlign: "center",
          }}>
            <Chat>bar</Chat>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{
            textAlign: "center",
            backgroundColor: 'grey',
          }}>
            <AllMessages>baz</AllMessages>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}
