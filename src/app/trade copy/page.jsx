'use client';

import { useEffect, useState } from 'react';
import MobileView from './mobileview/Mobilepage';
import DesktopView from './desktopview/Desktoppage';

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileView /> : <DesktopView />;
}