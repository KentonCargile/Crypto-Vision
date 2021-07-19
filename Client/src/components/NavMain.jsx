import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import image from '../components/nav_photo.png'
import homepage_image from '../components/homepage.png'
import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (

  <nav className="NavMain">
        <nav className="NavPhoto">
            <div id="background_overlay">
            <img src={image} id="header" alt=""/>
                  <div class="layer"></div>
            </div>         
{/*                 <NavLink exact to="/">
                  <img
                    id="logo"
                    src={homepage_image}
                    alt=""
                  />
                  </NavLink> */}
            <div className="header">
            <NavLink exact to="/">
                <h1 class="header__title1">Crypto</h1>

                <h2 class="header__title2">Vision</h2>
            </NavLink>
            </div>
                  {/* <h3 className="logo">App name</h3> */}

                <ul className="nav-list">
                    {context.isLoggedIn && (
                      <React.Fragment>
                        <li id="li1">
                          <NavLink to="/videos">Videos</NavLink>
                        </li>
\
                        <li id="li2">
                          <NavLink to="/profile">
                            {/* {context.user && context.user.email} */}
                            Saved Videos
                          </NavLink>
                          </li>
                          <li id="li3">
                          <NavLink to="/newsletter">
                            {/* {context.user && context.user.email} */}
                            Newsletter
                          </NavLink>
                          </li>
                          <li id="li4">
                          <NavLink to="/tradingcharts">
                            {/* {context.user && context.user.email} */}
                            Charts
                          </NavLink>
                            </li>
{/*                             <li id="li5"> */}
                                  <NavLink to="/">
                                  
                                      <p id="logout" onClick={handleLogout}>Logout</p>
                                    
                                  </NavLink>
{/*                                   </li> */}
                      </React.Fragment>
                    )}
                      {!context.isLoggedIn && (
                    <React.Fragment>
                        <li id="li6">
                          <NavLink to="/signin">Log in</NavLink>
                        </li>
                        <li id="li7">
                          <NavLink to="/signup">Sign Up</NavLink>
                        </li>
                    </React.Fragment>
                  )}
                </ul>
        </nav>
  </nav>
  );
};

export default withUser(NavMain);