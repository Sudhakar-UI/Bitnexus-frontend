"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Container, Image, Nav, Tab, Table, Form, Button,Modal  } from 'react-bootstrap';
import Leftsidemenu from '../../components/Leftsidemenu';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';

const Desktoppage = () => {
        const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid earn-his">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer earnbg">
                    <div className="innerpagecontent">
                        <h2 className="h2 pt-2">Earn History</h2>
                    </div>
                    <div className="balanceshowt totblance gradientdarkbg">
                        <div className="table-content">
                            <div>
                                <h5>Earn Account <FontAwesomeIcon icon={faEyeSlash} id="eyeicon" /></h5>
                                <h4 className="h4">$ 0.00000 <span className="h5">= 0.0000000 USD</span></h4>
                            </div>
                            <div className="text-end">
                                <Image src="assets/images/earn-history-main.svg" alt="icon" className="tb-img" />
                            </div>
                        </div>
                    </div>
                    <div className='earntablebg mt-3 panelcontentbox'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="current">
                            <div className="innerpagetab historytab">
                                <Nav variant="pills" className="tabbanner">
                                    <Nav.Item> <Nav.Link eventKey="current">Current Holding</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="historical">Historical Holding</Nav.Link></Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="current">
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="sitetable mb-0" id="table1">
                                            <thead>
                                                <tr>
                                                    <th>Assets</th>
                                                    <th>Amount</th>
                                                    <th>Profit(up to date)</th>
                                                    <th>Duration</th>
                                                    <th>Locked Days</th>
                                                    <th>Early APY</th>
                                                    <th>Est.APY</th>
                                                    <th>Subscribe Date</th>
                                                    <th>Min Unlock days</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" /> BTC</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Button onClick={handleShow1} className="sitebtn  btn-sm me-3" href="#">Cancel</Button>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" />BNB</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/xrp.svg" width={50} height={50} alt="coin" className="coinlisticon" />XRP</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/ada.svg" width={50} height={50} alt="coin" className="coinlisticon" />ADA</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                </Tab.Pane>
                                <Tab.Pane eventKey="historical">
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="sitetable mb-0" id="table2">
                                            <thead>
                                                <tr>
                                                    <th>Assets</th>
                                                    <th>Amount</th>
                                                    <th>Profit</th>
                                                    <th>Duration</th>
                                                    <th>Early APY</th>
                                                    <th>Est.APY</th>
                                                    <th>Min. Unlock days</th>
                                                    <th>Subscribe Date</th>
                                                    <th>Unlocked Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" /> BTC</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" />BNB</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/xrp.svg" width={50} height={50} alt="coin" className="coinlisticon" />XRP</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/ada.svg" width={50} height={50} alt="coin" className="coinlisticon" />ADA</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>
                                                        <Link className="sitebtn  btn-sm me-3" href="#">Cancel</Link>
                                                        <Link className="sitebtn  btn-sm" href="/productdetails">Interest History</Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table2" />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </Container >
            </article >
            <Userfooter />
                    <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal  pic-two' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter" className='hr-border'>Close Flexible Plan</Modal.Title>
                </Modal.Header>

                <Modal.Body className='pt-2'>
                    Are you sure you want to Close this Flexible Plan ?
                    <div className="mt-3 text-end d-flex gap-4">
                        <Button   className="borderbtn-x" onClick={handleClose1}>
                            Cancel
                        </Button>
                        <Button  className="border-0 sitebtn" onClick={() => { window.location.href = '/logout'; }}>
                            Confirm
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Desktoppage;