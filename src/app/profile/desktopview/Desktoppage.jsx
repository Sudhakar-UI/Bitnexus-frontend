"use client"
import React, { useState } from 'react';
import { Container, Form, Row, Col, Image, Button, Modal, NavDropdown, InputGroup, Tooltip } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import UploadForm from '../UploadForm';
import 'react-loading-skeleton/dist/skeleton.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faTimesCircle, faAngleRight, faEyeSlash, faCircleInfo, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const page = () => {
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer profilepage">
                    <div className="innerpagecontent">
                        <h2 className="h2 pt-2">Profile</h2>
                    </div>
                    <div className="introbox panelcontentbox mb-3">
                        <div className="cryptobox">
                            <div className="profilebox">
                                <div>
                                    <div className="profilimg">
                                        <div className="profilepic" style={{ backgroundImage: 'url(../assets/images/profile.svg)' }} id='profilepic'>
                                        </div>
                                        <UploadForm />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="h5"> Set Nickname <Link href="#" id="editprofile" className="t-gray ms-2" onClick={handleShow1}><Image src="assets/images/edit.svg" width={20} height={20} alt="icon" /></Link></h3>
                                    <div className="table-content cryptdetbox mt-2">
                                        <div>
                                            <div className="t-gray dropsortdownicon">
                                                <h4 className="t-gray h4">Account</h4>
                                            </div>
                                            <h5 className="h5">john***@gmail.com <span className="t-gray"><Image src="assets/images/eyeslash.svg" withd={16} height={16} alt="icon" /></span></h5>
                                        </div>
                                        <div>
                                            <h4 className="t-gray h4">UID</h4>
                                            <h5 className="h5">551356848 <Image src="assets/images/copy.svg" width={16} height={16} alt="icon" /></h5>
                                        </div>
                                        <div>
                                            <h4 className="t-gray h4">Last Login <Link id="activitylink" href="/accountactivity" className="alink t-gray"><FontAwesomeIcon icon={faAngleRight} /></Link></h4>
                                            <h5 className="h5">2025-02-03 10:44:07 (564.21.54.81)</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flexbox securpanelbox">
                        <div className='my-0'>
                            <div className="overviewbalancebox panelcontentbox mb-3">
                                <div className="table-content">
                                    <div>
                                        <h2 className="subhead">Total Balance <FontAwesomeIcon icon={faEyeSlash} /></h2>
                                        <div className="d-flex gap-2 align-items-center cry-content">
                                            <h4 className="h4">$ 15,2569 </h4>
                                            <Form.Select id="convertcrypto" className="form-control co-drpbtn">
                                                <option>BTC</option>
                                                <option>ETH</option>
                                                <option>BNB</option>
                                                <option>XRP</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="text-end dwt-btn d-flex justify-content-lg-end justify-content-md-end justify-content-center flex-wrap gap-3">
                                        <Link href="/deposit" className="btn btn-sm sitebtn me-1">Deposit</Link>
                                        <Link href="/withdraw" className="btn btn-sm sitebtn me-1">Withdraw</Link>
                                        <Link href="#" className="btn btn-sm sitebtn me-1">Transfer</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="panelcontentbox mb-3">
                                <div className="welcomebanner qcgo-dash">
                                    <div className="table-content">
                                        <div> <span><Image src="assets/images/verifyicon.svg" /></span> </div>
                                        <div>
                                            <h5 className='subhead'>Verify Your Identity</h5>
                                            <p>Complete your KYC to unlock seamless access to all BitNexus services and features.</p>
                                        </div>
                                        <div className="mt-2 text-end"> <Link href="/kyc" className="btn sitebtn btn-sm">Start Verification</Link> </div>
                                    </div>
                                </div>
                            </div>
                             <div className="panelcontentbox mb-0">
                                <div className="welcomebanner qcgo-dash">
                                    <div className="table-content">
                                        <div> <span><Image src="assets/images/affiliate-icon.svg" /></span> </div>
                                        <div>
                                            <h5 className='subhead'>Join Our Affiliate Program</h5>
                                            <p>Boost your passive income with high commissions!</p>
                                        </div>
                                        <div className="mt-2 text-end"> <Link href="/kyc" className="btn sitebtn btn-sm">Join Now</Link> </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="panelcontentbox dpstpromtbg">
                                <div className="table-content">
                                    <div>
                                        <h2 className="subhead"></h2>
                                        <p className='m-0'></p>
                                    </div>
                                    <div className="text-end gifticon">
                                        <Link href="#" id="affiliatebtn" className="btn sitebtn"></Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="recommendbox quickgo">
                            <h2 className="subhead">New Features</h2>
                            {/* <div className="table-content panelcontentbox mb-3">
                                <div>
                                    <h5 className='subhead'>Identification</h5>
                                    <p className="t-gray mb-1">Complete the verification process to increase your withdrawal limit. </p>
                                    <p className="mb-0">Current withdrawal limit : <strong>1.5 BTC</strong> </p>
                                </div>
                                <div className="tabrightbox"> <Link href="/kyc" className="alink"><FontAwesomeIcon icon={faLongArrowRight} /></Link> </div>
                            </div> */}


                            <div className="panelcontentbox stckbox mb-3">
                                <div className='d-flex justify-content-between align-items-start'>
                                    <h5 className='subhead'>Maximize Your Earnings with Staking</h5>
                                    <Link href="#" className="alink pe-0"><FontAwesomeIcon icon={faLongArrowRight} /></Link>
                                </div>
                                <p className="mb-0">Unlock passive income opportunities by staking your assets. Choose between flexible or fixed staking options, earn competitive rewards, and watch your crypto grow securely over time.</p>
                            </div>
                              <div className="panelcontentbox">
                                 <h4 className='subhead'>Referral</h4>
                                 <div className="tabrightbox"> <Link href="/referrallink" className="alink"><FontAwesomeIcon icon={faLongArrowRight} /></Link> </div>
                                <p className='mb-2'>Invite friends for more commissions</p>
                                <Form className="siteformbg">
                                    <InputGroup>
                                        <Form.Control type="number" id='ref_url' placeholder="https://www.ref43xx.com=2tovp" />
                                        <div className="input-group-append">
                                            <InputGroup.Text><span id='copy_refurl'><Image src="assets/images/copy.svg" width={16} height={16} alt="icon" /></span></InputGroup.Text>
                                        </div>
                                    </InputGroup>
                                </Form>
                            </div>  
                        </div>
                    </div>

                </Container>
            </article>
            <Userfooter />
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Set Nickname</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <Form.Group className="form-group">
                            <Form.Label>My Nickname</Form.Label>
                            <Form.Control type="text" name="" id="nickname" placeholder="Enter Nickname" />
                        </Form.Group>
                        <Form.Group className="form-group noteslist">
                            <p><b>Notes :</b></p>
                            <p>1. You can only change your nickname once in 30 days, please edit it carefully.</p>
                            <p>2. Upon submission, your nickname will be reviewed. If any insulting or politically sensitive language is detected, your nickname will be rejected.</p>
                            <p>3. Your nickname in use will be reviewed by the platform from time to time. If any rule violation is detected, your nickname will become invalid, and you will have to submit another nickname for review.</p>
                        </Form.Group>
                        <Form.Group className="form-group text-center d-flex flxbtn">
                            <Button className="sitebtn me-2 w-100">Cancel</Button>
                            <Button className="sitebtn w-100">Confirm</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

        </div >
    )
}

export default page