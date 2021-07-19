import React, { Component } from "react";
import { withUser } from "../components/Auth/withUser";
import ApiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Profile.css";

class Profile extends Component {
  state = {
    videos: [],
    filteredVideos: [],
  };

   componentDidMount() {
    ApiHandler.addFavoriteVideo().then((Profile) => {
      console.log("helloooooo", Profile);
      this.setState({
        videos: Profile.data,
       });
     });
   }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/users/myvideos", {
        withCredentials: true,
      })
      .then((videoList) => {
        console.log("helloooooo", videoList);
        this.setState({
          videos: videoList.data.favoriteVideos,
        });
      });
  }
  render() {
    const role = this.props.context.user.role;
    const favoriteVideos = this.state.videos;
    console.log("context:", this.props.context);
    console.log(favoriteVideos);
    console.log(this.props.context.user.role);
    if (role === "user" || "admin") {
      return (
        <div>
        <section className="top">
          {" "}
          <h1 className="profile-title">
            {" "}
           {/*  Welcome to */}{" "}
            <span className="username">
              {" "}
              {this.props.context.user.username}{" "}
{/*             <hr></hr> */}
            </span>{" "}    Vision
            {/* Check out your favourite videos. */}
          </h1>{" "}
{/*           <hr></hr>
          <h1 className="main-title">My Favorite Videos</h1> */}
          </section>  




          <div id="grid-container">
            {favoriteVideos.map((video) => {
              return (
                <div key={video._id} className="grid-item">
                  <div className="video-wrapper">
                    <iframe id="videoProject" src={video.videoUrl}></iframe>
                  </div>
                  <h3>{video.title}</h3>
                  <Link to={`/videos/${video._id}/details`}>
                    <button id="profile">Full Screen</button>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="profile-btn">
            <Link to={`/videos`}>
{/*               <button className="learn-more">Watch Our Videos</button> */}
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default withUser(Profile);
// export default withUser(Profile);
