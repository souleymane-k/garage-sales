import React from 'react';
import './LandingPage.css';
import {} from '../images/shoes-1.jpg'
// import Souleymane from '../../souleymane-3.jpg'

export default function LandingPage() {
  // <img src={Souleymane} alt="maPhoto"></img>
  return (
     <div>
    <section className="landingHeader">
      <div className= "firtssection">
      <h2>What is Garage-Sales App?</h2>
      <p>Garage sales app is a tool for people who need to complete a quick sale of their house items such as sofa, tv, cell phones, and others online. It will allow to access more buyers and make good deals. </p>
      </div>
      <div className="secondsection">
      <h2>Why an App for Garage sales</h2>
      <p>This App helps to make the neighboring sales more attractive and increase the target population. In addition, the garage sales app also responds to security needs where buyers and sellers can peacefully meet and complete their business. Please Register and then sign.</p>
      </div>
      <div className="thirdsection">
      <h2>Why an App for Garage sales</h2>
      <p>Greate accessibility nationwide  to hundreds of items in a single platform. In addition, it is an exchange platform to create a tool of communication between salers and buyers.</p>
      </div>
    </section>
    
    <section className='homePage'>
      <div className= "item" id="box1">
      {/* <div className= "firtssection"> */}
      <h3>Living Room Table $200. Contact me at 555 666 6769</h3>
      </div>
      <div className="item" id="box2">
      {/* <div className="secondsection"> */}
      <h3>Dinning Chair $20 each</h3>
      </div>
      <div className="item" id="box3">
      {/* <div className="thirdsection"> */}
      <h3>Chair with cuttion $15</h3>
      </div>
      <div className="item" id="box4">
      {/* <div className="thirdsection"> */}
      <h3>Orange flower </h3>
      </div>
      <div className="item" id="box5">
      {/* <div className="thirdsection"> */}
      <h3>Why an App for Garage sales</h3>
      </div>
      <div className="item" id="box6">
      {/* <div className="thirdsection"> */}
      <h3>Why an App for Garage sales</h3>
      </div>
      <div className="item" id="box7">
      {/* <div className="thirdsection"> */}
      <h3>Why an App for Garage sales</h3>
      </div>
      <div className="item" id="box8">
      {/* <div className="thirdsection"> */}
      <h3>Beautiful Flower</h3>
      </div>
      <div className="item" id="box9">
    {/* <div className="thirdsection"> */}
      <h3>Pink Head Set for $10 </h3>
      </div>
    </section>
   
   <section className="lastSection">

   </section>

   </div>
    
  )
};