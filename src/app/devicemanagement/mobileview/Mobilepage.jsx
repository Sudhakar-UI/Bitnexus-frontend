"use client"
import React from "react"
import Link from "next/link"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../../components/ResponsiveTable';
import Mobilemenu from "../../components/Mobilemenu";
import { useSideMenu } from "../../SideMenuProvider"
import '../../../../public/assets/css/mobileview.css'



const page = () => {
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
                    <h2 className="heading-title text-center p-0 m-0">Device Management</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
            <article className="">
                <Container className="sitecontainer">

                    <div className="panelcontentbox mb-2">
                        <SimpleBar className="table-responsive">
                            <Table className="sitetable mb-0" id='table1'>
                                {/* <thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>IP Address</th>
										<th>Browser</th>
										<th>42.109.143.229</th>
									</tr>
								</thead> */}
                                {/* <tr className="nodata"> 
									<td colspan={5}>
										<Image src="assets/images/nodata.svg" width={20} height={20} alt="icon" />No data
									</td>
								</tr> */}
                                <tbody>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Device</span><br /> <span className="tt-text-bold">Chrome 133.0.0 <br />(Windows)</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Last Login Time </span><br /> <span className="tt-text-bold">2025-02-26 <br />
                                            15:30:22</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Location</span><br /> <span className="tt-text-bold">India-Karnataka <br />
                                            Bengaluru</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Secondary Verification <br />
                                            Exemption Expiry </span><br /> <span className="tt-text-bold">---</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Trusted
                                            Device? </span><br /> <span className="tt-text-bold">No</span></td>
                                        <td colSpan={2}><span className="tt-text-mute">IP Address </span><br /> <span className="tt-text-bold">106.51.22.60</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Action</span><br /> <span ><Link href="#" className="alink t-red">Remove</Link></span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                    <div className="panelcontentbox mb-2">
                        <SimpleBar className="table-responsive">
                            <Table className="sitetable mb-0" id='table1'>
                                {/* <thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>IP Address</th>
										<th>Browser</th>
										<th>42.109.143.229</th>
									</tr>
								</thead> */}
                                {/* <tr className="nodata"> 
									<td colspan={5}>
										<Image src="assets/images/nodata.svg" width={20} height={20} alt="icon" />No data
									</td>
								</tr> */}
                                <tbody>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Device</span><br /> <span className="tt-text-bold">Chrome 133.0.0 <br />(Windows)</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Last Login Time </span><br /> <span className="tt-text-bold">2025-02-26 <br />
                                            15:30:22</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Location</span><br /> <span className="tt-text-bold">India-Karnataka <br />
                                            Bengaluru</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Secondary Verification <br />
                                            Exemption Expiry </span><br /> <span className="tt-text-bold">---</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Trusted
                                            Device? </span><br /> <span className="tt-text-bold">No</span></td>
                                        <td colSpan={2}><span className="tt-text-mute">IP Address </span><br /> <span className="tt-text-bold">106.51.22.60</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Action</span><br /> <span ><Link href="#" className="alink t-red">Remove</Link></span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                    <div className="panelcontentbox mb-2">
                        <SimpleBar className="table-responsive">
                            <Table className="sitetable mb-0" id='table1'>
                                {/* <thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>IP Address</th>
										<th>Browser</th>
										<th>42.109.143.229</th>
									</tr>
								</thead> */}
                                {/* <tr className="nodata"> 
									<td colspan={5}>
										<Image src="assets/images/nodata.svg" width={20} height={20} alt="icon" />No data
									</td>
								</tr> */}
                                <tbody>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Device</span><br /> <span className="tt-text-bold">Chrome 133.0.0 <br />(Windows)</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Last Login Time </span><br /> <span className="tt-text-bold">2025-02-26 <br />
                                            15:30:22</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Location</span><br /> <span className="tt-text-bold">India-Karnataka <br />
                                            Bengaluru</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Secondary Verification <br />
                                            Exemption Expiry </span><br /> <span className="tt-text-bold">---</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Trusted
                                            Device? </span><br /> <span className="tt-text-bold">No</span></td>
                                        <td colSpan={2}><span className="tt-text-mute">IP Address </span><br /> <span className="tt-text-bold">106.51.22.60</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Action</span><br /> <span ><Link href="#" className="alink t-red">Remove</Link></span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                    <div className="panelcontentbox mb-2">
                        <SimpleBar className="table-responsive">
                            <Table className="sitetable mb-0" id='table1'>
                                {/* <thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>IP Address</th>
										<th>Browser</th>
										<th>42.109.143.229</th>
									</tr>
								</thead> */}
                                {/* <tr className="nodata"> 
									<td colspan={5}>
										<Image src="assets/images/nodata.svg" width={20} height={20} alt="icon" />No data
									</td>
								</tr> */}
                                <tbody>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Device</span><br /> <span className="tt-text-bold">Chrome 133.0.0 <br />(Windows)</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Last Login Time </span><br /> <span className="tt-text-bold">2025-02-26 <br />
                                            15:30:22</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Location</span><br /> <span className="tt-text-bold">India-Karnataka <br />
                                            Bengaluru</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Secondary Verification <br />
                                            Exemption Expiry </span><br /> <span className="tt-text-bold">---</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Trusted
                                            Device? </span><br /> <span className="tt-text-bold">No</span></td>
                                        <td colSpan={2}><span className="tt-text-mute">IP Address </span><br /> <span className="tt-text-bold">106.51.22.60</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Action</span><br /> <span ><Link href="#" className="alink t-red">Remove</Link></span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                    <div className="panelcontentbox mb-2">
                        <SimpleBar className="table-responsive">
                            <Table className="sitetable mb-0" id='table1'>
                                {/* <thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>IP Address</th>
										<th>Browser</th>
										<th>42.109.143.229</th>
									</tr>
								</thead> */}
                                {/* <tr className="nodata"> 
									<td colspan={5}>
										<Image src="assets/images/nodata.svg" width={20} height={20} alt="icon" />No data
									</td>
								</tr> */}
                                <tbody>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Device</span><br /> <span className="tt-text-bold">Chrome 133.0.0 <br />(Windows)</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Last Login Time </span><br /> <span className="tt-text-bold">2025-02-26 <br />
                                            15:30:22</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Location</span><br /> <span className="tt-text-bold">India-Karnataka <br />
                                            Bengaluru</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Secondary Verification <br />
                                            Exemption Expiry </span><br /> <span className="tt-text-bold">---</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Trusted
                                            Device? </span><br /> <span className="tt-text-bold">No</span></td>
                                        <td colSpan={2}><span className="tt-text-mute">IP Address </span><br /> <span className="tt-text-bold">106.51.22.60</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Action</span><br /> <span ><Link href="#" className="alink t-red">Remove</Link></span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                    <div className="panelcontentbox mb-2">
                        <SimpleBar className="table-responsive">
                            <Table className="sitetable mb-0" id='table1'>
                                {/* <thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>IP Address</th>
										<th>Browser</th>
										<th>42.109.143.229</th>
									</tr>
								</thead> */}
                                {/* <tr className="nodata"> 
									<td colspan={5}>
										<Image src="assets/images/nodata.svg" width={20} height={20} alt="icon" />No data
									</td>
								</tr> */}
                                <tbody>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Device</span><br /> <span className="tt-text-bold">Chrome 133.0.0 <br />(Windows)</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Last Login Time </span><br /> <span className="tt-text-bold">2025-02-26 <br />
                                            15:30:22</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Location</span><br /> <span className="tt-text-bold">India-Karnataka <br />
                                            Bengaluru</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Secondary Verification <br />
                                            Exemption Expiry </span><br /> <span className="tt-text-bold">---</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Trusted
                                            Device? </span><br /> <span className="tt-text-bold">No</span></td>
                                        <td colSpan={2}><span className="tt-text-mute">IP Address </span><br /> <span className="tt-text-bold">106.51.22.60</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Action</span><br /> <span ><Link href="#" className="alink t-red">Remove</Link></span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                    <div className="panelcontentbox mb-2">
                        <SimpleBar className="table-responsive">
                            <Table className="sitetable mb-0" id='table1'>
                                {/* <thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>IP Address</th>
										<th>Browser</th>
										<th>42.109.143.229</th>
									</tr>
								</thead> */}
                                {/* <tr className="nodata"> 
									<td colspan={5}>
										<Image src="assets/images/nodata.svg" width={20} height={20} alt="icon" />No data
									</td>
								</tr> */}
                                <tbody>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Device</span><br /> <span className="tt-text-bold">Chrome 133.0.0 <br />(Windows)</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Last Login Time </span><br /> <span className="tt-text-bold">2025-02-26 <br />
                                            15:30:22</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Location</span><br /> <span className="tt-text-bold">India-Karnataka <br />
                                            Bengaluru</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Secondary Verification <br />
                                            Exemption Expiry </span><br /> <span className="tt-text-bold">---</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Trusted
                                            Device? </span><br /> <span className="tt-text-bold">No</span></td>
                                        <td colSpan={2}><span className="tt-text-mute">IP Address </span><br /> <span className="tt-text-bold">106.51.22.60</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Action</span><br /> <span ><Link href="#" className="alink t-red">Remove</Link></span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                    <div className="panelcontentbox mb-2">
                        <SimpleBar className="table-responsive">
                            <Table className="sitetable mb-0" id='table1'>
                                {/* <thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>IP Address</th>
										<th>Browser</th>
										<th>42.109.143.229</th>
									</tr>
								</thead> */}
                                {/* <tr className="nodata"> 
									<td colspan={5}>
										<Image src="assets/images/nodata.svg" width={20} height={20} alt="icon" />No data
									</td>
								</tr> */}
                                <tbody>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Device</span><br /> <span className="tt-text-bold">Chrome 133.0.0 <br />(Windows)</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Last Login Time </span><br /> <span className="tt-text-bold">2025-02-26 <br />
                                            15:30:22</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute">Location</span><br /> <span className="tt-text-bold">India-Karnataka <br />
                                            Bengaluru</span></td>
                                        <td colSpan={2}><span className="tt-text-mute"> Secondary Verification <br />
                                            Exemption Expiry </span><br /> <span className="tt-text-bold">---</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Trusted
                                            Device? </span><br /> <span className="tt-text-bold">No</span></td>
                                        <td colSpan={2}><span className="tt-text-mute">IP Address </span><br /> <span className="tt-text-bold">106.51.22.60</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><span className="tt-text-mute"> Action</span><br /> <span ><Link href="#" className="alink t-red">Remove</Link></span></td>
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
    )
}
export default page


