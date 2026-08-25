import React, { useState } from 'react'
import { Form, InputGroup, Nav, Tab ,Modal,Row ,Col ,Button } from 'react-bootstrap';
import Slider from './RangeSlider';

const orderform = () => {
      const [showModal1, setShowModal1] = useState(false);
        const handleClose1 = () => setShowModal1(false);
        const handleShow1 = () => setShowModal1(true);

    const [activeTab, setActiveTab] = useState("limit");
    const [activeTab2, setActiveTab2] = useState("limit");

    return (
        <div className="orderform custom-order-form griddragoption w-100 mobileorederfrom" id="orderformtabshow">

            <Tab.Container defaultActiveKey="buyTab">
                <Nav variant="pills" className="gap-1 border-0 w-100  d-flex   flex-nowrap">
                    <Nav.Item className='w-50 buy-btn-mo'>
                        <Nav.Link eventKey="buyTab" className='text-center'>
                            Buy
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='w-50 sell-btn-mo'>
                        <Nav.Link eventKey="sellTab" className='text-center'>
                            Sell
                        </Nav.Link>
                    </Nav.Item>
                </Nav>


                <Tab.Content className="buySellOrderTab mt-3">
                    <Tab.Pane eventKey="buyTab">
                        <Form className='d-flex flex-column row-gap-2'>
                            <Form.Select
                                value={activeTab}
                                onChange={(e) => setActiveTab(e.target.value)}
                            >
                                <option value="limit">Limit</option>
                                <option value="market">Market</option>
                                <option value="stop-limit">Stop Limit</option>
                            </Form.Select>

                            {activeTab === "limit" && (
                                <div className='d-flex flex-column row-gap-2'>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Price" id='buyprice' />
                                            <InputGroup.Text>BTC</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className='px-3'>
                                        <Slider />
                                    </div>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>USDT</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span className='tt-text-mute'>Total</span>
                                        <span className='tt-text-bold'>0.2154785 BTC</span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span className='tt-text-mute'>Fee</span>
                                        <span className='tt-text-bold'>0.0754127 USDT</span>
                                    </div>
                                    <Button onClick={handleShow1} className='btn buy-btn'>Buy</Button>
                                </div>
                            )}

                            {activeTab === "market" && (
                                <div className='d-flex flex-column row-gap-2'>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Price" id='buyprice' />
                                            <InputGroup.Text>BTC</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className='px-3'>
                                        <Slider />
                                    </div>
                                    <button className='btn buy-btn'>Buy</button>
                                </div>
                            )}

                            {activeTab === "stop-limit" && (
                                <div className='d-flex flex-column row-gap-2'>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Price" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>BTC</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className='px-3'>
                                        <Slider />
                                    </div>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Total" id='buyprice' />
                                            <InputGroup.Text>BTC</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <button className='btn buy-btn'>Buy</button>
                                </div>
                            )}
                        </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sellTab">
                        <Form className='d-flex flex-column row-gap-2'>
                            <Form.Select
                                value={activeTab2}
                                onChange={(e) => setActiveTab2(e.target.value)}
                            >
                                <option value="limit">Limit</option>
                                <option value="market">Market</option>
                                <option value="stop-limit">Stop Limit</option>
                            </Form.Select>

                            {activeTab2 === "limit" && (
                                <div className='d-flex flex-column row-gap-2'>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Price" id='buyprice' />
                                            <InputGroup.Text>BTC</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className='px-3'>
                                        <Slider />
                                    </div>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>USDT</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <button className='btn sell-btn'>Sell</button>
                                </div>
                            )}

                            {activeTab2 === "market" && (
                                <div className='d-flex flex-column row-gap-2'>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Price" id='buyprice' />
                                            <InputGroup.Text>BTC</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className='px-3'>
                                        <Slider />
                                    </div>
                                    <button className='btn sell-btn'>Sell</button>
                                </div>
                            )}

                            {activeTab2 === "stop-limit" && (
                                <div className='d-flex flex-column row-gap-2'>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Price" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className='px-3'>
                                        <Slider />
                                    </div>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control placeholder="Amount" id='buyprice' />
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <button className='btn sell-btn'>Sell</button>
                                </div>
                            )}
                        </Form>
                    </Tab.Pane>
                </Tab.Content>

            </Tab.Container>
 <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Order Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="mb-2">
                            <Col className="text-muted">Side</Col>
                            <Col className="text-start text-black">: BUY</Col>
                        </Row>
                        <Row className="mb-2">
                            <Col className="text-muted">Type</Col>
                            <Col className="text-start text-black">: MARKET</Col>
                        </Row>
                        <Row className="mb-2">
                            <Col className="text-muted">Amount</Col>
                            <Col className="text-start text-black">: 0.001 BTC</Col>
                        </Row>
                        <Row className="fw-bold text-danger">
                            <Col>Fee</Col>
                            <Col className="text-end"></Col>
                        </Row>
                        <div className='text-end d-flex gap-2 mt-3'>
                             <Button className=' borderbtn-x'  variant="secondary" onClick={() => setShow(false)}>
                            Cancel
                        </Button>
                        <Button className='sitebtn' variant="success">Confirm</Button>
                        </div>
                    </Modal.Body>
                
                </Modal>
        </div>
    )
}

export default orderform