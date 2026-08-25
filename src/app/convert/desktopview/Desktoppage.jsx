"use client"
import React, { useState } from "react";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from "../../components/Leftsidemenu";
import { Container, Table, Button, Badge, Form, InputGroup, Image, Modal } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import CountdownTimer from '../Countdowntimer';
import ResponsiveTable from '../../components/ResponsiveTable';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const page = () => {
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);


    return (
        <div>
            <div className="pagecontent gridpagecontent innerpagegrid">

                <div className="backgroundoverlay" id="backgroundoverlay"></div>
                <Userheader />
                <Leftsidemenu />
                <article className="gridparentbox">
                    <Container className="container sitecontainer bankpage">
                        <div className="innerpagecontent">
                            <h2 className="h2 pt-2">Convert</h2>
                        </div>
                        <div className="d-flex gap-3 mb-3 ">
                            <div className="panelcontentbox convertpage  flex-fill">
                                <Form className="siteformbg d-flex flex-column align-items-start gap-4 " method="post" autoComplete="off">
                                    <div className="flexbox convertflex flex-column align-items-center w-100">
                                        {/* From Currency Section */}
                                        <div className="form-group mb-0 p-0">
                                            <label className="w-100">
                                                You are Converting
                                                <span className="pull-right tw-text-mute">
                                                    Available: <span >2.3659</span>
                                                </span>
                                            </label>

                                            <InputGroup className="input-bg-grey">
                                                <Form.Control id="convertamount" placeholder="0.00" />
                                                <InputGroup.Text className="input-group-text border-0 p-0">
                                                    <Form.Select id="convertcrypto" className="form-control selectimgicon">
                                                        <option>BTC</option>
                                                        <option>ETH</option>
                                                        <option>BNB</option>
                                                        <option>XRP</option>
                                                    </Form.Select>
                                                </InputGroup.Text>
                                            </InputGroup>

                                        </div>

                                        {/* Exchange Arrow Icon */}
                                        <div className="" id="swapicon">
                                            <Image className="swap_vert-x" src="assets/images/swap_vert.svg" alt="icon" width={24} height={24} />

                                        </div>

                                        {/* To Currency Section */}
                                        <div className="form-group mb-0 p-0">
                                            <label className="w-100">
                                                You will receive
                                                <span className="pull-right tw-text-mute">
                                                    Available: <span >2.3659</span>
                                                </span>
                                            </label>

                                            <InputGroup className="input-bg-grey">
                                                <Form.Control className="form-control" id="receiveamount" placeholder="0.00" />
                                                <InputGroup.Text className="input-group-text border-0 p-0">
                                                    <Form.Select id="receivecrypto" className="form-control selectimgicon">
                                                        <option>ETH</option>
                                                        <option>BTC</option>
                                                        <option>BNB</option>
                                                        <option>XRP</option>
                                                    </Form.Select>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>

                                    {/* Exchange Rate & Button */}
                                    <div className="table-content p-0 conrefreshdiv">
                                        <div>
                                            <div className="d-flex gap-2">
                                                <div>
                                                    <CountdownTimer minutes={1} id="countdowntimer" />
                                                </div>
                                                <div>
                                                    <p className="content mb-1">Exchange Rate: 1 ETH = 1,842.834552 USDT</p>
                                                    <p className="content m-0">Refreshing in 30 seconds</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="">
                                        <Button type="button" id="createanticode" className="btn sitebtn" onClick={handleShow1}>Preview Conversion</Button>
                                    </div>
                                </Form>
                            </div>
                            <div className="d-flex flex-column panelcontentbox w-50  align-items-center  justify-content-between">
                                <p className=" text-center w-75 subhead">Convert your crypto instantly using live market rates. Simply choose the assets, preview the conversion, and swap securely—no trading experience required.</p>


                                <Image src="assets/images/convert-img-new-two.png" width="{50}"
                                    height="{50}" alt="coin" className="convert-main-x" />

                            </div>
                        </div>
                        <div className="panelcontentbox devicetable ">
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
                        </div>
                    </Container>
                </article>
                <Userfooter />
                <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Confirmation Alert
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex gap-3 mb-2 lightgraybg p-2 justify-content-between rounded-2">
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
        </div>
    );
};

export default page;