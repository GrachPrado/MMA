import { useState, useEffect, RefObject } from 'react';

const useSwipeToClose = (ref: RefObject<HTMLElement>, onClose: () => void) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX !== null) {
        const touchEndX = e.touches[0].clientX;
        if (touchStartX - touchEndX > 50) { // detect left swipe
          onClose();
        }
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchmove', handleTouchMove, { passive: true });
    }

    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [touchStartX, onClose, ref]);
};

export default useSwipeToClose;
