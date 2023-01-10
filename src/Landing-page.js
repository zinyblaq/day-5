import React from 'react';
// import firstSC from './image/firstSC.png';
// import secondSC from './image/secondSC.jpg';
// import blackwoman from './image/blackwoman.jpg';
import dstv from './dstv.png';
import netflix from './netflix.png';
import dualingo from './dualingo.png';
import primevideo from './primeVideo.png';
import youtube from './image/youtube.png';

export default function LandingPage() {
  return (
    <div>
      <div>
        <h1>Subscription Management Made Easy!</h1>
        <p>
          Flex is a susbscription management platform that allows you to manage
          multiple susbscription plans. It gives you the freedom to control and
          keep track of your expenses.
        </p>
        <div>
          <button>REGISTER</button>
          <button>LOGIN</button>
        </div>
        <div>
          <ul>
            <li>
              <img src={dstv} alt="dstv" width="40px"></img>
            </li>
            <li>
              <img src={netflix} alt="netflix" width="40px"></img>
            </li>
            <li>
              <img src={primevideo} alt="primevideo" width="40px"></img>
            </li>
            <li>
              <img src={youtube} alt="youtube" width="40px"></img>
            </li>
            <li>
              <img src={dualingo} alt="dualingo" width="40px"></img>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
