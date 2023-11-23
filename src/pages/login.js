import React from 'react';
import Layout from '../components/Layout/Layout';

const Login = () => {
    return (
        <Layout>
            <div className="box-heading">
          <div className="box-title"> 
            <h3 className="mb-35">Login</h3>
          </div>
          <div className="box-breadcrumb"> 
            <div className="breadcrumbs">
              <ul> 
                <li> <a className="icon-home" href="index.html">Admin</a></li>
                <li><span>Login</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row"> 
          <div className="col-lg-12"> 
            <div className="section-box">
              <div className="container"> 
                <div className="panel-white mb-30">
                  <div className="box-padding">               
                    <div className="login-register"> 
                      <div className="row login-register-cover pb-250">
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                          <div className="form-login-cover">
                            <div className="text-center">
                              <p className="font-sm text-brand-2">Welcome back! </p>
                              <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                              <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                              <button className="btn social-login hover-up mb-20"><img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox"/><strong>Sign in with Google</strong></button>
                              <div className="divider-text-center"><span>Or continue with</span></div>
                            </div>
                            <form className="login-register text-start mt-20" action="#">
                              <div className="form-group">
                                <label className="form-label" for="input-1">Username or Email address *</label>
                                <input className="form-control" id="input-1" type="text" required="" name="fullname" placeholder="Steven Job"/>
                              </div>
                              <div className="form-group">
                                <label className="form-label" for="input-4">Password *</label>
                                <input className="form-control" id="input-4" type="password" required="" name="password" placeholder="************"/>
                              </div>
                              <div className="login_footer form-group d-flex justify-content-between">
                                <label className="cb-container">
                                  <input type="checkbox"/><span className="text-small">Remenber me</span><span className="checkmark"></span>
                                </label><a className="text-muted" href="#">Forgot Password</a>
                              </div>
                              <div className="form-group">
                                <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">Login</button>
                              </div>
                              <div className="text-muted text-center">Don't have an Account? <a href="register.html">Sign up</a></div>
                            </form>
                          </div>
                          <div className="img-2"><img src="assets/imgs/page/login-register/img-3.svg" alt="JobBox"/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10"> 
          <div className="section-box">
            <div className="container"> 
              <div className="panel-white pt-30 pb-30 pl-15 pr-15">
                <div className="box-swiper">
                  <div className="swiper-container swiper-group-10">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/microsoft.svg" alt="jobBox"/></div>
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/sony.svg" alt="jobBox"/></div>
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/acer.svg" alt="jobBox"/></div>
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/nokia.svg" alt="jobBox"/></div>
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/asus.svg" alt="jobBox"/></div>
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/casio.svg" alt="jobBox"/></div>
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/dell.svg" alt="jobBox"/></div>
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/panasonic.svg" alt="jobBox"/></div>
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/vaio.svg" alt="jobBox"/></div>
                      <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/sony.svg" alt="jobBox"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="ModalApplyJobForm" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content apply-job-form">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="modal-body pl-30 pr-30 pt-50">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Job Application </p>
                  <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">Start your career today</h2>
                  <p className="font-sm text-muted mb-30">Please fill in your information and send it to the employer.                   </p>
                </div>
                <form className="login-register text-start mt-20 pb-30" action="#">
                  <div className="form-group">
                    <label className="form-label" for="input-1">Full Name *</label>
                    <input className="form-control" id="input-1" type="text" required="" name="fullname" placeholder="Steven Job"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label" for="input-2">Email *</label>
                    <input className="form-control" id="input-2" type="email" required="" name="emailaddress" placeholder="stevenjob@gmail.com"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label" for="number">Contact Number *</label>
                    <input className="form-control" id="number" type="text" required="" name="phone" placeholder="(+01) 234 567 89"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label" for="des">Description</label>
                    <input className="form-control" id="des" type="text" required="" name="Description" placeholder="Your description..."/>
                  </div>
                  <div className="form-group">
                    <label className="form-label" for="file">Upload Resume</label>
                    <input className="form-control" id="file" name="resume" type="file"/>
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between">
                    <label className="cb-container">
                      <input type="checkbox"/><span className="text-small">Agree our terms and policy</span><span className="checkmark"></span>
                    </label><a className="text-muted" href="page-contact.html">Lean more</a>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-default hover-up w-100" type="submit" name="login">Apply Job</button>
                  </div>
                  <div className="text-muted text-center">Do you need support? <a href="page-contact.html">Contact Us</a></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </Layout>
    );
}

export default Login;
