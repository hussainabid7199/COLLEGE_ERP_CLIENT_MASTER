import React from 'react';
import { Link } from 'react-router-dom';

// Images 
import admin from "../../images/admin.jpg";
import logo1 from "../../images/logo 1.png";
import { useNavigate } from 'react-router-dom';


// Images 

export default function Header() {
    const navigate = useNavigate();
    const Logout = ()=>{
        localStorage.removeItem("tokens");
        navigate("/")
    }
 
    return (
        <>
            <div id="right-panel" className="right-panel">
                <header id="header" className="header" style={{ height: "61px", zIndex: "1000" }} >
                    <div className="top-left">
                        <div className="navbar-header">
                            {/* <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a> */}
                            <a className="navbar-brand hidden" href="./"><img src={logo1} alt="Logo" /></a>
                            <a className="navbar-brand" href="./"><img src={logo1} alt="Logo" style={{ width: "55px", height: "100%" }} /></a>
                        </div>
                    </div>
                    <div className="top-right">
                        <div className="header-menu">
                            <div className="header-left">
                                <button className="search-trigger"><i className="fa fa-search"></i></button>
                                <div className="form-inline">
                                    <form className="search-form">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search ..."
                                            aria-label="Search" />
                                        <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                                    </form>
                                </div>

                                <div className="dropdown for-notification">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="notification"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-bell"></i>
                                        <span className="count bg-danger">3</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="notification">
                                        <p className="red">You have 3 Notification</p>
                                        <a className="dropdown-item media" href="/">
                                            <i className="fa fa-check"></i>
                                            <p>Server #1 overloaded.</p>
                                        </a>
                                        <a className="dropdown-item media" href="/">
                                            <i className="fa fa-info"></i>
                                            <p>Server #2 overloaded.</p>
                                        </a>
                                        <a className="dropdown-item media" href="/">
                                            <i className="fa fa-warning"></i>
                                            <p>Server #3 overloaded.</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown for-message">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="message"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-envelope"></i>
                                        <span className="count bg-primary">4</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="message">
                                        <p className="red">You have 4 Mails</p>
                                        <a className="dropdown-item media" href="/">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/1.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Jonathan Smith</span>
                                                <span className="time float-right">Just now</span>
                                                <p>Hello, this is an example msg</p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item media" href="/">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/2.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Jack Sanders</span>
                                                <span className="time float-right">5 minutes ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item media" href="/">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/3.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Cheryl Wheeler</span>
                                                <span className="time float-right">10 minutes ago</span>
                                                <p>Hello, this is an example msg</p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item media" href="/">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/4.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Rachel Santos</span>
                                                <span className="time float-right">15 minutes ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="user-area dropdown float-right">
                        <div  className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img className="user-avatar rounded-circle" src={admin} alt="User Avatar"/>
                        </div>

                        <div className="user-menu dropdown-menu">
                            <Link className="nav-link" to={"#"}><i className="fa fa- user"></i>My Profile</Link>

                            <Link className="nav-link" to={"#"}><i className="fa fa- user"></i>Notifications <span
                                    className="count">13</span></Link>

                            <Link className="nav-link" to={"#"}><i className="fa fa -cog"></i>Settings</Link>

                            <Link className="nav-link" to={"#"}><i className="fa fa-power -off"></i>Logout</Link>
                        </div>
                    </div> */}
                            <div className="user-area dropdown float-right">
                                <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle active" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className="user-avatar rounded-circle" src={admin} alt="User Avatar" />
                                </a>
                                <ul className="user-menu dropdown-menu">
                                    <li><a className="dropdown-item nav-link" href="/"><i className="fa fa- user"></i>My Profile</a></li>
                                    <li><a className="dropdown-item nav-link" href="/"><i className="fa fa- user"></i>Notifications <span
                                        className="count">13</span></a></li>
                                    <li><a className="dropdown-item nav-link" href="/"><i className="fa fa -cog"></i>Settings</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item nav-link" onClick={Logout}><i className="fa fa-power -off"></i>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
