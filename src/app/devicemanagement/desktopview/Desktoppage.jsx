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
						<h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Device Management</h2>
					</div>
				<div className="panelcontentbox">
							<SimpleBar className="table-responsive sitescroll">
								<Table className="sitetable table-responsive-stack" id="table1">
									<thead>
										<tr>
											<th>Device</th>
											<th>Last Login Time</th>
											<th>Trusted<br />Device?</th>
											<th>Secondary Verification<br />Exemption Expiry</th>
											<th>Location</th>
											<th>IP Address</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{/* <tr className="nodata"> 
									<td colspan={5}>
										<Image src="assets/images/nodata.svg" width={20} height={20} alt="icon" />No data
									</td>
								</tr> */}
										<tr>
											<td>Chrome 133.0.0<br />(Windows)</td>
											<td>2025-02-26<br />15:30:22</td>
											<td>No</td>
											<td>---</td>
											<td>India-Karnataka<br />Bengaluru</td>
											<td>106.51.22.60</td>
											<td><Link href="#" className="alink t-red">Remove</Link></td>
										</tr>
										<tr>
											<td>Chrome 133.0.0<br />(Windows)</td>
											<td>2025-02-26<br />15:30:22</td>
											<td>No</td>
											<td>---</td>
											<td>India-Karnataka<br />Bengaluru</td>
											<td>106.51.22.60</td>
											<td><Link href="#" className="alink t-red">Remove</Link></td>
										</tr>
										<tr>
											<td>Chrome 133.0.0<br />(Windows)</td>
											<td>2025-02-26<br />15:30:22</td>
											<td>No</td>
											<td>---</td>
											<td>India-Karnataka<br />Bengaluru</td>
											<td>106.51.22.60</td>
											<td><Link href="#" className="alink t-red">Remove</Link></td>
										</tr>
										<tr>
											<td>Chrome 133.0.0<br />(Windows)</td>
											<td>2025-02-26<br />15:30:22</td>
											<td>No</td>
											<td>---</td>
											<td>India-Karnataka<br />Bengaluru</td>
											<td>106.51.22.60</td>
											<td><Link href="#" className="alink t-red">Remove</Link></td>
										</tr>
										<tr>
											<td>Chrome 133.0.0<br />(Windows)</td>
											<td>2025-02-26<br />15:30:22</td>
											<td>No</td>
											<td>---</td>
											<td>India-Karnataka<br />Bengaluru</td>
											<td>106.51.22.60</td>
											<td><Link href="#" className="alink t-red">Remove</Link></td>
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


