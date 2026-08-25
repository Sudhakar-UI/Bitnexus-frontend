import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Image,
  Button, Accordion
} from "react-bootstrap";
const Homefootermobile = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <footer className="footerbottombg footerbottombg-x">
      <section>
        <Container className="sitecontainer">
          <div className="footerbox p-2">
            <div className="d-flex justify-content-between align-items-center footerbox-align">
              {/* <div className="footlogo">
                <Image
                  src="assets/images/logo.svg"
                  width={100}
                  height={57}
                  className=""
                  alt="logo"
                />
              </div> */}

            </div>
            <Row className="menusec subscribebg "
            >

              <div className="faqsecbox mx-auto  faqquetbanner"

              >
                <div className="faqcntbox">
                  <Accordion
                    defaultActiveKey="1"
                    activeKey={activeKey}
                    onSelect={(k) => setActiveKey(k)}
                    flush
                  >
                    <Accordion.Item
                      eventKey="1"
                      className={activeKey === "1" ? "active" : ""}
                    >
                      <Accordion.Header>
                        <h3 className="h3">Menu</h3>
                      </Accordion.Header>
                      <Accordion.Body>
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
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="2"
                      className={activeKey === "2" ? "active" : ""}
                    >
                      <Accordion.Header>
                        <h3 className="h3">Links</h3>

                      </Accordion.Header>
                      <Accordion.Body>
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
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              </div>
              <Col lg={4} md={12}>
                {/* <h3 className="h3">Newsletter Signup</h3> */}
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
                <p className="mt-4 footerbottombg-x-p">
                  Copyright © 2025 BitNexus. All rights reserved. <br />
                  <span className="main-x-alink"> <Link href="terms" className="alink" >Terms and Conditions</Link> / <Link href="privacy" className="alink">Privacy Policy</Link> </span>
                </p>
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
              </Col>
            </Row>
          </div>
        </Container>
        <section

        >
          <Container>


          </Container>
        </section>
      </section>
    </footer>
  );
};
export default Homefootermobile;
