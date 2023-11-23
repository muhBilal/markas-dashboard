import React from 'react'

const Header = () => {
    return (
        <>
            <header className="header sticky-bar">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><a className="d-flex" href="index.html"><img alt="jobBox"
                                src="assets/imgs/page/dashboard/zkerja-logo.png" /></a></div><span className="btn btn-grey-small ml-10">Admin
                                    area</span>
                        </div>
                        <div className="header-search">
                            <div className="box-search">
                                <form action="">
                                    <input className="form-control input-search" type="text" name="keyword" placeholder="Search"/>
                                </form>
                            </div>
                        </div>
                        <div className="header-menu d-none d-md-block">
                            <ul>
                                <li> <a href="http://wp.alithemes.com/html/jobbox/demos/index.html">Home </a></li>
                                <li> <a href="http://wp.alithemes.com/html/jobbox/demos/page-about.html">About us </a></li>
                                <li> <a href="http://wp.alithemes.com/html/jobbox/demos/page-contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="header-right">
                            <div className="block-signin"><a className="btn btn-default icon-edit hover-up" href="post-job.html">Post Job</a>
                                <div className="dropdown d-inline-block"><a className="btn btn-notify" id="dropdownNotify" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"></a>
                                    <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownNotify">
                                        <li><a className="dropdown-item active" href="#">10 notifications</a></li>
                                        <li><a className="dropdown-item" href="#">12 messages</a></li>
                                        <li><a className="dropdown-item" href="#">20 replies</a></li>
                                    </ul>
                                </div>
                                <div className="member-login"><img alt="" src="assets/imgs/page/dashboard/profile.png"/>
                                    <div className="info-member"> <strong className="color-brand-1">Steven Jobs</strong>
                                        <div className="dropdown"><a className="font-xs color-text-paragraph-2 icon-down" id="dropdownProfile"
                                            type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">Super
                                            Admin</a>
                                            <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownProfile">
                                                <li><a className="dropdown-item" href="profile.html">Profiles</a></li>
                                                <li><a className="dropdown-item" href="my-resume.html">CV Manager</a></li>
                                                <li><a className="dropdown-item" href="login.html">Logout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header