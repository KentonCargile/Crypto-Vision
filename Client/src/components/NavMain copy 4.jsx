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
            <img src={image} id="header" alt=""/>          
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
                        <li>
                          <NavLink to="/videos">Our Videos</NavLink>
                        </li>
                        <li>
                          <NavLink to="/profile">
                            {/* {context.user && context.user.email} */}
                            My Account
                          </NavLink>
                        </li>
                          <NavLink to="/">
                            <li>
                              <p onClick={handleLogout}>Logout</p>
                            </li>
                          </NavLink>
                      </React.Fragment>
                    )}
                      {!context.isLoggedIn && (
                    <React.Fragment>
                        <li>
                          <NavLink to="/signin">Log in</NavLink>
                        </li>
                        <li>
                          <NavLink to="/signup">Create account</NavLink>
                        </li>
                    </React.Fragment>
                  )}
                </ul>
        </nav>
  </nav>
  );
};

export default withUser(NavMain);