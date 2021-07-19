import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <main>
        <section className="home_section">
            <div className="home_text">
            <div className="home_text_element1">

                  <h1 className="home_link1">TOP CRYPTO CONTENT<br></br>ON DEMAND</h1>

              </div>
            <div className="home_text_element2">
                <Link to={`/signup`}>
                  <h2 className="home_link2">FREE SIGN UP</h2>
                </Link>
              </div>
              <div className="home_text_element3">
                <Link to={`/videos`}>
                  <h2 className="home_link3">WATCH VIDEOS</h2>
                </Link>
              </div>

{/*               <div className="home_text_element2">
                <Link to={`/about`}>
                  <h2 className="belly__item__tile">About</h2>
                </Link>
            </div> */}
            </div>
        </section>
      </main> 
    );
  }
}

export default Home;
