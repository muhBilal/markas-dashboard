import React from 'react';
import Layout from '../components/Layout/Layout';

const PostJob = () => {
    return (
        <Layout>
             <div className="box-heading">
          <div className="box-title"> 
            <h3 className="mb-35">Post a Job</h3>
          </div>
          <div className="box-breadcrumb"> 
            <div className="breadcrumbs">
              <ul> 
                <li> <a className="icon-home" href="index.html">Admin</a></li>
                <li><span>Post New Job</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row"> 
          <div className="col-lg-12">
            <div className="section-box">
              <div className="container"> 
                <div className="panel-white mb-30">
                  <div className="box-padding bg-postjob">
                    <h5 className="icon-edu">Tell us about your role</h5>
                    <div className="row mt-30">
                      <div className="col-lg-9">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mb-30"> 
                              <label className="font-sm color-text-mutted mb-10">Job title *</label>
                              <input className="form-control" type="text" placeholder="e.g. Senior Product Designer"/>
                            </div>
                          </div>
                          <div className="col-lg-12"> 
                            <div className="form-group mb-30"> 
                              <label className="font-sm color-text-mutted mb-10">Add your job description *</label>
                              <textarea className="form-control" name="message" rows="8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sem id enim suscipit commodo nec in ante. Sed viverra vel leo vitae pharetra. Morbi viverra venenatis neque, eu porttitor diam blandit nec. Etiam et volutpat magna, id molestie quam. Vestibulum vel libero gravida, scelerisque arcu eu, maximus mi. Suspendisse eu dolor lobortis, posuere enim venenatis, posuere quam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sem id enim suscipit commodo nec in ante. Sed viverra vel leo vitae pharetra. Morbi viverra venenatis neque, eu porttitor diam blandit nec. Etiam et volutpat magna, id molestie quam. Vestibulum vel libero gravida, scelerisque arcu eu, maximus mi. Suspendisse eu dolor lobortis, posuere enim venenatis, posuere quam.</textarea>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30"> 
                              <label className="font-sm color-text-mutted mb-10">Job location</label>
                              <input className="form-control" type="text" placeholder="e.g. &quot;New York City&quot; or &quot;San Francisco”"/>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">Workplace type *</label>
                              <select className="form-control">
                                <option value="1">Remote</option>
                                <option value="1">Office</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">Salary</label>
                              <input className="form-control" type="text" placeholder="$2200 - $2500"/>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">Tags (optional) </label>
                              <input className="form-control" type="text" placeholder="Figma, UI/UX, Sketch..."/>
                            </div>
                          </div>
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
                            <div className="form-group mb-30 box-file-uploaded d-flex align-items-center"><span>Job_required.pdf</span><a className="btn btn-delete">Delete</a></div>
                          </div>
                          <div className="col-lg-12"> 
                            <div className="form-group mt-10">
                              <button className="btn btn-default btn-brand icon-tick">Post New Job</button>
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

export default PostJob;
