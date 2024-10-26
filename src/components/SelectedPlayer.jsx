import PropTypes from "prop-types";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectedPlayer=({selectedPlayer,handleDeleteButton})=>{
  const alert=()=>{
    toast.warn('Player Removed', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg my-2">
      <div className="flex space-x-4">
        <div>
          <img className="w-20 h-20 rounded-lg" src={selectedPlayer.image} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold">{selectedPlayer.name}</h1>
          <p className="text-sm">{selectedPlayer.role}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-3">
        <i onClick={()=>{handleDeleteButton(selectedPlayer);alert()}} className="fa-solid fa-trash text-red-600"></i>
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