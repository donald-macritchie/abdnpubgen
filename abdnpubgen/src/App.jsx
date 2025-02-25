import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Results from "./components/Results/Results";
import Wheel from "./components/Wheel/Wheel";
import LastSpins from "./components/LastSpins/LastSpins"; // Import
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import PubList from "./components/PubList/PubList";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedPub, setSelectedPub] = useState(null);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFFCC5] to-[#FFFFF3] z-0"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <Banner />
        <Wheel setSelectedPub={setSelectedPub} />
        <Results selectedPub={selectedPub} />
        <LastSpins selectedPub={selectedPub} />
        <GeneralInfo />
        <PubList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
