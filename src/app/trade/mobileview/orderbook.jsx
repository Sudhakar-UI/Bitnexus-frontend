"use client"
import React, { useState } from 'react'
import { Image, Table, Nav, Tab, Form } from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';

const Orderbook = () => {

    const [orderView, setOrderView] = useState("buysell");

    const buyShow = () => {
        setOrderView("buy");
        console.log("clickbuy");
    };

    const sellShow = () => {
        setOrderView("sell");
        console.log("clicksell");
    };

    const buysellShow = () => {
        setOrderView("buysell");
        console.log("clickbuysell");
    };

    return (
        <div className="orderbook griddragoption mobile-orderbook">
            <div className={`suborderbook ${orderView}show`} id="suborderbook">

                <div className='d-flex justify-content-evenly gap-1 py-1'>
                    <Nav.Item><Nav.Link active={orderView === "buysell"} onClick={buysellShow}>
                        <Image src="assets/images/buysellicon.svg" alt="icon" width={20} height={20} />
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link active={orderView === "buy"} onClick={buyShow}>
                        <Image src="assets/images/buyicon.svg" alt="icon" width={20} height={20} />
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link active={orderView === "sell"} onClick={sellShow}>
                        <Image src="assets/images/sellicon.svg" alt="icon" width={20} height={20} />
                    </Nav.Link></Nav.Item>
                </div>

                <div className="orderbookscroll">
                    <SimpleBar className="table-responsive">
                        <Table className="sitetable">
                            <thead>
                                <tr>
                                    <th>Price(ETH)</th>
                                    <th className="text-end">Amount(BTC)</th>
                                </tr>
                            </thead>
                        </Table>
                    </SimpleBar>
                    <div className="sellboxorder" id="sellorderbox">
                        <div className="table-responsive sitescroll">
                            <div className="sellboxtablebg">
                                <Table className="sitetable" id='table5'>
                                    {/* <thead>
                                        <tr>
                                            <th>Price(ETH)</th>
                                            <th className="text-end">Amount(BTC)</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        <tr>
                                            <td><span className="t-red">0.005198759560</span></td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>

                    <div className="livepricebox" id="livepricebox">
                        <Table className="sitetable">
                            <thead>
                                <tr>
                                    <th><span className="t-green">0.256</span></th>
                                    <th className="text-end">0.001%<FontAwesomeIcon icon={faSignal} /></th>
                                </tr>
                            </thead>
                        </Table>
                    </div>

                    <div className="buyboxorder" id="buyorderbox">
                        <SimpleBar className="table-responsive sitescroll">
                            <div className="sellboxtablebg">
                                <Table className="sitetable" id='table6'>
                                    {/* <thead>
                                        <tr>
                                            <th>Price(ETH)</th>
                                            <th className="text-end">Amount(BTC)</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </SimpleBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orderbook