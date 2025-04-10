import { useState, useEffect } from "react";

declare global {
  interface Window {
    paypal: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
    };
  }
}

const About = () => {
  const [showPayPal, setShowPayPal] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (showPayPal && !scriptLoaded) {
      // Load PayPal SDK
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=BAAcno5DXqaxtsULGSQWXE1vfAkZOcZKVx-6-FdDsDj6xL2wehMzSOf7VCbbHPgzMMb7hfK9mzGso4weD4&components=hosted-buttons&disable-funding=venmo&currency=CAD";
      script.async = true;
      script.crossOrigin = "anonymous";

      script.onload = () => {
        setScriptLoaded(true);
        if (window.paypal) {
          window.paypal
            .HostedButtons({
              hostedButtonId: "KMC6ML6US8QYW",
            })
            .render("#paypal-container-KMC6ML6US8QYW");
        }
      };

      document.body.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [showPayPal, scriptLoaded]);

  return (
    <div className="about">
      <section className="hero">
        <div className="hero-content">
          <h1>Mountain Stories</h1>
          <div className="hero-text">
            <p>A platform for unconventional storytelling</p>
          </div>
          <div className="hero-description">
            Exploring the intersection of climbing, travel, and languages
          </div>
        </div>
      </section>

      <div className="about-header">
        <div className="profile-container">
          <div className="profile-image">
            <img src="/about.webp" alt="Jonathan Sage" />
          </div>
          <div className="image-caption">
            Self Portrait of the author following a solo ascent of the North
            Face of Ranrapalca in the Cordillera Blanca, Peru. June 2023.
          </div>
          <div className="social-links">
            <a
              href="mailto:sagejonathan.tesol@gmail.com"
              className="social-link"
            >
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </a>
            <a
              href="https://www.instagram.com/wandering_mapachito"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
          {!showPayPal ? (
            <button
              className="donate-button"
              onClick={() => setShowPayPal(true)}
            >
              Support Mountain Stories
            </button>
          ) : (
            <div
              id="paypal-container-KMC6ML6US8QYW"
              className="donate-container"
            >
              {!scriptLoaded && (
                <div className="loading">Loading PayPal...</div>
              )}
            </div>
          )}
        </div>

        <div className="about-intro">
          <h2>About me</h2>
          <div className="bio-content">
            <p>
              ​In 2019, I embarked on a journey into the heart of the Andes,
              where I discovered the raw beauty of unguided high-altitude
              mountaineering and the solitude of solo backcountry trekking. This
              initial season in Peru, Bolivia, and Chile led to a transformative
              winter in Japan, where I explored the art of solo winter
              mountaineering.
            </p>
            <p>
              The global pause of 2020 brought me to the Bow Valley, which I now
              call home. Here, I've immersed myself in the full spectrum of
              mountain craft—from technical rock climbing to ice and mixed
              routes, alpine ascents, and the graceful dance of ski
              mountaineering. What began as a practical pursuit for accessing
              remote peaks evolved into a deep appreciation for the sport's
              inherent beauty and rhythm.
            </p>
            <p>
              My climbing journey spans the diverse landscapes of North America,
              from intimate roadside crags to towering alpine faces and
              ephemeral ice falls. As the world reopens, I look forward to
              expanding my horizons through new expeditions and explorations.
            </p>
            <p>
              Fluent in English, French, Spanish, and Portuguese, I've
              cultivated connections across continents. My experiences span
              eight countries as a resident or worker, with adventures touching
              twenty-three nations—each place adding its own chapter to my
              mountain story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
