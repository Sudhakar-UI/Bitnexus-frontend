"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Container, Image, Nav, InputGroup, Tab, Table, Dropdown, Form, OverlayTrigger, Tooltip, Pagination, NavDropdown } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleInfo, faEllipsisV, faSearch, faAngleRight, faSortDown } from '@fortawesome/free-solid-svg-icons';
import StatChart from './statChart';
import ResponsiveTable from '../../components/ResponsiveTable';


const Page = () => {
    const [activePage, setActivePage] = useState(null);

    const handlePageClick = (page) => {
        setActivePage(page);
    };
    const handleShow1 = () => setShowModal1(true);
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    return (
        <div>
            <div className="pagecontent gridpagecontent innerpagegrid">
                <div className="backgroundoverlay" id="backgroundoverlay"></div>
                <Userheader />
                <Leftsidemenu />
                <article className="gridparentbox gridtabtopbox">
                    <Container className="sitecontainer walletoverviewbg">
                        <div className="wallet-desktop">
                            <div className="innerpagecontent">
                                <h2 className="h2">Wallet Overview</h2>
                            </div>
                            <div className="balanceshowt totblance panelcontentbox">
                                <div className="table-content">
                                    <div>
                                        <h5 className="t-gray">Estimated Balance<span className="ps-2"><Image src="assets/images/eye.svg" withd={16} height={16} alt="icon" /></span></h5>
                                        <div className="d-flex dropsortdownicon">
                                            <h4 className="h4">0 USDT </h4>
                                            <NavDropdown title={<div className="pull-left ms-1"><FontAwesomeIcon icon={faSortDown} /></div>} id="basic-nav-dropdown">
                                                <NavDropdown.Item as={Link} href="#">BTC</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} href="#">ETH</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} href="#">USDT</NavDropdown.Item>
                                            </NavDropdown>
                                        </div>
                                        <div className="d-flex t-gray dropsortdownicon">
                                            <h5 className="h5 t-gray">≈ 0.00 USD</h5>
                                            <NavDropdown title={<div className="pull-left ms-1"><FontAwesomeIcon icon={faSortDown} /></div>} id="basic-nav-dropdown">
                                                <NavDropdown.Item as={Link} href="#">USD</NavDropdown.Item>
                                            </NavDropdown>
                                        </div>
                                        <p className="t-white mb-0"><span className="t-gray">Today's PNL :</span> 0.00USD (0.00%)<span className="t-gray ms-2"><FontAwesomeIcon icon={faAngleRight} /></span></p>
                                    </div>
                                    <div className="text-end">
                                        <Nav variant="pills" className='tabbanner border-0'>
                                            <Nav.Item>
                                                <Nav.Link href="/deposit"><span className="tabgicon"><Image src="assets/images/depositicon1.svg" width={20} height={20} alt="icon" /></span>Deposit</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="/withdraw"><span className="tabgicon"><Image src="assets/images/withdrawicon1.svg" width={20} height={20} alt="icon" /></span>Withdraw</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="#" onClick={handleShow1} ><span className="tabgicon"><Image src="assets/images/transfericon.svg" width={20} height={20} alt="icon" /></span>Transfer</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox mt-2">
                                <div className="panelcontentbox wllettable">
                                    <h4 className="subhead">Asset List</h4>
                                    <Form className="siteformbg assets-block">
                                        <div className="wallet-tbl tabrightbox">
                                            <Form.Group className="form-group mo-view">
                                                <InputGroup className="supportsearch">
                                                    <div className="input-group-append">
                                                        <InputGroup.Text><FontAwesomeIcon icon={faSearch} id='search_refurl' /></InputGroup.Text>
                                                    </div>
                                                    <div className="expand-input">
                                                        <Form.Control type="text" placeholder="Search" id="search-url" />
                                                    </div>
                                                </InputGroup>
                                            </Form.Group>
                                            <div className="form-check me-2 pt-2">
                                                <Form.Check type="checkbox" id="spotcheck" label="Hide assets <1 USD" />
                                            </div>
                                        </div>
                                    </Form>
                                   <SimpleBar className="table-responsive sitescroll">
                                        <Table className="sitetable table-responsive-stack mb-0" id="table1">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Balance</th>
                                                    <th>Free Balance</th>
                                                    <th>Locked Balance</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                        BTC</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" />BNB</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" />BNB</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/xrp.svg" width={50} height={50} alt="coin" className="coinlisticon" />XRP</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/ada.svg" width={50} height={50} alt="coin" className="coinlisticon" />ADA</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/doge.svg" width={50} height={50} alt="coin" className="coinlisticon" />DOGE</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/ton.svg" width={50} height={50} alt="coin" className="coinlisticon" />TON</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/hype.svg" width={50} height={50} alt="coin" className="coinlisticon" />HYPE</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
                                                    <td>0.293985</td>
                                                    <td>0.32569</td>
                                                    <td>0.00254789</td>
                                                    <td>
                                                        <Link href="/deposit" className="btn sitebtn btn-sm me-2">Deposit</Link>
                                                        <Link href="/withdraw" className="btn sitebtn btn-sm">Withdraw</Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                    <Pagination>
                                        <Pagination.Prev />
                                        <Pagination.Ellipsis />
                                        <Pagination.Item active={activePage === 1} onClick={() => handlePageClick(1)}>
                                            {1}
                                        </Pagination.Item>
                                        <Pagination.Item active={activePage === 2} onClick={() => handlePageClick(2)} >
                                            {2}
                                        </Pagination.Item>
                                        <Pagination.Item active={activePage === 3} onClick={() => handlePageClick(3)} >
                                            {3}
                                        </Pagination.Item>
                                        <Pagination.Ellipsis />
                                        <Pagination.Next />
                                    </Pagination>

                                </div>
                            </div>
                        </div>
                    </Container >
                </article >
                <Userfooter />
            </div >
        </div >
    );
}

export default Page;
