import React, { useEffect } from 'react'
import { Nav, Tab, Image } from 'react-bootstrap';
import Depthchart from './depthchart'

export const page = () => {

    // const theme = "dark";

    useEffect(() => {

        // if (theme == 'dark')
        // {
        //     const iframes = document.querySelectorAll('.tradechartlist iframe');

        //     iframes.forEach(iframe => {
        //     const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        //     const body = iframeDoc.body;
        //     body.classList.add('nightmode');
        //     });
        //  }

        const iframes = document.querySelectorAll('.tradechartlist iframe');

        iframes.forEach(iframe => {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const body = iframeDoc.body;
            body.classList.add('nightmode');
        });

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;

        script.onload = () => {
            new window.TradingView.widget({
                "autosize": true,
                "fullscreen": true,
                "symbol": "Binance:BTCUSD",
                "interval": "5",
                "timezone": "UTC",
                "toolbar_bg": "#fff",
                "theme": "Light",
                "style": "1",
                "locale": "en",
                "enable_publishing": false,
                "allow_symbol_change": false,
                "container_id": "tradingview_49396",
                "withdateranges": true,
                "hide_side_toolbar": false,
                "hide_legend": true
            });
        };
        document.body.appendChild(script);
    }, []);
    return (
        <div className="chart griddragoption chart-mobile trade-bg-white p-2">
            <Tab.Container defaultActiveKey="tradechart">
                <div className="innerpagetab historytab">
                    <Nav variant="pills" className="tabbanner justify-content-start">
                        <Nav.Item>
                            <Nav.Link eventKey="tradechart" className="tradechart-nav">
                                <img
                                    src="./assets/images/trade-chart.svg"
                                    className="icon default"
                                    alt="Trade Chart"
                                />
                                <img
                                    src="./assets/images/trade-chart-active.svg"
                                    className="icon active"
                                    alt="Trade Chart Active"
                                />
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="depthchart" className="tradechart-nav">
                                <img
                                    src="./assets/images/depth_chart.svg"
                                    className="icon default"
                                    alt="Depth Chart"
                                />
                                <img
                                    src="./assets/images/depth_chart-active.svg"
                                    className="icon active"
                                    alt="Depth Chart Active"
                                />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                </div>
                <div id="livepriceacco" className="collapse">

                <Tab.Content className="contentbox" >
                    <Tab.Pane eventKey="tradechart" className="tradechartlist">
                        <div className="tradingview-widget-container">
                            <div id="tradingview_49396"></div>
                        </div>
                        {/* <iframe className="">
                            <html>
                                <body>test</body>
                            </html>
                        </iframe>        */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="marketdepth" className="marketchart">
                        <Depthchart />
                    </Tab.Pane>
                </Tab.Content>
                </div>
            </Tab.Container>
        </div>
    )
}
export default page;