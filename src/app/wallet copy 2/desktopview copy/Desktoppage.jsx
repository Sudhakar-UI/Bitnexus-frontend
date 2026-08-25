"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Image,
  Nav,
  InputGroup,
  Tab,
  Table,
  Dropdown,
  Form,
  OverlayTrigger,
  Tooltip,
  Pagination,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from "../../components/Leftsidemenu";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCircleInfo,
  faEllipsisV,
  faSearch,
  faAngleRight,
  faSortDown,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import StatChart from "./statChart";
import ResponsiveTable from "../../components/ResponsiveTable";

const Page = () => {
  const [activePage, setActivePage] = useState(null);

  const handlePageClick = (page) => {
    setActivePage(page);
  };
  const handleShow1 = () => setShowModal1(true);
  const [showModal1, setShowModal1] = useState(false);
  const handleClose1 = () => setShowModal1(false);
  return (
    <div>
      <div className="pagecontent gridpagecontent innerpagegrid">
        <div className="backgroundoverlay" id="backgroundoverlay"></div>
        <Userheader />
        <Leftsidemenu />
        <article className="gridparentbox gridtabtopbox">
          <Container className="sitecontainer walletoverviewbg">
            <div className="wallet-desktop">
              <div className="innerpagecontent d-flex align-items-center justify-content-between flex-wrap">
                <h2 className="h2">Wallet Overview</h2>
                <div className="d-flex flex-wrap gap-2">
                  <Link
                    href="#0"
                    className="btn wallet-sm-btn btn-sm d-flex align-items-center gap-1"
                  >
                    <Image
                      src="./assets/images/depositicon1.svg"
                      className="wallet-over-icon"
                    ></Image>
                    Deposit
                  </Link>
                  <Link
                    href="#0"
                    className="btn wallet-sm-btn btn-sm d-flex align-items-center gap-1"
                  >
                    <Image
                      src="./assets/images/withdrawicon1.svg"
                      className="wallet-over-icon"
                    ></Image>
                    Withdraw
                  </Link>
                  <Link
                    href="#0"
                    className="btn wallet-sm-btn btn-sm d-flex align-items-center gap-1"
                  >
                    <Image
                      src="./assets/images/transfericon.svg"
                      className="wallet-over-icon"
                    ></Image>
                    Transfer
                  </Link>
                  <Link
                    href="#0"
                    className="btn wallet-sm-btn btn-sm d-flex align-items-center gap-1"
                  >
                    <Image
                      src="./assets/images/converticon1.svg"
                      className="wallet-over-icon"
                    ></Image>
                    Convert
                  </Link>
                  <Link
                    href="#0"
                    className="btn wallet-sm-btn btn-sm d-flex align-items-center gap-1"
                  >
                    <Image
                      src="./assets/images/tradeicon.svg"
                      className="wallet-over-icon"
                    ></Image>
                    Trade
                  </Link>
                </div>
              </div>

              <Row className="row-gap-2 px-1">
                <Col lg={4} md={6} sm={12} className="px-2">
                  <div className="balanceshowt totblance panelcontentbox">
                    <div className="table-content">
                      <div>
                        <h4 className="subhead">Overall Balance</h4>
                        <h5 className="t-gray">
                          Estimated Balance
                          <span className="ps-2">
                            <Image
                              src="assets/images/eye.svg"
                              withd={16}
                              height={16}
                              alt="icon"
                            />
                          </span>
                        </h5>
                        <div className="d-flex dropsortdownicon">
                          <h4 className="h4">0 USDT </h4>
                          <NavDropdown
                            title={
                              <div className="pull-left ms-1">
                                <FontAwesomeIcon icon={faSortDown} />
                              </div>
                            }
                            id="basic-nav-dropdown"
                          >
                            <NavDropdown.Item as={Link} href="#">
                              BTC
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#">
                              ETH
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#">
                              USDT
                            </NavDropdown.Item>
                          </NavDropdown>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="t-white mb-0">
                            <span className="t-gray">Today's PNL :</span>{" "}
                            0.00USD (0.00%)
                            <span className="t-gray ms-2">
                              <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12} className="px-2">
                  <div className="balanceshowt totblance panelcontentbox">
                    <div className="table-content">
                      <div>
                        <h4 className="subhead">Funding Wallet</h4>
                        <h5 className="t-gray">
                          Estimated Balance
                          <span className="ps-2">
                            <Image
                              src="assets/images/eye.svg"
                              withd={16}
                              height={16}
                              alt="icon"
                            />
                          </span>
                        </h5>
                        <div className="d-flex dropsortdownicon">
                          <h4 className="h4">$15,2548</h4>
                          <NavDropdown
                            title={
                              <div className="pull-left ms-1">
                                <FontAwesomeIcon icon={faSortDown} />
                              </div>
                            }
                            id="basic-nav-dropdown"
                          >
                            <NavDropdown.Item as={Link} href="#">
                              BTC
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#">
                              ETH
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#">
                              USDT
                            </NavDropdown.Item>
                          </NavDropdown>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="t-white mb-0">
                            <span className="t-gray">
                              Today's PNL :
                              <span className="t-gray ms-2">
                                <FontAwesomeIcon icon={faInfoCircle} />
                              </span>{" "}
                              $0.0000
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={12} sm={12} className="px-2">
                  <div className="balanceshowt totblance panelcontentbox">
                    <div className="table-content">
                      <div>
                        <h4 className="subhead">Spot Wallet</h4>
                        <h5 className="t-gray">
                          Estimated Balance
                          <span className="ps-2">
                            <Image
                              src="assets/images/eye.svg"
                              withd={16}
                              height={16}
                              alt="icon"
                            />
                          </span>
                        </h5>
                        <div className="d-flex dropsortdownicon">
                          <h4 className="h4">$15,2548</h4>
                          <NavDropdown
                            title={
                              <div className="pull-left ms-1">
                                <FontAwesomeIcon icon={faSortDown} />
                              </div>
                            }
                            id="basic-nav-dropdown"
                          >
                            <NavDropdown.Item as={Link} href="#">
                              BTC
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#">
                              ETH
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#">
                              USDT
                            </NavDropdown.Item>
                          </NavDropdown>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="t-white mb-0">
                            <span className="t-gray">
                              Today's PNL :
                              <span className="t-gray ms-2">
                                <FontAwesomeIcon icon={faInfoCircle} />
                              </span>{" "}
                              $0.0000
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="flexbox mt-2">
                <div className="panelcontentbox wllettable">
                  {/* <h4 className="subhead">Asset List</h4> */}
                  <Form className="siteformbg assets-block">
                    <div className="wallet-tbl tabrightbox">
                      {/* <Form.Group className="form-group mo-view">
                        <InputGroup className="supportsearch">
                          <div className="input-group-append">
                            <InputGroup.Text>
                              <FontAwesomeIcon
                                icon={faSearch}
                                id="search_refurl"
                              />
                            </InputGroup.Text>
                          </div>
                          <div className="expand-input">
                            <Form.Control
                              type="text"
                              placeholder="Search"
                              id="search-url"
                            />
                          </div>
                        </InputGroup>
                      </Form.Group> */}
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faSearch} id="search_refurl" />
                        </InputGroup.Text>
                        <Form.Control type="text"></Form.Control>
                      </InputGroup>
                      <div className="form-check me-2 pt-2">
                        <Form.Check
                          type="checkbox"
                          id="spotcheck"
                          label="Hide assets <1 USD"
                        />
                      </div>
                    </div>
                  </Form>

                  <div className="innerpagetab historytab mb-4 wallettabal-multiple-tab">
                    <Tab.Container defaultActiveKey="Overview-wallet">
                      <Nav variant="pills" className="tabbanner">

                        <Nav.Item>
                          <Nav.Link  eventKey="Overview-wallet" id="Overviewwallettab">
                            Overview Wallet
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="funding-wallet" id="fundingwallettab">
                            Funding Wallet
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="spot-wallet" id="spotwallettab">
                            Spot Wallet
                          </Nav.Link>
                        </Nav.Item>

                      </Nav>

                      <Tab.Content className="mt-3">
                        <Tab.Pane active eventKey="Overview-wallet">
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
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/eth.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    ETH
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/bnb.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    BNB
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/trx.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    TRX
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/sol.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    SOL
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/xrp.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    XRP
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/ada.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    ADA
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/doge.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    DOGE
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/ton.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    TON
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/hype.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    HYPE
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/usdt.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    USDT
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Withdraw
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </SimpleBar>
                          <ResponsiveTable tableId="table1" />
                          <Pagination>
                            <Pagination.Prev />
                            <Pagination.Ellipsis />
                            <Pagination.Item
                              active={activePage === 1}
                              onClick={() => handlePageClick(1)}
                            >
                              {1}
                            </Pagination.Item>
                            <Pagination.Item
                              active={activePage === 2}
                              onClick={() => handlePageClick(2)}
                            >
                              {2}
                            </Pagination.Item>
                            <Pagination.Item
                              active={activePage === 3}
                              onClick={() => handlePageClick(3)}
                            >
                              {3}
                            </Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Next />
                          </Pagination>
                        </Tab.Pane>
                        <Tab.Pane eventKey="funding-wallet">
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
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/eth.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    ETH
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/bnb.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    BNB
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/trx.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    TRX
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/sol.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    SOL
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/xrp.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    XRP
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/ada.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    ADA
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/doge.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    DOGE
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/ton.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    TON
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/hype.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    HYPE
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/usdt.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    USDT
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>0.00254789</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Deposit
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Withdraw
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/withdraw"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Convert
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </SimpleBar>
                          <ResponsiveTable tableId="table2" />
                          <Pagination>
                            <Pagination.Prev />
                            <Pagination.Ellipsis />
                            <Pagination.Item
                              active={activePage === 1}
                              onClick={() => handlePageClick(1)}
                            >
                              {1}
                            </Pagination.Item>
                            <Pagination.Item
                              active={activePage === 2}
                              onClick={() => handlePageClick(2)}
                            >
                              {2}
                            </Pagination.Item>
                            <Pagination.Item
                              active={activePage === 3}
                              onClick={() => handlePageClick(3)}
                            >
                              {3}
                            </Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Next />
                          </Pagination>
                        </Tab.Pane>
                        <Tab.Pane eventKey="spot-wallet">
                          <SimpleBar className="table-responsive sitescroll">
                            <Table
                              className="sitetable table-responsive-stack mb-0"
                              id="table1"
                            >
                              <thead>
                                <tr>
                                  <th>Coin/Token</th>
                                  <th>Amount</th>
                                  <th>Coin Price</th>
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
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/eth.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    ETH
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/bnb.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    BNB
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/trx.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    TRX
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/sol.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    SOL
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/xrp.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    XRP
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/ada.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    ADA
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/doge.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    DOGE
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/ton.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    TON
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/hype.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    HYPE
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Image
                                      src="assets/images/color/usdt.svg"
                                      width={50}
                                      height={50}
                                      alt="coin"
                                      className="coinlisticon"
                                    />
                                    USDT
                                  </td>
                                  <td>0.293985</td>
                                  <td>0.32569</td>
                                  <td>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm me-2"
                                    >
                                      Transfer
                                    </Link>
                                    <Link
                                      href="/deposit"
                                      className="btn sitebtn btn-sm"
                                    >
                                      Trade
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </SimpleBar>
                          <ResponsiveTable tableId="table3" />
                          <Pagination>
                            <Pagination.Prev />
                            <Pagination.Ellipsis />
                            <Pagination.Item
                              active={activePage === 1}
                              onClick={() => handlePageClick(1)}
                            >
                              {1}
                            </Pagination.Item>
                            <Pagination.Item
                              active={activePage === 2}
                              onClick={() => handlePageClick(2)}
                            >
                              {2}
                            </Pagination.Item>
                            <Pagination.Item
                              active={activePage === 3}
                              onClick={() => handlePageClick(3)}
                            >
                              {3}
                            </Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Next />
                          </Pagination>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </article>
        <Userfooter />
      </div>
    </div>
  );
};

export default Page;
