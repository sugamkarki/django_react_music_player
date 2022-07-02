import styles from "../styles/Home.module.css";
import {
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useState } from "react";
import Link from "next/link";
export default function JoinRoom() {
  const [state, setState] = useState({
    roomCode: "",
    error: "",
  });
  const joinButtonPressed=()=>{

  }
  return (
    <Grid container spacing={1} alignItems="center" className={styles.center}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          error={state.error}
          label="Code"
          placeholder="Enter a room code"
          value={state.roomCode}
          helperText={state.error}
          variant="outlined"
          onChange={(e)=>{
            setState({
                ...state,
                roomCode:e.target.value
            })
          }}
        />
      </Grid>
      <Grid item xs={12} align="center">
          <Button color="primary" variant="contained" onClick={joinButtonPressed}>
            Enter Room
          </Button>
      </Grid>
      <Grid item xs={12} align="center">
      <Link href="/">
          <Button color="secondary" variant="contained">
            Back
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
