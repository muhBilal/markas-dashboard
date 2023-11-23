import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
});
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [error, setError] = React.useState();
  const router = useRouter();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "admin/auth/login", data);
      setCookie("token", response.data.data.user.login_tokens, {
        expires: new Date(Date.now() + 60 * 60 * 24 * 30)
      });
      Swal.fire(
        "Sukses!",
        "Selamat Datang Admin!",
        "success"
      );
      router.push("/");
    } catch (err) {
      setError("Email atau Password salah");
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (getCookie("token")) {
      router.push("/");
    }
  });
  return (
    <>
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
                            <p className="font-sm text-brand-2">
                              Welcome back!{" "}
                            </p>
                            <h2 className="mt-10 mb-5 text-brand-1">
                              Admin Login
                            </h2>
                            <p className="font-sm text-muted mb-30">
                              Selamat datang kembali admin markas.
                            </p>
                          </div>
                          <form
                            className="login-register text-start mt-20"
                            action="#"
                          >
                            {errors && <p className="text-danger">{error}</p>}
                            <div className="form-group">
                              <label className="form-label" for="input-1">
                                Username or Email address *
                              </label>
                              <input
                                {...register("email")}
                                className="form-control"
                                id="input-1"
                                type="text"
                                required=""
                                placeholder="Steven Job"
                              />
                              {
                                errors.email && <p className="text-danger">{errors.email.message}</p>
                              }
                            </div>
                            <div className="form-group">
                              <label className="form-label" for="input-4">
                                Password *
                              </label>
                              <input
                                {...register("password")}
                                className="form-control"
                                id="input-4"
                                type="password"
                                required=""
                                name="password"
                                placeholder="************"
                              />
                              {
                                errors.password && <p className="text-danger">{errors.password.message}</p>
                              }
                            </div>
                            <div className="login_footer form-group d-flex justify-content-between">
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-small">Remenber me</span>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="form-group">
                              <button
                                className="btn btn-brand-1 hover-up w-100"
                                type="button"
                                name="login"
                                onClick={handleSubmit(handleLogin)}
                              >
                                Login
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="img-2">
                          <img
                            src="assets/imgs/page/login-register/img-3.svg"
                            alt="JobBox"
                          />
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
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/microsoft.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/sony.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/acer.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/nokia.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/asus.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/casio.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/dell.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/panasonic.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/vaio.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/sony.svg"
                        alt="jobBox"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="ModalApplyJobForm"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content apply-job-form">
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body pl-30 pr-30 pt-50">
              <div className="text-center">
                <p className="font-sm text-brand-2">Job Application </p>
                <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">
                  Start your career today
                </h2>
                <p className="font-sm text-muted mb-30">
                  Please fill in your information and send it to the employer.{" "}
                </p>
              </div>
              <form onSubmit={handleSubmit(handleLogin)}
                    className="login-register text-start mt-20 pb-30"
                    action="#"
              >
                <div className="form-group">
                  <label className="form-label" for="input-1">
                    Full Name *
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    required=""
                    name="fullname"
                    placeholder="Steven Job"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" for="input-2">
                    Email *
                  </label>
                  <input
                    className="form-control"
                    id="input-2"
                    type="email"
                    required=""
                    name="emailaddress"
                    placeholder="stevenjob@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" for="number">
                    Contact Number *
                  </label>
                  <input
                    className="form-control"
                    id="number"
                    type="text"
                    required=""
                    name="phone"
                    placeholder="(+01) 234 567 89"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" for="des">
                    Description
                  </label>
                  <input
                    className="form-control"
                    id="des"
                    type="text"
                    required=""
                    name="Description"
                    placeholder="Your description..."
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" for="file">
                    Upload Resume
                  </label>
                  <input
                    className="form-control"
                    id="file"
                    name="resume"
                    type="file"
                  />
                </div>
                <div className="login_footer form-group d-flex justify-content-between">
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">
                      Agree our terms and policy
                    </span>
                    <span className="checkmark"></span>
                  </label>
                  <a className="text-muted" href="page-contact.html">
                    Lean more
                  </a>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-default hover-up w-100"
                    type="submit"
                    name="login"
                  >
                    Apply Job
                  </button>
                </div>
                <div className="text-muted text-center">
                  Do you need support?{" "}
                  <a href="page-contact.html">Contact Us</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
