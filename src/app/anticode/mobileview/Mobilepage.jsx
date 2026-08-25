"use client"
import React, { useState } from "react"
import Link from "next/link"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Modal, Button, Form, InputGroup, Alert, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import Mobilemenu from '../../components/Mobilemenu';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider"

const page = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);
    const [showModal2, setShowModal2] = useState(false);
    const { openMenu } = useSideMenu();


    return (
        <div className="pagecontent gridpagecontent innerpagegrid mobileview">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <div className="mbheadingbox p-3">
                <div className="humberbutton">
                    <Link href="#" className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </div>
                <div className='flex-one-cls'>
                    <h2 className="heading-title text-center p-0 m-0">Enable Anti-Phishing Code</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

            </div>
            <article className="">
                <Container className="sitecontainer">
                    <div className="panelcontentbox mt-2">
                        <Form className="siteformbg">
                            <Row>
                                <Col xl={4} lg={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Enable Anti-Phishing Code</Form.Label>
                                        <Form.Control name="code" id="antipshcode" placeholder="Please set your anti-phishing code" />
                                        <small className="small-colour">Please enter 1 to BitNexus 6 alphanumeric characters. Do not use commonly used passwords.</small>
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
            <Mobilemenu />



            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
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
            </Modal>
        </div>
    )
}
export default page


