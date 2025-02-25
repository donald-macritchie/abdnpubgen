import { useRef, useState } from "react";
import mainWheel from "/images/main-wheel.svg";
import pintGlass from "/images/pint-glass.svg";
import blueBottle from "/images/blue-bottle.svg";
import stars from "/images/big-star-small-star.svg";
import pinkMartini from "/images/pink-martini.svg";
import purpleMartini from "/images/purple-martini.svg";

// Import the spinWheelAnimation and resetWheel functions from spinWheel.js
import { spinWheelAnimation, resetWheel } from "./spinWheel.js";

// Import the animation function from spinAnimations.js
import { animateFloatingIcons } from "./spinAnimations.js";

import pubs from "/src/data/pubs.js"; // Import pubs

const Wheel = ({ setSelectedPub }) => {
  const wheelRef = useRef(null); // Reference to the wheel image
  const [spinning, setSpinning] = useState(false); // State to track spinning status
  const [finished, setFinished] = useState(false); // State to track if spin has completed
  const [iconsVisible, setIconsVisible] = useState(true); // State to control the visibility of pre-spin icons

  // Scroll function to smoothly scroll to the results container
  function scrollToResultsWithGSAP() {
    const resultsContainer = document.getElementById("results-container");
    if (resultsContainer) {
      window.scrollTo({
        top: resultsContainer.offsetTop,
        behavior: "smooth", // Smooth scrolling behavior
      });
    }
  }

  // Function to handle the spin action
  const handleSpin = () => {
    if (spinning) return; // Prevent spinning if it's already spinning

    setSpinning(true); // Set spinning to true when spin starts
    setIconsVisible(false); // Hide the icons when spin starts

    // Start the animation of the floating icons after the spin starts
    animateFloatingIcons();

    // Call the spinWheelAnimation function and pass the wheelRef and a callback
    spinWheelAnimation(wheelRef, () => {
      setSpinning(false); // Set spinning to false when the spin finishes
      setFinished(true); // Set finished state to show the reset button

      const pubKeys = Object.keys(pubs);
      const randomPub =
        pubs[pubKeys[Math.floor(Math.random() * pubKeys.length)]];

      // Set the selected pub in the parent state
      setSelectedPub(randomPub);

      // Trigger the scroll to the results container
      scrollToResultsWithGSAP(); // Scroll after spin completes
    });
  };

  // Function to handle the reset action
  const handleReset = () => {
    setFinished(false); // Hide reset button and show spin button again
    setIconsVisible(true); // Show pre-spin icons again
    setSelectedPub(null); // Clear the selected pub
    resetWheel(wheelRef); // Reset the wheel's rotation
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        {/* Wheel */}
        <img
          src={mainWheel}
          alt="Wheel"
          className="w-[80%] h-[80%] max-w-[800px] lg:w-[60%] lg:h-[60%] mx-auto relative"
          ref={wheelRef} // Reference to the wheel element
        />

        {/* Spin or Reset Button */}
        {finished ? (
          <button
            id="reset-button"
            onClick={handleReset} // Reset the wheel when clicked
            className="souvenir transition-all absolute w-20 h-20 md:w-34 md:h-34 lg:w-40 lg:h-40 md:text-4xl top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-0 p-2 bg-fd-light text-black text-xl border-2 border-fd-dark rounded-full cursor-pointer z-30"
          >
            Reset
          </button>
        ) : (
          <button
            id="spin-button"
            onClick={handleSpin} // Trigger the spin action
            disabled={spinning} // Disable the button during spinning
            className={`souvenir transition-all absolute w-20 h-20 md:w-34 md:h-34 lg:w-40 lg:h-40 md:text-4xl top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-0 p-2 z-30 ${
              spinning
                ? "bg-[#f4da42] cursor-not-allowed"
                : "bg-fd-light cursor-pointer"
            } text-black text-xl border-2 border-fd-dark rounded-full`}
          >
            {!spinning && "Spin"}
          </button>
        )}

        {/* Pre-spin images */}
        <div className={`pre-spin-icons ${iconsVisible ? "" : "hidden"}`}>
          <img
            src={pintGlass}
            alt="illustration of a pint glass"
            className="absolute w-30 h-30 md:w-50 md:h-50 right-[65%] md:right-[70%] lg:right-[65%] xl:right-[60%] 2xl:right-[55%] top-[5%] pre-spin-icon"
          />
          <img
            src={stars}
            alt="illustration of a stars"
            className="absolute w-30 h-30 md:w-50 md:h-50 right-[5%] lg:right-[18%] xl:right-[25%] 2xl:right-[35%] top-[10%] pre-spin-icon"
          />
          <img
            src={purpleMartini}
            alt="illustration of a purple Martini"
            className="absolute w-30 h-30 md:w-40 md:h-40 right-[10%] md:right-[5%] lg:right-[20%] xl:right-[25%] 2xl:right-[35%] top-[60%] pre-spin-icon"
          />
        </div>

        {/* Floating Icon */}
        <div className="floating-icon-container hidden">
          <img
            src={pintGlass}
            alt="illustration of a pint glass"
            className="absolute w-20 h-20 opacity-0 floating-icon"
            id="pint-glass"
          />
          <img
            src={stars}
            alt="illustration of a stars"
            className="absolute w-20 h-20 opacity-0 floating-icon"
            id="stars"
          />
          <img
            src={pinkMartini}
            alt="illustration of a pink Martini"
            className="absolute w-20 h-20 opacity-0 floating-icon"
            id="pink-martini"
          />
          <img
            src={blueBottle}
            alt="illustration of a wine glass"
            className="absolute w-20 h-20 opacity-0 floating-icon"
            id="blue-bottle"
          />
          <img
            src={purpleMartini}
            alt="illustration of a purple Martini"
            className="absolute w-20 h-20 opacity-0 floating-icon"
            id="purple-martini"
          />
          <p
            className="absolute text-sm souvenir opacity-0 floating-icon"
            id="good-luck"
          >
            Enjoy your night!
          </p>
        </div>
      </div>
    </>
  );
};

export default Wheel;
