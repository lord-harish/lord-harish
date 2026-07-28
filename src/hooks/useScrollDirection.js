import { useEffect, useState } from 'react';

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollDirection, scrollY };
}
