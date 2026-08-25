import React from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Image,
  Button,
} from "react-bootstrap";
const Homefooter = () => {
  return (
    <footer className="footerbottombg">
      <section>
        <Container className="">
          <div className="footerbox">
            <div className="d-flex justify-content-between align-items-center footerbox-align">
              <div className="footlogo">
                <Image
                  src="assets/images/logo.svg"
                  width={100}
                  height={57}
                  className=""
                  alt="logo"
                />
              </div>
              <div className="foot-social-icons-align">
                <Link href="#0">
                  <Image
                    src="./assets/images/facebook-icon.svg"
                    className="foot-social-icons"
                  ></Image>
                </Link>
                <Link href="#0">
                  <Image
                    src="./assets/images/twitter-icon.svg"
                    className="foot-social-icons"
                  ></Image>
                </Link>
                <Link href="#0">
                  <Image
                    src="./assets/images/telegram-icon.svg"
                    className="foot-social-icons"
                  ></Image>
                </Link>
              </div>
            </div>
            <Row className="menusec subscribebg mt-3">
              <Col lg={4} md={12}>
                <div className="footabtcnt">
                  <p>
                    Your trusted spot exchange for buying and selling digital
                    assets effortlessly. Designed for beginners and experts with
                    powerful tools and industry-grade security.
                  </p>

                  <p className="mt-4 footerbottombg-x-p">
                    Copyright © 2025 BitNexus. All rights reserved. <br />
                    <span className="main-x-alink"> <Link href="terms" className="alink" >Terms and Conditions</Link> / <Link href="privacy" className="alink">Privacy Policy</Link> </span>
                  </p>
                </div>
              </Col>
              <Col lg={2} md={3}>
                <h3 className="h3">Menu</h3>
                <ul>
                  <li>
                    <Link id="featureslink" href="#0">
                      Markets
                    </Link>
                  </li>
                  <li>
                    <Link id="howitworkslink" href="#0">
                      Trade
                    </Link>
                  </li>
                  <li>
                    <Link id="aboutuslink" href="#0">
                      Earn
                    </Link>
                  </li>
                  <li>
                    <Link id="aboutuslink" href="#0">
                      Convert
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={2} md={3}>
                <h3 className="h3">Links</h3>
                <ul>
                  <li>
                    <Link id="spotlink" href="#0">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link id="derivativelink" href="#0">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link id="derivativelink" href="#0">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link id="derivativelink" href="#0">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={4} md={6}>
                <h3 className="h3">Newsletter Signup</h3>
                <div className="email-wrapper-align">
                  <div className="email-wrapper">
                    <input
                      type="text"
                      className="email-input"
                      placeholder="Email Address"
                    />
                    <Button className="email-btn">Subscribe</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </footer>
  );
};
export default Homefooter;
