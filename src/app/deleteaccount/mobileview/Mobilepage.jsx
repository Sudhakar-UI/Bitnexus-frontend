
"use client"
import React from "react"
import Link from "next/link"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Form, Alert, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Mobilemenu from "../../components/Mobilemenu";
import { useSideMenu } from "../../SideMenuProvider"
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';



const page = () => {
    const { openMenu } = useSideMenu();

    return (
        <div className="pagecontent gridpagecontent innerpagegrid mobiletradepage mobileviewdeleteaccount">
            <div className="mbheadingbox p-3">
                <div className="humberbutton">
                    <Link href="#" className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </div>
                <div className='flex-one-cls'>
                    <h2 className="heading-title text-center p-0 m-0">Delete Account</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
            <div className="backgroundoverlay" id="backgroundoverlay"></div>

            <article className=" mobileview ">
                <Container className="sitecontainer">
                    {/* <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link></h2>
                    </div> */}
                    <div className="panelcontentbox mt-2">
                        <Form className="siteformbg">
                            <div className="secttable p-0">
                                <h3>By continuing, you confirm that you have read and agree to the following. After deleting your account,</h3>
                                <ul className="notslist mt-3">
                                    <li>All trading capacities and login for your account will be disabled.</li>
                                    <li>All API keys for your account will be deleted.</li>
                                    <li>All devices for your account will be deleted.</li>
                                    <li>All pending withdrawals will be canceled.</li>
                                    <li>All open orders will be canceled.</li>
                                </ul>
                                <Alert variant="warning">
                                    <div className="alertpara">
                                        <p>1. Accounts cannot be merged after deletion.</p>
                                        <p>2. Make sure you delete the deposit address of this account from your wallets to avoid asset losses.</p>
                                        <p>3. Make sure you have withdrawn all your assets. Otherwise, you will be deemed to have abandoned all remaining assets in your account. BitNexus is not liable for any assets that you fail to withdraw and lose due to account deletion, and you will not be able to claim any type of compen sation from BitNexus for such assets.</p>
                                    </div>
                                </Alert>
                            </div>
                            <div className="secttable p-0">
                                <h3>Account has been disabled due to :</h3>
                                <ul className="notslist mt-3 checkradiobox mb-2">
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch1" label="I don't understand cryptocurrency and don't want to trade anymore" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch2" label="There is suspicious account activity, I would like to disable login for the account" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch3" label="I have another account already, so I want to delete this one." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch4" label="I don't want to use BitNexus anymore." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch5" label="Others" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <Form.Group className="form-group mt-0">
                                <div className="">
                                    <Form.Check type="radio" id="understand" label="I fully understand and agree to the above." />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Button type="button" className="btn sitebtn btn-sm" id="deleteaccount">Delete Account</Button>
                            </Form.Group>

                            <Alert variant="danger">
                                Please DO NOT deposit any assets to a deleted account. If you do, your funds will be lost, and we will not be able to retrieve them.
                            </Alert>
                        </Form>

                    </div>

                </Container>
            </article>
            <Mobilemenu />

        </div>
    )
}
export default page


