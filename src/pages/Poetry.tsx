import React from "react";
import { poems } from "../content_data/poems/poems";

const Poetry = () => {
  return (
    <div className="poetry">
      <section className="hero">
        <h1>Poetry</h1>
      </section>
      <div className="page-content">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-display">
            <h2>{poem.title}</h2>
            <div className="poem-image">
              <img src={poem.image} alt={poem.title} />
              <div className="image-annotation">{poem.imageAnnotation}</div>
            </div>
            <div className="poem-text">
              {poem.content.split("\n\n").map((stanza, index) => (
                <p key={index}>{stanza}</p>
              ))}
            </div>
            <div className="poem-location">
              <i className="fas fa-map-marker-alt"></i>
              {poem.location.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poetry;
