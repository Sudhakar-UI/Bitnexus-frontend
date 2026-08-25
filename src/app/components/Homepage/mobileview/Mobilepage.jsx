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
    Nav,
    NavDropdown,
    Tab,

} from "react-bootstrap";
import Userheader from '../../Userheader';
import Homeheader from "../../Homeheader";
import Homefootermobile from "../../Footermenu-mobile";
import "react-multi-carousel/lib/styles.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import AOS from "aos";
import '../../../../../public/assets/css/mobileview.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";
import ResponsiveTable from "../../ResponsiveTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useSideMenu } from "../../../SideMenuProvider"
import Mobilemenu from "../../Mobilemenu";



export default function Home() {
    const responsive = {
        mobile: { breakpoint: { max: 767, min: 0 }, items: 1 }
    }
    const responsive2 = {
        tablet: { breakpoint: { max: 767, min: 640 }, items: 3 },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
    }
    const scrollRef = useRef();
    const carouselRef = useRef(null);
    const { openMenu } = useSideMenu();



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
    return (
        <div className="homepagebg pt-0 mobileview homemobileview white-bg-x">

            {/* <Homeheader /> */}
            <section className="homebannerbg">
                <Container className="sitebannercontent pt-0 px-3">
                    <div className="mbheadingbox p-3 px-0  justify-content-between">
                        <div className=' text-st'>
                            <Image
                                src="assets/images/logo.svg"
                                width={100}
                                height={57}
                                className="logo"
                                alt="logo"
                            />
                        </div>
                        <div className="d-flex">
                            <div className="humberbutton me-2">
                                <div className="bckbtn mt-0" id="backbtn">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </div>

                            </div>
                            <div className="humberbutton" onClick={openMenu}>
                                <div className="bckbtn mt-0" id="backbtn">
                                    <FontAwesomeIcon icon={faBars} />
                                </div>

                            </div>
                        </div>

                    </div>
                    <Row className="homealign-items-center row-gap-3">
                        <Col lg={6} md={6} sm={12} className="d-flex align-items-start flex-column p-3 pb-4">
                            <h1 className="heading-title text-start">
                                Trade Crypto <br /> Instantly on a Secure <br /> Spot Exchange
                            </h1>
                            <p className="text-start">
                                Spot trade the top cryptocurrencies with integrated wallets,
                                live <br /> charts, referrals, earn & more.
                            </p>
                            <Button className="sitebtn mt-3 text-start">Start Trading</Button>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className="homepage-cards-align">
                <Container>
                  
                        <Carousel showDots={true} responsive={responsive2} ref={carouselRef} autoPlaySpeed={3000} arrows={false} infinite className="raodmap pb-4">

                            <div className="home-banner-cards">
                                <div className="d-flex gap-2 flex-column align-items-center justify-content-center  w-100">
                                    <Image
                                        src="./assets/images/color/btc.svg"
                                        className="home-banner-icon"
                                    ></Image>

                                    <h5 className="sub-heading">
                                        Bitcoin <span>(BTC)</span>
                                    </h5>
                                    <h6>82,212.13 </h6>
                                    <span className="tt-text-green">+0.10%</span>
                                </div>
                            </div>


                            <div className="home-banner-cards">
                                <div className="d-flex gap-2 flex-column align-items-center justify-content-center  w-100">
                                    <Image
                                        src="./assets/images/color/eth.svg"
                                        className="home-banner-icon"
                                    ></Image>

                                    <h5 className="sub-heading">
                                        Bitcoin <span>(BTC)</span>
                                    </h5>
                                    <h6>82,212.13 </h6>
                                    <span className="tt-text-green">+0.10%</span>
                                </div>
                            </div>
                            <div className="home-banner-cards">
                                <div className="d-flex gap-2 flex-column align-items-center justify-content-center  w-100">
                                    <Image
                                        src="./assets/images/color/bnb.svg"
                                        className="home-banner-icon"
                                    ></Image>

                                    <h5 className="sub-heading">
                                        Bitcoin <span>(BTC)</span>
                                    </h5>
                                    <h6>82,212.13 </h6>
                                    <span className="tt-text-green">+0.10%</span>
                                </div>
                            </div>

                            <div className="home-banner-cards">
                                <div className="d-flex gap-2 flex-column align-items-center justify-content-center  w-100">
                                    <Image
                                        src="./assets/images/color/trx.svg"
                                        className="home-banner-icon"
                                    ></Image>

                                    <h5 className="sub-heading">
                                        Bitcoin <span>(BTC)</span>
                                    </h5>
                                    <h6>82,212.13 </h6>
                                    <span className="tt-text-green">+0.10%</span>
                                </div>
                            </div>

                            <div className="home-banner-cards">
                                <div className="d-flex gap-2 flex-column align-items-center justify-content-center  w-100">
                                    <Image
                                        src="./assets/images/color/sol.svg"
                                        className="home-banner-icon"
                                    ></Image>

                                    <h5 className="sub-heading">
                                        Bitcoin <span>(BTC)</span>
                                    </h5>
                                    <h6>82,212.13 </h6>
                                    <span className="tt-text-green">+0.10%</span>


                                </div>

                            </div>
                            <div className="home-banner-cards">
                                <div className="d-flex gap-2 flex-column align-items-center justify-content-center  w-100">
                                    <Image
                                        src="./assets/images/color/xrp.svg"
                                        className="home-banner-icon"
                                    ></Image>

                                    <h5 className="sub-heading">
                                        Bitcoin <span>(BTC)</span>
                                    </h5>
                                    <h6>82,212.13 </h6>
                                    <span className="tt-text-green">+0.10%</span>


                                </div>

                            </div>
                        </Carousel>

                 
                </Container>
            </section>
            <section className="markettablebg" id="marketslist">
                <Container data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="heading-title pb-3">
                        Begin Your Crypto Experience Today
                    </h2>
                    <Row className="mt-4 row-gap-3 ">
                        <Col lg={4} md={4} sm={12}>
                            <div className="crypto-exp-cards">
                                <div className="cryptocards-head-align">
                                    <Image
                                        src="./assets/images/crypto-exp-icon1-light.svg"
                                        className="cryptocards-icon"
                                    ></Image>
                                </div>
                                <div>
                                    <h5 className="sub-heading sub-heading-home">Step 1</h5>
                                    <h6>Create an account</h6>
                                    <p className="content">
                                        Create your trading account instantly using your email and
                                        secure login details.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className="crypto-exp-cards">
                                <div className="cryptocards-head-align">
                                    <Image
                                        src="./assets/images/crypto-exp-icon2-light.svg"
                                        className="cryptocards-icon"
                                    ></Image>
                                </div>
                                <div>
                                    <h5 className="sub-heading-home">Step 2</h5>
                                    <h6>KYC Verification</h6>
                                    <p className="content">
                                        Complete quick KYC verification to unlock full trading access
                                        and improved security.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className="crypto-exp-cards">
                                <div className="cryptocards-head-align">
                                    <Image
                                        src="./assets/images/crypto-exp-icon3-light.svg"
                                        className="cryptocards-icon"
                                    ></Image>
                                </div>
                                <div>
                                    <h5 className="sub-heading-home">Step 3</h5>
                                    <h6>Start Trade</h6>
                                    <p className="content">
                                        Deposit funds, choose your cryptocurrency pair, and begin spot
                                        trading effortlessly.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="howitbg">
                <Container data-aos="fade-up" data-aos-duration="1000">
                    <div className="power-trading-box">
                        <h2 className="heading-title text-center mb-0 pb-3">
                            Powerful Trading Features Built For Every User
                        </h2>
                        <div className="ftflex">
                            <Carousel showDots={true} responsive={responsive} ref={carouselRef} autoPlaySpeed={3000} arrows={false} infinite className="raodmap pb-4">
                                <div className="crypto-exp-cards">
                                    <div className="cryptocards-head-align">
                                        <div className="pow-trade-icon-bg">
                                            <Image
                                                src="./assets/images/power-trade-icon1.svg"
                                                className="pow-trade-icon"
                                            ></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Spot Trading</h6>
                                        <p className="content mb-0">
                                            Trade top cryptocurrencies instantly with real-time prices and seamless order execution.
                                        </p>
                                    </div>
                                </div>
                                <div className="crypto-exp-cards">
                                    <div className="cryptocards-head-align">
                                        <div className="pow-trade-icon-bg">
                                            <Image
                                                src="./assets/images/power-trade-icon2.svg"
                                                className="pow-trade-icon"
                                            ></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Earn</h6>
                                        <p className="content mb-0">
                                            Stake assets securely and earn steady passive returns with
                                            flexible options.
                                        </p>
                                    </div>
                                </div>
                                <div className="crypto-exp-cards">
                                    <div className="cryptocards-head-align">
                                        <div className="pow-trade-icon-bg">
                                            <Image
                                                src="./assets/images/power-trade-icon3.svg"
                                                className="pow-trade-icon"
                                            ></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Instant Swap</h6>
                                        <p className="content mb-0">
                                            Invite friends and earn exciting rewards every time they
                                            trade actively.
                                        </p>
                                    </div>
                                </div>
                                <div className="crypto-exp-cards">
                                    <div className="cryptocards-head-align">
                                        <div className="pow-trade-icon-bg">
                                            <Image
                                                src="./assets/images/power-trade-icon4.svg"
                                                className="pow-trade-icon"
                                            ></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Referral Rewards</h6>
                                        <p className="content mb-0">
                                            Invite friends and earn exciting rewards every time they
                                            trade active
                                        </p>
                                    </div>
                                </div>
                                <div className="crypto-exp-cards">
                                    <div className="cryptocards-head-align">
                                        <div className="pow-trade-icon-bg">
                                            <Image
                                                src="./assets/images/power-trade-icon5.svg"
                                                className="pow-trade-icon"
                                            ></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Multi-Chain Wallet</h6>
                                        <p className="content mb-0">
                                            Store, send, and receive crypto across multiple supported
                                            blockchains without restrictions.
                                        </p>
                                    </div>
                                </div>
                                <div className="crypto-exp-cards">
                                    <div className="cryptocards-head-align">
                                        <div className="pow-trade-icon-bg">
                                            <Image
                                                src="./assets/images/power-trade-icon6.svg"
                                                className="pow-trade-icon"
                                            ></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>High Liquidity</h6>
                                        <p className="content mb-0">
                                            Enjoy faster trades, minimal slippage, and efficient order
                                            matching anytime you trade.
                                        </p>
                                    </div>
                                </div>

                            </Carousel>
                        </div>

                    </div>
                </Container>
            </section>

            <Homefootermobile />
            <Mobilemenu />

        </div>
    );
}
