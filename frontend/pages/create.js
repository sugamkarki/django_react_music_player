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
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import axios from "axios";
export default function CreateRoom() {
  const defaultVotes = 2;
  const [defaultState, setDefaultState] = useState({
    guestCanPause: true,
    votesToSkip: defaultVotes,
  });
  const router = useRouter();
  const handleVotesChange = (e) => {
    setDefaultState({
      ...defaultState,
      votesToSkip: +e.target.value,
    });
  };
  const handleGuestCanPauseChange = (e) => {
    setDefaultState({
      ...defaultState,
      guestCanPause: e.target.value === "true" ? true : false,
    });
  };

  const handleRoomButtonPressed = async () => {
    console.log(defaultState);
    const response = await axios.post(
      "http://localhost:8000/api/create-room/",
      {
        guest_can_pause: defaultState.guestCanPause,
        votes_to_skip: defaultState.votesToSkip,
      }
    );
    router.push("/room/" + response.data.code);
    console.log(response);
  };
  return (
    <Grid container spacing={1} className={styles.center}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create a room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>{"Guest Control of Playback State"}</FormHelperText>
          {/* <FormHelperText>
            <div>Guest Control of Playback State</div>
          </FormHelperText> */}
          <RadioGroup
            row
            defaultValue="true"
            onChange={handleGuestCanPauseChange}
          >
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="false"
              control={<Radio color="secondary" />}
              label="No Control"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            required={true}
            type="number"
            defaultValue={defaultVotes}
            inputProps={{ min: 1, style: { textAlign: "center" } }}
            onChange={handleVotesChange}
          />
          <FormHelperText>{"Votes Required To Skip Song"}</FormHelperText>
        </FormControl>
      </Grid>
     
      <Grid item xs={12} align="center">
        <Button
          color="primary"
          variant="contained"
          onClick={handleRoomButtonPressed}
        >
          Create A Room
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
