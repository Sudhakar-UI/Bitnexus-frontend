"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Container, Image, InputGroup, Dropdown, Nav, Tab, Col, Table, Row, Form, Button, Modal, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faAngleDown, faCircleInfo, faAngleRight, faArrowRight, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../../public/assets/css/mobileview.css'
import Mobilemenu from '../../components/Mobilemenu';
import { useSideMenu } from "../../SideMenuProvider"



const Desktoppage = () => {
    const { openMenu } = useSideMenu();

    const flexscroll = {
        desktop: {
            breakpoint: { max: 1920, min: 1200 },
            items: 3,
        },
        laptop: {
            breakpoint: { max: 1200, min: 1050 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1050, min: 500 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 400, min: 0 },
            items: 2,
        }
    };

    const [activeKey, setActiveKey] = useState('1');

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleClose2 = () => setShowModal2(false);
    const handleShow1 = () => setShowModal1(true);
    const handleShow2 = () => setShowModal2(true);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid ">
            <div className="mbheadingbox p-3">
                <div className="humberbutton">
                    <Link href="#" className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </div>
                <div className='flex-one-cls'>
                    <h2 className="heading-title text-center p-0 m-0">Earn Overview</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

            </div>


            <article className="gridparentbox gridtabtopbox mobileview mobileviewaernoverview mobiletradepage">
                <Container className="sitecontainer walletoverviewbg">
                    <div className=" d-flex  gap-3 flex-column mb-3">
                        <div className="panelcontentbox w-100 p-2">
                            <div className=" d-flex align-items-center gap-2">
                                <Image src="assets/images/my-holdings-s.svg" className="saving-main-icon" />
                                <div>
                                    <h5 className="saving-main-head">My Holdings<span className="t-gray"><FontAwesomeIcon className="ms-2" icon={faEye} id="eye1" /></span></h5>
                                    <span className="saving-main-subhead">*****</span>
                                </div>
                            </div>
                        </div>
                        <div className="panelcontentbox w-100 p-2">
                            <div className=" d-flex align-items-center gap-2">
                                <Image src="assets/images/total-profit-s.svg" className="saving-main-icon" />

                                <div>
                                    <h5 className="saving-main-head">Totel Profit<span className="t-gray"><FontAwesomeIcon className="ms-2" icon={faEyeSlash} id="eye1" /></span></h5>
                                    <span className="saving-main-subhead">*****</span>
                                </div>
                            </div>
                        </div>
                        <div className="panelcontentbox w-100 p-2">
                            <div className=" d-flex align-items-center gap-2">
                                <Image src="assets/images/last-day-profit-s.svg" className="saving-main-icon" />

                                <div>
                                    <h5 className="saving-main-head">Last Day Profit<span className="t-gray"><FontAwesomeIcon className="ms-2" icon={faEye} id="eye1" /></span></h5>
                                    <span className="saving-main-subhead">*****</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="heading-box pt-0 ps-2 border-0">Popular Products</h2>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                BTC
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox savingbannersec  mt-3 mb-2">                      
                        <div className="accordion" id="accordionExample">
                            {/* Header Coin Title */}
                            <span className="tt-text-bold-h d-flex align-items-center  mb-2">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={24}
                                    height={24}
                                    className="coinicon"
                                    alt="btc"
                                />
                                ETH
                            </span>

                            <div className="accordion-item">

                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="d-flex align-items-center justify-content-between w-100">

                                            {/* Left content */}
                                            <div className="d-flex">
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="tt-text-mute">Est. APR</span>
                                                    <span className="tt-text-mute">Duration</span>
                                                </div>


                                            </div>
                                            <div className=" d-flex gap-2 align-items-center">
                                                <div className="d-flex flex-column gap-2 ms-0">
                                                    <span className="tt-text-bold t-green text-end">4.2% ~ 12.11%</span>
                                                    <span className="tt-text-bold">Flexible / Locked</span>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faAngleDown}
                                                    className="accordion-icon"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </h2>

                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">

                                        {/* Flexible */}
                                        <div className="border-bottom pb-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">12.11% Max</span>
                                                    <span className="tt-text-bold d-block">Flexible</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                        {/* Locked */}
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                                <div>
                                                    <span className="tt-text-mute d-block">Est. APR</span>
                                                    <span className="tt-text-mute d-block">Duration</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="tt-text-bold t-green d-block">4.2%</span>
                                                    <span className="tt-text-bold d-block">Locked</span>
                                                </div>
                                            </div>

                                            <button className="btn wallet-sitebtn w-100" onClick={handleShow1}>
                                                <Image
                                                    src="/assets/images/hand-up.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="subscribe"
                                                    className="btn-img-btn me-2"
                                                />
                                                Subscribe
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </article >
            <Mobilemenu />

            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Row>
                            <Col lg={12} xs={12}>
                                <Carousel className="partnerflex"  responsive={flexscroll} autoPlay={true} autoPlaySpeed={3000} showDots={false} swipeable={true} draggable={true}>
                                    <a href="" className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </a>
                                    <a href="" className="s-flex-modal active">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </a>
                                    <a href="" className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </a>
                                    <a href="" className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </a>
                                </Carousel>
                                <Form.Group>
                                    <Form.Group className="form-group mb-0" >
                                        <Form.Label>Amount</Form.Label>
                                        <InputGroup>
                                            <Form.Control name="code" id="code" type="text" placeholder="Min 0.1 USDT" />
                                            <InputGroup.Text id="max">Max</InputGroup.Text>
                                        </InputGroup>
                                        <div className="notestitle notesgray dpstnotes">
                                            <p className="pb-0 t-gray text-start">
                                                Available 5,857.27879652 USDT
                                            </p>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="saving-summary">
                                            <div className="">
                                                <Form.Label>Summary</Form.Label>
                                                <div className="table-responsive" data-simplebar>
                                                    <Table className="sitetable" id='table1'>
                                                        <tbody>
                                                            <tr>
                                                                <td className="tt-text-bold">Subscription Date</td>
                                                                <td className="tt-text-mute">2025-06-19 11:17:05</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tt-text-bold">Interest Start Date</td>
                                                                <td className="tt-text-mute">2025-06-19 11:17:05</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tt-text-bold">Interest Period</td>
                                                                <td className="tt-text-mute">1 Day</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tt-text-bold">Interest Payment Date</td>
                                                                <td className="tt-text-mute">2025-06-19 11:17:05</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </Form.Group>

                                </Form.Group>
                                <Form.Group>
                                    <div className="saving-checkbox-wrapper">
                                        <Form.Check id="savingcheck" className="saving-checkbox me-2" />
                                        <Form.Label className="saving-checkbox-label">I have read and agreed to </Form.Label><Link href="#" className="alink"> BitNexus Simple Earn Service Terms & Conditions</Link>
                                    </div>
                                </Form.Group>
                                <Form.Group className="text-center">
                                    <Button className="sitebtn" id='confirmbtn'>
                                        Confirm
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    );
}

export default Desktoppage;