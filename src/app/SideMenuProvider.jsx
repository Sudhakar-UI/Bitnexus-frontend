"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Mobilesidemenu from "../app/components/Mobilesidemenu";
import Beforelogin from "../app/components/Mobilesidemenu";

const SideMenuContext = createContext();

export function useSideMenu() {
  return useContext(SideMenuContext);
}

export function SideMenuProvider({ children }) {
  
  const [isMobile, setIsMobile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);  
  }, []);

  
  if (isMobile === null) return null;

  return (
    <SideMenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
      {children}

      {/* Mobile View */}
      {isMobile && (
        <div className={`mobile-sidemenu-wrapper ${isOpen ? "open" : ""}`}>
          <Mobilesidemenu onClose={closeMenu} />
        </div>
      )}
    </SideMenuContext.Provider>
  );
}

