"use client";

import React, { useEffect, useState } from "react";
import Link from 'next/link'

import Userheader from "../../components/Userheader";
import Leftsidemenu from "../../components/Leftsidemenu";
import Userfooter from "../../components/Userfooter";
import Livepricelist from "./livepricelist";
import Chart from "./chart";
import Orderbook from "./orderbook";
import Orderform from "./orderform";
import Openorder from "./openorder";
import Tradehistory from "./tradehistory";
import BuySelltab from "./buyselltab";
import Marketlist from "./marketlist";
import Recentliveprice from "./recentliveprice";
import Walletassets from "./walletassets";
import { Container } from "react-bootstrap";
import "simplebar-react/dist/simplebar.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { useSideMenu } from "../../SideMenuProvider"
import Mobilemenu from "../../components/Mobilemenu";


const TradePage = () => {
  const { openMenu } = useSideMenu();

  const [windowWidth, setWindowWidth] = useState(0); // Safe initial value



  useEffect(() => {
    document.body.classList.add("tradepagbg");

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        document.body.classList.remove("tradepagbg");
      };
    }
  }, []);

  useEffect(() => {
    const tradepageElement = document.getElementById("tradepage");
    if (!tradepageElement) return;

    if (windowWidth >= 767 && windowWidth < 991) {
      tradepageElement.classList.add("buyorderformactive1");
      // } else {
      //   tradepageElement.classList.remove("buyorderformactive1");
    }
  }, [windowWidth]);

  return (
    <div
      className="pagecontent gridpagecontent tradepage chartactive buyorderformactive1 mobileview tradepagesmobileview mobiletradepage"
      id="tradepage"
    >
      <div className="mbheadingbox p-3">
        <div className="humberbutton">
          <Link href="#" className="bckbtn mt-0" id="backbtn">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
        <div className='flex-one-cls'>
          <h2 className="heading-title text-center p-0 m-0">Spot Trade</h2>
        </div>
        <div className="humberbutton" onClick={openMenu}>
          <div className="bckbtn mt-0" id="backbtn">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <article className=" tradecontentbox pt-0">
        <Container className="container sitecontainer">
          <div className="grid-box p-0">
            {/* <div className="mobilegrid tabs-nav">
              <li className="orderlist">
                <a href="#tab-1" onClick={chartTab}>
                  Chart
                </a>
              </li>
              <li className="orderlist">
                <a href="#tab-2" onClick={orderTab}>
                  Open Orders
                </a>
              </li>
              <li className="orderlist">
                <a href="#tab-3" onClick={tradeTab}>
                  Trade History
                </a>
              </li>
            </div> */}
            <BuySelltab />
            {/* <Recentliveprice /> */}
            <Livepricelist />
            <Chart />
            <Marketlist />
            <Orderbook />
            <Orderform />
            <Openorder />
            <Tradehistory />
            <Walletassets />
          </div>
        </Container>
      </article>
      <Mobilemenu />

    </div>
  );
};

export default TradePage;
