import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="https://lh3.googleusercontent.com/a-/AFdZucoNkSiSaUM5tPoIZOcoYX_vciW-cFntwo_M2xnDxQ=s288-p-rw-no"
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.email}</span>
                  <br />
                  <span>{resumeData.Tell}</span>
                  <br />
                  <span>{resumeData.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
