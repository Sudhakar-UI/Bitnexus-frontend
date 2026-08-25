"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Modal, Image, Table, Form, Button, InputGroup, Container, Row, Col, OverlayTrigger, Tooltip, Accordion, NavDropdown, Tab, Nav } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faAngleUp, faAngleDown, faSearch, faAngleRight, faArrowRight, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Mobilemenu from "../../components/Mobilemenu";
import { useSideMenu } from "../../SideMenuProvider"



const Mobilepage = () => {
    const [activeKey, setActiveKey] = useState('1');

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleClose2 = () => setShowModal2(false);
    const handleShow1 = () => setShowModal1(true);
    const handleShow2 = () => setShowModal2(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (nextShow) => {
        setIsOpen(nextShow);
    };
    const { openMenu } = useSideMenu();


    const responsive = {
        superLargeDesktop: {
            // The naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 1200, min: 991 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 991, min: 600 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    }

    return (
        <div className="wallet-mobile mobileview earnmobileview mobiletradepage">
            <div className="pagecontent gridpagecontent innerpagegrid">
                <div className="mbheadingbox p-3">
                    <div className="humberbutton">
                        <Link href="#" className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className='flex-one-cls'>
                        <h2 className="heading-title text-center p-0 m-0">Earn History</h2>
                    </div>
                    <div className="humberbutton" onClick={setShowModal2}>
                        <div className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
                <div className="backgroundoverlay" id="backgroundoverlay"></div>


                <article className=" gridtabtopbox">
                    <Container className="sitecontainer walletoverviewbg">
                        <div className="wallet-ph">
                            {/* <div className="innerpagecontent">
                                <div className="overview-drop">
                                    <NavDropdown className="usermenudrop nav-item show dropdown" title={<div className="over-txt">Earn History <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="angleicon" /></div>} id="custom-nav-dropdown" onToggle={handleToggle}>
                                        <NavDropdown.Item as={Link} href="/saving" id="savinglink" ><span className="iconboxbg"><Image src="assets/images/earn.svg" alt="icon" width={100} height={100} /></span>Earn Overview</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            </div> */}
                            <div className="balanceshowt totblance panelcontentbox mb-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5>Earn Account <FontAwesomeIcon icon={faEyeSlash} id="eyeicon" /></h5>
                                        <h4 className="h3">$ 0.00000  </h4>
                                        <span className="h5 tt-text-mute">= 0.0000000 USD</span>
                                    </div>
                                    <div className="text-end">
                                        <Image src="assets/images/earn-history-main.svg" alt="icon" className="tb-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="panelcontentbox earntablebg savingbannersec supportlistscroll mt-3">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="current">
                                    <div className="innerpagetab historytab">
                                        <Nav variant="pills" className="tabbanner mb-1 gap-4">
                                            <Nav.Item> <Nav.Link eventKey="current">Current Holding</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="historical">Historical Holding</Nav.Link></Nav.Item>
                                        </Nav>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="current">
                                            <Table className="sitetable m-table" id='table2'>
                                                <tbody className="border-bottom-mobile">
                                                    <tr>
                                                        <td className="text-start">
                                                            <Image
                                                                src="/assets/images/color/btc.svg"
                                                                width={50}
                                                                height={50}
                                                                alt="coin"
                                                                className="coinicon"
                                                            />
                                                            BTC
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Amount</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            0.293985
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Profit(up to date)</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Duration</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            30
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Locked Days</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Early APY</td>
                                                        <td colSpan={2} className=" tt-text-green text-end">
                                                            5%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Est.APY</td>
                                                        <td colSpan={2} className="tt-text-green text-end">
                                                            5%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Subscribe Date</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Min Unlock days</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                         <td>
                                                            <Link className="sitebtn w-100  btn" href="/productdetails">Interest History</Link>
                                                        </td>
                                                        <td>
                                                            <Link className="sitebtn w-100  btn" href="#">Cancel</Link>
                                                        </td>                                                       
                                                    </tr>
                                                </tbody>
                                                <tbody className="border-bottom-mobile">
                                                    <tr>
                                                        <td className="text-start">
                                                            <Image
                                                                src="/assets/images/color/btc.svg"
                                                                width={50}
                                                                height={50}
                                                                alt="coin"
                                                                className="coinicon"
                                                            />
                                                            BTC
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Amount</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            0.293985
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Profit(up to date)</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Duration</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            30
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Locked Days</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Early APY</td>
                                                        <td colSpan={2} className=" tt-text-green text-end">
                                                            5%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Est.APY</td>
                                                        <td colSpan={2} className="tt-text-green text-end">
                                                            5%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Subscribe Date</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Min Unlock days</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                         <td>
                                                            <Link className="sitebtn w-100  btn" href="/productdetails">Interest History</Link>
                                                        </td>
                                                        <td>
                                                            <Link className="sitebtn w-100  btn" href="#">Cancel</Link>
                                                        </td>                                                       
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="historical">
                                            <Table className="sitetable m-table" id='table2'>
                                               <tbody className="border-bottom-mobile">
                                                    <tr>
                                                        <td className="text-start">
                                                            <Image
                                                                src="/assets/images/color/btc.svg"
                                                                width={50}
                                                                height={50}
                                                                alt="coin"
                                                                className="coinicon"
                                                            />
                                                            BTC
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Amount</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            0.293985
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Profit(up to date)</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Duration</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            30
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Locked Days</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Early APY</td>
                                                        <td colSpan={2} className=" tt-text-green text-end">
                                                            5%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Est.APY</td>
                                                        <td colSpan={2} className="tt-text-green text-end">
                                                            5%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Subscribe Date</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Min Unlock days</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                         <td>
                                                            <Link className="sitebtn w-100  btn" href="/productdetails">Interest History</Link>
                                                        </td>
                                                        <td>
                                                            <Link className="sitebtn w-100  btn" href="#">Cancel</Link>
                                                        </td>                                                       
                                                    </tr>
                                                </tbody>
                                               <tbody className="border-bottom-mobile">
                                                    <tr>
                                                        <td className="text-start">
                                                            <Image
                                                                src="/assets/images/color/btc.svg"
                                                                width={50}
                                                                height={50}
                                                                alt="coin"
                                                                className="coinicon"
                                                            />
                                                            BTC
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Amount</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            0.293985
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Profit(up to date)</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Duration</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            30
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Locked Days</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Early APY</td>
                                                        <td colSpan={2} className=" tt-text-green text-end">
                                                            5%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Est.APY</td>
                                                        <td colSpan={2} className="tt-text-green text-end">
                                                            5%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Subscribe Date</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tt-text-mute">Min Unlock days</td>
                                                        <td colSpan={2} className="tt-text-bold text-end">
                                                            12/12/2025
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                         <td>
                                                            <Link className="sitebtn w-100  btn" href="/productdetails">Interest History</Link>
                                                        </td>
                                                        <td>
                                                            <Link className="sitebtn w-100  btn" href="#">Cancel</Link>
                                                        </td>                                                       
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div >
                    </Container>
                </article >
                <Mobilemenu />
            </div>
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Row>
                            <Col lg={12} xs={12}>
                                <div className="s-flex-modal">
                                    <p className="s-modal-txt">Flexible</p>
                                    <p className="saving-txt mb-2">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></p>
                                </div>
                                <Form.Group>
                                    <Form.Group className="form-group" >
                                        <Form.Label>Amount</Form.Label>
                                        <InputGroup>
                                            <Form.Control name="code" id="code" type="text" placeholder="Min 0.1 USDT" />
                                            <InputGroup.Text id="max">Max</InputGroup.Text>
                                        </InputGroup>
                                        <div className="notestitle notesgray dpstnotes">
                                            <p className="pb-0 t-gray text-start">
                                                Available 5,857.27879652 USDT
                                            </p>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="saving-summary">
                                        <Accordion defaultActiveKey={null}>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Summary</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="table-responsive" data-simplebar>
                                                        <Table className="sitetable" id="table1">
                                                            <tbody>
                                                                <tr>
                                                                    <td>Subscription Date</td>
                                                                    <td>2025-06-19 11:17:05</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Interest Start Date</td>
                                                                    <td>2025-06-19 11:17:05</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Interest Period</td>
                                                                    <td>1 Day</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Interest Payment Date</td>
                                                                    <td>2025-06-19 11:17:05</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Form.Group>

                                </Form.Group>
                                <Form.Group>
                                    <div className="saving-checkbox-wrapper">
                                        <Form.Check id="savingcheck" className="saving-checkbox me-2" />
                                        <Form.Label className="saving-checkbox-label">I have read and agreed to </Form.Label><Link href="#" className="alink"> BitNexus Simple Earn Service Terms & Conditions</Link>
                                    </div>
                                </Form.Group>
                                <Form.Group className="text-center">
                                    <Button className="sitebtn" id='confirmbtn'>
                                        Confirm
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};


export default Mobilepage;