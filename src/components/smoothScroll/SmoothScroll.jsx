import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    // Function to handle the scroll
    const handleWheel = (e) => {
      e.preventDefault();
      const maxScrollSpeed = 3;
      const scrollAmount = e.deltaY * maxScrollSpeed;

      // Optional: add logic here to adjust scrollAmount based on existing scroll position, etc.

      window.scrollTo({
        top: document.documentElement.scrollTop + scrollAmount,
        behavior: "smooth",
      });
    };

    // Add event listener
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup function
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything
};

export default SmoothScroll;
