import { useCallback } from 'react';

function useScrollTo() {
  const onScrollTo = useCallback((id: string) => {
    const anchor = document.querySelector(id);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return onScrollTo;
}

export default useScrollTo;
