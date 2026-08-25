"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Badge,
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
import '../../../../public/assets/css/mobileview.css'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import Mobilemenu from "../../components/Mobilemenu";
import { useSideMenu } from "../../SideMenuProvider"
import MobileSidemenu from "../../components/Mobilesidemenu"

const Page = () => {
    const [activePage, setActivePage] = useState(null);

    const handlePageClick = (page) => {
        setActivePage(page);
    };
    const handleShow1 = () => setShowModal1(true);
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);

    const { openMenu } = useSideMenu();

    return (
        <div>
            <div className="pagecontent gridpagecontent innerpagegrid mobileview walletmobileview">
                <div className="mbheadingbox p-3">
                    <div className="humberbutton">
                        <Link href="#" className="bckbtn mt-0" id="backbtn">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className='flex-one-cls'>
                        <h2 className="heading-title text-center p-0 m-0">Wallet Overview</h2>
                    </div>
                    <div className="humberbutton" onClick={openMenu}>
                        <div className="bckbtn mt-0" id="backbtn" >
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
                <div className="backgroundoverlay" id="backgroundoverlay"></div>

                <article className="mobileview gridtabtopbox mobiletradepage">
                    <Container className="sitecontainer walletoverviewbg">
                        <div >
                            <div className="innerpagetab historytab mb-4 wallettabal-multiple-tab">
                                <Tab.Container defaultActiveKey="Overview-wallet">
                                    <Nav variant="pills" className="tabbanner">
                                        <Nav.Item>
                                            <Nav.Link eventKey="Overview-wallet" id="Overviewwallettab">
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

                                        {/* ------------------- OVERVIEW WALLET ------------------- */}
                                        <Tab.Pane eventKey="Overview-wallet">
                                            <div className="balanceshowt totblance panelcontentbox">
                                                <div className="table-content">
                                                    <div>
                                                        {/* <h4 className="subhead text-start">Overall Balance</h4> */}
                                                        <h5 className="t-gray d-flex align-items-center">
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
                                            <div className="flexbox mt-2">
                                                <Form className="siteformbg assets-block my-2">
                                                    <div className="wallet-tbl">
                                                        <div className="form-check m-0 p-0">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <h4 className="h4 subhead">Overall Wallet Balance</h4>
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    id="spotcheck"
                                                                    label="Hide assets <1 USD"
                                                                />
                                                            </div>
                                                            <InputGroup className="form-control align-content-center">

                                                                <Form.Control placeholder="Search" className=" border-0 bg-none p-0" type="text"></Form.Control>
                                                                <InputGroup.Text className=" border-0 bg-none p-0 ">
                                                                    <FontAwesomeIcon className="fasearch-x" icon={faSearch} id="search_refurl" />
                                                                </InputGroup.Text>
                                                            </InputGroup>
                                                        </div>
                                                    </div>
                                                </Form>
                                                <div className=" wllettable  pb-0 mb-0 ">
                                                    {/* <h4 className="subhead">Asset List</h4> */}
                                                    <SimpleBar className="table-responsive sitescroll">
                                                        <Table className=" panelcontentbox sitetable mb-2 " id="overview-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="wallet-main-tt">
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
                                                                    <td className="tt-text-mute">Balance</td>
                                                                    <td colSpan={2} className="tt-text-bold text-end">
                                                                        0.293985
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="tt-text-mute">Free Balance</td>
                                                                    <td colSpan={2} className="tt-text-bold text-end">
                                                                        0.293985
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="tt-text-mute">Locked Balance</td>
                                                                    <td colSpan={2} className="tt-text-bold text-end">
                                                                        0.00254789
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td colSpan={1} className="text-center">
                                                                        <Link href="/deposit" className="btn wallet-sitebtn  w-100">
                                                                            <span> <Image
                                                                                src="/assets/images/btn-deposit.svg"
                                                                                width={50}
                                                                                height={50}
                                                                                alt="coin"
                                                                                className="btn-img-btn"
                                                                            /></span>
                                                                            Deposit
                                                                        </Link>
                                                                    </td>
                                                                    <td colSpan={1} className="text-center">
                                                                        <Link href="/withdraw" className="btn wallet-sitebtn w-100">
                                                                            <span> <Image
                                                                                src="/assets/images/btn-withdraw.svg"
                                                                                width={50}
                                                                                height={50}
                                                                                alt="coin"
                                                                                className="btn-img-btn"
                                                                            /></span>
                                                                            Withdraw
                                                                        </Link>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                        <Table className=" panelcontentbox sitetable mb-2 " id="overview-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="wallet-main-tt">
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
                                                                    <td className="tt-text-mute">Balance</td>
                                                                    <td colSpan={2} className="tt-text-bold text-end">
                                                                        0.293985
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="tt-text-mute">Free Balance</td>
                                                                    <td colSpan={2} className="tt-text-bold text-end">
                                                                        0.293985
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="tt-text-mute">Locked Balance</td>
                                                                    <td colSpan={2} className="tt-text-bold text-end">
                                                                        0.00254789
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td colSpan={1} className="text-center">
                                                                        <Link href="/deposit" className="btn wallet-sitebtn  w-100">
                                                                            <span> <Image
                                                                                src="/assets/images/btn-deposit.svg"
                                                                                width={50}
                                                                                height={50}
                                                                                alt="coin"
                                                                                className="btn-img-btn"
                                                                            /></span>
                                                                            Deposit
                                                                        </Link>
                                                                    </td>
                                                                    <td colSpan={1} className="text-center">
                                                                        <Link href="/withdraw" className="btn wallet-sitebtn w-100">
                                                                            <span> <Image
                                                                                src="/assets/images/btn-withdraw.svg"
                                                                                width={50}
                                                                                height={50}
                                                                                alt="coin"
                                                                                className="btn-img-btn"
                                                                            /></span>
                                                                            Withdraw
                                                                        </Link>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </SimpleBar>
                                                    <ResponsiveTable tableId="overview-table" />
                                                </div>
                                            </div>

                                        </Tab.Pane>

                                        {/* ------------------- FUNDING WALLET ------------------- */}
                                        <Tab.Pane eventKey="funding-wallet">
                                            <div className="balanceshowt totblance panelcontentbox">
                                                <div className="table-content">
                                                    <div>

                                                        <h5 className="t-gray d-flex align-items-center">
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
                                            <Form className="siteformbg assets-block  my-2">
                                                <div className="wallet-tbl">
                                                    <div className="form-check m-0 p-0">
                                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                                            <h4 className="h4 subhead">Funding Wallet Balance</h4>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id="spotcheck"
                                                                label="Hide assets <1 USD"
                                                            />
                                                        </div>
                                                        <InputGroup className="form-control align-content-center">

                                                            <Form.Control placeholder="search" className=" border-0 bg-none p-0" type="text"></Form.Control>
                                                            <InputGroup.Text className=" border-0 bg-none p-0 ">
                                                                <FontAwesomeIcon className="fasearch-x" icon={faSearch} id="search_refurl" />
                                                            </InputGroup.Text>
                                                        </InputGroup>
                                                    </div>
                                                </div>
                                            </Form>
                                            <div className=" wllettable  pb-0 mb-0 p-0 ">
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable mb-2  panelcontentbox" id="overview-table">
                                                        <tbody className="">
                                                            <tr>
                                                                <td className="wallet-main-tt">
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
                                                                <td className="tt-text-mute">Balance</td>
                                                                <td colSpan={2} className="tt-text-bold text-end">
                                                                    0.293985
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tt-text-mute">Free Balance</td>
                                                                <td colSpan={2} className="tt-text-bold text-end">
                                                                    0.293985
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tt-text-mute">Locked Balance</td>
                                                                <td colSpan={2} className="tt-text-bold text-end">
                                                                    0.00254789
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/deposit" className="btn wallet-sitebtn  w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-deposit.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Deposit
                                                                    </Link>
                                                                </td>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/withdraw" className="btn wallet-sitebtn w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-withdraw.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Withdraw
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/deposit" className="btn wallet-sitebtn  w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-tras.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Transfer
                                                                    </Link>
                                                                </td>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/withdraw" className="btn wallet-sitebtn w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-convert.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Convert
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="sitetable mb-2 p- panelcontentbox" id="overview-table">
                                                        <tbody className="">
                                                            <tr>
                                                                <td className="wallet-main-tt">
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
                                                                <td className="tt-text-mute">Balance</td>
                                                                <td colSpan={2} className="tt-text-bold text-end">
                                                                    0.293985
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tt-text-mute">Free Balance</td>
                                                                <td colSpan={2} className="tt-text-bold text-end">
                                                                    0.293985
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tt-text-mute">Locked Balance</td>
                                                                <td colSpan={2} className="tt-text-bold text-end">
                                                                    0.00254789
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/deposit" className="btn wallet-sitebtn  w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-deposit.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Deposit
                                                                    </Link>
                                                                </td>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/withdraw" className="btn wallet-sitebtn w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-withdraw.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Withdraw
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/deposit" className="btn wallet-sitebtn  w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-tras.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Transfer
                                                                    </Link>
                                                                </td>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/withdraw" className="btn wallet-sitebtn w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-convert.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Convert
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                                <ResponsiveTable tableId="funding-wallet-table" />
                                            </div>
                                        </Tab.Pane>

                                        {/* ------------------- SPOT WALLET ------------------- */}
                                        <Tab.Pane eventKey="spot-wallet">
                                            <div className="balanceshowt totblance panelcontentbox">
                                                <div className="table-content">
                                                    <div>

                                                        <h5 className="t-gray d-flex align-items-center">
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
                                            <Form className="siteformbg assets-block  my-2">
                                                <div className="wallet-tbl">
                                                    <div className="form-check m-0 p-0">
                                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                                            <h4 className="h4 subhead">Spot Wallet Balance</h4>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id="spotcheck"
                                                                label="Hide assets <1 USD"
                                                            />
                                                        </div>
                                                        <InputGroup className="form-control align-content-center">

                                                            <Form.Control placeholder="search" className=" border-0 bg-none p-0" type="text"></Form.Control>
                                                            <InputGroup.Text className=" border-0 bg-none p-0 ">
                                                                <FontAwesomeIcon className="fasearch-x" icon={faSearch} id="search_refurl" />
                                                            </InputGroup.Text>
                                                        </InputGroup>
                                                    </div>
                                                </div>
                                            </Form>
                                            <div className=" wllettable  pb-0 mb-0">
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable mb-2 panelcontentbox" id="overview-table">
                                                        <tbody>
                                                            <tr>
                                                                <td className="wallet-main-tt">
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
                                                                <td className="tt-text-mute">Coin Price</td>
                                                                <td colSpan={2} className="tt-text-bold text-end">
                                                                    0.293985
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/deposit" className="btn wallet-sitebtn  w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-tras.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Transfer
                                                                    </Link>
                                                                </td>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/withdraw" className="btn wallet-sitebtn w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-Trade.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Trade
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="sitetable mb-2 panelcontentbox" id="overview-table">
                                                        <tbody>
                                                            <tr>
                                                                <td className="wallet-main-tt">
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
                                                                <td className="tt-text-mute">Coin Price</td>
                                                                <td colSpan={2} className="tt-text-bold text-end">
                                                                    0.293985
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/deposit" className="btn wallet-sitebtn  w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-tras.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Transfer
                                                                    </Link>
                                                                </td>
                                                                <td colSpan={1} className="text-center">
                                                                    <Link href="/withdraw" className="btn wallet-sitebtn w-100">
                                                                        <span> <Image
                                                                            src="/assets/images/btn-Trade.svg"
                                                                            width={50}
                                                                            height={50}
                                                                            alt="coin"
                                                                            className="btn-img-btn"
                                                                        /></span>
                                                                        Trade
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                                <ResponsiveTable tableId="Spot-Wallet-table" />
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </Container>
                </article>
                <MobileSidemenu />
                <Mobilemenu />
            </div>
        </div>
    );
};

export default Page;
