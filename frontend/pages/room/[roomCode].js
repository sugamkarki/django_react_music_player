import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function Room() {
  const [defaultState, setDefaultState] = useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
  });
  const router = useRouter();
  const { roomCode } = router.query;
  const getRoomDetails = async () => {
    console.log(roomCode);
    const response = await axios.get("http://localhost:8000/api/get-room", {
      params: { code: roomCode },
    });
    const { data } = response;
    console.log(data);
    setDefaultState({
      votesToSkip: data.votes_to_skip.toString(),
      guestCanPause: data.guest_can_pause.toString(),
      isHost: data.is_host.toString(),
    });
    console.log(defaultState);
  };
  useEffect(() => {
    console.log(roomCode);
    if (roomCode) getRoomDetails();
  }, [router.isReady,roomCode]);
  return (
    <div>
      <p>{defaultState.votesToSkip}</p>
      <p>{defaultState.guestCanPause}</p>
      <p>{defaultState.isHost}</p>
    </div>
  );
}
