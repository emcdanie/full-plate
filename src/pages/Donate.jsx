import "../styles/Donate.css";

import fridge from '../assets/fridge.png';
import counter from "../assets/counter.png";
import orginfo from "../assets/orginfo.png";

export default function Donate() {
  return (
    <div className="wrapper">
    <div className="donateContainer">
      <h1 className="donate-header">Why Donate?</h1>
       <div className="donate-text">
         <p> On average, we throw away <strong>103</strong> pounds of food
          each year. <strong>103</strong> pounds is about a <stong>MONTH</stong> of meals for another person </p>
          <p className = "donate-text" > Be it Suggestions, feedback, business opportunities or
             even how our recipes made you hungry, we would love to hear from you!</p>
              < div className = "cityfridgeimage">
              <img src={orginfo} alt="cityfridgeorgimage" />
             </div>
              </div>
            <div className="wrapper">
           <h1 className="otginfo">Find your nearest fridge today!</h1>
             < div className = "orginfo-container">
              <img src={counter} alt="cityfridgephoto" />
              </div>
              <h2 className="donatepageh2">Find your nearest fridge today!</h2>
              <p className = "donate-text-2" > Current NYC Fridge Count</p>
              <img className="fridge" src={fridge} alt="cityfridgeimage" />
              <button className="mapbutton" onClick={() => window.open("https://nycfridge.com/")}> Take me there now</button>
              </div>
           </div>
    </div>
  )
}
