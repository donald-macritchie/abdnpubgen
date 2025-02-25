import { useState } from "react";
import pubs from "../../data/pubs.js"; // Import pub list
import blueBottle from "/images/blue-bottle.svg";

const PubList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedPub, setExpandedPub] = useState(null); // Track expanded pub

  // Convert object to array and sort by pub name
  const pubArray = Object.values(pubs).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Toggle pub details dropdown
  const togglePub = (index) => {
    setExpandedPub(expandedPub === index ? null : index);
  };

  return (
    <div className="w-[80%] max-w-[600px] mx-auto mt-10 pt-6 pb-20 text-center">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img src={blueBottle} alt="Pub Illustration" className="w-32 h-32" />
      </div>

      {/* Title & Description */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold souvenir my-10">
          Can’t see your local?
        </h1>
        <p className="mt-2 text-lg md:text-xl karla">
          At Pub Spinner, no pub is left behind.
        </p>
        <p className="mt-2 text-lg md:text-xl karla">
          If your favourite place is missing, just get in touch!
        </p>
      </div>

      {/* Contact Button */}
      <div className="mt-10">
        <a
          href="https://fineday.studio/contact"
          className="bg-[#FFFCC5] souvenir font-bold px-4 py-2 border-2 border-black rounded-lg shadow-md hover:bg-[#f4da42] transition-colors md:text-xl"
          target="_blank"
        >
          Contact
        </a>
      </div>

      {/* View List Button */}
      <div className="mt-10">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#FFFCC5] souvenir font-bold px-4 py-2 border-2 border-black rounded-lg shadow-md hover:bg-[#f4da42] transition-colors md:text-xl"
        >
          {isOpen ? "Hide List" : "View List"}
        </button>
      </div>

      {/* Pub List */}
      {isOpen && (
        <div className="mt-4 p-4 rounded-lg bg-[#FFFCC5] border-2 border-black shadow-md">
          <ul className="text-center space-y-2 karla">
            {pubArray.map((pub, index) => (
              <li
                key={index}
                className="py-2 px-3 rounded-lg border-1 border-black bg-gray-100 transition-colors duration-300"
              >
                {/* Pub Name (Dropdown Toggle) */}
                <button
                  onClick={() => togglePub(index)}
                  className="w-full text-lg font-bold souvenir py-2"
                >
                  {pub.name}
                </button>

                {/* Dropdown Content (Address & Area) */}
                {expandedPub === index && (
                  <div className="mt-2 p-3 rounded-md bg-[#FFFCC5] border-2 border-black shadow-md">
                    <p className="text-gray-800 text-md">
                      <strong>Address:</strong> {pub.address}
                    </p>
                    <p className="text-gray-800 text-md">
                      <strong>Area:</strong> {pub.location}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PubList;
