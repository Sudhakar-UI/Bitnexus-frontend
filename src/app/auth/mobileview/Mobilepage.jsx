"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Image, Form, Button, Breadcrumb, InputGroup, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import InputGroupText from "react-bootstrap/esm/InputGroupText"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Mobilemenu from '../../components/Mobilemenu';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider"


const page = () => {
    function firststepclick() {
        var element = document.getElementById("authstepbox");
        element?.classList.add("secondstepshow", "showfirstheadingstep");
        var element2 = document.getElementById("authstepbox");
        element2?.classList.remove("thridstepshow");
    }
    function secondstepclick() {
        var element = document.getElementById("authstepbox");
        element?.classList.add("thridstepshow", "showsecondheadingstep");
        var element2 = document.getElementById("authstepbox");
        element2?.classList.remove("secondstepshow");
    }
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
                    <h2 className="heading-title text-center p-0 m-0">Google Authenticator</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

            </div>
            <article className="gridparentbox pt-0 px-3">
                <Container className="sitecontainer">
                    {/* <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Google Authenticator</h2>
                    </div> */}

                    <div className="panelcontentbox">
                        <p>Install google Authenticator App in Your Mobile and Scan QR Code (or) If You are Unable to Scan the QR Code, Please enter the Code Manually into the App</p>
                        <div className="text-center">
                            <Image
                                src="assets/images/qrcode.png"
                                width={100}
                                height={100}
                                alt="banner"
                                className="qrimg-y"
                            />
                        </div>
                        <div className="">
                            <h4 className="subhead">Wallet Address</h4>
                            <div className="walet-addrss-y">
                                <Form.Group className="form-group">
                                    <InputGroup>
                                        <Form.Control type="email" id="password" />
                                        <div className="input-group-append">
                                            <InputGroup.Text> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                                        </div>
                                    </InputGroup>
                                </Form.Group>
                                <p> <b>Note:</b> Please save your private key properly in case of any login issues caused by switching or losing your phone. </p>
                            </div>
                        </div>
                        <div className="">
                            <h4 className="subhead">Security Verification</h4>
                            <p>Please enter the verification code you received in the field below and complete the verification</p>
                        </div>
                        <div className="">
                            <h4 className="subhead">Authentication Code</h4>
                            <Form.Group className="form-group">
                                <Form.Control type="text" name="" id="" />
                            </Form.Group>
                        </div>
                        <p className="reset-set-verfy-y">Reset Security Verification?</p>
                        <div className="mt-3">
                            <Button className="sitebtn" id="otpsubmit">Submit</Button>
                        </div>
                    </div>
                </Container>
            </article>
            <Mobilemenu />
        </div>
    )
}

export default page


