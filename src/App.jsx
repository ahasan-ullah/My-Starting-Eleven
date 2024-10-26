import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NewsLetter from "./components/NewsLetter";
import { useState } from "react"
import Main from "./components/Main";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const [credits,setCredits]=useState(0);
  const [active,setActive]=useState(true);
  const [selectedPlayers,setSelectedPlayers]=useState([]);

  const handleCreditButton=()=>{
    setCredits(credits+4000000);
  };

  const handleMainSection=(status)=>{
    setActive(status==='available'?true:false);
  };

  const handleChooseButton=(player)=>{
    setSelectedPlayers([...selectedPlayers,player]);
  };

  const handleDeleteButton=(player)=>{
    const newSelectedPlayers=selectedPlayers.filter(selectedPlayer=>selectedPlayer.playerId!==player.playerId);
    setSelectedPlayers(newSelectedPlayers);
  }
  
  const handleCreditAdd=(price)=>{
    setCredits(credits-price);
  };

  return(
    <>
      <ToastContainer/>
      <section className="w-11/12 mx-auto">
        <Navbar credits={credits}/>
        <Header handleCreditButton={handleCreditButton}/>
        <Main handleMainSection={handleMainSection} handleChooseButton={handleChooseButton} active={active} selectedPlayers={selectedPlayers} handleDeleteButton={handleDeleteButton} handleCreditAdd={handleCreditAdd}/>
      </section>
      <div className="relative mt-64">
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  )
}

export default App
