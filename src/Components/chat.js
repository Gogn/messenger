import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import CreateMessage from "./createMessage";

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  message: {
    textAlign: "center",
    background: 'gray',
    marginBottom: '20px',
  },

}));

export default function Chat() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>

        <CreateMessage />
      </Box>
    </Container>
  );
}
