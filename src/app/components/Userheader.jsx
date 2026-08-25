import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown, Button } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import '../../../public/assets/css/user.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import HoverDropdown from './Hoverdropdown';
import { useTheme } from "../context/ThemeContext";


const Userheader = () => {
    const { isNightMode, toggleNightMode } = useTheme();

  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.add('userpanelpage');
    return () => {
      document.body.classList.remove('userpanelpage');
    };
  })
  const sidebarCollapse = () => {
    const element = document.querySelector('#leftsidemenu');
    const element1 = document.querySelector('#backgroundoverlay');
    const element2 = document.querySelector('#leftsidemenumobile');

    if (window.innerWidth <= 1080) {
      if (element) {
        element.classList.add('active');
      }
      if (element1) {
        element1.classList.add('active');
      }
      if (element2) {
        element2.classList.add('active');
      }
      document.body.classList.add('pagewrapperbox');
    } else {
      if (element) {
        element.classList.remove('active');
      }
      if (element1) {
        element1.classList.remove('active');
      }
      if (element2) {
        element2.classList.add('active');
      }
      document.body.classList.remove('pagewrapperbox');
    }
  };
  return (

    <header className="user-panel headermenu">
      <Navbar expand="lg" className="headbg uheadbg shadow-sm">
        <Container>
          <div className="mobiletoggle">
            <Button type="button" onClick={sidebarCollapse} className="btn sidebtntoggle">
              <Image src="assets/images/menubar.svg" width={100} height={57} alt="logo" />
            </Button>
          </div>
          <Navbar.Brand>
            <Link href="/"><Image src="assets/images/logo.svg" width={100} height={57} className="user-logo" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav leftheadbg">
              <Nav.Item><Link href="/markets" id="marketslink" className={`nav-link ${pathname === '/markets' ? 'active' : ''}`}>Markets</Link></Nav.Item>
               <Nav.Item><Link href="/trade" id="tradelink" className={`nav-link ${pathname === '/trade' ? 'active' : ''}`}>Trade</Link></Nav.Item>
              <HoverDropdown title="Earn" id="earnlink">
                <NavDropdown.Item as={Link} href="/saving
                " className={`${pathname === '/earn' ? 'active' : ''}`}>
                Overview
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/earn" className={`${pathname === '/earn' ? 'active' : ''}`}>
                History
                </NavDropdown.Item>
              </HoverDropdown>
              <Nav.Item><Link href="/convert" id="convertlink" className={`nav-link ${pathname === '/convert' ? 'active' : ''}`}>Convert</Link></Nav.Item>
            </Nav>
            <Nav className="navbar-nav ms-auto rightheadbg">
              <HoverDropdown title="Assets" id="assetsdrp" className="webhide">
                <NavDropdown.Item>
                  <div className="balanceshowt totblance pb-2 gradientdarkbg">
                    <h5>Total Asset :<span className="tabrightbox pe-2"><FontAwesomeIcon icon={faArrowRight} /></span></h5>
                    <h4 className="h4">0.0000000 BTC <span className="ps-2"><FontAwesomeIcon icon={faEyeSlash} /></span><br /><span className="h5 t-gray">$0.23659</span></h4>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item as='div'>
                  <div className="d-flex mt-1 mb-1 align-items-center">
                    <Link href="/deposit" id="depositlink" className="btn sitebtn btn-sm me-2 btn-block">Deposit</Link>
                    <Link href="/withdraw" id="withdrawlink" className="btn sitebtn btn-sm btn-block">Withdraw</Link>
                  </div>
                </NavDropdown.Item>
               </HoverDropdown>
              <HoverDropdown title={<div className="pull-left"><Image src="assets/images/bell.svg" className="menuicon" alt="user" width={100} height={57} /> <span className="counticon"></span></div>} id="basic-nav-dropdown" className="notifyicon">
                <NavDropdown.Item className="userprofiledrop" as={Link} href="/support"><p>Notifications</p></NavDropdown.Item>
                <SimpleBar className="chat-notification">
                    <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                  </SimpleBar>
              </HoverDropdown>
                  <Nav.Item className="d-flex justify-content-center align-items-center sun-icon-width">
                <Link href="#0" onClick={toggleNightMode}>
                  {isNightMode ? (
                    <Image
                      src="./assets/images/sun.svg"
                      className="nav-link modeicon p-0"
                      alt="icon"
                    ></Image>
                  ) : (
                    <Image
                      src="./assets/images/moon.svg"
                      className="nav-link modeicon p-0"
                      alt="icon"
                    ></Image>
                  )}
                </Link>
              </Nav.Item>
              <NavDropdown title={<div className="pull-left notifyicon"><Image src="assets/images/langicon.svg" className="menuicon" alt="user" width={100} height={57} /></div>} id="basic-nav-dropdown" className="langmenu">
                <SimpleBar className="chat-notification">
                  <NavDropdown.Item as={Link} href="/" className="active">
                    <span className="langenicon"><Image src="assets/images/eng.svg" alt="icon" width={100} height={100} /></span>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/" >
                    <span className="langenicon"><Image src="assets/images/ch.svg" alt="icon" width={100} height={100} /></span>
                    Chinese
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/">
                    <span className="langenicon"><Image src="assets/images/ja.svg" alt="icon" width={100} height={100} /></span>
                    Japanese
                  </NavDropdown.Item>
                </SimpleBar>
              </NavDropdown>
              <HoverDropdown className="usermenudrop" title={<div className="pull-left"><Image src="assets/images/profile.svg" className="photopic" alt="user" /></div>} id="profiledrp">
                <NavDropdown.Item as={Link} href="/profile" className="profilesubdropbox">
                  <span className="photopic">
                    <Image src="assets/images/profile.svg" alt="icon" width={100} height={100} id="profile" />
                  </span>
                  <h5>testuser@gmail.com<span className="t-gray ms-1">(<span className="t-green"> <FontAwesomeIcon icon={faCheck} /></span><span className="t-green ms-1">Verified</span> )</span><br /><span className="t-gray">username</span></h5>
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Item as={Link} href="/profile" id="profilelink"><span className="iconboxbg"><Image src="assets/images/usericon.svg" alt="icon" width={100} height={100} /></span>Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/security" id="securitylink"><span className="iconboxbg"><Image src="assets/images/securityicon.svg" alt="icon" width={100} height={100} /></span>Security</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/kyc" id="kyclink" className={`${pathname === '/kyc' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></span>Kyc</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/referral" id="reflink" className={`${pathname === '/referral' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/reficon1.svg" alt="icon" width={100} height={100} /></span>Referral</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/support" id="supportlink" className={`${pathname === '/support' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/supporticon.svg" alt="icon" width={100} height={100} /></span>Support</NavDropdown.Item>
                <hr />
                <NavDropdown.Item as={Link} href="/" id="logoutlink"><span className="iconboxbg"><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></span>Sign Out</NavDropdown.Item>
              </HoverDropdown>
              {/* <Nav.Item className="mt-2 pt-1"><Image src="assets/images/profile.svg" className="photopic" alt="user" width={100} height={100} />
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  )
}

export default Userheader