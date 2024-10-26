import PropTypes from "prop-types";

const AvailablePlayer=({player})=>{
  return(
    <div className="card w-80 md:w-96 border">
      <figure className="p-10">
        <img className="w-full h-56 rounded-2xl" src={player.image} alt="player"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg"><i className="fa-solid fa-user"></i>{player.name}</h2>
        <div className="flex justify-between items-center text-sm">
          <p className="text-[#131313B3]"><i className="fa-solid fa-flag"></i> {player.country}</p>
          <a className="p-2 bg-gray-200 rounded-lg block">{player.role}</a>
        </div>
        <div className="divider"></div>
        <div className="space-y-3">
          <h2 className="card-title text-sm">Rating: {player.Rating}</h2>
          <div className="flex space-x-28">
            <h2 className="card-title text-sm">BattingType</h2>
            <p className="text-sm text-[#131313B3]">{player.battingType}</p>
          </div>
          <div className="flex space-x-28">
            <h2 className="card-title text-sm">BowlingType</h2>
            <p className="text-sm text-[#131313B3]">{player.bowlingType}</p>
          </div>
          <div className="flex justify-between">
            <h2 className="card-title text-sm">Price: ${player.biddingPrice}</h2>
            <a className="p-2 border cursor-pointer text-sm rounded-lg block">Choose Player</a>
          </div>
        </div>
      </div>
    </div>
  );
};

AvailablePlayer.propTypes = {
  player: PropTypes.object.isRequired,
};

export default AvailablePlayer;
