import PropTypes from "prop-types";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Main=({handleMainSection,active,handleChooseButton,selectedPlayers,handleDeleteButton,handleCreditAdd})=>{
  return(
    <div className="mt-10">
      {/* header */}
      <div className="flex justify-end items-center mb-5">
        <div className="space-x-4">
          <button onClick={()=>handleMainSection('available')} className={active?"btn active":"btn"}>Available</button>
          <button onClick={()=>handleMainSection('selected')} className={active?"btn":"btn active"}>Selected({selectedPlayers.length})</button>
        </div>
      </div>
      {/* sections */}
      {
        active?<AvailablePlayers handleChooseButton={handleChooseButton} handleCreditAdd={handleCreditAdd}/>:<SelectedPlayers selectedPlayers={selectedPlayers} handleDeleteButton={handleDeleteButton}/>
      }
    </div>
  );
};

Main.propTypes={
  handleMainSection: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  handleChooseButton: PropTypes.func.isRequired,
  selectedPlayers: PropTypes.array.isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
  handleCreditAdd: PropTypes.func.isRequired,
}

export default Main;