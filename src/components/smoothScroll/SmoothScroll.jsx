import React, { useEffect, useState } from "react";

const SmoothScroll = ({ sectionIds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allowScroll, setAllowScroll] = useState(true);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!allowScroll) return;
      e.preventDefault();

      // Determine scroll direction
      const direction = e.deltaY > 0 ? 1 : -1;

      // Calculate next section index
      let nextIndex = currentIndex + direction;
      nextIndex = Math.max(0, Math.min(nextIndex, sectionIds.length - 1));

      // Scroll to the next section if it's different
      if (nextIndex !== currentIndex) {
        setAllowScroll(false);
        const nextSection = document.getElementById(sectionIds[nextIndex]);
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
          setCurrentIndex(nextIndex);
          // Wait for the smooth scroll to finish before allowing new scroll events
          setTimeout(() => {
            setAllowScroll(true);
          }, 1000);
        } else {
          // In case of no section found, re-enable scrolling
          setAllowScroll(true);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex, allowScroll, sectionIds]);

  return null;
};

export default SmoothScroll;
