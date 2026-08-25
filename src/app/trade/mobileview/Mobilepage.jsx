'use client'

import React, { useEffect, useState } from 'react';
import Livepricelist from './livepricelist';
import Chart from './chart';
import Orderbook from './orderbook';
import Orderform from './orderform';
import Openorder from './openorder';
import Walletassets from './walletassets';
import { Container, Image } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '../../components/Mobilemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'



const Mobilepage = () => {

    const { openMenu } = useSideMenu();
      useEffect(() => {
        document.body.classList.add("userpanelpage");
      });

    return (
        <>
            <div className="mobiletradepage  mobileview spotmobileview">
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
                <article className="">
                    <Container className="container sitecontainer">
                        <div className="d-flex flex-column row-gap-2 px-0">
                            <Livepricelist />
                            <Chart />
                            <div className='order-buy-sell-div trade-bg-white p-2 w-100'>
                                <div className='d-flex flex-column w-50'>
                                    <Orderbook />
                                </div>
                                <div className='d-flex flex-column w-50'>
                                    <Orderform />
                                    <Walletassets />
                                </div>
                            </div>
                            <Openorder />
                        </div>
                    </Container>
                </article>
            </div>
            <MobileFooterNav />
        </>

    );
};

export default Mobilepage;
