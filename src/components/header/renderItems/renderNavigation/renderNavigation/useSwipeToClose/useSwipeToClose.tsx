import { useEffect } from 'react';

const useSwipeToClose = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
      if (touchStartX - touchEndX > 100) {
        callback();
      }
    };

    const node = ref.current;
    if (node) {
      node.addEventListener('touchstart', handleTouchStart,{ passive: true });
      node.addEventListener('touchend', handleTouchEnd,{ passive: true });
    }

    return () => {
      if (node) {
        node.removeEventListener('touchstart', handleTouchStart,);
        node.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [ref, callback]);
};

export default useSwipeToClose;
