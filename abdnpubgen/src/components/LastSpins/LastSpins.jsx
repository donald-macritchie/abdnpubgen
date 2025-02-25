import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const LastSpins = ({ selectedPub }) => {
  const [lastSpins, setLastSpins] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown

  // Load last spins from localStorage on mount
  useEffect(() => {
    const storedSpins = JSON.parse(localStorage.getItem("lastSpins")) || [];
    setLastSpins(storedSpins);
  }, []);

  // Update last spins when a new pub is selected
  useEffect(() => {
    if (selectedPub) {
      const updatedSpins = [selectedPub, ...lastSpins].slice(0, 3);
      setLastSpins(updatedSpins);
      localStorage.setItem("lastSpins", JSON.stringify(updatedSpins));
    }
  }, [selectedPub]);

  return (
    <div className="w-[80%] max-w-[600px] mx-auto mt-10">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 border-2 border-black bg-[#FFFCC5] rounded-lg shadow-md hover:bg-[#f4da42] transition"
      >
        <span className="karla text-xl font-bold">Last 3 Spins</span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      {/* Dropdown Content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-2 border-black bg-[#FFFCC5] rounded-lg p-4 shadow-md">
          {lastSpins.length > 0 ? (
            <ul className="space-y-3">
              {lastSpins.map((pub, index) => (
                <li key={index} className="p-2 border-b border-gray-300">
                  <p className="font-bold text-lg">
                    {pub?.name || "Unknown Pub"}
                  </p>
                  <p className="text-sm">{pub?.address || "N/A"}</p>
                  <p className="text-sm">{pub?.location || "N/A"}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center karla text-md">No previous results</p>
          )}

          {/* Clear History Button */}
          <button
            onClick={() => {
              localStorage.removeItem("lastSpins");
              setLastSpins([]);
            }}
            className="mt-4 w-full souvenir px-4 py-2 rounded-lg border-2 border-black hover:bg-[#f4da42] transition"
          >
            Clear History
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastSpins;
