import React, { Component } from "react";
import axios from "axios";
/* import { NavLink } from "react-router-dom"; */
import { Link } from "react-router-dom";
import ApiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";
import "../styles/VideoList.css";
import Checkbox from '@material-ui/core/Checkbox';
/* import FormControlLabel from "@material-ui/core/FormControlLabel"; */



class VideoList extends Component {
  state = {
    videos: [], // remember to double click something to see all matches !!
    // filteredVideos: [],
    checked2021: false,
    checked2020: false,
    checked2019: false,
    checked2018: false,
    checked2017: false,
    checked2016: false,
    checked2015: false,
    checked2014: false,
    checked2013: false,
    checked2012: false,
    checked2011: false,
    checked2010: false,
    checked2009: false,
    checked2008: false,
    checked2007: false,
    checked2006: false,
    checked2005: false,
    checked2004: false
  };


  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/video")
      .then((videoList) => {
        console.log("helloooooo", videoList);
        this.setState({
          videos: videoList.data,
        });
      });
  }

  handleDelete = (id) => {
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + `/api/video/${id}`)
      .then((apiResponse) => {
        this.setState({
          videos: this.state.videos.filter((video) => video._id !== id),//???
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handlefavoriteVideo = (id) => {
    console.log(id);
    ApiHandler.addFavoriteVideo({ id }).then((apiResponse) => {
      this.props.history.push("/profile");  //history. push in your react project. push() function belongs to react-router-dom and used to move from the current page to another one. ... It takes the first argument as a destination path and a second argument as the state.
      console.log("response api:", apiResponse);
    });
  };

  handleCheck = (event) => {
    console.log(event.target.checked);

    if (event.target.name === "BITCOIN") {
      this.setState({
        checked2021: event.target.checked,
      });
    } else if (event.target.name === "2020") {
      this.setState({
        checked2020: event.target.checked,
      });
    } else if (event.target.name === "2019") {
      this.setState({
        checked2019: event.target.checked,
      });
    } else if (event.target.name === "2018") {
      this.setState({
        checked2018: event.target.checked,
      });
    } else if (event.target.name === "2017") {
      this.setState({
        checked2017: event.target.checked,
      });
    } else if (event.target.name === "2016") {
      this.setState({
        checked2016: event.target.checked,
      });
    } else if (event.target.name === "2015") {
    this.setState({
      checked2015: event.target.checked,
    });
    } else if (event.target.name === "2014") {
    this.setState({
      checked2014: event.target.checked,
     });
    } else if (event.target.name === "2013") {
      this.setState({
        checked2013: event.target.checked,
     });
    } else if (event.target.name === "2012") {
    this.setState({
      checked2012: event.target.checked,
    });
    } else if (event.target.name === "2011") {
     this.setState({
        checked2011: event.target.checked,
      });
    } else if (event.target.name === "2010") {
      this.setState({
      checked2010: event.target.checked,
    });
    } else if (event.target.name === "2009") {
      this.setState({
    checked2009: event.target.checked,
   });
    } else if (event.target.name === "2008") {
      this.setState({
      checked2008: event.target.checked,
    });
    } else if (event.target.name === "2007") {
    this.setState({
      checked2007: event.target.checked,
    });
    } else if (event.target.name === "2006") {
    this.setState({
      checked2006: event.target.checked,
     });
    } else if (event.target.name === "2005") {
      this.setState({
        checked2005: event.target.checked,
       });
    } else if (event.target.name === "2004") {
        this.setState({
          checked2004: event.target.checked,
      });

    console.log(this.state);
  };
  };
  
  render(){
    console.log(this.state.videos);
    const filteredVideos = this.state.videos.filter((video) => {
      let filteredB = false;
      if (this.state.checked2021 && video.category === "2021") {
        filteredB = true;
      }
      if (this.state.checked2020 && video.category === "2020") {
        filteredB = true;
      }
      if (this.state.checked2019 && video.category === "2019") {
        filteredB = true;
      }
      if (this.state.checked2018 && video.category === "2018") {
        filteredB = true;
      }
      if (this.state.checked2017 && video.category === "2017") {
        filteredB = true;
      }
      if (this.state.checked2016 && video.category === "2016") {
        filteredB = true;
      }
      if (this.state.checked2015 && video.category === "2015") {
        filteredB = true;
      }
      if (this.state.checked2014 && video.category === "2014") {
        filteredB = true;
      }
      if (this.state.checked2013 && video.category === "2013") {
        filteredB = true;
      }
      if (this.state.checked2012 && video.category === "2012") {
        filteredB = true;
      }
      if (this.state.checked2011 && video.category === "2011") {
        filteredB = true;
      }
      if (this.state.checked2010 && video.category === "2010") {
        filteredB = true;
      }
      if (this.state.checked2009 && video.category === "2009") {
        filteredB = true;
      }
      if (this.state.checked2008 && video.category === "2008") {
        filteredB = true;
      }
      if (this.state.checked2007 && video.category === "2007") {
        filteredB = true;
      }
      if (this.state.checked2006 && video.category === "2006") {
        filteredB = true;
      }
      if (this.state.checked2005 && video.category === "2005") {
        filteredB = true;
      }
      if (this.state.checked2005 && video.category === "2004") {
        filteredB = true;
      }
      if (
        !this.state.checked2021 &&
        !this.state.checked2020 &&
        !this.state.checked2019 &&
        !this.state.checked2018 &&
        !this.state.checked2017 &&
        !this.state.checked2016 &&
        !this.state.checked2015 &&
        !this.state.checked2014 &&
        !this.state.checked2013 &&
        !this.state.checked2012 &&
        !this.state.checked2011 &&
        !this.state.checked2010 &&
        !this.state.checked2009 &&
        !this.state.checked2008 &&
        !this.state.checked2007 &&
        !this.state.checked2006 &&
        !this.state.checked2005 &&
        !this.state.checked2004 
      ) {
        filteredB = true;
      }
      return filteredB;
    });
    // .filter((video) => {
    //   if (this.state.checkedTales) {
    //     return video.category === "tales";
    //   } else {
    //     return video;
    //   }
    // })
    // .filter((video) => {
    //   if (this.state.checkedEducation) {
    //     return video.category === "education";
    //   } else {
    //     return video;
    //   }
    // }

    return (
      <div className="master">
        <div className="category-type">
          <form className="cat-point">
            {/* <h1>Select a category</h1> */}

            <input
              className="input-category"
              type="checkbox"
              name="BITCOIN"
              onChange={this.handleCheck}
            ></input>

            <label className="label-category" htmlFor="">  BITCOIN  </label>
            

            <input
              type="checkbox"
              name="2020"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">  ETHEREUM  </label>

            <input
              type="checkbox"
              name="2019"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">  TOP 20 ALT COINS  </label>

            <input
              type="checkbox"
              name="2018"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">  CRYPTO NEWS  </label>

            <input
              type="checkbox"
              name="2017"
              onChange={this.handleCheck}
             ></input>
              <label htmlFor="">  TRADING / INVESTING  </label>

             <input
                type="checkbox"
                name="2016"
                onChange={this.handleCheck}
              ></input>
            <label htmlFor="">  NFTs  </label>

           {/*  <input
              type="checkbox"
              name="2015"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">CRYPTO MINING</label>

            <input
              type="checkbox"
              name="2014"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">UPCOMING EVENTS</label> */}

            <input
              type="checkbox"
              name="2013"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">  SMALL CAP CRYPTOS  </label>
{/* 
            <input
              type="checkbox"
              name="2012"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">UNDERSTANDING BLOCKCHAIN</label>

            <input
              type="checkbox"
              name="2011"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">POW vs POS</label>

            <input
              type="checkbox"
              name="2010"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">COLD STORAGE</label>

            <input
              type="checkbox"
              name="2009"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">STAKING CRYPTO</label>

            <input
              type="checkbox"
              name="2008"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">DEFI</label> */}

{/*             <input
              type="checkbox"
              name="2007"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">2007</label>

            <input
              type="checkbox"
              name="2006"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">2006</label>

            <input
              type="checkbox"
              name="2005"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">2005</label>

            <input
              type="checkbox"
              name="2004"
              onChange={this.handleCheck}
            ></input>
            <label htmlFor="">2004</label> */}
         </form>
        </div>



        {/* <h1>test video</h1>
        <div>
          {this.state.videos.map((video) => (
            <div key={video._id}>
              <iframe id="videoProject" src={video.videoUrl}></iframe>
              <h3>{video.title}</h3>
              <p>{video.category}</p> <br></br>
              <p>{video.description}</p>
              <div>
                <Link to={`/videos/${video._id}/edit`}>
                  <button>Edit</button>
                </Link>
              </div>
              <button onClick={() => this.handleDelete(video._id)}>
                Delete
              </button>
            </div>
          ))}
        </div> */}
{/*         <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr> */}

            {/*<h1 className="main-title">Watch Now</h1> */}

        <div id="grid-container">
          {filteredVideos.map((video) => {
            return (
              <div key={video._id} className="grid-item">
                <div className="video-wrapper">
                  <iframe id="videoProject" src={video.videoUrl}></iframe> {/* videoUrl, title etc coming from video method */}
                </div>
                <h3>{video.title}</h3>             {/* video title is being posted into database */}
                {/* <p>{video.category}</p> <br></br>
                <p>{video.description}</p> */}
                {this.props.context.user?.role === "admin" && (    //coming from withUser import context           
                  <div>
                    <Link to={`/videos/${video._id}/edit`}>
                      <button>Edit</button>
                    </Link>
                  </div>
                )}
                <Link to={`/videos/${video._id}/details`}>
                  <button id="fullscreen">Full Screen</button>
                </Link>
                {this.props.context.user?.role === "admin" && (
                  <div>
                    <button onClick={() => this.handleDelete(video._id)}>
                      Delete
                    </button>
                  </div>
                )}
                {this.props.context.isLoggedIn && (
                  <div>
                    {/* <Link to={`/profile`}> */}
                    <button onClick={() => this.handlefavoriteVideo(video._id)}> 
                      Add to my account
                    </button>
                    {/* </Link> */}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {this.props.context.user?.role === "admin" && (
          <div className="create-cat">
            <Link to={`/videos/create`}>
              <button>Create a new video</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withUser(VideoList);
