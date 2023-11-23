import React from 'react';
import Layout from '../components/Layout/Layout';

const MyResume = () => {
    return (
        <Layout>
            <div className="box-heading">
          <div className="box-title"> 
            <h3 className="mb-35">My Resume</h3>
          </div>
          <div className="box-breadcrumb"> 
            <div className="breadcrumbs">
              <ul> 
                <li> <a className="icon-home" href="index.html">Admin</a></li>
                <li><span>My Resume</span></li>
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
                    <h5>Update your CV</h5>
                    <div className="row mt-30">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-30">
                          <div className="box-upload">
                            <div className="add-file-upload">
                              <input className="fileupload" type="file" name="file"/>
                            </div><a className="btn btn-default">Upload File</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-30 d-flex align-items-center box-file-uploaded"><span>Job_required.pdf</span><a className="btn btn-delete">Delete</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-white mb-30">
                  <div className="box-padding">
                    <h5 className="icon-edu">Education</h5>
                    <div className="row mt-30">
                      <div className="col-lg-9">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30"> 
                              <label className="font-sm color-text-mutted mb-10">From</label>
                              <input className="form-control" type="date" data-date-format="DD MMMM YYYY" data-date="17 September 2022" value="2022-09-20" placeholder="12 September 2008"/>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30"> 
                              <label className="font-sm color-text-mutted mb-10">To</label>
                              <input className="form-control" type="date" data-date-format="DD MMMM YYYY" data-date="17 September 2022" value="2022-09-20" placeholder="12 September 2008"/>
                            </div>
                          </div>
                          <div className="col-lg-12"> 
                            <div className="form-group mb-30"> 
                              <label className="font-sm color-text-mutted mb-10">Description</label>
                              <textarea className="form-control" name="message" rows="5"> Product Designer - Spotify Inc.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante
ipsum primis in faucibus.</textarea>
                            </div>
                          </div>
                          <div className="col-lg-12"> 
                            <div className="form-group mt-10">
                              <button className="btn btn-default btn-brand icon-tick">Add Timeline</button>
                            </div>
                          </div>
                        </div>
                        <div className="box-timeline mt-50">
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2008 - 2012</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">National Design Academy</h5>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>
                            <div className="timeline-actions"> <a className="btn btn-editor"></a><a className="btn btn-remove"></a></div>
                          </div>
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2012 - 2014</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">University of Oxford</h5>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>
                            <div className="timeline-actions"> <a className="btn btn-editor"></a><a className="btn btn-remove"></a></div>
                          </div>
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2014 - 2016</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">California Institute of Technology</h5>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>
                            <div className="timeline-actions"> <a className="btn btn-editor"></a><a className="btn btn-remove"></a></div>
                          </div>
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2016 - Now</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">Stanford University</h5>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>
                            <div className="timeline-actions"> <a className="btn btn-editor"></a><a className="btn btn-remove"></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-white mb-30">
                  <div className="box-padding">
                    <h5 className="icon-edu">Work & Experience</h5>
                    <div className="row mt-30">
                      <div className="col-lg-9">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30"> 
                              <label className="font-sm color-text-mutted mb-10">From</label>
                              <input className="form-control" type="date" data-date-format="DD MMMM YYYY" data-date="17 September 2022" value="2022-09-20" placeholder="12 September 2008"/>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30"> 
                              <label className="font-sm color-text-mutted mb-10">To</label>
                              <input className="form-control" type="date" data-date-format="DD MMMM YYYY" data-date="17 September 2022" value="2022-09-20" placeholder="12 September 2008"/>
                            </div>
                          </div>
                          <div className="col-lg-12"> 
                            <div className="form-group mb-30"> 
                              <label className="font-sm color-text-mutted mb-10">Description</label>
                              <textarea className="form-control" name="message" rows="5"> Product Designer - Spotify Inc.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante
ipsum primis in faucibus.</textarea>
                            </div>
                          </div>
                          <div className="col-lg-12"> 
                            <div className="form-group mt-10">
                              <button className="btn btn-default btn-brand icon-tick">Add Timeline</button>
                            </div>
                          </div>
                        </div>
                        <div className="box-timeline mt-50">
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2008 - 2012</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">Samoo Architects &amp; Engineers</h5>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>
                            <div className="timeline-actions"> <a className="btn btn-editor"></a><a className="btn btn-remove"></a></div>
                          </div>
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2012 - 2014</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">Foster &amp; Partners</h5>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>
                            <div className="timeline-actions"> <a className="btn btn-editor"></a><a className="btn btn-remove"></a></div>
                          </div>
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2014 - 2016</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">Skidmore Owings &amp; Merrill</h5>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>
                            <div className="timeline-actions"> <a className="btn btn-editor"></a><a className="btn btn-remove"></a></div>
                          </div>
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
        </Layout>
    );
}

export default MyResume;
