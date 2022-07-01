import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Room(){
    const [defaultState,setDefaultState]=useState({
        votesToSkip:2,
        guestCanPause:false,
        isHost:false
    })
    const router=useRouter()
    const {roomCode}=router.query;
    return <div>
        <p>{roomCode}</p>
        <p>{defaultState.votesToSkip}</p>
        <p>{defaultState.guestCanPause}</p>
        <p>{defaultState.isHost}</p>
    </div>
}