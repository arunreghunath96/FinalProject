import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBuilding, faCalendarAlt, faClipboardCheck, faCog, faCommentDots, faEnvelope, faFile, faLock, faTh, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import './AsideMenu.css';
function AsideMenu() {
    return (
        <div className="asideMenuBar">
            <div className="asideHeader d-flex align-items-center">
                <h4>Admin<span className="orange">.</span></h4>
                <FontAwesomeIcon className="menuIcon" icon={faBars}></FontAwesomeIcon>
            </div>
            <ul>
                <li className="d-flex align-items-center">
                <div className="insideIconBox d-flex align-items-center"><FontAwesomeIcon className="listIcon" icon={faTh}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>Dashboard</h7></div>
                </li>
                <li className="d-flex align-items-center">
                <div className="insideIconBox d-flex align-items-center"><FontAwesomeIcon className="listIcon" icon={faCommentDots}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>Chat</h7></div>
                </li>
                <li className="d-flex align-items-center">
                <div className="insideIconBox"><FontAwesomeIcon className="listIcon" icon={faEnvelope}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>Email</h7></div>
                </li>
                <li className="d-flex align-items-center">
                <div className="insideIconBox"><FontAwesomeIcon className="listIcon" icon={faCalendarAlt}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>Calendar</h7></div>
                </li>
                <li className="d-flex align-items-center">
                <div className="insideIconBox"><FontAwesomeIcon className="listIcon" icon={faClipboardCheck}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>Task</h7></div>
                </li>
                <li className="d-flex align-items-center">
                <div className="insideIconBox"><FontAwesomeIcon className="listIcon" icon={faTicketAlt}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>Tickets</h7></div>
                </li>
                <li className="d-flex align-items-center">
                <div className="insideIconBox"><FontAwesomeIcon className="listIcon" icon={faFile}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>File Manager</h7></div>
                </li>
                <li className="d-flex align-items-center">
                <div className="insideIconBox"><FontAwesomeIcon className="listIcon" icon={faBuilding}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>Companies</h7></div>
                </li>
                <li className="d-flex align-items-center">
                <div className="insideIconBox"><FontAwesomeIcon className="listIcon" icon={faLock}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>Authentication</h7></div>
                </li>
                <li className="d-flex align-items-center">
                <div className="insideIconBox"><FontAwesomeIcon className="listIcon" icon={faCog}></FontAwesomeIcon></div>
                <div className="insideTextBox d-flex align-items-center"><h7>Settings</h7></div>
                </li>
            </ul>
            
        </div>
    )
}

export default AsideMenu
