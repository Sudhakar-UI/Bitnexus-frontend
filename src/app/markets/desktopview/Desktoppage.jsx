"use client"
import React from "react";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Image, Table, Nav, Tab } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ResponsiveTable from '../../components/ResponsiveTable';


const page = () => {

  return (
    <div>
      <div className="pagecontent gridpagecontent innerpagegrid">
        <div className="backgroundoverlay" id="backgroundoverlay"></div>
        <Userheader />
        <Leftsidemenu />
        <article className="gridparentbox">
          <Container className="sitecontainer">
            <div className="innerpagecontent">
              <h2 className="h2">Markets</h2>
            </div>
            <div className="panelcontentbox">
              <Tab.Container defaultActiveKey="hotspot">
                <div className="innerpagetab historytab">
                  <Nav variant="pills" className="tabbanner">
                    <Nav.Item><Nav.Link eventKey="hotspot">Hot Spot</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="gain">Top Gainer</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="losser">Top Looser</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="listing">New Listing</Nav.Link></Nav.Item>
                  </Nav>
                </div>
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="hotspot">
                    <SimpleBar className="table-responsive sitescroll">
                      <Table className="sitetable" id="table1">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Last Price</th>
                            <th>24h Change</th>
                            <th>24 baseVolume</th>
                            <th>QuoteVolume</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><Image src="assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/USDT</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/USDT</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/USDT</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/USDT</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/USDT</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/xrp.svg" width={25} height={25} alt="coin" className="coinlisticon" />XRP/USDT</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </SimpleBar>
                     	<ResponsiveTable tableId="table1" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="gain">
                    <SimpleBar className="table-responsive sitescroll">
                      <Table className="sitetable" id="table2">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Last Price</th>
                            <th>24h Change</th>
                            <th>24 baseVolume</th>
                            <th>QuoteVolume</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><Image src="assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/BTC</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                         <tr>
                            <td><Image src="assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/ada.svg" width={25} height={25} alt="coin" className="coinlisticon" />ADA/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>

                        </tbody>
                      </Table>
                    </SimpleBar>
                     	<ResponsiveTable tableId="table2" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="losser">
                    <SimpleBar className="table-responsive sitescroll">
                      <Table className="sitetable" id="table3">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Last Price</th>
                            <th>24h Change</th>
                            <th>24 baseVolume</th>
                            <th>QuoteVolume</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><Image src="assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/BTC</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                         <tr>
                            <td><Image src="assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/ada.svg" width={25} height={25} alt="coin" className="coinlisticon" />ADA/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>

                        </tbody>
                      </Table>
                    </SimpleBar>
                     	<ResponsiveTable tableId="table3" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="listing">
                    <SimpleBar className="table-responsive sitescroll">
                      <Table className="sitetable" id="table4">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Last Price</th>
                            <th>24h Change</th>
                            <th>24 baseVolume</th>
                            <th>QuoteVolume</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><Image src="assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/BTC</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                         <tr>
                            <td><Image src="assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>
                          <tr>
                            <td><Image src="assets/images/color/ada.svg" width={25} height={25} alt="coin" className="coinlisticon" />ADA/ETH</td>
                            <td>2562.365289</td>
                            <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                            <td>2562.365289</td>
                            <td>2562.365289</td>
                            <td><Link href="/trade" className="btn sitebtn btn-sm">Trade</Link></td>
                          </tr>

                        </tbody>
                      </Table>
                    </SimpleBar>
                     	<ResponsiveTable tableId="table4" />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Container>
        </article>
        <Userfooter />
      </div>
    </div>
  );
};

export default page;