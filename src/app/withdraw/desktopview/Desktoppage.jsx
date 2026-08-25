"use client"
import React, { useEffect, useState } from 'react'
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import { Container, Form, Image, Table, Button, Accordion, InputGroup, Badge, Modal, FormCheck, Alert } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCheck, faAngleRight, faExchange, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';
import Select from 'react-select';

const page = () => {

  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const [showModal2, setShowModal2] = useState(false);
  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal2 = () => setShowModal2(false);

  useEffect(() => {
    document.body.classList.add("userfooterpage");
    document.body.classList.add("whitepagebackground");
    return () => {
      document.body.classList.remove("userfooterpage");
      document.body.classList.remove("whitepagebackground");
    };
  }, []);
  const [singleOption, setSingleOption] = useState(null);

  const options = [
    { value: 'btc', label: 'BTC Bitcoin', image: 'assets/images/color/btc.svg' },
    { value: 'eth', label: 'ETH Ethereum', image: 'assets/images/color/eth.svg' },
    { value: 'ltc', label: 'LTC Litecoin', image: 'assets/images/color/ltc.svg' },
  ];

  const handleSingleChange = (selected) => {
    setSingleOption(selected);
    console.log('Single Select:', selected);
  };

// const customStyles = {
//   control: (base, state) => ({
//     ...base,
//     borderColor: state.isFocused ? "transparent" : "#ccc",
//     boxShadow: "none",
//     backgroundColor: document.body.classList.contains("nightmode")
//       ? "#131125"
//       : "#fff",
//     transition: "border-color 0.3s ease, background-color 0.3s ease",
//     "&:hover": {
//       borderColor: "#000",
//     },
//   }),

//   option: (base, { isFocused }) => {
//     const isNightMode = document.body.classList.contains("nightmode");

//     return {
//       ...base,
//       backgroundColor: isNightMode
//         ? isFocused
//           ? "#2a2a2a"
//           : "#121212"
//         : isFocused
//         ? "#f1f1f1"
//         : "#000",
//       color: isNightMode ? "#ffffff" : "#000000",
//       cursor: "pointer",
//       transition: "background-color 0.2s ease",
//     };
//   },
// };



  // Custom option label with image
  const customOptionLabel = (data) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={data.image} alt={data.label} style={{ width: 40, height: 20, marginRight: 10 }} />
      {data.label}
    </div>
  );

  const [activeKey, setActiveKey] = useState('1');
  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
      <article className="gridparentbox">
        <Container className="sitecontainer walletpagebg Withdrawbg">
          <div className="innerpagecontent">
            <h2 className="h2 text-start"><Link className='alink' href="/wallet"><span className="pe-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Withdraw</h2>
          </div>
          <div className="flexboxtable leftsidetabbg">
            <div className="mt-0 panelcontentbox border-0">
              <Form className="siteformbg">
                <div className="stpsflowbox">
                  <div className="d-flex stpsfexbox completedstep">
                    <div><span className="stpiconb"><FontAwesomeIcon icon={faCheck} /></span></div>
                    <div>
                   <Form.Group className="form-group w-100">
                                                            <Form.Label>Select Crypto</Form.Label>
                                                            <Form.Select
                                                                id="affiliatetype"
                                                                className="form-control"
                                                            >
                                                                <option>btc</option>
                                                                <option>
                                                                    eth
                                                                </option>
                                                                <option>ltc</option>
                                                                <option>Others</option>
                                                            </Form.Select>
                                                        </Form.Group>
                    </div>
                    {/* <div>
                      <Form.Group className="form-group">
                        <Form.Label>Select Crypto </Form.Label>
                        <Select options={options} id='currency' placeholder="Select an option" styles={customStyles} value={singleOption}
                          onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                      </Form.Group>
                    </div> */}
                  </div>
                  <div className="d-flex stpsfexbox completedstep">
                    <div><span className="stpiconb"><FontAwesomeIcon icon={faCheck} /></span></div>
                    <div>
                      <Form.Group className="form-group">
                        <Form.Label>Network</Form.Label>
                        <Form.Select className="form-control" id='network'>
                          <option></option>
                          <option>BTC</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex stpsfexbox completedstep">
                    <div><span className="stpiconb"><FontAwesomeIcon icon={faCheck} /></span></div>
                    <div>
                      <Form.Group className="form-group">
                        <Form.Label>Withdraw Addres</Form.Label>
                        <InputGroup>
                          <Form.Control placeholder="SDAFYTEUWYR645854" aria-label="Username" aria-describedby="basic-addon1" id='address' />
                          <InputGroup.Text id="copy" className="cpybtn">Copy</InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex stpsfexbox">
                    <div><span className="stpiconb"><FontAwesomeIcon icon={faCheck} /></span></div>
                    <div>
                      <Form.Group className="form-group">
                        <Form.Label>Withdraw Amount</Form.Label>
                        <Form.Control id='amount' />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <div className="stoplimtboxt stoplimtboxt-x">
                          <div className="link-div">
                            <div className="activelimit" id='25'>25%</div>
                            <div className='btn sidebtn' id='50'>50%</div>
                            <div className='btn sidebtn' id='75'>75%</div>
                            <div className='btn sidebtn' id='100'>100%</div>
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Button type="submit" className="sitebtn btn-block" id="withdrawsubmit" onClick={handleShowModal1}>Submit</Button>
                      </Form.Group>
                      <div className="notestitle notesgray dpstnotes">
                        <p className="pb-1"><span className="t-gray">Min Withdraw</span><br /><span className="t-black">0.00060000 BTC</span></p>
                        <p className="pb-1"><span className="t-gray">Max Withdraw</span><br /><span className="t-black">0.00060000 BTC</span></p>
                        <p className="pb-1"><span className="t-gray">Total Withdraw</span><br /><span className="t-black">0.00060000 BTC</span></p>
                        <p className="pb-1"><span className="t-gray">Withdraw Fee</span><br /><span className="t-black">0.00060000 BTC</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <div className="mt-0">
              <div className="trendcoinbox mt-0 panelcontentbox gradientdarkbg">
                <h2 className="subhead">Tips</h2>
                <ul>
                  <li>This address only supports Withdraw of BTC assets. Do not Withdraw other assets to this address as the assets will not be credited or recoverable.</li>
                  <li>Please note: If the single Withdraw amount is less than the minimum Withdraw amount, it will not be credited. The platform will not be liable for any loss of assets resulting from this. Thank you for your understanding and support!</li>
                </ul>
              </div>
              <div className="trendcoinbox mt-3 panelcontentbox gradientdarkbg">
                <h2 className="subhead">Withdraw FAQ</h2>
                <div className="p2pfaq faqcntbox">
                  <Accordion flush>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>How to Withdraw on BitNexus?</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Have an uncredited Withdraw? Apply for return</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>View all Withdraw & withdrawal status</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <div className="wlltdpstbox">
            <h2 className="subhead ps-2 pt-2">Recent Withdraw History</h2>
            <div className="panelcontentbox">
              <Simplebar className="table-responsive sitescroll">
                <Table className="sitetable" id='table1'>
                  <thead>
                    <tr>
                      <th>Date & Time</th>
                      <th>Coin</th>
                      <th>TX Hash</th>
                      <th>Sender</th>
                      <th>Receiver</th>
                      <th>Withdraw</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="nodata">
                      <td colSpan={8} className='text-center'>
                        <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                        No record found
                      </td>
                    </tr>
                    {/* <!-- <tr>
                        <td>18/01/2025, 05:05:00</td>
                        <td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
                        <td>FDATRWYTUNDJF8455674</td>
                        <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                        <td>FDATRWYTUNDJF8455674</td>
                        <td>2563971</td>
                        <td><Badge bg="success">Confirm</Badge></td> 
                         </tr>
                        <tr>
                          <td>18/01/2025, 05:05:00</td>
                          <td><Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ETH</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>
                        <tr>
                          <td>18/01/2025, 05:05:00</td>
                          <td><Image src="assets/images/color/xrp.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />XRP</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>
                        <tr>
                          <td>18/01/2025, 05:05:00</td>
                          <td><Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BNB</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>
                        <tr>
                          <td>18/01/2025, 05:05:00</td>
                          <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>--> */}
                  </tbody>
                </Table>
              </Simplebar>
              <ResponsiveTable tableId="table1" />
            </div>
          </div>

        </Container>
      </article>
      <Userfooter />
      <Modal show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered className='modalbgt Create-Ticket-x '>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Enter Verification Code</Modal.Title>
          <hr />
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg '>
            <Form.Group className="mb-3 code-box d-flex gap-2">
              <Form.Control type="text" id="title" />
              <Form.Control type="text" id="title" />
              <Form.Control type="text" id="title" />
              <Form.Control type="text" id="title" />
              <Form.Control type="text" id="title" />
              <Form.Control type="text" id="title" />
            </Form.Group>
            <p className=" text-center">If you didn’t receive a code.Click <span className="alink"> Resend</span></p>
            <div >
              <Button className='sitebtn w-100' id="submit_support">Submit</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default page
