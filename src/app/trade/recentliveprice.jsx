import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const recentliveprice = () => {
  const responsive = {
    superLargeDesktop: {
      // The naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1000, min: 600 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 600, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="recentliveprice">
      <div>
        <span className="favicon d-none">
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
      <Carousel responsive={responsive} infinite={true} autoPlay={false} autoPlaySpeed={3000} arrows={true}  className='livefav gap-2'>
        <div className="item">
          <Link className="rcpricet" href="/">BTC/ETH <span className="t-red">-0.90%</span> 4375611111111111111111111111111111111111111</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">BTC/ETH <span className="t-red">-0.90%</span> 4375611111111111111111111111111111111111111</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">BTC/ETH <span className="t-red">-0.90%</span> 4375611111111111111111111111111111111111111</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">BTC/ETH <span className="t-red">-0.90%</span> 4375611111111111111111111111111111111111111</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">BTC/ETH <span className="t-red">-0.90%</span> 4375611111111111111111111111111111111111111</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">BTC/ETH <span className="t-red">-0.90%</span> 4375611111111111111111111111111111111111111</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">BTC/ETH <span className="t-red">-0.90%</span> 4375611111111111111111111111111111111111111</Link>
        </div>
        {/* <div className="item">
          <Link className="rcpricet" href="/">ETH/BTC <span className="t-green">+0.90%</span> 43756</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">BNB/ETH <span className="t-red">-0.90%</span> 43756</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">TRX/ETH <span className="t-green">+0.90%</span> 43756</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">SOL/ETH <span className="t-red">-0.90%</span> 43756</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">XRP/ETH <span className="t-red">-0.90%</span> 43756</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">ADA/ETH <span className="t-green">+0.90%</span> 43756</Link>
        </div>
         <div className="item">
          <Link className="rcpricet" href="/">DOGE/ETH <span className="t-green">+0.90%</span> 43756</Link>
        </div>
         <div className="item">
          <Link className="rcpricet" href="/">TON/ETH <span className="t-green">+0.90%</span> 43756</Link>
        </div>
         <div className="item">
          <Link className="rcpricet" href="/">HYPE/ETH <span className="t-green">+0.90%</span> 43756</Link>
        </div>
         <div className="item">
          <Link className="rcpricet" href="/">USDT/ETH <span className="t-green">+0.90%</span> 43756</Link>
        </div> */}
      </Carousel>
    </div>
  );
};

export default recentliveprice;
