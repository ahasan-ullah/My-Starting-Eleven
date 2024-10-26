import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NewsLetter from "./components/NewsLetter";
import { useState } from "react"
import Main from "./components/Main";

function App(){
  const [credits,setCredits]=useState(0);
  const [active,setActive]=useState(true);

  const handleCreditButton=()=>{
    setCredits(credits+60000);
  };

  const handleMainSection=(status)=>{
    setActive(status==='available'?true:false);
  };

  return(
    <>
      <section className="w-11/12 mx-auto">
        <Navbar credits={credits}/>
        <Header handleCreditButton={handleCreditButton}/>
        <Main handleMainSection={handleMainSection} active={active}/>
      </section>
      <div className="relative mt-64">
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  )
}

export default App
