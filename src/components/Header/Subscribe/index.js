import { CgCloseR } from "react-icons/cg";
import "./style.css";
import { useState } from "react";

const Subscribe = () => {
  const [showSubscribe, setShowSubscribe] = useState(true);

  return !showSubscribe ? null : (
    <section className="subscribe">
      <div className="container">
        <h5>
          <span className="subscribe-color">Subscribe</span> to get
          delicious recipes everyday.
        </h5>
        <div className="subscribe-form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <input type="button" value="Subscribe" className="btn" />
        </div>
        <div
          className="close-btn"
          onClick={() => setShowSubscribe(!showSubscribe)}
        >
          <CgCloseR />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
