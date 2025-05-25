import { RefObject, useEffect, useRef } from 'react';

const useClickOutside = <T extends HTMLElement>(func: () => void, detectCondition = false): RefObject<T | null> => {
  const ref = useRef<T>(null);

  /** next.js document test logic */
  let location;

  if (typeof document !== 'undefined') {
    location = document.location;
  }

  useEffect(() => {
    if (!detectCondition) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) func();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [detectCondition, func]);

  return ref;
};

export default useClickOutside;
