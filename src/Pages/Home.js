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
    <div style={{height:'100vh', margin: 0, padding: 0, flex: 1}}>

      <Button variant="contained" style={{backgroundColor:'#e65800'}} onClick={ () => subscribeToMessages() }>
        @
      </Button>

      <Grid
        style={{
        textAlign: "center",
        backgroundColor: 'white',
        }}
        container
      >

        <Grid item xs={12} sm={4} >
            <List />
        </Grid>
        <Grid item xs={12} sm={4}>
            <Chat>bar</Chat>
        </Grid>
        <Grid item xs={12} sm={4}>
            <AllMessages>baz</AllMessages>
        </Grid>

      </Grid>
    </div>
  );
}
