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
import ResponsiveTable from '../../components/ResponsiveTable';


const Page = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2 pt-2">Referral</h2>
                    </div>
                    <Form className="siteformbg">
                        <div className="reflex">
                            <div>
                                <div className="refbox panelcontentbox">
                                    <div className="">
                                        <div className="table-content">
                                            <div>
                                                <p className="content">Your Sponsor</p>
                                                <h4 className="h4">None</h4>
                                            </div>
                                            <div>
                                                <Image src="assets/images/sponsor.svg" width={50} height={50} alt="icon" className="rf-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="table-content">
                                            <div>
                                                <p className="content">Total Downline (Direct)</p>
                                                <h4 className="h4">2</h4>
                                            </div>
                                            <div>
                                                <Image src="assets/images/downline.svg" width={50} height={50} alt="icon" className="rf-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="table-content">
                                            <div>
                                                <p className="content">Total Earnings</p>
                                                <h4 className="h4">0.0026549</h4>
                                            </div>
                                            <div>
                                                <Image src="assets/images/totalearn.svg" width={50} height={50} alt="icon" className="rf-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="table-content">
                                            <div>
                                                <p className="content">Earnings Today</p>
                                                <h4 className="h4">20026549</h4>
                                            </div>
                                            <div>
                                                <Image src="assets/images/earntoday.svg" width={50} height={50} alt="icon" className="rf-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
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
                                    <div className="">
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
                    <div className="flexbox mt-3 walletoverView Detailsbg reftable">
                        <div className="mt-0 panelcontentbox">
                            <h4 className="subhead pb-2">Downline Information</h4>
                            <Simplebar className="table-responsive sitescroll">
                                <Table className="sitetable" id='table1'>
                                    <thead>
                                        <tr>
                                            <th>User Name </th>
                                            <th>Total Downline</th>
                                            <th>Full Earned</th>
                                            <th>User Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Joho</td>
                                            <td>0</td>
                                            <td>0.32569</td>
                                            <td><Badge bg="success">Verifed</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>Joho</td>
                                            <td>2</td>
                                            <td>0.32569</td>
                                            <td><Badge bg="success">Verifed</Badge></td>
                                        </tr><tr>
                                            <td>Joho</td>
                                            <td>5</td>
                                            <td>0.32569</td>
                                            <td><Badge bg="success">Verifed</Badge></td>
                                        </tr><tr>
                                            <td>Joho</td>
                                            <td>1</td>
                                            <td>0.32569</td>
                                            <td><Badge bg="success">Verifed</Badge></td>
                                        </tr><tr>
                                            <td>Joho</td>
                                            <td>0</td>
                                            <td>0.32569</td>
                                            <td><Badge bg="success">Verifed</Badge></td>
                                        </tr><tr>
                                            <td>Joho</td>
                                            <td>8</td>
                                            <td>0.32569</td>
                                            <td><Badge bg="success">Verifed</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Simplebar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                        <div className="trendcoinbox mt-0 panelcontentbox">
                            <div className="wlltdpstbox">
                                <h4 className="subhead pb-2">Referral History</h4>
                                <Simplebar className="table-responsive sitescroll">
                                    <Table className="sitetable" id='table2'>
                                        <thead>
                                            <tr>
                                                <th>Date & time</th>
                                                <th>Credited Token</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>27/11/2025, 05:05:00</td>
                                                <td>0.32569</td>
                                                <td><Link className="sitebtn btn-sm" href="#">View Details</Link></td>
                                            </tr>
                                            <tr>
                                                <td>27/11/2025, 05:05:00</td>
                                                <td>0.369</td>
                                                <td><Link className="sitebtn btn-sm" href="#">View Details</Link></td>
                                            </tr>
                                            <tr>
                                                <td>27/11/2025, 05:05:00</td>
                                                <td>0.52569</td>
                                                <td><Link className="sitebtn btn-sm" href="#">View Details</Link></td>
                                            </tr>
                                            <tr>
                                                <td>27/11/2025, 05:05:00</td>
                                                <td>0.12569</td>
                                                <td><Link className="sitebtn btn-sm" href="#">View Details</Link></td>
                                            </tr>
                                            <tr>
                                                <td>27/11/2025, 05:05:00</td>
                                                <td>0.62569</td>
                                                <td><Link className="sitebtn btn-sm" href="#">View Details</Link></td>
                                            </tr>
                                            <tr>
                                                <td>27/11/2025, 05:05:00</td>
                                                <td>0.72569</td>
                                                <td><Link className="sitebtn btn-sm" href="#">View Details</Link></td>
                                            </tr>
                                            <tr>
                                                <td>27/11/2025, 05:05:00</td>
                                                <td>0.12569</td>
                                                <td><Link className="sitebtn btn-sm" href="#">View Details</Link></td>
                                            </tr>
                                            <tr>
                                                <td>27/11/2025, 05:05:00</td>
                                                <td>0.42569</td>
                                                <td><Link className="sitebtn btn-sm" href="#">View Details</Link></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Simplebar>
                                <ResponsiveTable tableId="table2" />
                            </div>
                        </div>
                    </div>

                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default Page;