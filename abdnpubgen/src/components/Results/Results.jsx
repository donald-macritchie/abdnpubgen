import smileyFace from "/images/smiley-face.svg";
import cloud from "/images/cloud1.svg";
import rainbow from "/images/rainbow.svg";
import blueBottle from "/images/blue-bottle.svg";
import pintGlass from "/images/pint-glass.svg";
import cloud2 from "/images/cloud2.svg";
import LastSpins from "../LastSpins/LastSpins"; // Import the new component

const Results = ({ selectedPub }) => {
  return (
    <>
      <div
        id="results-container"
        className="relative flex flex-col mx-auto items-center justify-center mt-30 p-6 border-2 border-black w-[80%] max-w-[600px] h-auto bg-fd-yellow rounded-lg"
      >
        <img
          src={smileyFace}
          alt="Yellow Smiley Face"
          className="absolute top-[-5%] left-[80%] md:left-[90%] w-25 h-25"
        />
        <img
          src={cloud}
          alt=""
          className="absolute top-[-5%] right-[70%] md:right-[80%] w-40 h-30 z-10"
        />
        <img
          src={rainbow}
          alt=""
          className="absolute bottom-[-22%] left-[20%] md:left-[50%]  w-60 h-60 -z-10"
        />
        <img
          src={blueBottle}
          alt=""
          className="absolute w-15 md:w-25 left-[-5%]"
        />
        <img
          src={pintGlass}
          alt=""
          className="absolute w-15 md:w-25 left-[92%] top-[55%] md:top-[40%]"
        />
        <img
          src={cloud2}
          alt=""
          className="absolute bottom-[-5%] left-[75%] w-30 -z-10"
        />

        <div className="flex flex-col items-center justify-center mt-6 p-6 text-center">
          <h3 className="karla text-xl md:text-2xl font-bold">
            Make your way to...
          </h3>
          <h1 className="souvenir text-3xl md:text-5xl mt-8 p-8">
            {selectedPub?.name || "Spin to find out!"}
          </h1>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center p-2">
            <p className="border-2 border-[#E86BA5] rounded-xl p-2 karla text-lg md:text-xl w-30 text-center">
              Address
            </p>
            <p className="mt-4 font-bold text-xl md:text-2xl karla text-center">
              {selectedPub?.address || ""}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 p-2">
            <p className="border-2 border-[#6AC1CC] rounded-xl p-2 karla text-lg md:text-xl w-30 text-center">
              Area
            </p>
            <p className="mt-4 font-bold karla text-center text-xl md:text-2xl">
              {selectedPub?.location || ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
