import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              <span style={{color : "red"}}>
                Its a Great privillage for me to be amoung the Pwc Tech BootCamp
                Trainee Particpant
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :{resumeData.linkedinId}</h4>
              <h4>Facebookid in :{resumeData.Facebookid}</h4>
              <h4>Email in :{resumeData.Email}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
