import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";
import "../../../public/assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import HoverDropdown from "./Hoverdropdown";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import { useTheme } from "../context/ThemeContext";

const Homeheader = () => {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("userpanelpage");
  });

  const { isNightMode, toggleNightMode } = useTheme();

  return (
    <header className="headermenu">
      <Navbar expand="lg" className="headbg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image
                src="assets/images/logo.svg"
                width={100}
                height={57}
                className="logo"
                alt="logo"
              />
            </Link>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav leftheadbg mx-auto">
              <Nav.Item>
                <Link
                  href="/markets"
                  id="tradelink"
                  className={`nav-link ${pathname === "/markets" ? "active" : ""
                    }`}
                >
                  Markets
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  href="/trade"
                  id="tradelink"
                  className={`nav-link ${pathname === "/trade" ? "active" : ""
                    }`}
                >
                  Trade
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  href="/earn"
                  id="earnlink"
                  className={`nav-link ${pathname === "/earn" ? "active" : ""}`}
                >
                  Earn
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  href="/convert"
                  id="convertlink"
                  className={`nav-link ${pathname === "/convert" ? "active" : ""
                    }`}
                >
                  Convert
                </Link>
              </Nav.Item>
            </Nav>
            <Nav className="navbar-nav rightheadbg align-items-center">
              <Nav.Item className=" sun-icon-width">
                <Link href="#0" onClick={toggleNightMode}>
                  {isNightMode ? (
                    <Image
                      src="./assets/images/sun.svg"
                      className="nav-link modeicon px-0"
                      alt="icon"
                    ></Image>
                  ) : (
                    <Image
                      src="./assets/images/moon.svg"
                      className="nav-link modeicon px-0"
                      alt="icon"
                    ></Image>
                  )}
                </Link>
              </Nav.Item>

              {/* <Nav.Item><Link href="#" className="nav-link modeicon  daymodeicon" onClick={handleNightModeClick}><Image src="assets/images/moon.svg" width={20} height={20} alt="icon" /></Link></Nav.Item>
              <Nav.Item><Link href="#" className="nav-link modeicon nightmodeicon" onClick={handleDayModeClick}><Image src="assets/images/sun.svg" width={20} height={20} alt="icon" /></Link></Nav.Item>  */}

              <NavDropdown
                title={
                  <div className="pull-left menushapeicon">
                    <Image
                      src="assets/images/langicon.svg"
                      className="menuicon"
                      alt="user"
                      width={100}
                      height={57}
                    />{" "}
                    EN
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

              <Nav.Item>
                <Link
                  href="/signin"
                  id="login"
                  className="nav-link btn viewbtn"
                >
                  Sign In
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  href="/signup"
                  id="register"
                  className="nav-link btn sitebtn me-1 ms-2"
                >
                  Sign Up
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Homeheader;
