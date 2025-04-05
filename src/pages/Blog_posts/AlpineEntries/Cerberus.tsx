import ScreenReader from "../../../components/ScreenReader";

import cerbCard from "../../../assets/alpine/cerberus/CerberusCard.webp";
import cerb1 from "../../../assets/alpine/cerberus/Cerb1.webp";
import cerb2 from "../../../assets/alpine/cerberus/Cerb2.webp";
import cerb3 from "../../../assets/alpine/cerberus/Cerb3.webp";
import cerb4 from "../../../assets/alpine/cerberus/Cerb4.webp";
import cerb5 from "../../../assets/alpine/cerberus/Cerb5.webp";
import cerb6 from "../../../assets/alpine/cerberus/Cerb6.webp";

const Cerberus = () => {
  const content = `
    This last Saturday, Nat Walkom and I mustered our remaining energies from a 25h alpine push with Ripley Boulianne to go out on skis with a full pack; intending to establish a new route near Pulpit Peak, just north of Lake Louise. We were tired, but the allure of adventure was more enticing than an adequate recovery, especially with a cold snap in the forecast and the imminent arrival of my outbound flight. So, with a couple of hours of sleep, we shuffled gear between vans in the McDonald’s parking lot in Canmore, bid Ripley adieu, filled the tank- and were off. 

    Nat hadn’t seen anything apart from some pictures I had taken a week earlier while on a ski tour with Tiffany Hassett. From my estimates, it looked like 2 to 3 pitches of WI4- potentially WI5. Off the bat, I knew I wanted to give this a go with Nat. I was psyched when he shared the stoke. 

    We tried making our bags before going to bed for a start at dawn, but after a hearty dinner, we crept into our bunk beds at the wilderness hostel and opted to wake up earlier to get them done.

    No sweat. We got up, sharpened our picks, ate some oats, and we were off. Skis underfoot at the crack of dawn. Our approach took us just over 2h30 (∼1500m of gain, 8km) over some good ol’ Rockies facets and promising pillow pockets for our ski-out. At the base of the approach couloir, we ditched our skis, slid into our mountain boots, and set off soloing to meet the ice. The initial snow slog quickly gave way to some enjoyable M3 before hitting the ice apron. We continued soloing over WI2 terrain to the base of three distinct pillars. I made an anchor, tied in- and started flaking the rope. 
Nat quickly joined me and began flaking the other rope.

Before us there stood a pillar of WI4 with 2 pillars of WI3 flanking its sides. This wasn’t going to be the multi-pitch climb I had estimated it to be. But here we were so we decided to climb all three of them: 
Climbing to the top, abseiling down to the original anchor, then set off for the next. Repeat. Repeat.

After the pillars, we abseiled back down the couloir, swapped into our ski boots, and pointed the tips home. The skiing in the broad gulley was phenomenal and the tree skiing had us laughing hard

We drove back to the hostel for a proper nighttime breakfast and a blazing sauna. A good day out amongst friends. A memorable way to end a trip. 

 We named the route Cerberus WI4 M3.


  `;

  return (
    <div className="blog-post">
<section className="hero" style={{ backgroundImage: `url(${cerbCard})` }}>
        <div className="hero-content">
          <h1>First Ascent: Cerberus</h1>
          <div className="hero-text">
            <p>WI4 M3</p>
          </div>
        </div>
      </section>

      <div className="article-content">
        <ScreenReader content={content} title="First Ascent: Cerberus" />

        <p>
          This last Saturday, Nat Walkom and I mustered our remaining energies
          from a 25h alpine push with Ripley Boulianne to go out on skis with a
          full pack; intending to establish a new route near Pulpit Peak, just
          north of Lake Louise. We were tired, but the allure of adventure was
          more enticing than an adequate recovery, especially with a cold snap
          in the forecast and the imminent arrival of my outbound flight. So,
          with a couple of hours of sleep, we shuffled gear between vans in the
          McDonald’s parking lot in Canmore, bid Ripley adieu, filled the tank-
          and were off.
        </p>

        <div className="article-image">
          <img src={cerb1} alt="Cerberus" />
          <p className="image-caption">Myself, Ripley, Nat</p>
        </div>

        <p>
          Nat hadn’t seen anything apart from some pictures I had taken a week
          earlier while on a ski tour with Tiffany Hassett. From my estimates,
          it looked like 2 to 3 pitches of WI4- potentially WI5. Off the bat, I
          knew I wanted to give this a go with Nat. I was psyched when he shared
          the stoke.{" "}
        </p>
        <p>
          We tried making our bags before going to bed for a start at dawn, but
          after a hearty dinner, we crept into our bunk beds at the wilderness
          hostel and opted to wake up earlier to get them done.
        </p>

        <div className="article-image">
          <img src={cerb2} alt="Cerberus" />
          <p className="image-caption">
            Cellphone picture taken on the skitour
          </p>
        </div>

        <div className="article-image">
          <img src={cerb3} alt="Cerberus" />
          <p className="image-caption">Location of the climb</p>
        </div>
        <p>
          No sweat. We got up, sharpened our picks, ate some oats, and we were
          off. Skis underfoot at the crack of dawn. Our approach took us just
          over 2h30 (∼1500m of gain, 8km) over some good ol’ Rockies facets and
          promising pillow pockets for our ski-out. At the base of the approach
          couloir, we ditched our skis, slid into our mountain boots, and set
          off soloing to meet the ice. The initial snow slog quickly gave way to
          some enjoyable M3 before hitting the ice apron. We continued soloing
          over WI2 terrain to the base of three distinct pillars. I made an
          anchor, tied in- and started flaking the rope. Nat quickly joined me
          and began flaking the other rope.
        </p>

        <div className="article-image">
          <img src={cerb4} alt="Cerberus" />
          <p className="image-caption">Nat breaking trail in style</p>
        </div>

        <div className="article-image">
          <img src={cerb5} alt="Cerberus" />
          <p className="image-caption">Nat in the approach couloir</p>
        </div>

        <p>
          Before us there stood a pillar of WI4 with 2 pillars of WI3 flanking
          its sides. This wasn’t going to be the multi-pitch climb I had
          estimated it to be. But here we were so we decided to climb all three
          of them: Climbing to the top, abseiling down to the original anchor,
          then set off for the next. Repeat. Repeat.
        </p>
        <p>
          After the pillars, we abseiled back down the couloir, swapped into our
          ski boots, and pointed the tips home. The skiing in the broad gulley
          was phenomenal and the tree skiing had us laughing hard
        </p>

        <div className="article-image">
          <img src={cerb6} alt="Cerberus" />
          <p className="image-caption">
            View of the central and right pillars. Viewed from left pillar
          </p>
        </div>

        <p>
          We drove back to the hostel for a proper nighttime breakfast and a
          blazing sauna. A good day out amongst friends. A memorable way to end
          a trip.
        </p>

        <p> We named the route Cerberus WI4 M3.</p>
      </div>
    </div>
  );
};

export default Cerberus;
