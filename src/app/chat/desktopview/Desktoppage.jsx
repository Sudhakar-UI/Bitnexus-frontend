"use client"
import React, { useState } from "react"
import { Container, Form, Image } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";

const page = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer supportbg">
                    <div className="innerpagecontent">
                        <h2 className="h2">Chat</h2>
                        <div className="tabrightbox"> <Link href="/support" className="btn sitebtn btn-sm">Back</Link> </div>
                    </div>
                    <div className="panelcontentbox chatticketlist">
                        <h1 className="heading-box">Ticket ID : EX6276648</h1>
                        <div className="chatbox ticketchat">
                            <SimpleBar className="chat chatboxscroll">
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg"/>
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon"id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2025 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </li>
                            </SimpleBar>
                            <div className="chat-foot">
                                <Form className="siteformbg">
                                    <div className="form-group">
                                        <Form.Label>Enter your message</Form.Label>
                                        <textarea className="form-control" rows={4} id="textarea1"></textarea>
                                    </div>
                                    <div className="form-group text-center">
                                        <input type="submit" className="btn sitebtn" value="Submit" id="submit" />
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Container >
            </article >
            <Userfooter />
        </div>
    )
}

export default page