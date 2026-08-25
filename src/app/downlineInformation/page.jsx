"use client";
import React, { useState } from "react";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import Leftsidemenu from "../components/Leftsidemenu";
import { Container, Image, Modal, Table, Button, Badge, } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResponsiveTable from "../components/ResponsiveTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import '../../../public/assets/css/mobileview.css'
import Mobilemenu from "../components/Mobilemenu";
import { useRouter } from "next/navigation";
import Form from "react-bootstrap/Form";
import { useSideMenu } from "../SideMenuProvider"




const page = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const [selectedDate, setSelectedDate] = useState(null);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();
    const { openMenu } = useSideMenu();



    return (
        <>
            <div className="pagecontent gridpagecontent innerpagegrid mobileview deposithismobileview">
                <div className="backgroundoverlay" id="backgroundoverlay"></div>
                <div className="mbheadingbox p-3">
                    <div className="humberbutton">
                        <Link href="#" className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className='flex-one-cls'>
                        <h2 className="heading-title text-center p-0 m-0">Downline Information</h2>
                    </div>
                    <div className="humberbutton" onClick={openMenu}>
                        <div className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>

                </div>
                <article className="">
                    <Container className="container sitecontainer historypage">                        
                        <div className="panelcontentbox">
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="sitetable mb-0" id="table1">
                                        <tbody>                                      
                                        <tr>
                                            <td className="tt-text-mute">User Name</td>
                                            <td className="tt-text-bold text-end">John</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Total Downline</td>
                                            <td className="tt-text-bold text-end">0</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Full Earned</td>
                                           <td className="tt-text-bold text-end">0.32569</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">User Status</td>
                                            <td className="tt-text-bold text-end"><Badge bg="success" >View Details</Badge></td>
                                        </tr>
                                       
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                        <div className="panelcontentbox">
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="sitetable mb-0" id="table1">
                                        <tbody>                                      
                                        <tr>
                                            <td className="tt-text-mute">User Name</td>
                                            <td className="tt-text-bold text-end">John</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Total Downline</td>
                                            <td className="tt-text-bold text-end">0</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Full Earned</td>
                                           <td className="tt-text-bold text-end">0.32569</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">User Status</td>
                                            <td className="tt-text-bold text-end"><Badge bg="success" >View Details</Badge></td>
                                        </tr>
                                       
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                        <div className="panelcontentbox">
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="sitetable mb-0" id="table1">
                                        <tbody>                                      
                                        <tr>
                                            <td className="tt-text-mute">User Name</td>
                                            <td className="tt-text-bold text-end">John</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Total Downline</td>
                                            <td className="tt-text-bold text-end">0</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">Full Earned</td>
                                           <td className="tt-text-bold text-end">0.32569</td>
                                        </tr>
                                        <tr>
                                            <td className="tt-text-mute">User Status</td>
                                            <td className="tt-text-bold text-end"><Badge bg="success" >View Details</Badge></td>
                                        </tr>
                                       
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                        
                    </Container>
                </article>
                <Mobilemenu />

                
            </div>
        </>
    );
};

export default page;
