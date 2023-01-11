import React from 'react';
import './landing-page.css';
import Header from './header';
import Footer from './footer';
import firstSC from './firstSC.png';
// import secondSC from './secondSC.jpg';
// import blackwoman from './blackwoman.jpg';
import dstv from './dstv.png';
import netflix from './netflix.png';
import dualingo from './dualingo.png';
import primevideo from './primeVideo.png';
import youtube from './image/youtube.png';
// import Header from './header';

export default function LandingPage() {
  return (
    <div>
      <Header />
      <div className="landing">
        <div className="landing-1">
          <div className="landing-1-1">
            <h1>Subscription Management Made Easy!</h1>
            <p>
              Flex is a susbscription management platform that allows you to
              manage multiple susbscription plans. It gives you the freedom to
              control and keep track of your expenses.
            </p>
            <div className="landing-btn">
              <button className="register-btn">REGISTER</button>
              <button className="login-btn">LOGIN</button>
            </div>
            <div>
              <ul className="landing-icon-lists">
                <li>
                  <img src={dstv} alt="dstv" width="71px" height="26px" />
                </li>
                <li>
                  <img
                    src={netflix}
                    alt="netflix"
                    width="71px"
                    height="26px"
                  ></img>
                </li>
                <li>
                  <img
                    src={primevideo}
                    alt="primevideo"
                    width="71px"
                    height="26px"
                  ></img>
                </li>
                <li>
                  <img
                    src={youtube}
                    alt="youtube"
                    width="182px"
                    height="60px"
                  ></img>
                </li>
                <li>
                  <img
                    src={dualingo}
                    alt="dualingo"
                    width="83px"
                    height="70px"
                  ></img>
                </li>
              </ul>
            </div>
          </div>

          <div className="landing-1-2">
            <img src={firstSC} alt="firstsc" />
            {/* <img src={blackwoman} alt="blackwoman" /> */}
          </div>
        </div>

        <div className="landing2">
          <div className="landing2-1"></div>
          <div className="landing2-2">
            <h1>Operate on a single platform</h1>
            <p>
              Managing and keeping track of multiple subscriptions could be a
              bit tedious. With Flex, you need not worry about that as all
              subscriptions are easily managed on one platform.
            </p>
          </div>
        </div>

        <div className="landing3">
          <div className="landing3-1">
            <h1>Take your subscription plan to another level</h1>
            <p>
              We provide our esteemed users with so much flexibility with our
              payment platforms. No need to worry about security because we have
              got you covered.
            </p>
          </div>
          <div className="landing3-2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
