"use client"
import React, { useState } from "react"
import { Container, Form, Image, Button,Modal  } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faTimesCircle, faAngleRight, faEyeSlash, faCircleInfo, faLongArrowRight, faArrowLeft, faBars, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import Mobilemenu from '../../components/Mobilemenu';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider"
import AttachFileUpload from "../AttachFileUpload";



const page = () => {
    const { openMenu } = useSideMenu();
        const [showModal1, setShowModal1] = useState(false);
    
       const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid mobileview mobiletradepage">
            <div className="mbheadingbox p-3">
                <div className="humberbutton">
                    <Link href="#" className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </div>
                <div className='flex-one-cls'>
                    <h2 className="heading-title text-center p-0 m-0">Chat</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>

            <article className="">
                <Container className="sitecontainer supportbg">

                    <div className="panelcontentbox chatticketlist mobileviewchatticketlist">
                        <h1 className="heading-box">Ticket ID : EX6276648</h1>

                    </div>
                    <div className="panelcontentbox chatticketlist">
                        <div className="chatbox ticketchat">
                            <SimpleBar className="chat chatboxscroll">
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
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
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
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
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </li>
                            </SimpleBar>
                            <div className="chat-foot">
                                <Form className="siteformbg">
                                    <div className="form-group">
                                        <Form.Label>Enter your message</Form.Label>
                                        <textarea className="form-control" rows={4} id="textarea1"></textarea>
                                    </div>
                                    <div className=" d-flex align-items-center justify-content-between gap-2">
                                    {/* <div className="form-group text-center mb-0 ">
                                        <input type="submit" className="btn sitebtn w-100" value="Submit" id="submit" />
                                    </div> */}
                                    <Button className=" btn sitebtn w-100" onClick={handleShowModal1}>
                                        <FontAwesomeIcon icon={faPaperclip} />
                                        Attach File
                                    </Button>
                                    <Button className=" btn sitebtn w-100">
                                     Submit
                                    </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Container >
            </article >
            <Mobilemenu />
 <Modal show={showModal1} onHide={handleCloseModal1}
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
        </div>
    )
}

export default page