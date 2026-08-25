"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Modal, Image, Table, Tab, Nav, Form, Container , Row, Col, Button, InputGroup, Dropdown, OverlayTrigger, Tooltip, NavDropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleInfo, faChartLine, faHistory, faEllipsisV, faAngleUp, faAngleDown, faSearch, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StatChart from './statChart';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import ResponsiveTable from '../../components/ResponsiveTable';

const Mobilepage = () => {
    const [activeKey, setActiveKey] = useState('1');

    const [showChart, setShowChart] = useState(true);
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (nextShow) => {
        setIsOpen(nextShow);
    };

    const responsive = {
        superLargeDesktop: {
            // The naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 1200, min: 991 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 991, min: 600 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    }

    return (
        <div className="wallet-mobile">
            <div className="pagecontent gridpagecontent innerpagegrid">
                <div className="backgroundoverlay" id="backgroundoverlay"></div>
                <Userheader />
                <Leftsidemenu />

                <article className="gridparentbox gridtabtopbox">
                    <Container className="sitecontainer walletoverviewbg">
                        <div className="wallet-ph">
                            <div className="innerpagecontent">
                                <div className="overview-drop">
                                    <NavDropdown className="usermenudrop nav-item show dropdown" title={<div className="over-txt">Overview <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="angleicon" /></div>} id="custom-nav-dropdown" onToggle={handleToggle}>
                                        <NavDropdown.Item as={Link} href="/wallet" id="walletlink" ><span className="iconboxbg active"><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></span>Wallet</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} href="/spot-wallet" id="spotlink" ><span className="iconboxbg"><Image src="assets/images/spot.svg" alt="icon" width={100} height={100} /></span>Spot</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} href="/saving" id="earnlink" ><span className="iconboxbg"><Image src="assets/images/earn.svg" alt="icon" width={100} height={100} /></span>Earn</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                                {/* <h2 className="h2 mt-2">Wallet Overview</h2> */}
                            </div>
                            <div className="balanceshowt totblance panelcontentbox">
                                <div className="table-content">
                                    <div>
                                        <h2 className="heading-box pt-0 ps-0 pb-0 border-0">Estimated Balance<span className="ps-2"><FontAwesomeIcon icon={faEye} /></span></h2>
                                        <h4 className="h4">$ 15,2569<span> BTC</span></h4>
                                        <h5 className="wlt-txt"> $ 0.0000000 </h5>
                                        <p>Today's PnL
                                            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Today's PnL</Tooltip>}>
                                                <FontAwesomeIcon className="mx-2" icon={faCircleInfo} /></OverlayTrigger>
                                            <span>$ 0.000</span>
                                        </p>
                                        <div className="d-flex my-2 gap-2 dpt-wt-btn">
                                            <Link className="sitebtn btn-sm me-1" href="/deposit">Deposit</Link>
                                            <Link className="sitebtn btn-sm me-1" href="/withdraw">Withdraw</Link>
                                            <Link className="sitebtn btn-sm" href="#">Transfer</Link>
                                        </div>
                                        <div className="week-btn">
                                            <span className="active">1W</span>
                                            <span>2M</span>
                                            <span>3M</span>
                                            <span>6M</span>
                                        </div>
                                        {showChart && (
                                            <div className="highcharts-figures">
                                                <StatChart />
                                            </div>
                                        )}


                                    </div>
                                </div>
                            </div>
                            <div className="flexbox mt-2">
                                <div className="panelcontentbox wllettable pt-2">
                                    <h2 className="heading-box pt-0 ps-2 border-0 mt-2">My Assets</h2>
                                    <Form className="siteformbg">
                                        <div className="wallet-tbl">
                                            <div className="form-check me-2 pt-2">
                                                <Form.Check type="checkbox" id="spotcheck" label="Hide assets <1 USD" />
                                            </div>
                                            <Form.Group className="form-group mo-view tabrightbox">
                                                <InputGroup className="supportsearch">
                                                    <div className="input-group-append">
                                                        <InputGroup.Text><FontAwesomeIcon icon={faSearch} id='search_refurl' /></InputGroup.Text>
                                                    </div>
                                                    <div className="expand-input">
                                                        <Form.Control type="text" placeholder="Search" id="search-url" />
                                                    </div>
                                                </InputGroup>
                                            </Form.Group>
                                        </div>
                                    </Form>
                                    <SimpleBar className="sitescroll">
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="coin">
                                            <div className="innerpagetab historytab">
                                                <Nav variant="pills" className="tabbanner mb-1">
                                                    <Nav.Item> <Nav.Link eventKey="coin">Coin View</Nav.Link></Nav.Item>
                                                    <Nav.Item><Nav.Link eventKey="account">Account View</Nav.Link></Nav.Item>
                                                </Nav>
                                            </div>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="coin">
                                                    <Table className="sitetable mb-0" id="table1">
                                                        <tbody className="mb-table">
                                                            <tr>
                                                                <td>
                                                                    <Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                                    BTC <br /> <span className="t-gray">Bitcoin</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex">
                                                                        <div>
                                                                            0.00
                                                                            <br />
                                                                            <span className="t-gray">$0.00</span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="elicon" onClick={handleShow1}>
                                                                                <FontAwesomeIcon icon={faEllipsisV} />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                                    ETH <br /> <span className="t-gray">Ethereum</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex">
                                                                        <div>
                                                                            0.00
                                                                            <br />
                                                                            <span className="t-gray">$0.00</span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="elicon" onClick={handleShow1}>
                                                                                <FontAwesomeIcon icon={faEllipsisV} />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                                    BNB <br /> <span className="t-gray">Binance</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex">
                                                                        <div>
                                                                            0.00
                                                                            <br />
                                                                            <span className="t-gray">$0.00</span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="elicon" onClick={handleShow1}>
                                                                                <FontAwesomeIcon icon={faEllipsisV} />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <ResponsiveTable tableId="table1" />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="account" className="account-drop account-table">
                                                    <Table className="sitetable table-responsive-stack mb-0" id="table1">
                                                        <tbody className="mb-table">
                                                            <tr>
                                                                <td>
                                                                    <Image src="assets/images/spoticon.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                                    <span>Spot</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex">
                                                                        <div>
                                                                            0.00
                                                                            <br />
                                                                            <span className="t-gray">$0.00</span>
                                                                        </div>
                                                                        <div>
                                                                            <Dropdown className="account-drop">
                                                                                <Dropdown.Toggle id="dropdown-icon-toggle">
                                                                                    <span className="elicon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu>
                                                                                    <Dropdown.Item href="/deposit">Deposit</Dropdown.Item>
                                                                                    <Dropdown.Item href="/withdraw">Withdraw</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <Image src="assets/images/savings.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                                    <span>Earn</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex">
                                                                        <div>
                                                                            0.00
                                                                            <br />
                                                                            <span className="t-gray">$0.00</span>
                                                                        </div>
                                                                        <div>
                                                                            <Dropdown className="account-drop">
                                                                                <Dropdown.Toggle id="dropdown-icon-toggle">
                                                                                    <span className="elicon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu>
                                                                                    <Dropdown.Item href="/history">History</Dropdown.Item>
                                                                                    <Dropdown.Item href="/overview">Overview</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <ResponsiveTable tableId="table2" />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                </div>
                            </div>
                            <div className="flexbox mt-2">
                                <div className="panelcontentbox wllettable  recent-table pt-2">
                                    <h2 className="heading-box pt-0 ps-2 mt-2 border-0">Recent Transactions</h2>
                                    <div className="tabrightbox">
                                        <Link href="#" className="alink">More<FontAwesomeIcon icon={faAngleRight} /></Link>
                                    </div>
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="table sitetable" id="table1">
                                            <thead>

                                            </thead>
                                            <tbody>
                                                <tr className="nodata">
                                                    <td colSpan={7}>
                                                        <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                        No record found
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table3" />
                                </div>
                            </div>
                            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal wltmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        BTC
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="px-1">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody className="mb-table">
                                            <tr>
                                                <td>
                                                    Coin Price
                                                </td>
                                                <td>
                                                    $0.00254789
                                                    <br />
                                                    <span className="t-gray">$0.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Today's PnL
                                                </td>
                                                <td>
                                                    0.00
                                                    <br />
                                                    <span className="t-gray">$0.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Spot
                                                </td>
                                                <td>
                                                    *****
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Earn
                                                </td>
                                                <td>
                                                    *****
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Modal.Body>
                                <Modal.Footer className="wallet-modal">
                                    <div className="d-flex walbtn-mod">
                                        <Link className="sitebtn wal-btn btn-sm" href="/deposit">Deposit</Link>
                                        <Link className="sitebtn wal-btn btn-sm" href="/withdraw">Withdraw</Link>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Container>
                </article>
                <Userfooter />
            </div>
        </div>
    );
};


export default Mobilepage;