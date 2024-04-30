import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Slider1 from "./Components/sec";
import Promo from "./Components/Promo";
import Shop from "./Components/Shop";
import Speaker from "./Components/Speaker";
import ForBusiness from "./Components/ForBusiness";
import Fotter from "./Components/Fotter";
import Fcopy from "./Components/Fcopy";
import './App.css'

function App() {

  return (
    <>
    <div className="container mx-auto ">
      <Navbar/>
      <Slider/>
      <Slider1/>
      <Promo/>
      <Shop/>
      <Speaker/>
      <ForBusiness/>
      <Fotter/>
      <Fcopy/>
    </div>
    </>
  )
}

export default App
