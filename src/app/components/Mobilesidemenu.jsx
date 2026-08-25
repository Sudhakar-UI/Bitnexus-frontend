"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Form, Image, Table, Modal, NavDropdown, Button } from 'react-bootstrap';
import "flatpickr/dist/themes/material_orange.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../../public/assets/css/mobileview.css';
import { usePathname } from 'next/navigation'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import '../../../public/assets/css/mobileview.css'


const Mobilesidemenu = ({ onClose }) => {

    const pathname = usePathname()
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    useEffect(() => {
        document.body.classList.remove("userpanelpage");
    }, []);

    const nightMode = () => {
        document.body.classList.add("nightmode");
    };

    const dayMode = () => {
        document.body.classList.remove("nightmode");
    };

    return (
        <>
            <div className="mobilegridparentbox mbsecuritybg profile-side-y  mobilesidemenu">
                <Container className="sitecontainer">
                    <div className='leftsidemenu' id="leftsidemenu">
                        <div className="d-flex justify-content-end py-1">
                            <button className='humberbutton' onClick={onClose}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <hr />
                        <div className="leftmenuprofilebg profile-img-main-cont">
                            <div className='d-flex  align-items-center gap-2 '>
                                <Image src="assets/images/profile.svg" className='profile-img-main' />
                                <div>
                                    <h5>John</h5>
                                    <p className="h4 mb-0">Johnwilliam@gmail.com
                                    </p>
                                </div>

                            </div>

                        </div>
                        <div className="leftsidescroll">
                            <ul>
                                <li>   <div className="menu-divider d-flex justify-content-between align-items-center px-3 py-2">
                                    <span>Dark Mode</span>
                                    <Form.Check
                                        type="switch"
                                        id="dark-mode-switch"
                                        defaultChecked
                                        onChange={(e) =>
                                            e.target.checked ? nightMode() : dayMode()
                                        }
                                    />
                                </div>

                                </li>
                                <li>
                                    <NavDropdown
                                        title={
                                            <div className="pull-left menushapeicon">
                                                <Image
                                                    src="assets/images/mo-language.svg"
                                                    className="menuicon"
                                                    alt="user"
                                                    width={100}
                                                    height={57}
                                                />{" "}
                                                Language
                                            </div>
                                        }
                                        id="basic-nav-dropdown"
                                        className="langmenu"
                                    >
                                        <SimpleBar className="chat-notification">
                                            <NavDropdown.Item as={Link} href="/" className="active">
                                                <span className="langenicon">
                                                    <Image
                                                        src="assets/images/eng.svg"
                                                        alt="icon"
                                                        width={100}
                                                        height={100}
                                                    />
                                                </span>
                                                English
                                            </NavDropdown.Item>
                                            <NavDropdown.Item as={Link} href="/">
                                                <span className="langenicon">
                                                    <Image
                                                        src="assets/images/ch.svg"
                                                        alt="icon"
                                                        width={100}
                                                        height={100}
                                                    />
                                                </span>
                                                Chinese
                                            </NavDropdown.Item>
                                            <NavDropdown.Item as={Link} href="/">
                                                <span className="langenicon">
                                                    <Image
                                                        src="assets/images/ja.svg"
                                                        alt="icon"
                                                        width={100}
                                                        height={100}
                                                    />
                                                </span>
                                                Japanese
                                            </NavDropdown.Item>
                                        </SimpleBar>
                                    </NavDropdown>
                                </li>
                                <li><Link id="dashboardlink" href="/dashboard" onClick={onClose} className={`titlemenu ${pathname === '/dashboard' ? 'active' : ''}`}><i><Image src="assets/images/mo-profile.svg" alt="icon" width={100} height={100} /></i><div>Profile</div></Link></li>
                                {/* <li className="webhide"><Link id="tradelink" onClick={onClose} className={`titlemenu ${pathname === '/trade' ? 'active' : ''}`} href="/trade"><i><Image src="assets/images/spoticon.svg" alt="icon" width={100} height={100} /></i><div>Spot</div></Link></li> */}
                                <li className="dropdown">
                                    <a href="#" id="walletlink" className={`titlemenu dropdown-bs-toggle`} data-bs-toggle="dropdown"><i><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></i>Wallet<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="walletlink-menu-dd dropdown-menu">
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/wallet' ? 'active' : ''}`} href="/wallet">Wallet Overview</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/fundingwallet' ? 'active' : ''}`} href="/fundingwallet">Funding Wallet</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/spot-wallet' ? 'active' : ''}`} href="/spot-wallet">Spot Wallet</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '#' ? 'active' : ''}`} href="#">Earn Wallet</NavDropdown.Item>
                                    </div>
                                </li>
                                <li className="dropdown webhide">
                                    <a href="#" className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown"><i><Image src="assets/images/hand-money-bold-duotone.svg" alt="icon" width={100} height={100} /></i>Earn<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="dropdown-menu">
                                        <NavDropdown.Item as={Link} onClick={onClose} id="savinglink" className={`titlemenu ${pathname === '/saving' ? 'active' : ''}`} href="/saving"><div>Overview</div></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} id="earnhistorylink" className={`titlemenu ${pathname === '/earn' ? 'active' : ''}`} href="/earn"><div>History</div></NavDropdown.Item>
                                    </div>
                                </li>
                                <li className="webhide"><Link id="convertlink" onClick={onClose} className={`titlemenu ${pathname === '/convert' ? 'active' : ''}`} href="/convert"><i><Image src="assets/images/convert-sideicon.svg" alt="icon" width={100} height={100} /></i><div>Convert</div></Link></li>
                                <li><Link id="reflink" onClick={onClose} className={`titlemenu ${pathname === '/referral' ? 'active' : ''}`} href="/referral"><i><Image src="assets/images/reficon1.svg" alt="icon" width={100} height={100} /></i><div>Referral</div></Link></li>
                                <li className="webhide"><Link id="marketlink" onClick={onClose} className={`titlemenu ${pathname === '/markets' ? 'active' : ''}`} href="/markets"><i><Image src="assets/images/kyc-sideicon.svg" alt="icon" width={100} height={100} /></i><div>KYC</div></Link></li>
                                <li className="barhide"><Link id="supportlink" onClick={onClose} className={`titlemenu`} href="/support"><i><Image src="assets/images/supporticon.svg" alt="icon" width={100} height={100} /></i><div>Support</div></Link></li>




                                <li><Link id="securitylink" onClick={onClose} className={`titlemenu ${pathname === '/security' ? 'active' : ''}`} href="/security"><i><Image src="assets/images/securityicon.svg" alt="icon" width={100} height={100} /></i><div>Security</div></Link> </li>


                                {/* <li className="dropdown">
                                    <a href="#" id="historylink" className={`titlemenu dropdown-bs-toggle`} data-bs-toggle="dropdown"><i><Image src="assets/images/settings-sideicon.svg" alt="icon" width={100} height={100} /></i>Settings<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="historylink-menu-dd dropdown-menu">
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/deposithistory' ? 'active' : ''}`} href="/deposithistory">Deposit History</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/withdrawhistory' ? 'active' : ''}`} href="/withdrawhistory">Withdraw History</NavDropdown.Item>

                                    </div>
                                </li> */}
                                <li className="dropdown">
                                    <a href="#" id="historylink" className={`titlemenu dropdown-bs-toggle`} data-bs-toggle="dropdown"><i><Image src="assets/images/historyicon.svg" alt="icon" width={100} height={100} /></i>History<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="historylink-menu-dd dropdown-menu">
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/deposithistory' ? 'active' : ''}`} href="/deposithistory">Deposit History</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/withdrawhistory' ? 'active' : ''}`} href="/withdrawhistory">Withdraw History</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/openorderhistory' ? 'active' : ''}`} href="/openorderhistory">Open Order History</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/orderhistory' ? 'active' : ''}`} href="/orderhistory">My Order History</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/tradehistory' ? 'active' : ''}`} href="/tradehistory">Trade History</NavDropdown.Item>
                                    </div>
                                </li>
                                <li><a href="#" className="titlemenu logout" id="logoutlink"><i><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></i><div>Sign Out</div></a></li>

                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Mobilesidemenu;