"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image, Modal } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'


const Page = () => {
	const [showModal1, setShowModal1] = useState(false);
	const handleShowModal1 = () => setShowModal1(true);
	const handleCloseModal1 = () => setShowModal1(false);
	useEffect(() => {
		document.body.classList.add('loginbanner');
		document.body.classList.remove('userpanelpage');

		return () => {
			document.body.classList.remove("loginbanner");
		};
	});
	return (
		<div>
			<section className="formbg mobileview white-bg-x">
				<div className="mbheadingbox p-3">
					<div className="humberbutton">
						<Link href="#" className="bckbtn" id="backbtn">
							<FontAwesomeIcon icon={faArrowLeft} />
						</Link>
					</div>
					{/* <div className='flex-one-cls'>
                            <h2 className="heading-title text-center p-0 m-0">Perpetual Trade</h2>
                        </div> */}
					{/* <div className="humberbutton">
                            <div href="/profile" className="bckbtn mt-0" id="backbtn">
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        </div> */}
					{/* <div style={{ width: "40px" }}></div> */}
				</div>
				<Container className="sign">
					<div className="formboxbg mobileview-formboxbg">

						<div className="rightsideformboxn pt-0 mobileview-rightsideformbox ">
							<Form className="siteformbg">
								<div className="text-center">
									<Link href="/" className="lgimg">
										<Image src="assets/images/logo.svg" className="logo" width={50} height={50} alt="icon" />
									</Link>
								</div>
								<div className="login-form">
									<div className="loginformbox">
										<div className="logcenterbox">
											<h3 className="heading-title pb-2 text-start">Forgot Password</h3>
											<div className="formcontentbox mt-3">
											
												<p>Your new password must be different from previous password</p>
												<Form.Group className="form-group">
														<Form.Label>New Password</Form.Label>
														<InputGroup>
															<Form.Control type="password" id="password" />
															<div className="input-group-append">
																<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
															</div>
														</InputGroup>
													</Form.Group>
												<Form.Group className="form-group">
														<Form.Label>Confirm Password</Form.Label>
														<InputGroup>
															<Form.Control type="password" id="password" />
															<div className="input-group-append">
																<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
															</div>
														</InputGroup>
													</Form.Group>
												<div className="text-center">
													<Button onClick={handleShowModal1} className=" sitebtn ashbtn" id="submit">Submit</Button>
												</div>
											</div>
											<div className="formcontentbox mt-3">
												<Form.Group className="form-group">
													<Form.Label>Email Address </Form.Label>
													<Form.Control type="text" name="" id="email" />
												</Form.Group>
											
												<div className="text-center">
													<Button onClick={handleShowModal1} className=" sitebtn ashbtn" id="submit">Submit</Button>
												</div>
											</div>
										</div>
									</div>

								</div>
							</Form>
						</div>
					</div>
				</Container>
			</section>
			<Modal show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered className='modalbgt Create-Ticket-x '>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Enter Verification Code</Modal.Title>
					<hr />
				</Modal.Header>
				<Modal.Body>
					<Form className='siteformbg '>
						<Form.Group className="mb-3 code-box">
							<Form.Control type="text" id="title" />
							<Form.Control type="text" id="title" />
							<Form.Control type="text" id="title" />
							<Form.Control type="text" id="title" />
							<Form.Control type="text" id="title" />
							<Form.Control type="text" id="title" />
						</Form.Group>
						<p className=" text-center">If you didn’t receive a code.Click <span className="alink"> Resend</span></p>


						<div >

							<Button onClick={handleCloseModal1} className='sitebtn w-100' id="submit_support">Submit</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Page;


