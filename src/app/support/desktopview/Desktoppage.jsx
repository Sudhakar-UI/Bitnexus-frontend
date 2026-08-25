"use client"
import React, { useState } from "react"
import { Container, Form, Button, Tab, Nav, Image, Modal, Badge, InputGroup } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";
import Leftsidemenu from '../../components/Leftsidemenu';
import ResponsiveTable from '../../components/ResponsiveTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPlus,faPaperclip } from '@fortawesome/free-solid-svg-icons';
import FileUpload from "../FileUpload";
import AttachFileUpload from "../AttachFileUpload";


const Page = () => {
    const [showModal1, setShowModal1] = useState(false);
        const [showModal2, setShowModal2] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
      const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    const [imageName, setImageName] = useState('');
    const [imageSrc, setImageSrc] = useState('assets/images/proof.svg');

    const readURL = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleFileChange = (event) => {
        setImageName(event.target.files[0].name);
        readURL(event.target);
    };
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <Userheader />
            <Leftsidemenu />          
            <article className="gridparentbox supportbg">
                <Container className="sitecontainer">
                      <div className="innerpagecontent pt-2">
                    <h2 className="h2 text-start">Support</h2>
                    <div className="tabrightbox pt-2">
                        <Button className="btn sitebtn btn-sm" id="createticket" onClick={handleShowModal1}><FontAwesomeIcon icon={faPlus} className="me-2" />Create Ticket</Button>
                    </div>
            </div>
                  <div className=''>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <div className='flexbox'>
                                <div className="supportlist mt-0 panelcontentbox">
                                    <h4 className="subhead">Ticket</h4>

                                    <div className="supportsearch">
                                        <Form className="siteformbg">
                                            <Form.Group className="mb-0">
                                                <Form.Control type="text" placeholder="Search tickets..." id="supportsearch" />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                    <SimpleBar className="supportlistscroll">
                                        <Nav variant="pills" className="flex-column tabbanner">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">Nov 27, 2025</p>
                                                        <Badge bg="info">Info</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">Nov 27, 2025</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="three">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">Nov 27, 2025</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="four">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">Nov 27, 2025</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="five">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">Nov 27, 2025</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="six">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">Nov 27, 2025</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="seven">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">Nov 27, 2025</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </SimpleBar>
                                </div>
                                <div className="panelcontentbox chatticketlist">
                                    
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <h4 className="subhead">Ticket ID : EX6276648</h4>
                                            <div className="chatbox ticketchat">
                                                <SimpleBar className="chat chatboxscroll">
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">Admin<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="right clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                    </li>
                                                    <li className="right clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">Admin<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">Admin<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">Admin<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </SimpleBar>
                                                <div className="chat-foot">
                                                    <Form className="siteformbg">
                                                        <Form.Group className="form-group">
                                                             <div className="tabrightbox atcimgbtn">
                                        <Button className="btn sitebtn btn-sm" onClick={handleShowModal2}><FontAwesomeIcon icon={faPaperclip} /> Attach Image</Button>
                                    </div>
                                                            <Form.Label>Enter your message</Form.Label>
                                                                   <Form.Control as="textarea" id="message" rows={3} className="form-control" />
                                                        </Form.Group>
                                                        <div className="text-center">
                                                            <Button type="submit" className="sitebtn">Submit</Button>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h4 className="subhead">Ticket ID : EX6276648</h4>
                                            <div className="chatbox ticketchat">
                                                <SimpleBar className="chat chatboxscroll">
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="right clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                    </li>
                                                    <li className="right clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John<span className="ps-2 t-gray">( Nov 27,
                                                                    2025)</span></h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </SimpleBar>
                                                <div className="chat-foot">
                                                    <Form className="siteformbg">
                                                        <Form.Group className="form-group">
                                                             <div className="tabrightbox atcimgbtn">
                                        <Button className="btn sitebtn btn-sm" onClick={handleShowModal2}><FontAwesomeIcon icon={faPaperclip} /> Attach Image</Button>
                                    </div>
                                                            <Form.Label>Enter your message</Form.Label>
                                                                   <Form.Control as="textarea" id="message" rows={3} className="form-control" />
                                                        </Form.Group>
                                                        <div className="text-center">
                                                            <Button type="submit" className="sitebtn">Submit</Button>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </div>
                        </Tab.Container>
                    </div> 
                    {/* <div className="panelcontentbox">
                        <div className="nodatabg">
                            <Image src={"assets/images/nodata.svg"} alt="nodata" width={100} height={100} className="nodataimg"/>
                            There's no tickets found.
                        </div>
                    </div> */}
                </Container >
            </article >
            <Userfooter />
            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt authtblemdlbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Create Tickets</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" id="title" />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Enter your message</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                name="Message" id="message" />
                        </Form.Group>
                        <FileUpload />
                        <div className="text-center">
                            <Button className='sitebtn' id="chatsubmit">Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
             <Modal show={showModal2} onHide={handleCloseModal2}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt authtblemdlbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Image Upload</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <AttachFileUpload />
                        <div className="text-center">
                            <Button className='sitebtn' id="chatsubmit">Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default Page;