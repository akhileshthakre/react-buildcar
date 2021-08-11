import { useRef, useEffect } from 'react';

const useCustomHook = () => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

export default useCustomHook