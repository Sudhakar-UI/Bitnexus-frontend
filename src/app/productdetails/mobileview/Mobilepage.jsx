"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Image, Form, Button, Breadcrumb, InputGroup, Row, Pagination, Col, Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import InputGroupText from "react-bootstrap/esm/InputGroupText"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Mobilemenu from '../../components/Mobilemenu';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider"

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import ResponsiveTable from "../../components/ResponsiveTable";
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
                    <h2 className="heading-title text-center p-0 m-0">product Details</h2>
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

                    <div className="panelcontentbox mb-3 d-flex justify-content-between">
                        <div className=" productdetails-flex">
                            <div>
                                <span className="tp-text-mute">Amount</span> <br />
                                <span className="tp-text-bold">1 USDT</span>
                            </div>
                            <div>
                                <span className="tp-text-mute">Interest Received</span> <br />
                                <span className="tp-text-bold">0.00000273 USDT</span>
                            </div>
                            <div>
                                <span className="tp-text-mute">Est. APY</span> <br />
                                <span className="tp-text-bold"> 0.1%</span>
                            </div>
                            <div>
                                <span className="tp-text-mute">Product Type</span> <br />
                                <span className="tp-text-bold">Flexible</span>
                            </div>

                        </div>
                        <div className=" productdetails-flex">
                            <div>
                                <span className="tp-text-mute">Subscribe Date</span> <br />
                                <span className="tp-text-bold">04/02/2026 01:11:21 PM</span>
                            </div>
                            <div>
                                <span className="tp-text-mute">Unlock Date</span> <br />
                                <span className="tp-text-bold">Flexible</span>
                            </div>
                            <div>
                                <span className="tp-text-mute">Locked Days</span> <br />
                                <span className="tp-text-bold">Flexible</span>
                            </div>
                            <div>
                                <span className="tp-text-mute">Status</span> <br />
                                <span className="tp-text-bold blue-tt-tp">Not Released</span>
                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox">
                        <SimpleBar className="table-responsive sitescroll">
                            <Table
                                className="sitetable table-responsive-stack mb-0"
                                id="table1"
                            >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Balance</th>
                                        <th>Free Balance</th>
                                        <th>Locked Balance</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Image
                                                src="assets/images/color/btc.svg"
                                                width={50}
                                                height={50}
                                                alt="coin"
                                                className="coinlisticon"
                                            />
                                            BTC
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>

                                        <td className="text-center d-flex gap-2 justify-content-between align-items-center">
                                            <span className="status-crebtn">
                                                Credited
                                            </span>
                                            {/* <span  className="status-notbtn ">                                    
                                      Withdraw
                                    </span> */}
                                        </td>


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


