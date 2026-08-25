"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Image,
  Table,
  Tabs,
  Button,
  Accordion,
} from "react-bootstrap";
import Homeheader from "../../Homeheader";
import Homefooter from "../../Homefooter";
import "react-multi-carousel/lib/styles.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Carousel from "react-multi-carousel";

import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveTable from "../../ResponsiveTable";
import { useTheme } from "../../../context/ThemeContext";

export default function Home() {
  const scrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;

      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const percentScrolled = (scrollLeft / maxScrollLeft) * 100;

      const progressBar = document.getElementById("scroll-progress-fill");
      if (progressBar) {
        progressBar.style.width = `${percentScrolled}%`;
      }
    };

    const timeout = setTimeout(() => {
      const container = scrollRef.current;
      if (container) {
        container.addEventListener("scroll", handleScroll);
      }
    }, 100); // small delay

    return () => {
      const container = scrollRef.current;
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    document.body.classList.remove("loginbanner");
    AOS.init();
  });
  const [activeKey, setActiveKey] = useState("1");

  const { isNightMode } = useTheme();
  const carouselRef = useRef(null);
  const responsive = {
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 991, min: 576 },
      items: 3,
      slidesToSlide: 1
    },
    laptop: {
      breakpoint: { max: 1199, min: 992 },
      items: 4,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
      slidesToSlide: 1
    }
  };

  return (
    <div className="homepagebg">
      <Homeheader />
      <section className="homebannerbg">
        <Container className="sitebannercontent">
          <Row className="homealign-items-center row-gap-3">
            <Col lg={6} md={6} sm={12}>
              <h1 className="heading-title">
                Trade Crypto <br /> Instantly on a Secure <br /> Spot Exchange
              </h1>
              <p>
                Spot trade the top cryptocurrencies with integrated wallets,
                live <br /> charts, referrals, earn & more.
              </p>
              <Button className="sitebtn mt-3">Start Trading</Button>
            </Col>
            <Col lg={6} md={6} sm={12}>
              {isNightMode ? (
                <Image
                  src="assets/images/banner-img-dark.gif"
                  width={100}
                  height={100}
                  alt="banner"
                  className="banner-img"
                />
              ) : (
                <Image
                  src="assets/images/banner-img-light.gif"
                  width={100}
                  height={100}
                  alt="banner"
                  className="banner-img"
                />
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="homepage-cards-align">
        <Container>
          <div>
            <Carousel showDots={true} responsive={responsive} ref={carouselRef} autoPlaySpeed={3000} arrows={false} infinite className="raodmap pb-4">
              <div >
                <div className="home-banner-cards">
                  <Image
                    src="./assets/images/color/btc.svg"
                    className="home-banner-icon"
                  ></Image>
                  <h5 className="sub-heading">
                    Bitcoin <span>(BTC)</span>
                  </h5>
                  <h6>82,212.13</h6>
                  <span className="t-green">+0.10%</span>
                  <Button className="home-banner-btn">Trade</Button>
                </div>
              </div>
              <div >
                <div className="home-banner-cards">
                  <Image
                    src="./assets/images/color/eth.svg"
                    className="home-banner-icon"
                  ></Image>
                  <h5 className="sub-heading">
                    Ethereum <span>(ETH)</span>
                  </h5>
                  <h6>2,688.43</h6>
                  <span className="t-red">-0.03%</span>
                  <Button className="home-banner-btn">Trade</Button>
                </div>
              </div>
              <div>
                <div className="home-banner-cards">
                  <Image
                    src="./assets/images/color/bnb.svg"
                    className="home-banner-icon"
                  ></Image>
                  <h5 className="sub-heading">
                    Binance <span>(BNB)</span>
                  </h5>
                  <h6>807.96</h6>
                  <span className="t-green">+0.14%</span>
                  <Button className="home-banner-btn">Trade</Button>
                </div>
              </div>
              <div>
                <div className="home-banner-cards">
                  <Image
                    src="./assets/images/color/trx.svg"
                    className="home-banner-icon"
                  ></Image>
                  <h5 className="sub-heading">
                    Tron <span>(TRX)</span>
                  </h5>
                  <h6>0.2756</h6>
                  <span className="t-red">-0.04%</span>
                  <Button className="home-banner-btn">Trade</Button>
                </div>
              </div>
              <div>
                <div className="home-banner-cards">
                  <Image
                    src="./assets/images/color/sol.svg"
                    className="home-banner-icon"
                  ></Image>
                  <h5 className="sub-heading">
                    Solana <span>(SOL)</span>
                  </h5>
                  <h6>124.12</h6>
                  <span className="t-green">+0.63%</span>
                  <Button className="home-banner-btn">Trade</Button>
                </div>
              </div>
              <div>
                <div className="home-banner-cards">
                  <Image
                    src="./assets/images/color/xrp.svg"
                    className="home-banner-icon"
                  ></Image>
                  <h5 className="sub-heading">
                    Ripple <span>(XRP)</span>
                  </h5>
                  <h6>1.8680</h6>
                  <span className="t-red">-0.15%</span>
                  <Button className="home-banner-btn">Trade</Button>
                </div>
              </div>

            </Carousel>
            <Row className="row-gap-2">

            </Row>
          </div>
        </Container>
      </section>

      <section className="markettablebg" id="marketslist">
        <Container data-aos="fade-up" data-aos-duration="1000">
          <h2 className="heading-title pb-3">
            Begin Your Crypto Experience Today
          </h2>
          <Row className="mt-4 row-gap-3 cryptocards-row-align">
            <Col lg={4} md={4} sm={12}>
              <div className="crypto-exp-cards">
                <div className="cryptocards-head-align">

                  {isNightMode ? (
                    <Image
                      src="./assets/images/crypto-exp-icon1-dark.svg"
                      className="cryptocards-icon"
                    ></Image>
                  ) : (
                    <Image
                      src="./assets/images/crypto-exp-icon1-light.svg"
                      className="cryptocards-icon"
                    ></Image>
                  )}
                  <h5 className="sub-heading">Step 1</h5>
                </div>
                <h6>Create an account</h6>
                <p className="content">
                  Create your trading account instantly using your email and
                  secure login details.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="crypto-exp-cards">
                <div className="cryptocards-head-align">

                  {isNightMode ? (
                    <Image
                      src="./assets/images/crypto-exp-icon2-dark.svg"
                      className="cryptocards-icon"
                    ></Image>
                  ) : (
                    <Image
                      src="./assets/images/crypto-exp-icon2-light.svg"
                      className="cryptocards-icon"
                    ></Image>
                  )}
                  <h5>Step 2</h5>
                </div>
                <h6>KYC Verification</h6>
                <p className="content">
                  Complete quick KYC verification to unlock full trading access
                  and improved security.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="crypto-exp-cards">
                <div className="cryptocards-head-align">
                  {isNightMode ? (
                    <Image
                      src="./assets/images/crypto-exp-icon3-dark.svg"
                      className="cryptocards-icon"
                    ></Image>
                  ) : (
                    <Image
                      src="./assets/images/crypto-exp-icon3-light.svg"
                      className="cryptocards-icon"
                    ></Image>
                  )}
                  <h5>Step 3</h5>
                </div>
                <h6>Start Trade</h6>
                <p className="content">
                  Deposit funds, choose your cryptocurrency pair, and begin spot
                  trading effortlessly.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="howitbg">
        <Container data-aos="fade-up" data-aos-duration="1000">
          <div className="power-trading-box">
            <h2 className="heading-title text-center mb-4 pb-3">
              Powerful Trading Features Built For Every User
            </h2>
            <Row className="pt-3">
              <Col lg={6} md={6} sm={12}>
                <div className="trade-box-cards">
                  <div className="pow-trade-icon-bg">
                    <Image
                      src="./assets/images/power-trade-icon1.svg"
                      className="pow-trade-icon"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="sub-heading">Spot Trading</h5>
                    <p className="content">
                      Trade top cryptocurrencies instantly with real-time prices
                      and seamless order execution.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="trade-box-cards">
                  <div className="pow-trade-icon-bg">
                    <Image
                      src="./assets/images/power-trade-icon2.svg"
                      className="pow-trade-icon"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="sub-heading">Earn</h5>
                    <p className="content">
                      Stake assets securely and earn steady passive returns with
                      flexible options.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="trade-box-cards">
                  <div className="pow-trade-icon-bg">
                    <Image
                      src="./assets/images/power-trade-icon3.svg"
                      className="pow-trade-icon"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="sub-heading">Instant Swap</h5>
                    <p className="content">
                      Swap cryptocurrencies instantly with zero complexity and
                      fast on-chain settlement.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="trade-box-cards">
                  <div className="pow-trade-icon-bg">
                    <Image
                      src="./assets/images/power-trade-icon4.svg"
                      className="pow-trade-icon"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="sub-heading">Referral Rewards</h5>
                    <p className="content">
                      Invite friends and earn exciting rewards every time they
                      trade actively.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="trade-box-cards">
                  <div className="pow-trade-icon-bg">
                    <Image
                      src="./assets/images/power-trade-icon5.svg"
                      className="pow-trade-icon"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="sub-heading">Multi-Chain Wallet</h5>
                    <p className="content">
                      Store, send, and receive crypto across multiple supported
                      blockchains without restrictions.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="trade-box-cards">
                  <div className="pow-trade-icon-bg">
                    <Image
                      src="./assets/images/power-trade-icon6.svg"
                      className="pow-trade-icon"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="sub-heading">High Liquidity</h5>
                    <p className="content">
                      Enjoy faster trades, minimal slippage, and efficient order
                      matching anytime you trade.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="featuresbg" id="features">
        <Container>
          <Row className="row-gap-3 align-items-center">
            <Col lg={4} md={6} sm={12}>
              <div className="d-flex justify-content-center align-items-center">

                {isNightMode ? (
                  <Image
                    src="./assets/images/wallet-img-dark.gif"
                    className="mutli-chain-img"
                  ></Image>
                ) : (
                  <Image
                    src="./assets/images/multi-chain-img.gif"
                    className="mutli-chain-img"
                  ></Image>
                )}
              </div>
            </Col>
            <Col lg={8} md={6} sm={12}>
              <div>
                <h2 className="heading-title">
                  Multi-Chain Wallet with Wide Asset Support
                </h2>
                <p className="content">
                  We support major blockchain networks and popular
                  cryptocurrencies with fast deposits and withdrawals.
                </p>
                <div className="multi-chain-span-align">
                  <span className="multi-chain-span">ERC20</span>
                  <span className="multi-chain-span">BEP20</span>
                  <span className="multi-chain-span">TRC20</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="faqquetbanner"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Container>
          <h2 className="heading-title text-center">FAQ</h2>
          <div className="faqsecbox mx-auto mt-4">
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
                    What is a cryptocurrency spot exchange?
                  </Accordion.Header>
                  <Accordion.Body>
                    A spot exchange lets you buy or sell cryptocurrencies at
                    real-time market prices.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  className={activeKey === "2" ? "active" : ""}
                >
                  <Accordion.Header>
                    Is KYC verification mandatory?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae nobis consectetur pariatur quidem sit quo fugit
                    et cumque itaque, eius ipsam dolore iure dolor error,
                    blanditiis quaerat, quos autem! Nihil.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  className={activeKey === "3" ? "active" : ""}
                >
                  <Accordion.Header>How do I deposit funds?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae nobis consectetur pariatur quidem sit quo fugit
                    et cumque itaque, eius ipsam dolore iure dolor error,
                    blanditiis quaerat, quos autem! Nihil.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  className={activeKey === "4" ? "active" : ""}
                >
                  <Accordion.Header>
                    How do I start spot trading?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="5"
                  className={activeKey === "5" ? "active" : ""}
                >
                  <Accordion.Header>
                    What fees do I need to pay?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae nobis consectetur pariatur quidem sit quo fugit
                    et cumque itaque, eius ipsam dolore iure dolor error,
                    blanditiis quaerat, quos autem! Nihil.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      <Homefooter />
    </div>
  );
}
