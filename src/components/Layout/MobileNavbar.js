import React from 'react';

const MobileNavbar = () => {
    return (
        <>
            <div className="burger-icon burger-icon-white"><span className="burger-icon-top"></span><span
                className="burger-icon-mid"></span><span className="burger-icon-bottom"></span></div>
            <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-search mobile-header-border mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search…" /><i className="fi-rr-search"></i>
                                </form>
                            </div>
                            <div className="mobile-menu-wrap mobile-header-border">
                                {/* <!-- mobile menu start--> */}
                                <nav>
                                    <ul className="main-menu">
                                        <li> <a className="dashboard2" href="index.html"><img src="assets/imgs/page/dashboard/dashboard.svg"
                                            alt="jobBox" /><span className="name">Dashboard</span></a>
                                        </li>
                                        <li> <a className="dashboard2" href="candidates.html"><img src="assets/imgs/page/dashboard/candidates.svg"
                                            alt="jobB/ox" /><span className="name">Candidates</span></a>
                                        </li>
                                        <li> <a className="dashboard2" href="recruiters.html"><img src="assets/imgs/page/dashboard/recruiters.svg"
                                            alt="jobBox" /><span className="name">Recruiters</span></a>
                                        </li>
                                        <li> <a className="dashboard2" href="my-job-grid.html"><img src="assets/imgs/page/dashboard/jobs.svg"
                                            alt="jobBox" /><span className="name">My Jobs</span></a>
                                        </li>
                                        <li> <a className="dashboard2" href="my-tasks-list.html"><img src="assets/imgs/page/dashboard/tasks.svg"
                                            alt="jobBox" /><span className="name">Tasks List</span></a>
                                        </li>
                                        <li> <a className="dashboard2" href="profile.html"><img src="assets/imgs/page/dashboard/profiles.svg"
                                            alt="jobBox" /><span className="name">My Profiles</span></a>
                                        </li>
                                        <li> <a className="dashboard2" href="my-resume.html"><img src="assets/imgs/page/dashboard/cv-manage.svg"
                                            alt="jobBox" /><span className="name">CV Manage</span></a>
                                        </li>
                                        <li> <a className="dashboard2" href="settings.html"><img src="assets/imgs/page/dashboard/settings.svg"
                                            alt="jobBox" /><span className="name">Setting</span></a>
                                        </li>
                                        <li> <a className="dashboard2 active" href="authentication.html"><img
                                            src="assets/imgs/page/dashboard/authentication.svg" alt="jobBox" /><span
                                                className="name">Authentication</span></a>
                                        </li>
                                        <li> <a className="dashboard2" href="login.html"><img src="assets/imgs/page/dashboard/logout.svg"
                                            alt="jobBox" /><span className="name">Logout</span></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Work Preferences</a></li>
                                    <li><a href="#">Account Settings</a></li>
                                    <li><a href="#">Go Pro</a></li>
                                    <li><a href="page-signin.html">Sign Out</a></li>
                                </ul>
                                <div className="mb-15 mt-15"> <a className="btn btn-default icon-edit hover-up" href="post-job.html">Post Job</a>
                                </div>
                            </div>
                            <div className="site-copyright">Copyright 2022 &copy; JobBox. <br />Designed by AliThemes.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileNavbar;
