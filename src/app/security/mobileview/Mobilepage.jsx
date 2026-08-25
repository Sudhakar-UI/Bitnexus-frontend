"use client"
import React, { useState, useEffect } from "react"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, InputGroup, Image, Modal, Button, Form, Alert, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClose, faEye, faEyeSlash, faTimesCircle, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link"
import Mobilemenu from '../../components/Mobilemenu';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider"



const page = () => {
    useEffect(() => {
        // Show the modal when the page loads
        setShowModal10(true);
    }, []);
    const { openMenu } = useSideMenu();



    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const [showModal7, setShowModal7] = useState(false);
    const [showModal8, setShowModal8] = useState(false);
    const [showModal9, setShowModal9] = useState(false);
    const [showModal10, setShowModal10] = useState(false);


    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);

    const handleClose4 = () => setShowModal4(false);
    const handleShow4 = () => setShowModal4(true);

    const handleClose5 = () => setShowModal5(false);
    const handleShow5 = () => setShowModal5(true);

    const handleClose6 = () => setShowModal6(false);
    const handleShow6 = () => setShowModal6(true);

    const handleClose7 = () => setShowModal7(false);
    const handleShow7 = () => setShowModal7(true);

    const handleClose8 = () => setShowModal8(false);
    const handleShow8 = () => setShowModal8(true);

    const handleClose9 = () => setShowModal9(false);
    const handleShow9 = () => setShowModal9(true);

    const handleClose10 = () => setShowModal10(false);
    const handleShow10 = () => setShowModal10(true);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid mobiletradepage mobileview">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <div className="mbheadingbox p-3">
                <div className="humberbutton">
                    <Link href="#" className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </div>
                <div className='flex-one-cls'>
                    <h2 className="heading-title text-center p-0 m-0">Security Settings</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

            </div>
            <article className="gridparentbox gridtabtopbox pt-0 mobileviewsecurity">
                <Container className="sitecontainer">
                    {/* <div className="innerpagecontent">
                        <h2 className="h2">Security Settings</h2>
                    </div> */}
                    <div className='innerpagetab boxtabb'>
                        {/* <Alert variant="warning">
                            <b>Note :</b> For your security, withdrawals will be temporarily unavaliable for 24 hours after changing security settings
                        </Alert> */}
                        <div className="securitypage">
                            <div className="securityinnerbox panelcontentbox mt-0">
                                <div className="">
                                    <div>
                                        <h2 className="subhead pb-2 mb-2 pt-0">Two-Factor Authentication (2FA)</h2>
                                        <div className="securityalert securty-level-y">
                                            <div className="d-flex align-items-start justify-content-start gap-2 flex-wrap">
                                                <div>
                                                    <p className="mb-0 tt-text-main">Your Security Level : </p>
                                                </div>
                                                <div className="ps-2 d-flex align-items-center">
                                                    <span className="t-red">Low</span>
                                                    <span className="levelbox lowlevel"></span>
                                                    <span className="levelbox mediumlevel"></span>
                                                    <span className="levelbox stronglevel"></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 text-start">Strengthen your account protection by enabling at least one 2FA method.</p>
                                        </div>
                                    </div>
                                    <div className="faverifybox pt-2">
                                        <div className="profiletablebox contentbox">
                                            <div className="d-flex  flex-grow-1 gap-4">
                                                <Image src="assets/images/auth.svg" width={50} height={50} alt="icon" className="securityiconbox" />

                                                <div>
                                                    <h4 className=" text-start">Google Authenticator</h4>
                                                    <h5 className="t-gray text-start">Add an extra BitNexus of security using Google Authenticator for withdrawals and security actions.</h5>
                                                </div>
                                            </div>
                                            {/* <div className="text-center statusdivbox">
                                                <p className="align-items-center"><FontAwesomeIcon icon={faTimesCircle} className="me-1"/>Off</p>
                                            </div> */}
                                            <Link href="/auth" id="authbtn" className="sitebtn btn-sm graybtn w-50 text-center">Set Up</Link>
                                        </div>
                                        <hr />
                                        <div className="profiletablebox contentbox">
                                            <div className="d-flex  flex-grow-1 gap-4">
                                                <Image src="assets/images/email.svg" width={50} height={50} alt="icon" className="securityiconbox" />
                                                <div>
                                                    <h4 className=" text-start">Email Verification</h4>
                                                    <h5 className="t-gray text-start">Verify your email to secure login, password recovery, and withdrawal confirmations.</h5>
                                                </div>
                                            </div>
                                            {/* <div className="text-center statusdivbox">
                                                <p className="t-white align-items-center"><FontAwesomeIcon icon={faCheckCircle} className="me-1 t-green"/>Jo***m@gmail.com</p>
                                            </div> */}
                                            <Button id="emailbtn" className="sitebtn btn-sm graybtn w-50" onClick={handleShow1}>Change</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="securityinnerbox mt-3 panelcontentbox">
                                <h2 className="subhead mb-2 text-start">Advanced Security Settings</h2>
                                <div className="faverifybox">
                                    <div className="profiletablebox contentbox">
                                        <div className="d-flex  flex-grow-1 gap-4 ">
                                            <Image src="assets/images/anticode.svg" width={50} height={50} alt="icon" className="securityiconbox" />
                                            <div>
                                                <h4 className=" text-start">Anti-Phishing Code</h4>
                                                <h5 className="t-gray text-start">Create a personalized code that will appear in all BitNexus emails to protect you from phishing attempts.</h5>
                                            </div>

                                        </div>
                                            <Link id="antipshbtn" className="sitebtn btn-sm graybtn w-50 text-center" href="/anticode">Set Up</Link>
                                    </div>
                                    <hr />
                                    <div className="profiletablebox contentbox">
                                        <div className="d-flex  flex-grow-1 gap-4 "> <Image src="assets/images/login-password.svg" width={50} height={50} alt="icon" className="securityiconbox" /> 
                                        <div>
                                            <h4 className=" text-start">Login Password</h4>
                                            <h5 className="t-gray text-start">Improve your account safety by updating to a stronger password.</h5>
                                        </div>
                                        </div>
                                        <Button id="changepassword_btn" className="sitebtn btn-sm w-50" onClick={handleShow9}>Change</Button>
                                 
                                    </div>
                                </div>
                            </div>
                            <div className="securityinnerbox mt-3 panelcontentbox">
                                <h2 className="subhead mb-2 text-start">Devices & Account Activities</h2>
                                <div className="faverifybox">
                                    <div className="profiletablebox contentbox">
                                        <div className="d-flex  flex-grow-1 gap-4 "> <Image src="assets/images/account-activities.svg" width={50} height={50} alt="icon" className="securityiconbox" /> 
                                        <div>
                                            <h4 className=" text-start">Account Activity</h4>
                                            <h5 className="t-gray text-start">View recent login attempts, device information, and security events for better account monitoring.</h5>
                                        </div>
                                        </div>
                                        <Link id="activityauth" className="sitebtn btn-sm graybtn w-50 text-center" href="/accountactivity">View</Link>
                                    </div>
                                    <hr />
                                    <div className="profiletablebox contentbox">
                                        <div className="d-flex  flex-grow-1 gap-4 "> <Image src="assets/images/device.svg" width={50} height={50} alt="icon" className="securityiconbox" />
                                        <div>
                                            <h4 className=" text-start">Device Management</h4>
                                            <h5 className="t-gray text-start">Manage and remove devices that have access to your BitNexus account.</h5>
                                        </div>
                                         </div>
                                        <Link id="deviceauth" className="sitebtn btn-sm graybtn w-50 text-center" href="/devicemanagement">Manage</Link>
                                    </div>
                                    <hr />
                                    <div className="profiletablebox contentbox">
                                        <div className="d-flex  flex-grow-1 gap-4 "> <Image src="assets/images/delete.svg" width={50} height={50} alt="icon" className="securityiconbox" /> 
                                        <div>
                                            <h4 className=" text-start">Delete Account</h4>
                                            <h5 className="t-gray text-start">Permanently delete your BitNexus account. Once deleted, it cannot be recovered, and all services will become inaccessible.</h5>
                                        </div>
                                        </div>
                                     
                                            <Link id="deleteauth" className="sitebtn red-btn btn-sm w-50 text-center" href="/deleteaccount">Delete</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>
            <Mobilemenu />


            {/* Google Authenticator  */}
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" type="text" />
                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" id="cancel">Cancel</Button>
                            <Link href="/auth" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Email */}
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Are you sure you want to change your email address?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="notslist">
                        <li> Withdrawals will be disabled for 24 hours after changing email to protect your account. </li>
                        <li> Unlinking your email may expose you to a greater risk of unauthorized access. We strongly
                            recommend you to turn on your multi-factor authentication. </li>
                        <li> You will need to log in to your account after changing your email. </li>
                    </ul>
                    <div className="d-flex gap-2 mt-3">
                        <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                        <Button className="btn sitebtn" onClick={() => { handleClose2(); handleShow3(); }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Change Email */}
            Email verification
            <Modal show={showModal3} onHide={handleClose3} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Emaill Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" type="text" />
                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" id="cancel">Cancel</Button>
                            <Link href="/auth" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* Phone Number  */}
            <Modal show={showModal4} onHide={handleClose4} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" type="text" />

                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" onClick={() => { handleClose4(); handleShow5(); }}>Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal5} onHide={handleClose5} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Phone Number
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="warning">
                            <b>Note :</b>For your security, withdrawals will be temporarily unavaliable for 24 hours after changing security settings
                        </Alert>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter Mobile Number</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon2">+91</InputGroup.Text>
                                <Form.Control name="code" id="verificode" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter SMS Verification Code</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="smscode" type="text" />
                                <InputGroup.Text id="basic-addon2">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Login Password */}
            <Modal show={showModal6} onHide={handleClose6} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Account Restrictions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>For your security, withdrawals will be temporarily unavailable for 24 hours after changing security settings.</p>
                    <div className="d-flex gap-2 mt-3">
                        <Button type="button" className="sitebtn">Cancel</Button>
                        <Button className="btn sitebtn" onClick={() => { handleClose6(); handleShow7(); }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal7} onHide={handleClose7} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Account Restrictions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>For your security, withdrawals will be temporarily unavailable for 24 hours after changing security settings.</p>
                    <div className="d-flex gap-2 mt-3">
                        <Button type="button" className="sitebtn">Cancel</Button>
                        <Button className="btn sitebtn" onClick={() => { handleClose7(); handleShow8(); }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showModal8} onHide={handleClose8} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="verificode" />
                                <InputGroup.Text id="basic-addon2">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" onClick={() => { handleClose8(); handleShow9(); }}>Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal9} onHide={handleClose9} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Change Login Password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="warning">
                            <b>Note :</b>For your security, withdrawals will be temporarily unavaliable for 24 hours after changing security settings
                        </Alert>
                        <Form.Group className="form-group">
                            <Form.Label>Current Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="currentPassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                                 <div className="infonotes">
                                                        <i className="fa fa-info-circle notesTip"></i>
                                                        <span className="noteshow">Username can contain letters (a-z), numbers
                                                            (0-9), dash (-), underscore (_) but no spaces between
                                                            characters. Also maximum 20 and minimum 2 characters only
                                                            allowed.</span>
                                                    </div>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>New Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="newPassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="confirmPassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEyeSlash} id="eye3" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>

                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* protect */}
            <Modal show={showModal10} onHide={handleClose10} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Protect Your Funds
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="content mb-1">Your account security level is low.</p>
                    <p>Enable at least one additional verification method to keep your funds safe.</p>
                    <div className="fundboxb">
                        <a href="#" onClick={() => { handleClose10(); handleShow1(); }} className="table-content lightgraybg">
                            <div>
                                <Image src="assets/images/auth.svg" />
                            </div>
                            <div>
                                <h5>Authenticator App <span className="t-red">(Recommended)</span></h5>
                            </div>
                            <div className="text-end">
                                <i className="fa fa-angle-right"></i>
                            </div>
                        </a>
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default page