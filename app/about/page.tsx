import React from "react";
// import Style from './page.module.css'

function About() {
  return (
    <div className="w-[1000px] m-auto text-justify bg-[#fefefe]">
      <div className="mt-[30px]">
        <h3 className="text-[#D02025] text-[25px] font-semibold" style={{fontFamily:"verdana"}}>About us</h3>
        <p
          className=" font-system-ui text-[#4a4a4a]"
          style={{ fontFamily: "system-ui" }}
        >
          redBus is India’s largest online bus ticketing platform that has
          transformed bus travel in the country by bringing ease and convenience
          to millions of Indians who travel using buses. Founded in 2006, redBus
          is part of India’s leading online travel company MakeMyTrip Limited
          (NASDAQ: MMYT). By providing widest choice, superior customer service,
          lowest prices and unmatched benefits, redBus has served over 18
          million customers. redBus has a global presence with operations across
          Indonesia, Singapore, Malaysia, Colombia and Peru apart from India.
        </p>
        <div className="w-[1000px] mt-[15px]">
          <h3 className="text-[#D02025] text-[25px] font-semibold" style={{fontFamily:"verdana"}}>
            Management Team
          </h3>
          <div className="flex mt-[5px]">
            <img
              className="h-[160px] w-[160px] rounded-full"
              src="https://s3.rdbuz.com/Images/profile/Prakash.png"
              alt="CEO"
            />
            <div className="w-[840px] ml-[10px]">
              <h4 className="text-[#D02025] font-semibold">
                Prakash Sangam, CEO
              </h4>
              <p
                className="text-[#4a4a4a] mt-[12px]"
                style={{ fontFamily: "system-ui" }}
              >
                Prakash Sangam has been Chief Executive Officer of redBus since
                June 2014. Prior to redBus. He served as an Executive Vice
                President of Info Edge India (Naukri group), heading two group
                businesses namely Shiksha.com and Jeevansathi.com. He’s also
                worked as General Manager of Marketing and Innovation at Airtel
                and has also had multiple roles across Marketing, Brand
                Management and Sales at Hindustan Unilever. Prakash has
                completed his MBA from IIM Calcutta and also holds an Honours
                degree in Production Engineering from Mumbai University.
              </p>
            </div>
          </div>

          <div className="flex mt-[50px]">
            <img
              className="h-[170px] w-[160px] rounded-full mt-[11px]"
              src="https://www.apacciooutlook.com/newstransfer/upload/wpgag00000.jpg"
              alt="CEO"
            />
            <div className="w-[840px] ml-[10px]">
              <h4 className="text-[#D02025] font-semibold">Anoop Menon, CTO</h4>
              <p
                className="text-[#4a4a4a] mt-[12px]"
                style={{ fontFamily: "system-ui" }}
              >
                Anoop Menon serves as Chief Technology Officer at redBus. Anoop
                plays an integral role in setting the company’s strategic
                direction, development and future growth. At redBus, he leads
                effective delivery of scalable systems to the customers, agents
                and bus operators by incorporating the latest technology. A tech
                enthusiast, Anoop comes with over 18 years of extensive
                experience in building scalable and high-performing products
                across telecom, internet and mobile ecommerce domains. Anoop
                strongly believes that hard work and commitment can overcome the
                barriers to success. He completed BE in Mechanical Engineering
                from Madras University and loves sports, movies, TV and music.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
