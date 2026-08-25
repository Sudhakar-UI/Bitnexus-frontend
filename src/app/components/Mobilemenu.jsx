import React from "react";
import Link from "next/link";
import { Image} from "react-bootstrap";
import { usePathname } from "next/navigation";
import "../../../public/assets/css/mobileview.css";

const Mobilemenu = () => {

    const pathname = usePathname();
 

    return (
        <div className="mobile-bottom-menu">
            <ul className="bottommenubox">

                <li className={pathname === "/profile" ? "active-menu-bg" : ""}>
                    <Link id="homelink" href="/profile" className="titlemenu">
                        <i className="d-flex flex-column align-items-center">
                            
                            <Image src="assets/images/mo-profile.svg" className="activeicon" />
                        </i>
                            
                        <div>
                            <span className="mo-span-tt">Profile</span>
                        </div>
                    </Link>
                </li>

            

                <li className={pathname === "/markets" ? "active-menu-bg" : ""}>
                    <Link id="marketslink" href="/markets" className="titlemenu">
                        <i>
     
                            <Image src="assets/images/mo-wallet.svg" className="activeicon" />
                        </i>
                       <div>
                            <span className="mo-span-tt">Wallet</span>
                        </div>
                    </Link>
                </li>

                <li className={pathname === "/trade" ? "active-menu-bg" : ""}>
                    <Link id="tradelink" href="/trade" className="titlemenu">
                        <i>
                           
                            <Image src="assets/images/mo-token-swap-fill.svg" className="activeicon" />
                        </i>
                         <div>
                            <span className="mo-span-tt">Token</span>
                        </div>
                    </Link>
                </li>

                <li className={pathname === "/derivative" ? "active-menu-bg" : ""}>
                    <Link id="futureslink" href="/derivative" className="titlemenu">
                        <i>
                       
                            <Image src="assets/images/mo-clipboard-list-bold-duotone.svg" className="activeicon" />
                        </i>
                         <div>
                            <span className="mo-span-tt">Clipboard</span>
                        </div>
                    </Link>
                </li>

                <li className={pathname === "/balanceoverview" ? "active-menu-bg" : ""}>
                    <Link id="balancelink" href="/balanceoverview" className="titlemenu">
                        <i>
                           
                            <Image src="assets/images/mo-time.svg" className="activeicon" />
                        </i>
                          <div>
                            <span className="mo-span-tt">Balance</span>
                        </div>
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Mobilemenu;
