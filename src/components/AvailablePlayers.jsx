import { useEffect, useState } from "react";
import AvailablePlayer from "./AvailablePlayer";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const AvailablePlayers=({handleChooseButton,handleCreditAdd})=>{
  const [players, setPlayers]=useState([]);

  useEffect(() => {
    fetch('/players-data.json')
      .then((res)=>res.json())
      .then((data)=>setPlayers(data));
  },[]);
  return (
    <div>
      <h1 className="font-bold text-2xl mb-5">Available Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center justify-items-center">
        {
          players.map(player=><AvailablePlayer key={player.playerId} player={player} handleChooseButton={handleChooseButton} handleCreditAdd={handleCreditAdd}></AvailablePlayer>)
        }
      </div>
    </div>
  );
};

AvailablePlayers.propType={
  handleChooseButton: PropTypes.func.isRequired,
  handleCreditAdd: PropTypes.func.isRequired,
};

export default AvailablePlayers;
