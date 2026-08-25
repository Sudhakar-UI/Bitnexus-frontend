"use client"
import React, { useState } from "react"
import Link from "next/link"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Modal, Button, Form, InputGroup, Alert, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const page = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);
    const [showModal2, setShowModal2] = useState(false);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Enable Anti-Phishing Code</h2>
                    </div>
                    <div className="panelcontentbox mt-2">
                        <Form className="siteformbg">
                            <Row>
                                <Col xl={4} lg={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Enable Anti-Phishing Code</Form.Label>
                                        <Form.Control name="code" id="antipshcode" placeholder="Please set your anti-phishing code" />
                                        <small>Please enter 1 to BitNexus 6 alphanumeric characters. Do not use commonly used passwords.</small>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Button type="button" id="createanticode" className="btn sitebtn" onClick={handleShow1}>Confirm</Button>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                        <div className="secttable pb-3">
                            <h3>What is an anti-phishing code?</h3>
                            <p className="content mb-0">An anti-phishing code is a string of characters that you can set to help distinguish between a genuine and a fraudulent BitNexus website/email.</p>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />


            {/* <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" />
                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal" id="cancel">Cancel</Button>
                            <Link href="" className="btn sitebtn" onClick={() => { handleClose1(); handleShow2(); }}>Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal> */}
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal  pic-two' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter" className='hr-border'>Sign Out</Modal.Title>
                </Modal.Header>

                <Modal.Body className='pt-2'>
                    Are you sure you want to sign out?
                    <div className="mt-3 text-end d-flex gap-4">
                        <Button   className="borderbtn-x" onClick={handleClose1}>
                            No
                        </Button>
                        <Button  className="border-0 sitebtn" onClick={() => { window.location.href = '/logout'; }}>
                            Yes
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default page


