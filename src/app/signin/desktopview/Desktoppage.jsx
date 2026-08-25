"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
	useEffect(() => {
		document.body.classList.add('loginbanner');
		document.body.classList.remove('userpanelpage');
		return () => {
			document.body.classList.remove("loginbanner");
		};
	});
	return (
		<>
			<section className="formbg">
				<Container className="sign">
					<div className="formboxbg">
						<div className="leftsideformbox">
							<Image src="assets/images/loginimg.png" className="loginiconb" width={50} height={50} alt="icon" />
						</div>
						<div className="rightsideformbox">
							<Form className="siteformbg">
								<div className="text-center">
									<Link href="/" className="lgimg">
										<Image src="assets/images/logo.svg" className="logo" width={50} height={50} alt="icon" />
									</Link>
								</div>
								<div className="login-form">
									<div className="loginformbox">
										<div className="logcenterbox">
											<h3 className="heading-title pb-2">Sign In</h3>
											<div className="formcontentbox mt-3">
												<Form.Group className="form-group">
													<Form.Label>Email Address </Form.Label>
													<Form.Control type="text" name="" id="email" />
												</Form.Group>
												<Form.Group className="form-group">
													<Form.Label>Password</Form.Label>
													<InputGroup>
														<Form.Control type="email" id="password" />
														<div className="input-group-append">
															<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
														</div>
													</InputGroup>
												</Form.Group>
												<p className="btngray"> <Link href="/forgot" className="t-blue" id="reset">Forgot your password?</Link> </p>
												<div className="text-center mb-2">
													<Button type="submit" className=" sitebtn ashbtn" id="submit"> Sign In </Button>
												</div>
											</div>
										</div>
										<div className="logbottomcellbox">
											<p className="btngray"> Don't have an account?<Link href="/signup" className="ms-1 t-blue" id="register"> Sign up </Link>
											</p>
										</div>
									</div>

								</div>
							</Form>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}

export default Page;


