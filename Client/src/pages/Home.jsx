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

                      <h1 className="home_link1">TOP CRYPTO CONTENT<br></br><span id="span">ON DEMAND</span></h1>

                  </div>
                  <Link to={`/signup`}>
                <div className="home_text_element2">
                    
                      <h2 className="home_link2">SIGN UP</h2>
                                     
                  <div className="home_text_element2_text">
                      <ul className="home_link_2text">-FULL VIDEO LIBRARY ACCESS</ul>
                      <ul className="home_link_2text2">-TRADING CHARTS</ul>
                      <ul className="home_link_2text3">-THE BITCOIN FORCAST REPORT</ul>
                  </div>
                  
                  </div>
                  </Link>
{/*                   <div className="home_text_element3">
                    <Link to={`/videos`}>
                      <h2 className="home_link3">FREE CONTENT</h2>
                    </Link>
            </div> */}

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
