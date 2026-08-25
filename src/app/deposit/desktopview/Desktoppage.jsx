"use client"
import React, { useEffect, useState } from 'react'
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import { Container, Form, Image, Table, Button, Accordion, Tooltip, OverlayTrigger, Badge, Modal, FormCheck, Alert } from 'react-bootstrap';
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

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
      boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        borderColor: '#4bb1d9',
      },
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
      color: '#000',
      transition: 'background-color 0.3s ease',
    }),
  };

  // Custom option label with image
  const customOptionLabel = (data) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={data.image} alt={data.label} style={{ width: 20, height: 20, marginRight: 10 }} />
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
        <Container className="sitecontainer walletpagebg depositbg">
          <div className="innerpagecontent">
            <h2 className="h2 text-start"><Link className='alink' href="/wallet"><span className="pe-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Deposit</h2>
          </div>
          <div className="flexboxtable leftsidetabbg">
            <div className="mt-0 panelcontentbox border-0">
              <Form className="siteformbg">
                <div className="stpsflowbox">
                  <div className="d-flex stpsfexbox completedstep">
                    <div><span className="stpiconb"><FontAwesomeIcon icon={faCheck} /></span></div>
                    <div>
                      <Form.Group className="form-group">
                        <Form.Label>Select Crypto </Form.Label>
                        <Select options={options} id='currency' placeholder="Select an option" styles={customStyles} value={singleOption}
                          onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex stpsfexbox completedstep">
                    <div><span className="stpiconb"><FontAwesomeIcon icon={faCheck} /></span></div>
                    <div>
                      <Form.Group className="form-group">
                        <Form.Label>Network</Form.Label>
                        <Form.Select className="form-control" id='network'>
                          <option>BTC</option>
                          <option>BTC</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex stpsfexbox">
                    <div><span className="stpiconb"><FontAwesomeIcon icon={faCheck} /></span></div>
                    <div>
                      <Form.Group className="form-group">
                        <Form.Label>Deposit Address</Form.Label>
                        <div className="borderboxbg">
                          <div className="d-flex align-items-center qrcode">
                            <div>
                              <Image src="assets/images/qrcode.png" className="qrcodeicon" width={50} height={50} alt="coin" id='qrcode' />

                            </div>
                            <div>
                              <p className="mb-0">Bitcoin(BTC) Address</p>
                              <p className="t-black mb-0 d-flex"><span id="walletaddres">3JgzvLeyVV73EeKKfytaZECGHwyb3CrGnL</span> <span id="adcopy" className="cpybtn"><Image src="assets/images/copyicon.svg" alt="coin" className='qrcopyimg' /></span></p>
                              {/* <p><Button className="btn sitebtn btn-sm ms-2 mt-2" id='download_address'>Download</Button></p> */}
                            </div>
                          </div>
                          <p className="mb-0 mt-2 t-orange">Please make sure that the address you copied and pasted onto the other page completely matches the deposit address displayed on this page</p>
                        </div>
                      </Form.Group>
                      <div className="notestitle notesgray dpstnotes">
                        <p className="pb-1"><span className="t-gray">Minimum Deposit Limit</span><br /><span className="t-black">0.00060000 BTC</span></p>

                        <p className="pb-1"><span className="t-gray">Deposit Fee<span className="ms-2"><OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Deposits below the minimum limit will not be credited or returned</Tooltip>}><Image src="assets/images/infogray.svg" width={10} height={10} alt="icon" /></OverlayTrigger></span></span>
                          <br /><span className="t-black">0.00060000 BTC</span></p>
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
                  <li>This address only supports deposit of BTC assets. Do not deposit other assets to this address as the assets will not be credited or recoverable.</li>
                  <li>Please note: If the single deposit amount is less than the minimum deposit amount, it will not be credited. The platform will not be liable for any loss of assets resulting from this. Thank you for your understanding and support!</li>
                </ul>
              </div>
              <div className="trendcoinbox mt-3 panelcontentbox gradientdarkbg">
                <h2 className="subhead">Deposit FAQ</h2>
                <div className="p2pfaq faqcntbox">
                  <Accordion flush>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>How to Deposit on BitNexus?</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Have an uncredited deposit? Apply for return</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>View all deposit & withdrawal status</Accordion.Header>
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
            <h2 className="subhead ps-2 pt-2">Recent Deposit History</h2>
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
                      <th>Deposit</th>
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
    </div>
  );
}

export default page
