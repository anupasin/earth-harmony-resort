// components/FadeInSection.js
import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children, immediatelyVisible = false }) => {
  const [isVisible, setVisible] = useState(immediatelyVisible);
  const [hasAnimated, setHasAnimated] = useState(immediatelyVisible);
  const domRef = useRef();
  const prevYRef = useRef(0);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentY = entry.boundingClientRect.y;
          const isScrollingDown = currentY < prevYRef.current;
          prevYRef.current = currentY;

          if (entry.isIntersecting && isScrollingDown && !hasAnimated) {
            setVisible(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef && !immediatelyVisible) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && !immediatelyVisible) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, immediatelyVisible]);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;