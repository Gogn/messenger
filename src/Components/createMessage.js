import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

export default function CreateMessage() {
  const [value, onChangeText] = useState('');

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <form style={{display:'flex', justifyContent:'space-between', backgroundColor:'gray',width:'100%'}}>
          <TextField
            id="outlined-basic"  label="Outlined" variant="outlined"
            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          <Button>Send</Button>
        </form>
      </Box>
    </Container>
  );
}
