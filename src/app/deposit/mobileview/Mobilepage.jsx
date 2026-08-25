"use client"
import React, { useEffect, useState } from 'react'

import { Container, Form, Image, Table, Button, Accordion, Tooltip, OverlayTrigger, Badge, Modal, FormCheck, Alert } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCheck, faAngleRight, faExchange, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';
import Select from 'react-select';
import Mobilemenu from '../../components/Mobilemenu';
import '../../../../public/assets/css/mobileview.css'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { useSideMenu } from "../../SideMenuProvider"



const page = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const [showModal2, setShowModal2] = useState(false);
    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    useEffect(() => {
        document.body.classList.add("userfooterpage");
        document.body.classList.add("whitepagebackground");
        return () => {
            document.body.classList.remove("userfooterpage");
            document.body.classList.remove("whitepagebackground");
        };
    }, []);
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

    // Custom option label with image
    const customOptionLabel = (data) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={data.image} alt={data.label} style={{ width: 20, height: 20, marginRight: 10 }} />
            {data.label}
        </div>
    );

    const [activeKey, setActiveKey] = useState('1');
    return (
        <div className="pagecontent gridpagecontent innerpagegrid mobileview mobiletradepage">
            <div className="mbheadingbox p-3">
                <div className="humberbutton">
                    <Link href="#" className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </div>
                <div className='flex-one-cls'>
                    <h2 className="heading-title text-center p-0 m-0">Deposit</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

            </div>
            <div className="backgroundoverlay" id="backgroundoverlay"></div>

            <article className="">
                <Container className="sitecontainer walletpagebg depositbg">

                    <div className="flexboxtable leftsidetabbg">
                        <div className="mt-0 panelcontentbox border-0">
                            <Form className="siteformbg">
                                <div>
                                    <Form.Group className="form-group">
                                        <Form.Label>Select Crypto </Form.Label>
                                        <Select options={options} id='currency' placeholder="Select an option" styles={customStyles} value={singleOption}
                                            onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Network</Form.Label>
                                        <Form.Select className="form-control" id='network'>

                                            <option>BTC</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Deposit Address</Form.Label>
                                        <div className="borderboxbg">
                                            <div className="d-flex align-items-start qrcode flex-column">
                                                <div>
                                                    <p className="mb-0">Bitcoin(BTC) Address</p>
                                                    <p className="t-black mb-0 d-flex"><span id="walletaddres">3JgzvLeyVV73EeKKfytaZECGHwyb<br />3CrGnL <Image
                                                        src="/assets/images/content_copy.svg"
                                                        width={50}
                                                        height={50}
                                                        alt="coin"
                                                        className="coinicon m-0 copy-copymobile"
                                                    /></span> <br /> </p>
                                                    {/* <p><Button className="btn sitebtn btn-sm ms-2 mt-2" id='download_address'>Download</Button></p> */}
                                                </div>
                                                <div>
                                                    <Image src="assets/images/qrcode.png" className="qrcodeicon" width={50} height={50} alt="coin" id='qrcode' />

                                                </div>

                                            </div>
                                            <p className="mb-0 mt-2 t-orange">Please make sure that the address you copied and pasted onto the other page completely matches the deposit address displayed on this page</p>
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="stpsflowbox">
                                    <div>
                                        <div className="notestitle notesgray dpstnotes">
                                            <p className="pb-1"><span className="t-gray">Minimum Deposit Limit</span><br /><span className="t-black">0.00060000 BTC</span></p>

                                            <p className="pb-1"><span className="t-gray">Deposit Fee<span className="ms-2"><OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Deposits below the minimum limit will not be credited or returned</Tooltip>}><Image src="assets/images/infogray.svg" width={10} height={10} alt="icon" /></OverlayTrigger></span></span>
                                                <br /><span className="t-black">0.00060000 BTC</span></p>
                                        </div>
                                    </div>


                                </div>
                            </Form>
                        </div>
                        {/* <div className="mt-0">
                            <div className="trendcoinbox mt-0 panelcontentbox gradientdarkbg">
                                <h2 className="subhead">Tips</h2>
                                <ul>
                                    <li>This address only supports deposit of BTC assets. Do not deposit other assets to this address as the assets will not be credited or recoverable.</li>
                                    <li>Please note: If the single deposit amount is less than the minimum deposit amount, it will not be credited. The platform will not be liable for any loss of assets resulting from this. Thank you for your understanding and support!</li>
                                </ul>
                            </div>
                            <div className="trendcoinbox mt-3 panelcontentbox gradientdarkbg">
                                <h2 className="subhead">Deposit FAQ</h2>
                                <div className="p2pfaq faqcntbox">
                                    <Accordion flush>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>How to Deposit on BitNexus?</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Have an uncredited deposit? Apply for return</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>View all deposit & withdrawal status</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div> */}
                    </div>


                </Container>
            </article>
            <Mobilemenu />

        </div>
    );
}

export default page
