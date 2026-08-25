"use client"
import React from 'react'
import Link from 'next/link'
import { Container, Form, Table, Badge, Image, InputGroup, Button } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';
import { useSideMenu } from "../../SideMenuProvider"
import Mobilemenu from "../../components/Mobilemenu";



const Page = () => {
    const { openMenu } = useSideMenu();

    return (
        <div className="pagecontent gridpagecontent innerpagegrid mobileview mobiletradepage">
            <div className="mbheadingbox p-3">
                <div className="humberbutton">
                    <Link href="#" className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </div>
                <div className='flex-one-cls'>
                    <h2 className="heading-title text-center p-0 m-0">Referral</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
            <article >
                <Container className="sitecontainer">
                    <Form className="siteformbg">
                        <div className="reflex">
                            <div className='mt-0'>
                                <div className="refbox panelcontentbox">
                                    <div className="table-content">
                                        <Image src="assets/images/sponsor.svg" width={50} height={50} alt="icon" className="rf-img" />
                                        <div className='ms-3'>
                                            <p className="content">Your Sponsor</p>
                                            <h4 className="h4">None</h4>
                                        </div>
                                    </div>
                                    <div className="table-content">
                                        <Image src="assets/images/downline.svg" width={50} height={50} alt="icon" className="rf-img" />

                                        <div className='ms-3'>
                                            <p className="content">Total Downline (Direct)</p>
                                            <h4 className="h4">2</h4>
                                        </div>

                                    </div>
                                    <div className="table-content">
                                        <Image src="assets/images/totalearn.svg" width={50} height={50} alt="icon" className="rf-img" />

                                        <div className='ms-3'>
                                            <p className="content">Total Earnings</p>
                                            <h4 className="h4">0.0026549</h4>
                                        </div>

                                    </div>
                                    <div className="table-content">
                                        <Image src="assets/images/earntoday.svg" width={50} height={50} alt="icon" className="rf-img" />

                                        <div className='ms-3'>
                                            <p className="content">Earnings Today</p>
                                            <h4 className="h4">20026549</h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <Form className="siteformbg mt-2">
                        <div className="reflex">
                            <div className='mt-0'>
                                <div className="refbox panelcontentbox">
                                    <div className="pb-3">
                                        <div className="table-content">
                                            <div className="text-start">
                                                <p className="content">Link</p>
                                                <InputGroup>
                                                    <Form.Control type="number" id='ref_url' />
                                                    <div className="input-group-append">
                                                        <InputGroup.Text> <FontAwesomeIcon icon={faCopy} id='copy_refurl' /> </InputGroup.Text>
                                                    </div>
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-none">
                                        <div className="table-content">
                                            <div className="text-start">
                                                <p className="content">Code</p>
                                                <InputGroup>
                                                    <Form.Control type="number" id='ref_code' />
                                                    <div className="input-group-append">
                                                        <InputGroup.Text> <FontAwesomeIcon icon={faCopy} id='copy_code' /> </InputGroup.Text>
                                                    </div>
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <Form.Group className="form-group text-center d-flex flxbtn mt-2">
                        <Button className="sitebtn me-2 w-100" href='downlineInformation'>Downline Information</Button>
                        <Button className="sitebtn w-100 " href='/referralhistory'>Referral History</Button>
                    </Form.Group>
                </Container>
            </article>
            <Mobilemenu />

        </div>
    )
}

export default Page;