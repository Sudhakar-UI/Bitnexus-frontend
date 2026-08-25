"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Container, Image, InputGroup, Dropdown, Nav, Tab, Col, Table, Row, Form, Button, Modal, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faAngleDown, faCircleInfo, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const Desktoppage = () => {
  const flexscroll = {
    desktop: {
      breakpoint: { max: 1920, min: 1200 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1200, min: 1050 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1050, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    }
  };

  const [activeKey, setActiveKey] = useState('1');

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClose1 = () => setShowModal1(false);
  const handleClose2 = () => setShowModal2(false);
  const handleShow1 = () => setShowModal1(true);
  const handleShow2 = () => setShowModal2(true);
  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />

      <article className="gridparentbox gridtabtopbox">
        <Container className="sitecontainer walletoverviewbg">
          <div className="innerpagecontent">
            <h2 className="h2">Earn Overview</h2>
          </div>
          <div className=" d-flex  gap-3">
            <div className="panelcontentbox w-100 p-2">
              <div className=" d-flex align-items-center gap-2">
                <Image src="assets/images/my-holdings-s.svg" className="saving-main-icon" />
                <div>
                  <h5 className="saving-main-head">My Holdings<span className="t-gray"><FontAwesomeIcon className="ms-2" icon={faEye} id="eye1" /></span></h5>
                  <span className="saving-main-subhead">*****</span>
                </div>
              </div>
            </div>
            <div className="panelcontentbox w-100 p-2">
              <div className=" d-flex align-items-center gap-2">
                <Image src="assets/images/total-profit-s.svg" className="saving-main-icon" />

                <div>
                  <h5 className="saving-main-head">Totel Profit<span className="t-gray"><FontAwesomeIcon className="ms-2" icon={faEyeSlash} id="eye1" /></span></h5>
                  <span className="saving-main-subhead">*****</span>
                </div>
              </div>
            </div>
            <div className="panelcontentbox w-100 p-2">
              <div className=" d-flex align-items-center gap-2">
                <Image src="assets/images/last-day-profit-s.svg" className="saving-main-icon" />

                <div>
                  <h5 className="saving-main-head">Last Day Profit<span className="t-gray"><FontAwesomeIcon className="ms-2" icon={faEye} id="eye1" /></span></h5>
                  <span className="saving-main-subhead">*****</span>
                </div>
              </div>
            </div>
          </div>

          <div className="panelcontentbox savingbannersec mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Popular Products</h2>
            <Table className="sitetable sitescroll" id='table1'>
              <thead>
                <tr>
                  <th>Coins</th>
                  <th>Est.APR</th>
                  <th>Duration</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="border-0">
                <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data1" data-bs-parent="#accordion" aria-expanded="false">
                  <td><Image src="assets/images/color/btc.svg" className="coinicon" />BTC</td>
                  <td><span className="t-green">4.2%~12.11%</span></td>
                  <td><span className="duration-days">
                    Flexible/Locked
                  </span>
                  </td>
                  <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                </tr>
                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data1" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td rowSpan="3"></td>
                            <td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                            <td><span className="t-gray mx-1">Flexible</span></td>
                            <td className="notablehead"><Link className="sitebtn btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data1" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td rowSpan="3"></td>
                            <td><span className="t-green">4.2%</span></td>
                            <td><span className="t-gray mx-1">Locked</span></td>
                            <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow2}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
                <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data2" data-bs-parent="#accordion" aria-expanded="false">
                  <td><Image src="assets/images/color/eth.svg" className="coinicon" />ETH</td>
                  <td><span className="t-green">4.2%~12.11%</span></td>
                  <td><span className="duration-days">
                    Flexible/Locked
                  </span>
                  </td>
                  <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                </tr>
                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data2" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td rowSpan="3"></td>
                            <td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                            <td><span className="t-gray mx-1">Flexible</span></td>
                            <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data2" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td rowSpan="3"></td>
                            <td><span className="t-green">4.2%</span></td>
                            <td><span className="t-gray mx-1">Locked</span></td>
                            <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow2}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
                <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data3" data-bs-parent="#accordion" aria-expanded="false">
                  <td><Image src="assets/images/color/bnb.svg" className="coinicon" />BNB</td>
                  <td><span className="t-green">4.2%~12.11%</span></td>
                  <td><span className="duration-days">
                    Flexible/Locked
                  </span>
                  </td>
                  <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                </tr>

                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data3" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td rowSpan="3"></td>
                            <td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                            <td><span className="t-gray mx-1">Flexible</span></td>
                            <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data3" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td rowSpan="3"></td>
                            <td><span className="t-green">4.2%</span></td>
                            <td><span className="t-gray mx-1">Flexible</span></td>
                            <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>

                <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data4" data-bs-parent="#accordion" aria-expanded="false">
                  <td><Image src="assets/images/color/trx.svg" className="coinicon" />TRX</td>
                  <td><span className="t-green">4.2%~12.11%</span></td>
                  <td><span className="duration-days">
                    Flexible/Locked
                  </span>
                  </td>
                  <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                </tr>
                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data4" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td rowSpan="3"></td>
                            <td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
                            </td>
                            <td><span className="t-gray mx-1">Flexible</span></td>
                            <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data4" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td></td>
                            <td><span className="t-green">4.2%</span></td>
                            <td><span className="t-gray mx-1">Flexible</span></td>
                            <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
                <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data5" data-bs-parent="#accordion" aria-expanded="false">
                  <td><Image src="assets/images/color/sol.svg" className="coinicon" />SOL</td>
                  <td><span className="t-green">4.2%~12.11%</span></td>
                  <td><span className="duration-days">
                    Flexible/Locked
                  </span>
                  </td>
                  <td><FontAwesomeIcon icon={faAngleDown} /></td>
                </tr>
                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data5" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td rowSpan="3"></td>
                            <td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
                            </td>
                            <td><span className="t-gray mx-1">Flexible</span></td>
                            <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
                <tr className="accordeon-content">
                  <td colSpan={4} className="p-0">
                    <div id="data5" className="collapse">
                      <Table className="sitetable">
                        <tbody>
                          <tr>
                            <td rowSpan="3"></td>
                            <td><span className="t-green">4.2%</span></td>
                            <td><span className="t-gray mx-1">Flexible</span></td>
                            <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </article >
      <Userfooter />
      <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <Row>
              <Col lg={12} xs={12}>
                <Carousel className="partnerflex" responsive={flexscroll} autoPlay={true} autoPlaySpeed={3000} showDots={false} swipeable={true} draggable={true}>
                  <a href="" className="s-flex-modal">
                    <p className="s-modal-txt">Flexible</p>
                    <p className="saving-txt mb-2">12.11% </p>
                  </a>
                  <a href="" className="s-flex-modal active">
                    <p className="s-modal-txt">Flexible</p>
                    <p className="saving-txt mb-2">12.11% </p>
                  </a>
                  <a href="" className="s-flex-modal">
                    <p className="s-modal-txt">Flexible</p>
                    <p className="saving-txt mb-2">12.11% </p>
                  </a>
                  <a href="" className="s-flex-modal">
                    <p className="s-modal-txt">Flexible</p>
                    <p className="saving-txt mb-2">12.11% </p>
                  </a>
                </Carousel>
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
                  <Form.Group>
                    <div className="saving-summary">
                      <div className="">
                        <Form.Label>Summary</Form.Label>
                        <div className="table-responsive" data-simplebar>
                          <Table className="sitetable" id='table1'>
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
                      </div>
                    </div>
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
      {/* <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <Row>
              <Col lg={12} xs={12}>
                <Carousel className="partnerflex" responsive={flexscroll} autoPlay={true} autoPlaySpeed={3000} showDots={false} swipeable={true} draggable={true}>
                  <div className="s-flex-modal">
                    <p className="s-modal-txt">Flexible</p>
                    <p className="saving-txt mb-2">12.11% </p>
                  </div>
                  <div className="s-flex-modal active">
                    <p className="s-modal-txt">Flexible</p>
                    <p className="saving-txt mb-2">12.11% </p>
                  </div>
                  <div className="s-flex-modal">
                    <p className="s-modal-txt">Flexible</p>
                    <p className="saving-txt mb-2">12.11% </p>
                  </div>
                  <div className="s-flex-modal">
                    <p className="s-modal-txt">Flexible</p>
                    <p className="saving-txt mb-2">12.11% </p>
                  </div>
                </Carousel>

                <Form.Group className="durationdymodal form-group ">
                  <Form.Label>Duration (days)</Form.Label>
                  <span>
                    <a href="#" id='30' className='active'>30</a>
                    <a href="#" id='90'>90</a>
                    <a href="#" id='180'>180</a>
                    <a href="#" id='365'>365</a>
                  </span>
                </Form.Group>
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
                  <Form.Group>
                    <div className="saving-summary">
                      <div className="">
                        <Form.Label>Summary</Form.Label>
                        <div className="table-responsive" data-simplebar>
                          <Table className="sitetable" id='table1'>
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
                      </div>
                    </div>
                  </Form.Group>
                </Form.Group>
                <Form.Group>
                  <div className="saving-checkbox-wrapper">
                    <Form.Check id="savingcheck" className="saving-checkbox me-2" />
                    <Form.Label className="saving-checkbox-label">I have read and agreed to </Form.Label><Link href="#" className="alink"> BitNexus Simple Earn Service Terms & Conditions</Link>
                  </div>
                </Form.Group>
                <Form.Group className="text-center mb-0">
                  <Button className="sitebtn" id='confirmbtn'>
                    Confirm
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal> */}
    </div>
  );
}

export default Desktoppage;