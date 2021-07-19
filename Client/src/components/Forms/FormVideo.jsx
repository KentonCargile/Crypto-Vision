import React, { Component } from "react";
import ApiHandler from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import "../../styles/Form.css";

export default class FormVideo extends Component {
  state = {
    title: "",
    videoUrl: "",
    description: "",
    category: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    ApiHandler.addVideo({
      title: this.state.title,
      videoUrl: this.state.videoUrl,
      description: this.state.description,
      category: this.state.category,
    })

      .then((apiResponse) => {
        console.log(apiResponse);
        this.props.history.push("/videos");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="signup-form">
        <h1 className="title-form">Add a New Video</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="form-group-item">
              <label htmlFor="">Title</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="title"
                placeholder="video title"
              />
            </div>
            <div className="form-group-item">
              <label htmlFor="">Add video link</label>
              <input
                onChange={this.handleChange}
                type="url"
                name="videoUrl"
                placeholder="https://example.com"
              />
            </div>

            <div className="form-group-item">
              <label htmlFor="">Select a category:</label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                name="category"
              >
                <option value="2021">BITCOIN</option>
                <option value="2020">ETHEREUM</option>
                <option value="2019">TOP 20 ALT COINS</option>
                <option value="2018">CRYPTO NEWS</option>
                <option value="2017">TRADING / INVESTING</option>
                <option value="2016">NFTs</option>
                <option value="2015">SMALL CAP CRYPTOS</option>
{/*                 <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option> */}
              </select>
            </div>
            <div className="form-group-item">
              <label htmlFor="">Description</label>
              <textarea
                onChange={this.handleChange}
                name="description"
                placeholder="Tell us something about this video"
                value={this.state.description}
              />
            </div>
{/*             <div className="form-group-item">
              <label htmlFor="">Vocabulary</label>
              <textarea
                onChange={this.handleChange}
                name="vocabulary"
                placeholder="Add vocabulary helper"
                value={this.state.vocabulary}
              />
            </div> */}
          </div>
          <button className="btn-form">Submit !</button>
        </form>
      </div>
    );
  }
}
