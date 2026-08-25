"use client"
import React, { useState } from "react";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from "../../components/Leftsidemenu";
import { Container, Image, Nav, Table, Form, Button, Badge, Modal } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResponsiveTable from "../../components/ResponsiveTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, } from '@fortawesome/free-solid-svg-icons';

const page = () => {
  const [showModal1, setShowModal1] = useState(false);
  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);

  const [selectedDate, setSelectedDate] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <div className="pagecontent gridpagecontent innerpagegrid">
        <div className="backgroundoverlay" id="backgroundoverlay"></div>
        <Userheader />
        <Leftsidemenu />
        <article className="gridparentbox">
          <Container className="container sitecontainer historypage">
            <div className="innerpagecontent">
              <h2 className="h2 pt-2">Withdraw History</h2>
              <div className="tabrightbox backbtn pt-2">
                <Link href="#" onClick={handleShow1} className="btn sitebtn filterbtn"><FontAwesomeIcon icon={faFilter} /></Link>
              </div>
            </div>
            <div className="panelcontentbox">
              <SimpleBar className="table-responsive sitescroll">
                <Table className="table sitetable" id="table1">
                  <thead>
                    <tr>
                      <th>Date & Time</th>
                      <th>Coin</th>
                      <th>Withdraw Address</th>
                      <th>Requested Amount </th>
                      <th>Withdraw Fee </th>
                      <th>Total Withdraw </th>
                      <th>Status</th>
                    </tr>
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
              <ResponsiveTable tableId="table1" />
            </div>
          </Container>
        </article>
        <Userfooter />
      </div>
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
    </>
  );
};

export default page;