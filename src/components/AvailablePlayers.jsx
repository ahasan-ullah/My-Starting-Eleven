import { useEffect, useState } from "react";
import AvailablePlayer from "./AvailablePlayer";
const AvailablePlayers=()=>{
  const [players, setPlayers]=useState([]);

  useEffect(() => {
    fetch('/players-data.json')
      .then((res)=>res.json())
      .then((data)=>setPlayers(data));
  },[]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center justify-items-center">
      {
        players.map(player=><AvailablePlayer key={player.playerId} player={player}></AvailablePlayer>)
      }
    </div>
  );
};

export default AvailablePlayers;
