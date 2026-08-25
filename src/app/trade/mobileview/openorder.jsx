import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Table, Nav, Tab } from 'react-bootstrap';
import Link from 'next/link';
import ResponsiveTable from '../../components/ResponsiveTable';


const openorder = () => {
    const orderData = [
        { label: "Date & Time", value: "11-12-2025, 07:16:16" },
        { label: "Order Type", value: "Limit" },
        { label: "Order", value: "Buy" },
        { label: "Pair", value: "BTC/ETH" },
        { label: "Amount", value: "0.00520674897" },
        { label: "Price", value: "0.00520674897" },
        { label: "Remaining", value: "0.00520674897" },
        { label: "Trade Fee", value: "0.00520674897" },
        { label: "Total", value: "0.00520674897" },
        { label: "Status", value: "0.00520674897" }
    ];
    return (
        <div className="griddragoption openhistory-mb trade-bg-white p-3">
            <Tab.Container defaultActiveKey="openhistory">
                <div className="innerpagetab historytab">
                    <Nav variant="pills" className="tabbanner justify-content-start gap-2">
                        <Nav.Item><Nav.Link eventKey="openhistory" id='openhistory'>Open History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="orderhistory" id='orderhistory'>Order History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="tradehistory" id='tradehistory'>Trade History</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="openhistory">
                        <div>
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="depo-hist-table sitetable table-responsive-stack mb-0" id="table1">
                                    <tbody className='non-padding-x'>
                                        <tr className='my-2'>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Date & Time</span>
                                                    <span className="tt-text-mute">Order Type</span>
                                                </div>
                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">30-11-2023, 11:55:45</span>
                                                    <span className="tt-text-bold">Limit</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Order</span>
                                                    <span className="tt-text-mute">Pair</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">Buy</span>
                                                    <span className="tt-text-bold">BTC/ETH</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Amount</span>
                                                    <span className="tt-text-mute">Price</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Remaining</span>
                                                    <span className="tt-text-mute">Trade Fee</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Total</span>
                                                    <span className="tt-text-mute">Status</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                             <td className=' text-center'>
                                                <button className='btn sitebtn'>Cancel</button>
                                            </td>
                                        </tr>
                                        <tr className='my-2'>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Date & Time</span>
                                                    <span className="tt-text-mute">Order Type</span>
                                                </div>
                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">30-11-2023, 11:55:45</span>
                                                    <span className="tt-text-bold">Limit</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Order</span>
                                                    <span className="tt-text-mute">Pair</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">Buy</span>
                                                    <span className="tt-text-bold">BTC/ETH</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Amount</span>
                                                    <span className="tt-text-mute">Price</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Remaining</span>
                                                    <span className="tt-text-mute">Trade Fee</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Total</span>
                                                    <span className="tt-text-mute">Status</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                             <td className=' text-center'>
                                                <button className='btn sitebtn'>Cancel</button>
                                            </td>
                                        </tr>
                                        <tr className='my-2'>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Date & Time</span>
                                                    <span className="tt-text-mute">Order Type</span>
                                                </div>
                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">30-11-2023, 11:55:45</span>
                                                    <span className="tt-text-bold">Limit</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Order</span>
                                                    <span className="tt-text-mute">Pair</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">Buy</span>
                                                    <span className="tt-text-bold">BTC/ETH</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Amount</span>
                                                    <span className="tt-text-mute">Price</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Remaining</span>
                                                    <span className="tt-text-mute">Trade Fee</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Total</span>
                                                    <span className="tt-text-mute">Status</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                             <td className=' text-center'>
                                                <button className='btn sitebtn'>Cancel</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="orderhistory">
                        <div>
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="depo-hist-table sitetable table-responsive-stack mb-0" id="table1">
                                    <tbody className='non-padding-x'>

                                        <tr>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Date & Time</span>
                                                    <span className="tt-text-mute">Order Type</span>
                                                </div>
                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">30-11-2023, 11:55:45</span>
                                                    <span className="tt-text-bold">Limit</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Order</span>
                                                    <span className="tt-text-mute">Pair</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">Buy</span>
                                                    <span className="tt-text-bold">BTC/ETH</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Amount</span>
                                                    <span className="tt-text-mute">Price</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Remaining</span>
                                                    <span className="tt-text-mute">Trade Fee</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Total</span>
                                                    <span className="tt-text-mute">Status</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                             <td className=' text-center'>
                                                <button className='btn sitebtn'>Cancel</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tradehistory">
                        <div>
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="depo-hist-table sitetable table-responsive-stack mb-0" id="table1">
                                    <tbody className='non-padding-x'>

                                        <tr>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Date & Time</span>
                                                    <span className="tt-text-mute">Order Type</span>
                                                </div>
                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">30-11-2023, 11:55:45</span>
                                                    <span className="tt-text-bold">Limit</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Order</span>
                                                    <span className="tt-text-mute">Pair</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">Buy</span>
                                                    <span className="tt-text-bold">BTC/ETH</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Amount</span>
                                                    <span className="tt-text-mute">Price</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Remaining</span>
                                                    <span className="tt-text-mute">Trade Fee</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-mute">Total</span>
                                                    <span className="tt-text-mute">Status</span>
                                                </div>

                                            </td>
                                            <td className="text-start non-padding">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                    <span className="tt-text-bold">0.00520674897</span>
                                                </div>
                                            </td>
                                            <td className=' text-center'>
                                                <button className='btn sitebtn'>Cancel</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}

export default openorder