"use client"
import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Link from "next/link";
import Leftsidemenu from "../../components/Leftsidemenu";
import "simplebar-react/dist/simplebar.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../../public/assets/css/mobileview.css'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import Mobilemenu from "../../components/Mobilemenu";
import { useSideMenu } from "../../SideMenuProvider"
import MobileSidemenu from "../../components/Mobilesidemenu"
import Userheader from "../../components/Userheader";


const page = () => {
    useEffect(() => {
        document.body.classList.add('innerpagebg');
        return () => {
            document.body.classList.remove('innerpagebg');
            document.body.classList.remove('loginbanner');
        };
    }, []);
    const { openMenu } = useSideMenu();
    return (
        <>
            <div className="mbheadingbox p-3 ">
                <div className="humberbutton">
                    <Link href="#" className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </div>
                <div className='flex-one-cls'>
                    <h2 className="heading-title text-center p-0 m-0">Contact & Support</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

            </div>
            <article className="gridparentbox innerpage contactus-page">

                <div className="innerpages">
                    <Container>
                        {/* <h2 className="heading-title pb-3 text-center">Contact & Support</h2> */}
                        <div className="panelcontentbox ">
                            <Form className="siteformbg">
                                <div className="formcontentbox mt-3">
                                    <Form.Group className="form-group">
                                        <Form.Label>Name </Form.Label>
                                        <Form.Control type="text" name="" id="name" />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Email Address </Form.Label>
                                        <Form.Control type="text" name="" id="email" />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Subject </Form.Label>
                                        <Form.Select className="form-control" id="subject">
                                            <option>General Enquiry</option>
                                            <option>Technical Support</option>
                                            <option>Other</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control id="message" as="textarea" name="message" rows={3} placeholder="Write your message" />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button type="submit" className=" sitebtn ashbtn w-100" id="submit">Submit</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Container>
                </div>
            </article>
            <Mobilemenu />


        </>
    )
}

export default page