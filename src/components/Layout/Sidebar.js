import React from 'react';
import { useRouter } from "next/router";

const Sidebar = () => {
const router = useRouter();
const { pathname } = router;

    return (
        <div className="nav"><a className="btn btn-expanded"></a>
            <nav className="nav-main-menu">
                <ul className="main-menu">
                    <li> <a className={pathname === '/' ? 'dashboard2 active' : 'dashboard2'}  href="/"><img src="assets/imgs/page/dashboard/dashboard.svg"
                        alt="jobBox"/><span className="name">Dashboard</span></a>
                    </li>
                    <li> <a className={pathname === '/candidate' ? 'dashboard2 active' : 'dashboard2'}  href="/candidate"><img src="assets/imgs/page/dashboard/candidates.svg"
                        alt="jobBox"/><span className="name">Candidates</span></a>
                    </li>
                    <li> <a className={pathname === '/regionals' ? 'dashboard2 active' : 'dashboard2'}  href="/regionals"><img src="assets/imgs/page/dashboard/recruiters.svg"
                        alt="jobBox"/><span className="name">Regional</span></a>
                    </li>
                    <li> <a className={pathname === '/asfd' ? 'dashboard2 active' : 'dashboard2'}  href="/my-job-grid"><img src="assets/imgs/page/dashboard/jobs.svg"
                        alt="jobBox"/><span className="name">My Jobs</span></a>
                    </li>
                    <li> <a className={pathname === '/event-album' ? 'dashboard2 active' : 'dashboard2'}  href="/event-album"><img src="assets/imgs/page/dashboard/tasks.svg"
                        alt="jobBox"/><span className="name">Event Album</span></a>
                    </li>
                    <li> <a className={pathname === '/adf' ? 'dashboard2 active' : 'dashboard2'}  href="/profile"><img src="assets/imgs/page/dashboard/profiles.svg"
                        alt="jobBox"/><span className="name">My Profiles</span></a>
                    </li>
                    <li> <a className={pathname === '/afd' ? 'dashboard2 active' : 'dashboard2'}  href="/my-resume"><img src="assets/imgs/page/dashboard/cv-manage.svg"
                        alt="jobBox"/><span className="name">CV Manage</span></a>
                    </li>
                    <li> <a className={pathname === '/asdf' ? 'dashboard2 active' : 'dashboard2'}  href="/settings"><img src="assets/imgs/page/dashboard/settings.svg"
                        alt="jobBox"/><span className="name">Setting</span></a>
                    </li>
                    <li> <a className={pathname === '/asdf' ? 'dashboard2 active' : 'dashboard2'}  href="/authentication"><img
                        src="assets/imgs/page/dashboard/authentication.svg" alt="jobBox"/><span
                            className="name">Authentication</span></a>
                    </li>
                    <li> <a className={pathname === '/asdf' ? 'dashboard2 active' : 'dashboard2'}  href="/login"><img src="assets/imgs/page/dashboard/logout.svg"
                        alt="jobBox"/><span className="name">Logout</span></a>
                    </li>
                </ul>
            </nav>
            <div className="border-bottom mb-20 mt-20"></div>
            <div className="box-profile-completed text-center mb-30">
                <div id="circle-staticstic-demo"></div>
                <h6 className="mb-10">Profile Completed</h6>
                <p className="font-xs color-text-mutted">Please add detailed information to your profile. This will help you develop
                    your career more quickly.</p>
            </div>
            <div className="sidebar-border-bg mt-50"><span className="text-grey">WE ARE</span><span className="text-hiring">HIRING</span>
                <p className="font-xxs color-text-paragraph mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae architecto</p>
                <div className="mt-15"><a className="btn btn-paragraph-2" href="#">Know More</a></div>
            </div>
        </div>
    );
}

export default Sidebar;
