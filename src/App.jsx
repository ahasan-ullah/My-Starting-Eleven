import Navbar from "./components/Navbar"
import Header from "./components/Header"
import { useState } from "react"

function App(){
  const [credits,setCredits]=useState(0);

  const handleCreditButton=()=>{
    setCredits(credits+60000);
  }

  return(
    <>
      <section className="container mx-auto">
        <Navbar credits={credits}/>
        <Header handleCreditButton={handleCreditButton}/>
      </section>
    </>
  )
}

export default App
