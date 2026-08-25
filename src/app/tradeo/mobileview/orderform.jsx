import React, { useState } from 'react'
import { Form, InputGroup, Nav, Tab } from 'react-bootstrap';
import Slider from './RangeSlider';

const orderform = () => {

    const [activeTab, setActiveTab] = useState("limit");
    const [activeTab2, setActiveTab2] = useState("limit");

    return (
        <div className="orderform custom-order-form griddragoption w-100" id="orderformtabshow">

            <Tab.Container defaultActiveKey="buyTab">
                <Nav variant="pills" className="gap-1 border-0 w-100">
                    <Nav.Item className='w-100'>
                        <Nav.Link eventKey="buyTab">
                            Buy
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='w-100'>
                        <Nav.Link eventKey="sellTab">
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
                                        <span>Total</span>
                                        <span>0.2154785 BTC</span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span>Fee</span>
                                        <span>0.0754127 USDT</span>
                                    </div>
                                    <button className='btn buy-btn'>Buy</button>
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

        </div>
    )
}

export default orderform