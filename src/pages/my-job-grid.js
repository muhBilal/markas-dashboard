import React from 'react';
import Layout from '../components/Layout/Layout';

const MyJobGrid = () => {
    return (
       <Layout>
         <div className="box-heading">
          <div className="box-title"> 
            <h3 className="mb-35">My Jobs</h3>
          </div>
          <div className="box-breadcrumb"> 
            <div className="breadcrumbs">
              <ul> 
                <li> <a className="icon-home" href="index.html">Admin</a></li>
                <li><span>My Jobs</span></li>
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
                    <div className="box-filters-job">
                      <div className="row">
                        <div className="col-xl-6 col-lg-5"><span className="font-sm text-showing color-text-paragraph">Showing 41-60 of 944 jobs</span></div>
                        <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                          <div className="display-flex2">
                            <div className="box-border mr-10"><span className="text-sortby">Show:</span>
                              <div className="dropdown dropdown-sort">
                                <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>12</span><i className="fi-rr-angle-small-down"></i></button>
                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                                  <li><a className="dropdown-item active" href="#">10</a></li>
                                  <li><a className="dropdown-item" href="#">12</a></li>
                                  <li><a className="dropdown-item" href="#">20</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="box-border"><span className="text-sortby">Sort by:</span>
                              <div className="dropdown dropdown-sort">
                                <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>Newest Post</span><i className="fi-rr-angle-small-down"></i></button>
                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                  <li><a className="dropdown-item active" href="#">Newest Post</a></li>
                                  <li><a className="dropdown-item" href="#">Oldest Post</a></li>
                                  <li><a className="dropdown-item" href="#">Rating Post</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="box-view-type"><a className="view-type" href="my-job-list.html"><img src="assets/imgs/template/icons/icon-list.svg" alt="jobBox"/></a><a className="view-type" href="my-job-grid.html"><img src="assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox"/></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-1.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">LinkedIn</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">UI / UX Designer fulltime</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-2.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Adobe Ilustrator</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Full Stack Engineer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">React</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">NodeJS</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-3.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Bing Search</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Java Software Engineer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Python</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">AWS</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-4.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Dailymotion</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Frontend Developer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Typescript</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Java</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-5.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Linkedin</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">React Native Web Developer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Angular</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-6.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Quora JSC</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Senior System Engineer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">PHP</a><a className="btn btn-grey-small mr-5" href="job-details.html">Android</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-7.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Nintendo</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Products Manager</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">ASP .Net</a><a className="btn btn-grey-small mr-5" href="job-details.html">Figma</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-8.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Periscope</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Lead Quality Control QA</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">iOS</a><a className="btn btn-grey-small mr-5" href="job-details.html">Laravel</a><a className="btn btn-grey-small mr-5" href="job-details.html">Golang</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-1.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">LinkedIn</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">UI / UX Designer fulltime</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-2.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Adobe Ilustrator</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Full Stack Engineer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">React</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">NodeJS</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-3.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Bing Search</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Java Software Engineer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Python</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">AWS</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-4.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Dailymotion</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Frontend Developer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Typescript</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Java</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-5.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Linkedin</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">React Native Web Developer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Angular</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-6.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Quora JSC</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Senior System Engineer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">PHP</a><a className="btn btn-grey-small mr-5" href="job-details.html">Android</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-7.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Nintendo</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Products Manager</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">ASP .Net</a><a className="btn btn-grey-small mr-5" href="job-details.html">Figma</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-8.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Periscope</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Lead Quality Control QA</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">iOS</a><a className="btn btn-grey-small mr-5" href="job-details.html">Laravel</a><a className="btn btn-grey-small mr-5" href="job-details.html">Golang</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-1.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">LinkedIn</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">UI / UX Designer fulltime</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-2.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Adobe Ilustrator</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Full Stack Engineer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">React</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">NodeJS</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-1.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">LinkedIn</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">UI / UX Designer fulltime</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                          <div className="card-grid-2-image-left"><span className="flash"></span>
                            <div className="image-box"><img src="assets/imgs/brands/brand-2.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="company-details.html">Adobe Ilustrator</a><span className="location-small">New York, US</span></div>
                          </div>
                          <div className="card-block-info">
                            <h6><a href="job-details.html">Full Stack Engineer</a></h6>
                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">React</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">NodeJS    </a>
                            </div>
                            <div className="card-2-bottom mt-30">
                              <div className="row">
                                <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                                <div className="col-lg-5 col-5 text-end">
                                  <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="paginations">
                      <ul className="pager">
                        <li><a className="pager-prev" href="#"></a></li>
                        <li><a className="pager-number" href="#">1</a></li>
                        <li><a className="pager-number" href="#">2</a></li>
                        <li><a className="pager-number" href="#">3</a></li>
                        <li><a className="pager-number" href="#">4</a></li>
                        <li><a className="pager-number" href="#">5</a></li>
                        <li><a className="pager-number active" href="#">6</a></li>
                        <li><a className="pager-number" href="#">7</a></li>
                        <li><a className="pager-next" href="#"></a></li>
                      </ul>
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

export default MyJobGrid;
