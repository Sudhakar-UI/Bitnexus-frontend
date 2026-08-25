"use client"
import React, { useState } from "react";

import { Container, Table, Button, Badge, Form, InputGroup, Image, Modal } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import CountdownTimer from '../Countdowntimer';
import ResponsiveTable from '../../components/ResponsiveTable';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import Mobilemenu from "../../components/Mobilemenu";
import Select from 'react-select';
import { useSideMenu } from "../../SideMenuProvider"



const page = () => {
    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const [showModal2, setShowModal2] = useState(false);
    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);
    const [singleOption, setSingleOption] = useState(null);
    const { openMenu } = useSideMenu();


    const options = [
        { value: 'btc', label: 'BTC Bitcoin', image: 'assets/images/color/btc.svg' },
        { value: 'eth', label: 'ETH Ethereum', image: 'assets/images/color/eth.svg' },
        { value: 'ltc', label: 'LTC Litecoin', image: 'assets/images/color/ltc.svg' },
    ];

    const handleSingleChange = (selected) => {
        setSingleOption(selected);
        console.log('Single Select:', selected);
    };
    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
            boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                borderColor: '#4bb1d9',
            },
        }),
        option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
            color: '#000',
            transition: 'background-color 0.3s ease',
        }),
    };



    return (
        <div>
            <div className="pagecontent gridpagecontent innerpagegrid mobileview convertmobileview">
                <div className="mbheadingbox p-3">
                    <div className="humberbutton">
                        <Link href="#" className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className='flex-one-cls'>
                        <h2 className="heading-title text-center p-0 m-0">convert</h2>
                    </div>
                    <div className="humberbutton" onClick={openMenu}>
                        <div className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
                <div className="backgroundoverlay" id="backgroundoverlay"></div>

                <article className="">
                    <Container className="container sitecontainer bankpage">

                        <div className="panelcontentbox convertpage mb-3">
                            <Form className="siteformbg" method="post" autoComplete="off">
                                <div className="flexbox convertflex">
                                    {/* From Currency Section */}
                                    <div className="form-group mb-0 p-0">
                                        <label className=" d-flex align-items-center justify-content-between">
                                            You are Converting
                                            <span className=" text-end">
                                                Available: <span className="t-green">2.3659</span>
                                            </span>
                                        </label>

                                        <InputGroup className="d-flex flex-row input-group-convert">
                                            <Form.Control className="w-75 px-1 m-0" id="convertamount" placeholder="Enter Amount" />
                                            <InputGroup.Text className="input-group-text border-0 p-0 w-25">
                                                <Form.Select id="convertcrypto" className="form-control m-0 selectimgicon">
                                                    <option>BTC</option>
                                                    <option>ETH</option>
                                                    <option>BNB</option>
                                                    <option>XRP</option>
                                                </Form.Select>
                                            </InputGroup.Text>
                                        </InputGroup>
                                        <span className="tt-text-mute" id="min">Min:0.0000343</span>
                                    </div>

                                    {/* Exchange Arrow Icon */}
                                    <div className="text-center my-2" id="swapicon">
                                        <Image className="swap_vert" src="assets/images/swap_vert.svg" alt="icon" width={24} height={24} />
                                    </div>

                                    {/* To Currency Section */}
                                    <div className="form-group mb-0 p-0">
                                        <label className=" d-flex align-items-center justify-content-between">
                                            You will receive
                                            <span className=" text-end">
                                                Available: <span className="t-green">2.3659</span>
                                            </span>
                                        </label>

                                        <InputGroup className="d-flex flex-row input-group-convert">
                                            <Form.Control className="w-75 px-1 m-0" id="receiveamount" placeholder="Enter Amount" />
                                            <InputGroup.Text className="input-group-text border-0 p-0 w-25">
                                                <Form.Select id="convertcrypto" className="form-control m-0 selectimgicon">
                                                    <option>BTC</option>
                                                    <option>ETH</option>
                                                    <option>BNB</option>
                                                    <option>XRP</option>
                                                </Form.Select>
                                            </InputGroup.Text>
                                        </InputGroup>

                                    </div>

                                </div>

                                {/* Exchange Rate & Button */}
                                <div className="table-content pt-2 conrefreshdiv pb-0">
                                    <div>
                                        <div className="d-flex gap-2">
                                            <div>
                                                <CountdownTimer minutes={1} id="countdowntimer" />
                                            </div>
                                            <div>
                                                <p className="content tt-text-mute mb-1">Exchange Rate: 1 ETH = 1,842.834552 USDT Refreshing in 30 seconds</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-end">
                                        <a href="#" onClick={handleShowModal2} className="btn sitebtn" id="convertbtn">Convert</a>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        {/* <div className="panelcontentbox devicetable ">
                            <h2 className="heading-box pt-0 ps-2 border-0">Recent Convert History</h2>
                            <div className="tabrightbox">
                                <Link href="#" className="alink">View All  <FontAwesomeIcon icon={faArrowRight} /></Link>
                            </div>
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="sitetable" id="table1">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Date & Time</th>
                                            <th>Pair</th>
                                            <th>Convert Amount</th>
                                            <th>Receive Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>11-12-2024 05:00:05</td>
                                            <td>
                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                BTC/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>11-12-2024 05:00:05</td>
                                           <td>
                                                <Image src="assets/images/color/eth.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                ETH/BTC
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>11-12-2024 05:00:05</td>
                                          <td>
                                                <Image src="assets/images/color/bnb.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                BNB/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>11-12-2024 05:00:05</td>
                                           <td>
                                                <Image src="assets/images/color/trx.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                TRX/BTC
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>11-12-2024 05:00:05</td>
                                           <td>
                                                <Image src="assets/images/color/sol.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                SOL/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>11-12-2024 05:00:05</td>
                                           <td>
                                                <Image src="assets/images/color/xrp.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                XRP/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                         <tr>
                                            <td>7</td>
                                            <td>11-12-2024 05:00:05</td>
                                           <td>
                                                <Image src="assets/images/color/ada.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                ADA/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            	<ResponsiveTable tableId="table1" />
                        </div> */}
                    </Container>
                </article>
                <Mobilemenu />
            </div>
            <Modal show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered className='modalbgt Create-Ticket-x convertmobileview-x'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Confirm</Modal.Title>
                    <hr />
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg '>
                        <div className="d-flex justify-content-between align-items-center border-box-x mb-3">
                            <div className="d-flex  align-items-center">
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={50}
                                    height={50}
                                    alt="coin"
                                    className="coinicon m-0 coinicon-coin-copymobile"
                                />
                                <span className="bold-tt mx-2">BTC</span>
                            </div>
                            <span className="bold-tt mx-2">10</span>
                        </div>
                        <Image
                            src="/assets/images/swap_vert.svg"
                            width={50}
                            height={50}
                            alt="coin"
                            className="coinicon m-0 coinicon-swp-copymobile my-3"
                        />
                        <div className="d-flex justify-content-between align-items-center border-box-x mt-3">
                            <div className="d-flex  align-items-center">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={50}
                                    height={50}
                                    alt="coin"
                                    className="coinicon m-0 coinicon-coin-copymobile"
                                />
                                <span className="bold-tt mx-2">ETH</span>
                            </div>
                            <span className="bold-tt mx-2">10</span>
                        </div>
                        <div className="panelcontentbox my-4">
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="sitetable" id="table1">

                                    <tbody>
                                        {/* <!-- <tr className="nodata">
                                                    <td colSpan={7}>
                                                        <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                        No record found
                                                    </td>
                                                </tr>    --> */}

                                        <tr>
                                            <td className="tt-text-mute">Rate  <Image
                                                src="/assets/images/error.svg"
                                                width={50}
                                                height={50}
                                                alt="coin"
                                                className="coinicon m-0 coinicon-err-copymobile"
                                            /></td>
                                            <td className="tt-text-bold text-end">1 BTC ≈ 1 ETH</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Inverse Rate</td>
                                            <td className="tt-text-bold text-end">1 ETH ≈ 1 BTC</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Payment Method</td>
                                            <td className="tt-text-bold text-end">Spot Wallet</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Transaction Fees <Image
                                                src="/assets/images/error.svg"
                                                width={50}
                                                height={50}
                                                alt="coin"
                                                className="coinicon m-0 coinicon-err-copymobile"
                                            /></td>
                                            <td className="text-end">
                                                <Badge bg="success">No Fees</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">You Will Receive</td>
                                            <td className="tt-text-bold text-end">ETH</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>


                        <div >

                            <Button
                                onClick={() => {
                                    handleCloseModal1();
                                    handleShowModal2();
                                }}
                                className="sitebtn w-100"
                                id="submit_support"
                            >
                                Convert
                            </Button>

                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleCloseModal2} aria-labelledby="contained-modal-title-vcenter" centered className='modalbgt Create-Ticket-x convertmobileview-x'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Confirmation Alert
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div className="d-flex gap-3 mb-2 lightgraybg p-2 justify-content-between rounded-2">
                            <div className="d-flex flex-column gap-2">
                                <span className="tp-text-mute">Exchange Rate :</span>
                                <span className="tp-text-mute">Conversion Amount :</span>
                                <span className="tp-text-mute">Conversion Fee :</span>
                                <span className="tp-text-mute">Receive Amount :</span>
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-end">
                                <span className="tp-text-bold">1 BTC = 65,850.65 USDT</span>
                                <span className="tp-text-bold">1 BTC</span>
                                <span className="tp-text-bold"> 0.1%</span>
                                <span className="tp-text-bold">65,192.1435 USDT</span>
                            </div>

                        </div> */}
                    <div className=" mb-2 lightgraybg p-2  rounded-2">
                        <div className="convert-flex-x">
                            <span className="tp-text-mute">Exchange Rate :</span>
                            <span className="tp-text-bold">1 BTC = 65,850.65 USDT</span>
                        </div>
                        <div className="convert-flex-x">
                            <span className="tp-text-mute">Conversion Amount :</span>
                            <span className="tp-text-bold">1 BTC</span>
                        </div>
                        <div className="convert-flex-x">
                            <span className="tp-text-mute">Conversion Fee :</span>
                            <span className="tp-text-bold"> 0.1%</span>
                        </div>
                        <div className="convert-flex-x">
                            <span className="tp-text-mute">Receive Amount :</span>
                            <span className="tp-text-bold">65,192.1435 USDT</span>
                        </div>
                    </div>

                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter Google authencation code</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" type="text" />

                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" id="cancel">Cancel</Button>
                            <Link href="/auth" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default page;