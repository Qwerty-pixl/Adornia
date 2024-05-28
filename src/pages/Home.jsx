import React from "react";
import Button from "../components/Button/Button";
import right from '../assets/bluejew.jpg'
import Slider from "../components/Slider/Slider";


export default function Home() {
  const slides = [
    'https://a-static.besthdwallpaper.com/diamond-jewels-tapet-2304x768-11133_103.jpg',
    'https://wallpapers.com/images/hd/jewelry-necklace-with-blue-diamonds-aurtannkux9ky5nu.jpg',
    'https://i.pinimg.com/originals/68/9c/33/689c33d888e1182e62a288bc8a83cf67.jpg',
  ];
  
  return (
    <>
      <div className="Home">
        <div className="Home-container">
          <h1>Welcome to Adornia</h1>
          <h3>Elevate Every Moment with Adornia's Timeless Jewelry</h3>
          <Button />

        </div>
        <div className="Home-wrap">
          <div className="home_left">
            <img src={right} alt="" />
          </div>
          <div className="home_right">
            <h3 className="home-tit">About us</h3>
            <p className="home-txt">
              Established in 2008 in Korolev, our agency has been serving clients nationwide through our online platform. We pride ourselves on being a certified agency, accredited by both the Guild of Realtors of the Moscow Region and the Russian Guild of Realtors.

              At our agency, your peace of mind is our priority. We understand the risks associated with real estate transactions, which is why we ensure that every deal is safeguarded. Did you know that a property transaction can be invalidated if the seller declares bankruptcy within a year prior to the sale? In such unfortunate cases, the court seizes the property to settle the seller's debts, leaving the buyer empty-handed. However, with us, such scenarios are mitigated – our comprehensive insurance coverage ensures that you are protected against any unforeseen circumstances.

              When you choose our agency, you're choosing expertise and professionalism. Our team members undergo regular training and rigorous qualification exams to stay at the top of their game. Rest assured, you'll be working with knowledgeable professionals who have your best interests at heart.

              Certified by industry standards, we guarantee top-notch service quality. Unlike uncertified agencies, we stand behind every transaction, assuming full responsibility for its success.
            </p>
          </div>
        </div>
        <Slider slides={slides} />      
        </div>
    </>
  );
}
