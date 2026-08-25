"use client";
import React, { useEffect, useState } from "react";
import { Container, Form, Button, FormCheck } from "react-bootstrap";
import Link from "next/link";
import Homeheader from "../../components/Homeheader";
import Homefooter from "../../components/Homefooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../../../public/assets/css/home.css";

const page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    document.body.classList.add("innerpagebg", "affiliatepage");

    if (currentStep === 3) {
      document.body.classList.add("stepthree");
    } else {
      document.body.classList.remove("stepthree");
    }

    return () => {
      document.body.classList.remove(
        "innerpagebg",
        "affiliatepage",
        "stepthree"
      );
    };
  }, [currentStep]);

  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  const backTemplate = (handlePrevious) => {
    return currentStep === 1 ? (
      <Button className="base-button sitebtn btn" onClick={handlePrevious}>
        Reset
      </Button>
    ) : null;
  };

  const nextTemplate = (handleNext, handleReset) => {
    return currentStep === 2 ? (
      <>
        <Button className="base-button sitebtn btn" onClick={handleReset}>
          Reset
        </Button>
        <Button className="base-button sitebtn btn" onClick={handleNext}>
          Next
        </Button>
      </>
    ) : null;
  };

  const finishTemplate = (handleComplete) => {
    return currentStep === 1 ? (
      <Button className="finish-button sitebtn btn" onClick={handleComplete}>
        Finish
      </Button>
    ) : null;
  };
  const tabChanged = ({ prevIndex, nextIndex }) => {
    setCurrentStep(nextIndex); // Update the current step
  };

  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <article className="affiliate-form-page-align gridparentbox innerpage other-pages">
        <Homeheader />
        <div className="innerpages ">
          <Container>
            <div className=" affiliate-form-page-w ">
              <h2 className="heading-title pb-3 text-center pb-0">
                Join the Bitnexus Affiliate Program
              </h2>
              <p className="content mb-0 affiliate-p ">
                The Bitnexus Affiliate Program is open to users with active social media accounts, including YouTube, Instagram, Facebook, Twitter, and Telegram.
                <br />
                Please fill out the application form. If you meet the requirements, we will contact you.
                For more details, please check the Bitnexus Affiliate Program Guide. <br />
                <span>
                  <Link className="alink text-decoration-underline" href="#">
                    Bitnexus Affiliate Program Guide
                  </Link>
                </span>
                .
              </p>
            </div>

            <div className="row mt-4 ">
              <div className="col-lg-12 mx-auto aff-form-container ">
                {/* STEP BAR */}
                <div className="steps-wrapper">
                  {/* STEP 1 */}
                  <div className="step-item">
                    <div
                      className={`step-circle ${activeTab > 0
                        ? "completed"
                        : activeTab === 0
                          ? "active"
                          : ""
                        }`}
                    >
                      <FontAwesomeIcon icon={faCheck} color="#fff" />
                    </div>
                    <div
                      className={`step-label ${activeTab === 0 ? "active" : ""
                        }`}
                    >
                      Register
                    </div>
                    <div
                      className={`step-line ${activeTab > 0 ? "completed" : ""
                        }`}
                    ></div>
                  </div>

                  {/* STEP 2 */}
                  <div className="step-item">
                    <div
                      className={`step-circle ${activeTab > 1
                        ? "completed"
                        : activeTab === 1
                          ? "active"
                          : ""
                        }`}
                    >
                      <FontAwesomeIcon icon={faCheck} color="#fff" />
                    </div>
                    <div
                      className={`step-label ${activeTab === 1 ? "active" : ""
                        }`}
                    >
                      Submit your application
                    </div>
                    <div
                      className={`step-line ${activeTab > 1 ? "completed" : ""
                        }`}
                    ></div>
                  </div>

                  {/* STEP 3 */}
                  <div className="step-item">
                    <div
                      className={`step-circle ${activeTab === 2 ? "active" : ""
                        }`}
                    >
                      <FontAwesomeIcon icon={faCheck} color="#fff" />
                    </div>
                    <div
                      className={`step-label ${activeTab === 2 ? "active" : ""
                        }`}
                    >
                      Done
                    </div>
                  </div>
                </div>
                {/* END STEP BAR */}

                {/* {activeTab === 1 && (
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <h4 className="m-0">Submit your Application</h4>
                  </div>
                )} */}

                <div className="aff-form-container power-trading-box">
                  {/* CONTENT */}
                  <div className="aff-form-content">
                    {/* TAB 1 */}
                    {activeTab === 0 && (
                      <div>
                        <h2 className="aff-form-title">Register</h2>
                        <p>
                          Welcome! Please click "Submit your application" to
                          start.
                        </p>

                        <div className="d-flex gap-3 aff-next-btn-border">
                          <button
                            className="aff-next-btn"
                            onClick={() => setActiveTab(1)}
                          >
                            Start Application
                          </button>
                        </div>
                      </div>
                    )}

                    {/* TAB 2 */}
                    {activeTab === 1 && (
                      <form className="aff-form-form">
                        <div className="logcenterbox siteformbg ">
                          <div className="d-flex gap-2">
                            <Form.Group className="form-group w-100">
                              <Form.Label>Nickname</Form.Label>
                              <Form.Control
                                type="text"
                                name=""
                                id="nickname"
                              />{" "}
                            </Form.Group>
                            <Form.Group className="form-group w-100">
                              <Form.Label>Your Affiliate Type</Form.Label>
                              <Form.Select
                                id="affiliatetype"
                                className="form-control"
                              >
                                <option>Crypto influencer (Individual)</option>
                                <option>
                                  Social Media influencer (Non-Crypto Community)
                                </option>
                                <option>Developer / Trading Tools</option>
                                <option>Others</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <div className="d-flex gap-2">
                            <Form.Group className="form-group w-100">
                              <Form.Label>Language</Form.Label>
                              <Form.Select id="language" className="form-control">
                                <option>English</option>
                                <option>Espaniol</option>
                              </Form.Select>
                            </Form.Group>
                            <Form.Group className="form-group w-100">
                              <Form.Label>Contact Info</Form.Label>
                              <Form.Control
                                type="text"
                                name=""
                                id="contactinfo"
                              />{" "}
                            </Form.Group>
                          </div>
                          <div className="d-flex gap-2">
                            <Form.Group className="form-group w-100">
                              <Form.Label>
                                Target country or region
                              </Form.Label>

                              <Form.Select id="country" className="form-control">
                                <option>English</option>
                                <option>Espaniol</option>
                              </Form.Select>
                            </Form.Group>
                            <Form.Group className="form-group  w-100">
                              <Form.Label>Primary Promo Platform</Form.Label>
                              <Form.Select
                                id="promoplatform"
                                className="form-control"
                              >
                                <option>Twitter</option>
                                <option>Telegram</option>
                                <option>Line</option>
                                <option>KakaoTalk</option>
                                <option>VK</option>
                                <option>Search Engine Marketing (SEM)</option>
                                <option>Blog</option>
                                <option>Affiliate Marketing</option>
                                <option>Forum</option>
                                <option>Yotube</option>
                                <option>Twitch</option>
                                <option>Discord</option>
                                <option>Instagram</option>
                                <option>Linkedin</option>
                                <option>Facebook</option>
                                <option>Odnoklaasniki</option>
                                <option>Rutube</option>
                                <option>Content Sites</option>
                                <option>Others</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <Form.Group className="form-group">
                            <Form.Label>
                              Other Social Media Platforms
                            </Form.Label>
                            <div className="affi-social-forms othersocials">
                              <div className="affi-social-forms-left">
                                <FormCheck
                                  type="checkbox"
                                  id="twitter"
                                  label="Twitter"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="telegram"
                                  label="Telegram"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="line"
                                  label="Line"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="kakaotalk"
                                  label="KakaoTalk"
                                />
                                <FormCheck type="checkbox" id="vk" label="VK" />
                                <FormCheck
                                  type="checkbox"
                                  id="sem"
                                  label="Search Engine Marketing (SEM)"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="blog"
                                  label="Blog"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="affiliate"
                                  label="Affiliate Marketing"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="forum"
                                  label="Forum"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="others"
                                  label="Others"
                                />
                              </div>
                              <div className="affi-social-forms-right">
                                <FormCheck
                                  type="checkbox"
                                  id="youtube"
                                  label="Yotube"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="twitch"
                                  label="Twitch"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="discord"
                                  label="Discord"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="instagram"
                                  label="Instagram"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="linkedin"
                                  label="Linkedin"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="facebook"
                                  label="Facebook"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="odnoklaasniki"
                                  label="Odnoklaasniki"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="rutube"
                                  label="Rutube"
                                />
                                <FormCheck
                                  type="checkbox"
                                  id="contentsites"
                                  label="Content Sites"
                                />
                              </div>
                            </div>
                          </Form.Group>

                          <Form.Group className="form-group">
                            <Form.Label>
                              Is there anything else that you would like to
                              share?
                            </Form.Label>
                            <textarea
                              className="form-control"
                              rows={4}
                              id="textarea1"
                            ></textarea>
                          </Form.Group>
                          <Form.Group className="form-group">
                            <Form.Label>
                              How did you hear about Bitnexus Platform?
                            </Form.Label>
                            <Form.Select
                              id="hearingplatform"
                              className="form-control"
                            >
                              <option>Bitnexus Website</option>
                              <option>Another Affiliate</option>
                              <option>Bitnexus Instagram</option>
                              <option>Bitnexus Telegram</option>
                              <option>Others</option>
                            </Form.Select>
                          </Form.Group>
                        </div>

                        {/* ➜ Next Button Added Here */}
                        <div className="d-flex gap-3 aff-next-btn-border">
                          <button className="btn aff-next-btn w-100">Reset</button>
                          <button
                            type="button"
                            className="aff-next-btn w-100"
                            onClick={() => setActiveTab(2)}
                          >
                            Next
                          </button>
                        </div>
                      </form>
                    )}

                    {/* TAB 3 */}
                    {activeTab === 2 && (
                      <div>
                        <h4 className="sub-heading my-3">
                          Your Submission has been received
                        </h4>
                        <p className="content mb-0">
                          Your application is under review. Results will be sent
                          via on-site push notifications. It will take 1–2
                          working days.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </article>
      <Homefooter />
    </>
  );
};

export default page;
