import './aboutPage.scss'

function AboutPage(){
  return (
    <div className="aboutPage">
      <div className="textContainer">
              <div className="wrapper">
                  <h2>About Us</h2>
          <h1 className="title">Meet Your Local Property Experts</h1>
          <p>
            At Real Estate, we’re more than just real estate agents —
            we’re dedicated partners in your property journey. With deep local
            knowledge, market expertise, and a commitment to honesty and
            transparency, we help clients buy, sell, and invest with confidence.
            Our mission is simple: to guide you every step of the way and
            deliver results that move you closer to your dreams.
          </p>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/meet-ceo.png" alt="" />
      </div>
    </div>
  );
}

export default AboutPage