import PropTypes from "prop-types";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Main=({handleMainSection,active})=>{
  return(
    <div className="mt-10">
      {/* header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-2xl">Available Players</h1>
        <div className="space-x-4">
          <button onClick={()=>handleMainSection('available')} className={active?"btn active":"btn"}>Available</button>
          <button onClick={()=>handleMainSection('selected')} className={active?"btn":"btn active"}>Selected(0)</button>
        </div>
      </div>
      {/* sections */}
      {
        active?<AvailablePlayers/>:<SelectedPlayers/>
      }
    </div>
  );
};

Main.propTypes={
  handleMainSection: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default Main;