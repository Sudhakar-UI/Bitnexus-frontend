"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    Container,
    Row,
    Col,
    Image,
    Table,
    Tabs,
    Tab,
    Button,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody,
} from "react-bootstrap";
import Homeheader from "../../components/Homeheader";
import Homefooter from "../../components/Homefooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";


const page = () => {
    const { isNightMode } = useTheme();

    useEffect(() => {
        document.body.classList.add("affiliatepage");
        document.body.classList.remove("userpanelpage");

        return () => {
            document.body.classList.remove("affiliatepage");
        };
    });
    return (
        <div className="affiliate-page">
            <Homeheader />
            <section className="affiliate-bg homebannerbg" id="banner">
                <Container className="afiiliate-banner sitebannercontent">
                    <Row className="align-items-center row-gap-3">
                        <Col lg={6} sm={6} >
                            <h2 className="heading-title">
                                Earn More by Referring. Grow Together.
                            </h2>
                            {/* <span className="t-yellow">Affiliate</span> */}
                            <p className="content">
                                Join our affiliate program and earn recurring commissions by <br /> introducing users to a secure, high-liquidity crypto platform.
                            </p>
                            <Link href="/affiliate-form" className="btn sitebtn">
                                Get Started Now
                            </Link>
                        </Col>
                        <Col lg={6} sm={6} className="d-flex justify-content-center">
                            <Image
                                className="dark-img affiliate-bner-img"
                                src="assets/images/affiliate-banner-image.svg"
                            ></Image>
                            {/* <Image
                className="light-img"
                src="assets/images/affiliate-banner-imglit.svg"
              ></Image> */}

                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className="affiliate-section chooseus" id="features">
                <Container>
                    <h2 className="heading-title">Why Join Us?</h2>
                    <div className="row row-gap-2 mt-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="chooseus-cards h-100">
                                <Image
                                    src="assets/images/why-join-icon1.svg"
                                    height={50}
                                    width={50}
                                ></Image>
                                <h4 className="sub-heading mb-0">High Transaction Fee</h4>
                                <p className="content">
                                    Earn up to a 50% commission from your direct referrals,
                                    plus an additional 10% commission from your indirect
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="chooseus-cards h-100">
                                <Image
                                    src="assets/images/why-join-icon2.svg"
                                    height={50}
                                    width={50}
                                ></Image>
                                <h4 className="sub-heading mb-0">Daily Mark-to-Market</h4>
                                <p className="content">
                                    Your daily cashback earnings will be settled automatically,
                                    along with a delivery of your detailed performance metrics report.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="chooseus-cards h-100">
                                <Image
                                    src="assets/images/why-join-icon3.svg"
                                    height={50}
                                    width={50}
                                ></Image>
                                <h4 className="sub-heading mb-0">Tier 2 Referral</h4>
                                <p className="content">
                                    You will enjoy an extra 10% commission on the trading activity
                                    generated by your Tier 2 (indirect) network.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="affiliate-extra d-flex align-items-start gap-3 mt-3">
                        <div>
                            <Image
                                src="assets/images/why-join-icon4.svg"
                                height={50}
                                width={50}
                            ></Image>
                        </div>
                        <div>
                            <h4 className="sub-heading">
                                An extra 2.5 USDT for each 50,000 USDT trade volume!
                            </h4>
                            <p className="content mb-0">
                                All Zayro affiliates earn an extra 2.5 USDT for every 50,000
                                USDT in trading volume generated by their referrals. It’s our
                                way of showing appreciation for your support.
                            </p>
                        </div>
                    </div>
                </Container>
            </section> */}

            <section className="affiliate-benefits">
                <Container>
                    <h2 className="heading-title pb-5">How the Affiliate Program Works</h2>
                    <div className="how-tt-flex">
                        <div>
                            <div>
                                <h3 className="how-tt text-end">1.Sign up for the affiliate program</h3>
                                <p className=" text-end">Register in minutes, access your affiliate dashboard instantly, <br /> and unlock tools designed to help you start earning without delay.</p>
                            </div>
                            <div className="mt-5">
                                <h3 className="how-tt text-end">4. Earn commissions automatically</h3>
                                <p className=" text-end">Earn commissions automatically whenever your referred  <br />users trade,  with transparent tracking, real-time reports, and reliable payouts.</p>
                            </div>
                        </div>
                        <div>

                            {isNightMode ? (
                                <Image
                                    className="how-affiliate-works-img"
                                    src="assets/images/how-affiliate-works-img-dark.svg"
                                    height={50}
                                    width={50}
                                ></Image>
                            ) : (
                                <Image
                                    className="how-affiliate-works-img"
                                    src="assets/images/how-affiliate-works-img.svg"
                                    height={50}
                                    width={50}
                                ></Image>
                            )}
                        </div>
                        <div>
                            <div>
                                <h3 className="how-tt">2. Get your unique referral link</h3>
                                <p>Receive a unique, trackable referral link that accurately records  <br /> every signup, activity, and commission generated from your promotions.</p>
                            </div>
                            <div className="mt-5">
                                <h3 className="how-tt">3. Invite users to trade on our platform</h3>
                                <p>Share your referral link across websites, social media, <br /> or communities  and encourage users to trade securely using our wallet.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="howitbg py-0">
                <Container data-aos="fade-up" data-aos-duration="1000">
                    <div className="power-trading-box">
                        <h2 className="heading-title text-center mb-4 pb-3">
                            Why Join Our Affiliate Program?
                        </h2>
                        <Row className="pt-3">
                            <Col lg={6} md={6} sm={12}>
                                <div className="trade-box-cards">
                                    <div className="pow-trade-icon-bg">
                                        <Image
                                            src="./assets/images/ftr-1.svg"
                                            className="pow-trade-icon"
                                        ></Image>
                                    </div>
                                    <div>
                                        <h5 className="sub-heading">Dynamic, competitive fees</h5>
                                        <p className="content">
                                            Adaptive fee structure ensures competitive rates across all supported markets.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="trade-box-cards">
                                    <div className="pow-trade-icon-bg">
                                        <Image
                                            src="./assets/images/ftr-2.svg"
                                            className="pow-trade-icon"
                                        ></Image>
                                    </div>
                                    <div>
                                        <h5 className="sub-heading">Global user access</h5>
                                        <p className="content">
                                            Reach users worldwide with seamless onboarding and multi-region accessibility.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="trade-box-cards">
                                    <div className="pow-trade-icon-bg">
                                        <Image
                                            src="./assets/images/ftr-3.svg"
                                            className="pow-trade-icon"
                                        ></Image>
                                    </div>
                                    <div>
                                        <h5 className="sub-heading">Real-time affiliate dashboard</h5>
                                        <p className="content">
                                            Monitor referrals, conversions, and earnings instantly through live analytics.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="trade-box-cards">
                                    <div className="pow-trade-icon-bg">
                                        <Image
                                            src="./assets/images/ftr-4.svg"
                                            className="pow-trade-icon"
                                        ></Image>
                                    </div>
                                    <div>
                                        <h5 className="sub-heading">Long-term recurring earnings</h5>
                                        <p className="content">
                                            Generate ongoing commissions from active users over extended periods.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="trade-box-cards">
                                    <div className="pow-trade-icon-bg">
                                        <Image
                                            src="./assets/images/ftr-5.svg"
                                            className="pow-trade-icon"
                                        ></Image>
                                    </div>
                                    <div>
                                        <h5 className="sub-heading">Trusted, secure crypto infrastructure</h5>
                                        <p className="content">
                                            Built on audited, enterprise-grade blockchain security standards.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="trade-box-cards">
                                    <div className="pow-trade-icon-bg">
                                        <Image
                                            src="./assets/images/ftr-6.svg"
                                            className="pow-trade-icon"
                                        ></Image>
                                    </div>
                                    <div>
                                        <h5 className="sub-heading">No hidden deductions or limits</h5>
                                        <p className="content">
                                            Transparent payouts with no caps, deductions, or unexpected fees.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="howitworkbg" id="howitwrks">
                <Container>
                    <h2 className="heading-title text-center">
                        Earn More as Your Network Grows
                    </h2>
                    <p className="content text-center">
                        Earn attractive commissions for every verified user you refer. As your referral volume grows, unlock higher commission <br /> tiers and exclusive affiliate benefits.
                    </p>
                    <div className="howitworkbg-flex">
                        <div className="network-grows">
                            <Image src="./assets/images/commission.svg" className="howitworkbg-icon"></Image>
                            <h4>1% commission on wallet <br /> activity</h4>
                        </div>
                        <div className="network-grows">
                            <Image src="./assets/images/reward.svg" className="howitworkbg-icon"></Image>
                            <h4>Tier-based rewards for high <br /> performers</h4>
                        </div>
                        <div className="network-grows">
                            <Image src="./assets/images/bonus.svg" className="howitworkbg-icon"></Image>
                            <h4>Bonus payouts for top affiliates</h4>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="faqquetbanner faqquetbanner-aff pt-0">
                <Container
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="container"
                >
                    <h2 className="heading-title text-center">
                        FAQ
                    </h2>
                    <div>
                        <div className="faqsecbox mx-auto mt-4">
                            <div className="faqcntbox">
                                <Accordion defaultActiveKey="0">
                                    <AccordionItem eventKey="0">
                                        <AccordionHeader>
                                            What is a cryptocurrency spot exchange?
                                        </AccordionHeader>
                                        <AccordionBody>
                                            A spot exchange lets you buy or sell cryptocurrencies at real-time market prices.
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem eventKey="1">
                                        <AccordionHeader>
                                            Is KYC verification mandatory?
                                        </AccordionHeader>
                                        <AccordionBody>
                                            YouTubers, Website owners, Social media content creators,
                                            Crypto Community leaders, …. Who have can meet only 1 of the
                                            following criteria can participate in this program: - Social
                                            media accounts with more than 5000 - followers Communities
                                            with more than 500 members
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem eventKey="2">
                                        <AccordionHeader>
                                            How do I deposit funds?
                                        </AccordionHeader>
                                        <AccordionBody>
                                            To earn commission through the Zayro Affiliate Program,
                                            share your referral links with friends. When they trade on
                                            the platform, you get up to 60% of their trading fees.
                                            Customize your links to offer unique incentives for better
                                            results.
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem eventKey="3">
                                        <AccordionHeader>
                                            How do I start spot trading?
                                        </AccordionHeader>
                                        <AccordionBody>
                                            To earn commission through the Zayro Affiliate Program,
                                            share your referral links with friends. When they trade on
                                            the platform, you get up to 60% of their trading fees.
                                            Customize your links to offer unique incentives for better
                                            results.
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem eventKey="4">
                                        <AccordionHeader>
                                            What fees do I need to pay?
                                        </AccordionHeader>
                                        <AccordionBody>
                                            To earn commission through the Zayro Affiliate Program,
                                            share your referral links with friends. When they trade on
                                            the platform, you get up to 60% of their trading fees.
                                            Customize your links to offer unique incentives for better
                                            results.
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            {/* <section className="cryptojrny">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="heading-title p-0 t-white">
                Spread the word about Zayro Community and get paid!
              </h2>
            </div>
            <div className="col-md-4 text-end">
              <Link href="affiliate-form" className="btn sitebtn">
                Become an affiliate now
              </Link>
            </div>
          </div>
        </Container>
      </section> */}
            <Homefooter />
        </div>
    );
};

export default page;
