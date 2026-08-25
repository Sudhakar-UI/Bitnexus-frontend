"use client"
import React, { useState } from "react"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Image, Modal, Button, Form, Alert, Badge, Table, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link"
import KYCform from '../kycform'
import AdvanceFileUpload from '../AdvanceFileUpload'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../../components/ResponsiveTable';

const page = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox gridtabtopbox">
                <Container className="sitecontainer kycpage">
                    <div className="innerpagecontent">
                        <h2 className="h2">Identification</h2>
                    </div>
                    <div className="panelcontentbox mb-3">
                        <div className="table-content kycnotestable">
                            <div>
                                <h2 className="subhead">KYC Verification</h2>
                                <p>KYC (Know Your Customer) verification is a mandatory process that ensures compliance with regulatory requirements by verifying user identities before granting access to cryptocurrency services. This helps prevent fraud, money laundering, and unauthorized activities, creating a secure and trustworthy trading environment.</p>
                                <p className="t-black">KYC Verification Requirements :</p>
                                <ul>
                                    <li>ID</li>
                                </ul>
                                <Button className="sitebtn me-2" id="startverify_btn" onClick={handleShow1}>Start Verification</Button>
                                <Button className="sitebtn multi-chain-span" id="advanceverify_btn" onClick={handleShow2}>Advance KYC</Button>
                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox">
                        <h4 className="subhead pb-2">Account Benefits</h4>
                        <SimpleBar className="table-responsive">
                            <Table className="sitetable m-0" id="table1">
                                <thead>
                                    <tr>
                                        <th>Verify Type</th>
                                        <th>Deposit Limit</th>
                                        <th>Withdrawal Limit</th>
                                        <th>Review Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Unverified</td>
                                        <td>Unlimited</td>
                                        <td>$10,000 Daily</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Basic KYC</td>
                                        <td>Unlimited</td>
                                        <td>$2,000,000 Daily</td>
                                        <td>3 - 5 Business Days</td>
                                        <td>Unverified</td>
                                    </tr>
                                    <tr>
                                        <td>Advanced KYC</td>
                                        <td>Unlimited</td>
                                        <td>$20,000,000 Daily</td>
                                        <td>5 - 10 Business Days</td>
                                        <td>Unverified</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                </Container>
            </article>
            <Userfooter />
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt kycmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <KYCform />
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt nummodal ' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Advance KYC Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="code" id="addresscode" />
                        </Form.Group>
                        <AdvanceFileUpload />
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal" id="closebtn">Cancel</Button>
                            <Link href="" className="btn sitebtn" id="confirmbtn">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default page