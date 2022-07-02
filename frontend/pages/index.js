// @ts-nocheck
import styles from "../styles/Home.module.css";
import { Grid, Typography, Button, ButtonGroup } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [state, setState] = useState({
    roomCode: null,
  });
  useEffect(() => {
    axios
      .get("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        setState({
          roomCode: data.code,
        });
      });
  }, []);
  return (
    <Grid container spacing={3} className={styles.center}>
      <Grid item xs={12} align="center">
        <Typography variant="h3" compact="h3">
          House Party
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Link href="/join">
            <Button color="primary" variant="contained">
              Join a Room
            </Button>
          </Link>
          <Link href="/create">
            <Button color="secondary" variant="contained">
              Create a room
            </Button>
          </Link>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
