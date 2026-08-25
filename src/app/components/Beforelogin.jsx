"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Form, Image, Table, Modal, NavDropdown } from 'react-bootstrap';
import "flatpickr/dist/themes/material_orange.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../../public/assets/css/mobileview.css';
import { usePathname } from 'next/navigation'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import '../../../public/assets/css/mobileview.css'


const Beforelogin = ({ onClose }) => {

    const pathname = usePathname()
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    return (
        <>
            <div className="mobilegridparentbox mbsecuritybg profile-side-y  mobilesidemenu mobilesidemenu-login p-2">
                <Container className="sitecontainer">
                    <div className='leftsidemenu' id="leftsidemenu">
                        <div className="d-flex justify-content-end py-1">
                            <button className='humberbutton' onClick={onClose}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <div className=' d-flex align-items-center gap-2 justify-content-center'>
                            <div className="text-center mb-2">
                                <Button type="submit" className="btn sitebtn borderbtn-x" id="submit"> Sign In </Button>
                            </div>
                            <div className="text-center mb-2">
                                <Button type="submit" className="btn sitebtn " id="submit"> Sign Up </Button>
                            </div>
                        </div>
                        <hr />

                        <div className="leftsidescroll">
                            <ul>
                                <li><Link id="dashboardlink" href="/dashboard" onClick={onClose} className={`titlemenu ${pathname === '/dashboard' ? 'active' : ''}`}><i><Image src="assets/images/market-mo.svg" alt="icon" width={100} height={100} /></i><div>Markets</div></Link></li>
                                <li className="webhide"><Link id="tradelink" onClick={onClose} className={`titlemenu ${pathname === '/trade' ? 'active' : ''}`} href="/trade"><i><Image src="assets/images/trade-mo.svg" alt="icon" width={100} height={100} /></i><div>Trade</div></Link></li>

                                <li className="dropdown webhide">
                                    <a href="#" className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown"><i><Image src="assets/images/hand-money-bold-duotone.svg" alt="icon" width={100} height={100} /></i>Earn<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="dropdown-menu">
                                        <NavDropdown.Item as={Link} onClick={onClose} id="savinglink" className={`titlemenu ${pathname === '/saving' ? 'active' : ''}`} href="/saving"><div>Overview</div></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} id="earnhistorylink" className={`titlemenu ${pathname === '/earn' ? 'active' : ''}`} href="/earn"><div>History</div></NavDropdown.Item>
                                    </div>
                                </li>
                                <li className="webhide"><Link id="convertlink" onClick={onClose} className={`titlemenu ${pathname === '/convert' ? 'active' : ''}`} href="/convert"><i><Image src="assets/images/convert-sideicon.svg" alt="icon" width={100} height={100} /></i><div>Convert</div></Link></li>

                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Beforelogin;