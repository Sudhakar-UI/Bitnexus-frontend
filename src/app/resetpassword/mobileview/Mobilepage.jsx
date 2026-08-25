"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image } from "react-bootstrap";
import '../../../../public/assets/css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faArrowLeft   } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'

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
                <Container className="sign mobiletradepage">
                    <div className="formboxbg mobileview-formboxbg">
                        <div className="leftsideformbox">
                            <Image src="assets/images/loginimg.png" className="loginiconb" width={50} height={50} alt="icon" />
                        </div>
                        <div className="rightsideformbox mobileview-rightsideformbox">
                            <Form className="siteformbg">
                                <div className="text-center">
                                    <Link href="/" className="lgimg">
                                        <Image src="assets/images/logo.svg" className="logo" width={50} height={50} alt="icon" />
                                    </Link>
                                </div>
                                <div className="login-form">
                                    <div className="loginformbox">
                                        <div className="logcenterbox">
                                            <h3 className="heading-title pb-2">Reset Password</h3>
                                            <div className="formcontentbox mt-3">
                                                <Form.Group className="form-group">
                                                    <Form.Label>Email Address </Form.Label>
                                                    <Form.Control type="text" name="" id="email" />
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Email OTP code </Form.Label>
                                                    <Form.Control type="text" name="" id="code" />
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Password</Form.Label>
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
                                                        <Form.Control type="password" id="confirmpassword" />
                                                        <div className="input-group-append">
                                                            <InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                                <div className="text-center">
                                                    <Button type="submit" className=" sitebtn ashbtn" id="submit">Update Password</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="logbottomcellbox">
                                            <p className="btngray text-center">Already have an account
                                                <Link href="/signin" className="ms-1 t-blue" id="login"> Sign In </Link>
                                            </p>
                                        </div>
                                        <div className="logbottomcellbox">
                                            <p className="btngray mb-0">Mail not received click resend link,
                                                <Link href="/signin" className="t-blue" id="resend"> Send Code</Link>
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


