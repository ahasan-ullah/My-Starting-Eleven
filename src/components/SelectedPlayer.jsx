import PropTypes from "prop-types";

const SelectedPlayer=({selectedPlayer,handleDeleteButton})=>{
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg my-2">
      <div className="flex space-x-4">
        <div>
          <img className="w-20 h-20 rounded-lg" src={selectedPlayer.image} alt="" />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">{selectedPlayer.name}</h1>
          <div>
            <p className="text-sm">{selectedPlayer.battingType}</p>
            <p className="text-sm">{selectedPlayer.bowlingType}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-3">
        <i onClick={()=>handleDeleteButton(selectedPlayer)} className="fa-solid fa-trash text-red-600"></i>
        <p className="text-sm">Price: {selectedPlayer.biddingPrice}</p>
      </div>
    </div>
  );
};

SelectedPlayer.propTypes={
  selectedPlayer: PropTypes.object.isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
}

export default SelectedPlayer;