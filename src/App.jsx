import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NewsLetter from "./components/NewsLetter";
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
        <div className="relative mt-64">
          <NewsLetter/>
          <Footer/>
        </div>
      </section>
    </>
  )
}

export default App
