import gsap from "gsap";

// Example spinWheelAnimation with a duration of at least 2.3 seconds
export function spinWheelAnimation(wheelRef, callback) {
  const spinDuration = 10; // Ensure spin lasts longer than the floating icon animations

  gsap.to(wheelRef.current, {
    rotation: "+=2000", // Spins the wheel
    duration: spinDuration,
    onComplete: callback, // Calls the callback when spin completes
  });
}

export const resetWheel = (wheelRef) => {
  // Reset the wheel position to its original state
  wheelRef.current.style.transition = "none"; // Disable transition during reset
  wheelRef.current.style.transform = "rotate(0deg)"; // Set rotation back to 0 degrees
  // Optionally add a very short delay to allow the wheel to appear reset visually.
  setTimeout(() => {
    wheelRef.current.style.transition = "transform 4s ease-out"; // Restore the transition for future spins
  }, 100); // Delay for a brief moment to ensure the reset is noticeable
};
