"use client"
import React from "react";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Image, Table, Nav, Tab, Badge } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ResponsiveTable from '../../components/ResponsiveTable';
import '../../../../public/assets/css/mobileview.css'
import Mobilemenu from "../../components/Mobilemenu";
import { useSideMenu } from "../../SideMenuProvider"




const page = () => {
    const { openMenu } = useSideMenu();


    return (
        <div>
            <div className="pagecontent gridpagecontent innerpagegrid mobileview marketsmobileview marketsmobileview-log">
                <div className="mbheadingbox p-3">
                    <div className="humberbutton">
                        <Link href="#" className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className='flex-one-cls'>
                        <h2 className="heading-title text-center p-0 m-0">Markets</h2>
                    </div>
                    <div className="humberbutton" onClick={openMenu}>
                        <div className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>

                </div>
                <div className="backgroundoverlay" id="backgroundoverlay"></div>
                <article className="">
                    <Container className="sitecontainer">

                        <div className="">
                            <Tab.Container defaultActiveKey="hotspot">
                                <div className="innerpagetab historytab">
                                    <Nav variant="pills" className="tabbanner">
                                        <Nav.Item><Nav.Link eventKey="hotspot">Hot Spot</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="gain">Top Gainer</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="losser">Top Looser</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="listing">New Listing</Nav.Link></Nav.Item>
                                    </Nav>
                                </div>
                                <Tab.Content className="mt-3  pb-1">
                                    <Tab.Pane eventKey="hotspot">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table1" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="gain">
                                       <SimpleBar className="table-responsive sitescroll">
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table2" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="losser">
                                     <SimpleBar className="table-responsive sitescroll">
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table3" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="listing">
                                      <SimpleBar className="table-responsive sitescroll">
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="panelcontentbox mb-2">
                                                <Table className="sitetable mb-0 " id="table1">
                                                    <tbody className="">
                                                        {/* <tr className="nodata">
                                                    <td colSpan={7}>
                                                       <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                       No record found
                                                    </td>
                                                 </tr> */}
                                                        <tr>
                                                            <td>
                                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                                    height="{50}" alt="coin" className="coinicon" />
                                                                BTC
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Last Price</td>
                                                            <td className="tt-text-bold text-end">0.846923</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Change</td>
                                                            <td className="tt-text-bold text-end">+10.84%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">24h Base Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tt-text-mute">Quote Volume</td>
                                                            <td className="tt-text-bold text-end">0.00546312486</td>
                                                        </tr>
                                                        <tr >
                                                            <td colSpan={5} className="text-center"><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table4" />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Container>
                </article>
                <Mobilemenu />

            </div>
        </div>
    );
};

export default page;