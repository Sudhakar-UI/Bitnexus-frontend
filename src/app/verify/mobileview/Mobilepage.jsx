"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Image, Form } from 'react-bootstrap'
import Homeheader from '../../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'



const page = () => {
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
                <Container className="">
                    <div className="formboxbg mobileview-formboxbg">

                        <div className="rightsideformbox pt-0  mobileview-rightsideformbox">
                            <Form className="siteformbg">
                                <div className="text-center">
                                    <Link href="/" className="lgimg">
                                        <Image src="assets/images/logo.svg" className="logo" width={50} height={50} alt="icon" />
                                    </Link>
                                </div>
                                <div className="login-form">
                                    <div className="loginformbox">

                                        <div className="logcenterbox">
                                            <h3 className="heading-title text-start pb-2">Email Verification</h3>
                                            <p className="content text-start">Please enter the 6-digit verification code that was sent to john@mailinator.com</p>
                                            <div className="formcontentbox">


                                                <Form.Group className="form-group">
                                                    <Form.Control name="code" type="number" id="otpcode" />
                                                </Form.Group>
                                                <Form.Group className="mb-3 text-center">
                                                    <input type="submit" name="" className="btn sitebtn" value="Submit" id="submit" />
                                                </Form.Group>

                                            </div>
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
    )
}

export default page
