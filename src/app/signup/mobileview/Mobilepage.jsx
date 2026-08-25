"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Col, Row, Nav, Tab, InputGroup, Form, Button, Image, FormCheck } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'


const page = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        document.body.classList.add('loginbanner');
        document.body.classList.remove('userpanelpage');

        return () => {
            document.body.classList.remove("loginbanner");
        };
    });

    return (
        <>
            <section className="formbg mobileview sign-up-x">
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

                    <div className="formboxbg " >

                        <div className="rightsideformbox ">
                            <Form className="siteformbg">
                                <div className="text-center">
                                    <Link href="/" className="lgimg">
                                        <Image src="assets/images/logo.svg" className="logo" width={50} height={50} alt="icon" />
                                    </Link>
                                </div>
                                <div className="login-form">
                                    <div className="loginformbox">
                                        <div className="logcenterbox">
                                            <h3 className="heading-title pb-2 text-start">Sign up</h3>
                                            <div className="formcontentbox mt-3">
                                                <Form.Group className="form-group">
                                                    <Form.Label>User Name</Form.Label>
                                                    <Form.Control type="text" name="" id="username" />
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Email Address </Form.Label>
                                                    <Form.Control type="text" name="" id="email" />
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Password</Form.Label>
                                                    <InputGroup>
                                                        <Form.Control type="password" id="password" />
                                                        <div className="input-group-append">
                                                            <InputGroup.Text><FontAwesomeIcon icon={faEye} /></InputGroup.Text>
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
                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <InputGroup>
                                                        <Form.Control type="confirmpassword" id="confirmpassword" />
                                                        <div className="input-group-append">
                                                            <InputGroup.Text> <FontAwesomeIcon icon={faEyeSlash} /> </InputGroup.Text>
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
                                                    <Form.Label>Referral ID (Optional)</Form.Label>
                                                    <Form.Control type="text" id="referral" /> </Form.Group>
                                                {/* <Form.Group className="form-group">
                          <FormCheck type="checkbox" id="terms-agreement" label={ <> I have read and agree to the{' '}
                                <a href="/terms" target="_blank" rel="noopener noreferrer">
                                  Terms of Service
                                </a>
                              </> } checked={isChecked} onChange={handleChange} />
                              </Form.Group> */}
                                                <div className="text-center mb-2">
                                                    <Button type="submit" className="btn sitebtn" id="submit"> Sign Up </Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="logbottomcellbox">
                                            <p className="btngray m-0">Already have an account?
                                                <Link href="/signin" className="ms-1 t-blue" id="login"> Sign In </Link>
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
};

export default page;
