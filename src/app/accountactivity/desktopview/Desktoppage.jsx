"use client"
import React from "react"
import Link from "next/link"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../../components/ResponsiveTable';


const page = () => {
	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<article className="gridparentbox">
				<Container className="sitecontainer">
					<div className="innerpagecontent">
						<h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Account activity</h2>
					</div>
					<div className="panelcontentbox">
						<SimpleBar className="table-responsive">
							<Table className="sitetable" id='table1'>
								<thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>IP Address</th>
										<th>Browser</th>
										<th>Location</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>2025-11-26 13:20:17</td>
										<td>Web</td>
										<td>42.109.143.229</td>
										<td>Chrome (Linux)</td>
										<td>Malappuram India</td>										
									</tr>
									<tr>
										<td>2025-11-26 13:20:17</td>
										<td>Web</td>
										<td>42.109.143.229</td>
										<td>Chrome (Linux)</td>
										<td>Malappuram India</td>										
									</tr>
									<tr>
										<td>2025-11-26 13:20:17</td>
										<td>Web</td>
										<td>42.109.143.229</td>
										<td>Chrome (Linux)</td>
										<td>Malappuram India</td>										
									</tr>
									<tr>
										<td>2025-11-26 13:20:17</td>
										<td>Web</td>
										<td>42.109.143.229</td>
										<td>Chrome (Linux)</td>
										<td>Malappuram India</td>										
									</tr>
									<tr>
										<td>2025-11-26 13:20:17</td>
										<td>Web</td>
										<td>42.109.143.229</td>
										<td>Chrome (Linux)</td>
										<td>Malappuram India</td>										
									</tr>
									<tr>
										<td>2025-11-26 13:20:17</td>
										<td>Web</td>
										<td>42.109.143.229</td>
										<td>Chrome (Linux)</td>
										<td>Malappuram India</td>										
									</tr>
									<tr>
										<td>2025-11-26 13:20:17</td>
										<td>Web</td>
										<td>42.109.143.229</td>
										<td>Chrome (Linux)</td>
										<td>Malappuram India</td>										
									</tr>
								</tbody>
							</Table>
						</SimpleBar>
						<ResponsiveTable tableId="table1" />
					</div>
				</Container>
			</article>
			<Userfooter />
		</div>
	)
}
export default page


