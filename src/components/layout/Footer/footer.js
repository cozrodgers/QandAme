import React, { Component } from "react";
import "./footer.css";
import "../../tachyons.min.css"; 

class Footer extends Component {
  render() {
    return (
      <div className="all">
        <p className="dev">Developed by Corey Rodgers and Imad Chaima</p>
        <p className="social">Find us on Github & LinkedIn</p>
      </div>
    );
  }
}

export default Footer;
