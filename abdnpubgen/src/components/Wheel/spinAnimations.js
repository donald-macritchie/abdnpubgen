import gsap from "gsap";

// Function to animate floating icons
export function animateFloatingIcons(isResetting) {
  // Prevent animations if the reset button is active
  if (isResetting) {
    return; // Do nothing if we are in the resetting state
  }

  // Select the floating icon elements
  const pintGlass = document.getElementById("pint-glass");
  const blueBottle = document.getElementById("blue-bottle");
  const pinkMartini = document.getElementById("pink-martini");
  const purpleMartini = document.getElementById("purple-martini");
  const goodLuck = document.getElementById("good-luck");

  // Ensure the icon container is visible
  document.querySelector(".floating-icon-container").classList.remove("hidden");

  let mm = gsap.matchMedia();

  mm.add("(max-width: 640px)", () => {
    let iconTimeline = gsap.timeline();

    // Pint Glass Animation for small screens
    iconTimeline
      .fromTo(
        pintGlass,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "25vw",
          y: "-25vw",
          scale: 1.5,
          duration: 1,
          ease: "power3.out",
        }
      )
      .to(
        pintGlass,
        { opacity: 0, duration: 0.5, ease: "power1.out" },
        "+=0.5"
      );

    // Pink Martini Animation for small screens
    iconTimeline
      .fromTo(
        pinkMartini,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "-25vw",
          y: "25vw",
          scale: 1.5,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        pinkMartini,
        { opacity: 0, duration: 0.5, ease: "power1.out" },
        "+=0.5"
      );

    // Blue Bottle Animation for small screens
    iconTimeline
      .fromTo(
        blueBottle,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "-25vw",
          y: "-25vw",
          scale: 1.5,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        blueBottle,
        { opacity: 0, duration: 0.5, ease: "power1.out" },
        "+=0.5"
      );

    // Purple Martini Animation for small screens
    iconTimeline
      .fromTo(
        purpleMartini,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "25vw",
          y: "25vw",
          scale: 1.5,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      )
      .to(purpleMartini, { opacity: 0, duration: 0.5, ease: "power1.out" });

    // Good Luck Animation for small screens
    iconTimeline
      .fromTo(
        goodLuck,
        { opacity: 0, scale: 0.2, xPercent: -50, yPercent: -50, x: 0, y: 0 },
        {
          opacity: 1,
          scale: 3.5,
          y: 100,
          duration: 2,
          ease: "power3.out",
        },
        "<"
      )
      .to(goodLuck, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      });
  });

  // Medium Screen (641px to 1024px)
  mm.add("(min-width: 641px) and (max-width: 1024px)", () => {
    let iconTimeline = gsap.timeline();

    // Pint Glass Animation for medium screens
    iconTimeline
      .fromTo(
        pintGlass,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "20vw",
          y: "-20vw",
          scale: 2.5,
          duration: 1,
          ease: "power3.out",
        }
      )
      .to(
        pintGlass,
        { opacity: 0, duration: 0.5, ease: "power1.out" },
        "+=0.5"
      );

    // Pink Martini Animation for medium screens
    iconTimeline
      .fromTo(
        pinkMartini,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "-20vw",
          y: "20vw",
          scale: 2.5,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        pinkMartini,
        { opacity: 0, duration: 0.5, ease: "power1.out" },
        "+=0.5"
      );

    // Blue Bottle Animation for medium screens
    iconTimeline
      .fromTo(
        blueBottle,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "-20vw",
          y: "-20vw",
          scale: 2.5,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        blueBottle,
        { opacity: 0, duration: 0.5, ease: "power1.out" },
        "+=0.5"
      );

    // Purple Martini Animation for medium screens
    iconTimeline
      .fromTo(
        purpleMartini,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "20vw",
          y: "20vw",
          scale: 2.5,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      )
      .to(purpleMartini, { opacity: 0, duration: 0.5, ease: "power1.out" });

    // Good Luck Animation for medium screens
    iconTimeline
      .fromTo(
        goodLuck,
        { opacity: 0, scale: 0.2, xPercent: -50, yPercent: -50, x: 0, y: 0 },
        {
          opacity: 1,
          scale: 4.5,
          y: 80,
          duration: 1.8,
          ease: "power3.out",
        },
        "<"
      )
      .to(goodLuck, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      });
  });

  // Large Screen (1025px and above)
  mm.add("(min-width: 1025px)", () => {
    let iconTimeline = gsap.timeline();

    // Pint Glass Animation for large screens (Bigger Scale)
    iconTimeline
      .fromTo(
        pintGlass,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "15vw",
          y: "-15vw",
          scale: 2.0, // Increased scale for larger screens
          duration: 1,
          ease: "power3.out",
        }
      )
      .to(
        pintGlass,
        { opacity: 0, duration: 0.5, ease: "power1.out" },
        "+=0.5"
      );

    // Pink Martini Animation for large screens (Bigger Scale)
    iconTimeline
      .fromTo(
        pinkMartini,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "-15vw",
          y: "15vw",
          scale: 2.0, // Increased scale for larger screens
          duration: 1,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        pinkMartini,
        { opacity: 0, duration: 0.5, ease: "power1.out" },
        "+=0.5"
      );

    // Blue Bottle Animation for large screens (Bigger Scale)
    iconTimeline
      .fromTo(
        blueBottle,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "-15vw",
          y: "-15vw",
          scale: 2.0, // Increased scale for larger screens
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        blueBottle,
        { opacity: 0, duration: 0.5, ease: "power1.out" },
        "+=0.5"
      );

    // Purple Martini Animation for large screens (Bigger Scale)
    iconTimeline
      .fromTo(
        purpleMartini,
        { opacity: 0, x: 0, scale: 0.2 },
        {
          opacity: 1,
          x: "15vw",
          y: "15vw",
          scale: 2.0, // Increased scale for larger screens
          duration: 1,
          ease: "power3.out",
        },
        "<"
      )
      .to(purpleMartini, { opacity: 0, duration: 0.5, ease: "power1.out" });

    // Good Luck Animation for large screens (Bigger Scale)
    iconTimeline
      .fromTo(
        goodLuck,
        { opacity: 0, scale: 0.2, xPercent: -50, yPercent: -50, x: 0, y: 0 },
        {
          opacity: 1,
          scale: 7.5,
          y: 200,
          duration: 2,
          ease: "power3.out",
        },
        "<"
      )
      .to(goodLuck, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      });
  });
}
