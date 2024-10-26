import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NewsLetter from "./components/NewsLetter";
import { useState } from "react"
import Main from "./components/Main";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const [credits,setCredits]=useState(0);
  const [active,setActive]=useState(true);
  const [selectedPlayers,setSelectedPlayers]=useState([]);

  const handleCreditButton=()=>{
    setCredits(credits+4000000);
  };

  const handleError=()=>{
    toast.error('Player already selected', {
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

  const handleError2=()=>{
    toast.error('Maximum player signed in', {
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

  const handleAlert=(name)=>{
    toast.success(`Congrates!! ${name} is now in your team`,{
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

  const handleMainSection=(status)=>{
    setActive(status==='available'?true:false);
  };

  const handleChooseButton=(player)=>{
    if(selectedPlayers.length<6){
      const isExist=selectedPlayers.find(sp=>sp.playerId===player.playerId);
      if(!isExist){
        setSelectedPlayers([...selectedPlayers,player]);
        handleAlert(player.name);
        handleCreditAdd(player.biddingPrice);
      }
      else{
        handleError();
      }
    }
    else{
      handleError2();
    }
  };
  console.log(selectedPlayers.length);

  const handleDeleteButton=(player)=>{
    const newSelectedPlayers=selectedPlayers.filter(selectedPlayer=>selectedPlayer.playerId!==player.playerId);
    setSelectedPlayers(newSelectedPlayers);
    setCredits(credits+player.biddingPrice);
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
        <Main handleMainSection={handleMainSection} handleChooseButton={handleChooseButton} active={active} selectedPlayers={selectedPlayers} handleDeleteButton={handleDeleteButton} handleCreditAdd={handleCreditAdd} credits={credits}/>
      </section>
      <div className="relative mt-64">
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  )
}

export default App
