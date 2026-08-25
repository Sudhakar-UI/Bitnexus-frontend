"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Image } from "react-bootstrap";
import "./globals.css";
import { Providers } from './Providers';
import { ThemeProvider } from './context/ThemeContext';
import { SideMenuProvider } from './SideMenuProvider';

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    setTimeout(() => {
      setLoading(true);
    }, 7000);
  }, []);

  const [loading, setLoading] = useState(false);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="assets/images/favicon.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>
          {/* {loading ? (
            <React.Fragment>
            </React.Fragment>
          ) : (
            <div className="pageloaderbox">
              <div className="pulseloader">
                <div><Image src="assets/images/bitnexus-loader.gif" /></div>
              </div>
            </div>
          )} */}
          <Providers>
            <ThemeProvider>
              <SideMenuProvider>{children}</SideMenuProvider>
            </ThemeProvider>
          </Providers>
        </main>
      </body>
    </html>
  );
}
