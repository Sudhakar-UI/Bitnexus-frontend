"use client"
import React from "react"
import Link from "next/link"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import Leftsidemenu from '../components/Leftsidemenu'
import { Container, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
const page = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Freeze Account</h2>
                    </div>
                    <div className="panelcontentbox mt-2">
                        <Form className="siteformbg">
                            <div className="secttable p-0">
                                <h3>Are you sure you want to freeze your account johntest****@mailinator.com?</h3>
                                <p>After the account is frozen, the following terms will be automatically executed at your BitNexus account:</p>
                                <ul className="notslist mt-3">
                                    <li>The uncompleted withdrawals will be canceled.</li>
                                    <li>ll pending orders will be canceled.</li>
                                    <li>The API will be disabled.</li>
                                    <li>The trading and withdrawals will be disabled.</li>
                                    <li>You could apply to unfreeze the account after 24 hours.</li>
                                    <li>If there are sub-accounts under your account, once your account is frozen, the sub-accounts will be frozen according to your configurations. If your sub-accounts have debt or futures positions, be aware that your positions could face liquidation as a result of market fluctuations.</li>
                                    <li>BitNexus is not liable for any risks or outcomes resulting from the aforementioned circumstances.</li>
                                </ul>
                            </div>
                            <div className="secttable p-0">
                                <h3>Please select your reason for freezing your account :</h3>
                                <ul className="notslist mt-3 checkradiobox">
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="suspicious" label="Suspicious Logins" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="transaction" label="Unauthorized Transactions" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="withdraw" label="Unauthorized Withdrawals" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="transfer" label="Unauthorized Transfers" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="others" label="Others" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <Form.Group className="form-group mt-4">
                                <div className="">
                                    <Form.Check type="radio" id="freeze" label="I understand the consequences after the account is frozen." />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <input type="submit" className="btn sitebtn" value="Freeze Account" />
                            </Form.Group>

                        </Form>

                    </div>

                </Container>
            </article>
            <Userfooter />
        </div>
    )
}
export default page


