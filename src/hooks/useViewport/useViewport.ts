import { useEffect, useState } from 'react';

const useViewport = (): number => {
  const [widthSize, setWidthSize] = useState(0);

  const handleResize = () => {
    setWidthSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return widthSize;
};

export default useViewport;
