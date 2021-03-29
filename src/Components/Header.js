import React from "react";
import "./Headerstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@material-ui/core";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fa,facebook } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <div>
      <div className="top">
        <div className="ticket">
          <h2>Tickets</h2>
        </div>
        <div className="profile">
          <FontAwesomeIcon icon={faBell} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <p>Kevin Harry</p>
        </div>
      </div>

      <p className="top-sub">
        Home{" "}
        <FontAwesomeIcon
          icon={faChevronRight}
          className="icon arrow "
        ></FontAwesomeIcon>{" "}
        Tickets
      </p>
    </div>
  );
}
