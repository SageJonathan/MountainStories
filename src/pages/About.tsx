const About = () => {
  return (
    <div className="about">
      <div className="hero">
        <div className="hero-content">
          <h1>Mountain Stories</h1>
          <div className="hero-text">
            <p>Is a platform for shattering convention.</p>
            <p>True-life stories from vulnerable & curious travelers.</p>
            <p>Showcasing humanity and freedom.</p>
            <p>Poetry and the landscapes that inspired them.</p>
            <p>Reports of Alpine forays.</p>
            <p className="hero-description">
              These stories, poems, and still frames portray the nuanced,
              chaotic, and fragile complexions of nature and persons.
            </p>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="about-header">
          <div className="profile-container">
            <div className="profile-image">
              <img src="/about.webp" alt="Profile" />
            </div>
            <div className="image-caption">
              Self Portrait of the author following a solo acsent of the North
              Face of Ranrapalca
              <br />
              In the Cordillera Blanca, Peru. June 2023.
            </div>
          </div>
          <div className="about-intro">
            <h2>Biography</h2>
            <div className="bio-content">
              <p>
                In 2019, I began climbing in the Andes through unguided
                high-altitude mountaineering and unsupported solo backcountry
                trekking. After that season in Peru, Bolivia & Chile, I spent a
                winter in Japan, solo-winter mountaineering.
              </p>
              <p>
                With the arrival of Covid-19, I moved to the Bow valley, where I
                now live; Climbing through the seasons and perfecting my mastery
                over rock, ice, snow, and all combinations found in the alpine
                terrain. I began skiing in the winter of 2021/2022 with the
                original intent to access remote peaks. However, I soon adopted
                the sport for its own sake and beauty.
              </p>
              <p>
                I mainly travel across Canada and the United States to climb at
                various venues; from roadside crags to towering alpine climbs
                and steep waterfalls. With international borders opening again,
                I hope to begin expeditions soon.
              </p>
              <p>
                I speak English, French, Spanish, and Portuguese. I have worked
                or lived in 8 countries and have traveled 23.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
