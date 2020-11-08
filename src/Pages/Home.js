import React, {useEffect, useState} from 'react';
import '../Home.css';
import List from "../Components/list";

import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chat from "../Components/chat";
import AllMessages from "../Components/allMessages";
import {getMessages} from "../Store/Actions/actions";
import {Button} from "@material-ui/core";


import { useDispatch, useSelector } from "react-redux";
import {emit} from "../Api";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  list: {
    textAlign: "center",
    background: 'gray',
  },
  chat: {
    textAlign: "center",
    backgroundColor: 'coral',
  },
  allMessages: {
    textAlign: "center",
    backgroundColor: 'grey',
  },
  container: {
    textAlign: "center",
    backgroundColor: '#f2f2f2',
  }
}));

export default function Home() {
  const [getData, setGetData] = useState(false)
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=>{
    if (getData === true) { getMessages() }
  })

  const subscribeToMessages = async() => {
    dispatch(getMessages())
  }

  return (
    <div className={classes.root}>

      <Button variant="contained" color="primary" onClick={ () => subscribeToMessages() }>
        @
      </Button>

      <Grid className={classes.container} container spacing={0}>

        <Grid item xs={12} sm={3}>
          <div className={classes.list}>
            <List />
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className={classes.chat}>
            <Chat>bar</Chat>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.allMessages}>
            <AllMessages>baz</AllMessages>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}
