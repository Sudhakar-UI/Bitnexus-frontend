"use client";
import React, { useState } from "react";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from "../../components/Leftsidemenu";
import { Container, Image, Modal, Table, Button, Badge, } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResponsiveTable from "../../components/ResponsiveTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import Mobilemenu from "../../components/Mobilemenu";
import { useRouter } from "next/navigation";
import Form from "react-bootstrap/Form";
import { useSideMenu } from "../../SideMenuProvider"






const page = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const [selectedDate, setSelectedDate] = useState(null);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();
    const { openMenu } = useSideMenu();



    return (
        <>
            <div className="pagecontent gridpagecontent innerpagegrid mobileview deposithismobileview withdrawhistorymobileview">
                <div className="backgroundoverlay" id="backgroundoverlay"></div>
                <div className="mbheadingbox p-3">
                    <div className="humberbutton">
                        <Link href="#" className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className='flex-one-cls'>
                        <h2 className="heading-title text-center p-0 m-0">History</h2>
                    </div>
                    <div className="humberbutton" onClick={openMenu}>
                        <div className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>

                </div>
                <article className="">
                    <Container className="container sitecontainer historypage">
                        <div className="innerpagecontent d-flex align-items-center gap-2">
                            <Form.Group className="form-group w-100 mb-0">
                                <Form.Select
                                    className="form-control w-100 py-2"
                                    id="allcoin"
                                    onChange={(e) => {
                                        const path = e.target.value;
                                        if (path) window.location.href = path;
                                    }}
                                >
                                    <option value="/withdraw-history">Withdraw History</option>
                                    <option value="/deposithistory">Deposit History</option>
                                    <option value="/openorderhistory">Open Order History</option>
                                    <option value="/orderhistory">My Order History</option>
                                    <option value="/tradehistory">Trade History</option>
                                     <option value="/transferhistory">Transfer History</option>
                                </Form.Select>
                            </Form.Group>

                            <div className=" backbtn pt-0 filter-deposit">
                                <Link href="#" onClick={handleShow1} className="btn sitebtn filterbtn"><Image src="assets/images/filter-bold-duotone.svg" width="{50}"
                                    height="{50}" alt="coin" className="coinicon m-0" /></Link>
                            </div>
                        </div>
                        <div className="panelcontentbox">
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="sitetable" id="table1">
                                    {/* <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Coin</th>
                                            <th>TX Hash</th>
                                            <th>Sender</th>
                                            <th>Receiver</th>
                                            <th>Deposit</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        {/* <tr className="nodata">
                                            <td colSpan={7}>
                                                <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                No record found
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <td>
                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                BTC
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Date & Time</td>
                                            <td className="tt-text-bold text-end">27/11/2025, 05:05:00</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">TX Hash</td>
                                            <td className="tt-text-bold text-end">FDATRWYTUNDJF8455674</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Sender</td>
                                            <td className="tt-text-bold text-end">FDATRWYTUNDJF8455674</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Receiver</td>
                                            <td className="tt-text-bold text-end">FDATRWYTUNDJF8455674</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Deposit</td>
                                            <td className="tt-text-bold text-end">2563971</td>
                                        </tr>
                                        <tr>

                                            <td className="tt-text-mute">Status</td>
                                            <td className="text-end">
                                                <Badge bg="success">Confirm</Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </Container>
                </article>
                <Mobilemenu />

                <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Filter transactions
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="historsysrch">
                            <div className="searchfrmbox">
                                <Form className="siteformbg">
                                    <div className="searchfrm">
                                        <Form.Group className="form-group dateinput" id="startdate">
                                            <Form.Label>From</Form.Label>
                                            <DatePicker selected={selectedDate} id="start_date" placeholderText="Start date" onChange={(date) => setSelectedDate(date)} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown dropdownMode="select" className="form-control" />
                                        </Form.Group>
                                        <Form.Group className="form-group dateinput" id="enddate">
                                            <Form.Label>To</Form.Label>
                                            <DatePicker selected={selectedDate} id='end_date' placeholderText="End date" onChange={(date) => setSelectedDate(date)} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown dropdownMode="select" className="form-control" />
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Select Coin/Currency</Form.Label>
                                            <Form.Select className="form-control" id="allcoin">
                                                <option>All</option>
                                                <option>ETH</option>
                                                <option>USDT</option>
                                                <option>SOL</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Transaction Type</Form.Label>
                                            <Form.Select className="form-control" id="alltype">
                                                <option>All</option>
                                                <option>ETH</option>
                                                <option>USDT</option>
                                                <option>SOL</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="clearbtn">
                                        <Form.Group className="form-group d-flex gap-2 mt-2 mb-0">
                                            <Button href="/" className="sitebtn btn-sm me-1" id="resetbtn">Reset</Button>
                                            <Button className="sitebtn btn-sm" id="searchbtn">Search</Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

export default page;
