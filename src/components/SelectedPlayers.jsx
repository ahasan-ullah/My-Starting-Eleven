import PropTypes from "prop-types";
import SelectedPlayer from "./SelectedPlayer";
const SelectedPlayers=({selectedPlayers,handleDeleteButton,handleMainSection})=>{
  return (
    <div>
      <h1 className="font-bold text-2xl mb-5">Selected Players({selectedPlayers.length}/6)</h1>
      <div>
        {
          selectedPlayers.map((selectedPlayer)=><SelectedPlayer key={selectedPlayer.playerId} selectedPlayer={selectedPlayer} handleDeleteButton={handleDeleteButton}></SelectedPlayer>)
        }
      </div>
      <button onClick={()=>handleMainSection('available')} className="btn active">Add More Player</button>
    </div>
  );
};

SelectedPlayers.propTypes={
  selectedPlayers: PropTypes.array.isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
  handleMainSection: PropTypes.func.isRequired,
}

export default SelectedPlayers;