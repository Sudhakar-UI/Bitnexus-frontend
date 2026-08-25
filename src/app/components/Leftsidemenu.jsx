'use client'
import React from "react";
import Link from 'next/link';
import { Image, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'


const Leftsidemenu = () => {

  const pathname = usePathname()

  const isHistoryActive = [
    '/deposithistory',
    '/withdrawhistory',
    '/openorderhistory',
    '/orderhistory',
    '/tradehistory',
     '/transferhistory'
  ].some(path => pathname.includes(path));

  const isWalletActive = [
    '/wallet',
    '/fundingwallet',
    '/spot-wallet'
  ].some(path => pathname.includes(path));

  const isChatActive = [
    '/support',
    '/chat'
  ].some(path => pathname.includes(path));

  function closeCollapse() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }
  function menuclick() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }
  return (

    <div className="leftsidemenu" id="leftsidemenu">
      <div className="closeiconbtn" onClick={closeCollapse}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <hr />
      <div className="leftsidescroll">
        <ul>
          <li><Link id="dashboardlink" href="/profile" className={`titlemenu ${pathname === '/profile' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/usericon.svg" alt="icon" width={100} height={100} /></i><div>Profile</div></Link></li>
          <li><Link id="walletlink" href="/wallet" className={`titlemenu ${pathname === '/wallet' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></i><div>Wallet</div></Link></li>

          {/* <li className="dropdown">
            <a href="#" className={`nav-link dropdown-bs-toggle titlemenu ${isWalletActive ? 'active' : "" }`} data-bs-toggle="dropdown" id="walletlink"><i><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></i>Wallet<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="dropdown-menu">
              <NavDropdown.Item as={Link} id="walletlink" className={`titlemenu ${pathname === '/wallet' ? 'active' : ''}`} href="/wallet"><div>Wallet Overview</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} id="fundingwalletlink" className={`titlemenu ${pathname === '/fundingwallet' ? 'active' : ''}`} href="/fundingwallet"><div>Funding Wallet</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} id="spotwalletlink" className={`titlemenu ${pathname === '/spot-wallet' ? 'active' : ''}`} href="/spot-wallet"><div>Spot Wallet</div></NavDropdown.Item>
            </div>
          </li> */}

          <li className="webhide"><Link id="tradelink" className={`titlemenu ${pathname === '/trade' ? 'active' : ''}`} href="/trade"><i><Image src="assets/images/spoticon.svg" alt="icon" width={100} height={100} /></i><div>Spot</div></Link></li>
          <li className="webhide"><Link id="marketlink" className={`titlemenu ${pathname === '/markets' ? 'active' : ''}`} href="/markets"><i><Image src="assets/images/marketicon.svg" alt="icon" width={100} height={100} /></i><div>Markets</div></Link></li>
           {/* <li className="dropdown">
            <a href="#" className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown"><i><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></i>Assets<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="dropdown-menu">
              <NavDropdown.Item as={Link} id="walletlink" className={`titlemenu ${pathname === '/wallet' ? 'active' : ''}`} href="/saving"><i><Image src="assets/images/walletoverview.svg" alt="icon" width={100} height={100} /></i><div>Overview</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} id="spotwalletlink" className={`titlemenu ${pathname === '/spot-wallet' ? 'active' : ''}`} href="/earn"><i><Image src="assets/images/spot-wallet.svg" alt="icon" width={100} height={100} /></i><div>Spot</div></NavDropdown.Item>
            </div>
          </li> */}
          {/* <li className="dropdown">
            <a href="#" className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown"><i><Image src="assets/images/savings.svg" alt="icon" width={100} height={100} /></i>Earn<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="dropdown-menu">
              <NavDropdown.Item as={Link} id="savinglink" className={`titlemenu ${pathname === '/saving' ? 'active' : ''}`} href="/saving"><i><Image src="assets/images/earnview.svg" alt="icon" width={100} height={100} /></i><div>Overview</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} id="earnhistorylink" className={`titlemenu ${pathname === '/earn' ? 'active' : ''}`} href="/earn"><i><Image src="assets/images/earnhistory.svg" alt="icon" width={100} height={100} /></i><div>History</div></NavDropdown.Item>
            </div>
          </li> */}
          <li className="webhide"><Link id="convertlink" className={`titlemenu ${pathname === '/convert' ? 'active' : ''}`} href="/convert"><i><Image src="assets/images/converticon.svg" alt="icon" width={100} height={100} /></i><div>Convert</div></Link></li>
         
          <li><Link id="reflink" className={`titlemenu ${pathname === '/referral' ? 'active' : ''}`} href="/referral"><i><Image src="assets/images/reficon1.svg" alt="icon" width={100} height={100} /></i><div>Referral</div></Link></li>
            <li><Link id="supportlink" className={`titlemenu ${isChatActive ? 'active' : ''}`} href="/support"><i><Image src="assets/images/supporticon.svg" alt="icon" width={100} height={100} /></i><div>Support</div></Link></li>
          <li className="dropdown">
            <a href="#" className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown"><i><Image src="assets/images/profilesettings.svg" alt="icon" width={100} height={100} /></i>Settings<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="dropdown-menu">
              <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/security' ? 'active' : ''}`} href="/security"><i><Image src="assets/images/securityicon.svg" alt="icon" width={100} height={100} /></i><div>Security</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} id="kyclink" className={`titlemenu ${pathname === '/kyc' ? 'active' : ''}`} href="/kyc"><i><Image src="assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></i><div>Identification</div></NavDropdown.Item>
            </div>
          </li>
           <li className="dropdown">
            <a href="#" className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown" id="historylink" ><i><Image src="assets/images/historyicon.svg" alt="icon" width={100} height={100} /></i>History<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="dropdown-menu">
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/deposithistory' ? 'active' : ''}`} href="/deposithistory"><i><Image src="assets/images/deposit-history.svg" alt="icon" width={100} height={100} /></i><div>Deposit History</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/withdrawhistory' ? 'active' : ''}`} href="/withdrawhistory"><i><Image src="assets/images/withdraw-history.svg" alt="icon" width={100} height={100} /></i><div>Withdraw History</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/openorderhistory' ? 'active' : ''}`} href="/openorderhistory"><i><Image src="assets/images/opem-orders-history.svg" alt="icon" width={100} height={100} /></i><div>Open Order History</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/orderhistory' ? 'active' : ''}`} href="/orderhistory"><i><Image src="assets/images/order-history.svg" alt="icon" width={100} height={100} /></i><div>Order History</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/tradehistory' ? 'active' : ''}`} href="/tradehistory"><i><Image src="assets/images/trade-history.svg" alt="icon" width={100} height={100} /></i><div>Trade History</div></NavDropdown.Item>
               <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/transferhistory' ? 'active' : ''}`} href="/transferhistory"><i><Image src="assets/images/transfer-history.svg" alt="icon" width={100} height={100} /></i><div>Transfer History</div></NavDropdown.Item>
            </div>
          </li>
          <li><span href="#" className="titlemenu logout" id="logoutlink"><i><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></i><div>Sign Out</div></span></li>

        </ul>
      </div>
    </div>
  )
}

export default Leftsidemenu