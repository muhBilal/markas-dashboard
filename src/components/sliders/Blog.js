import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

SwiperCore.use([Navigation]);

const BlogSlider = () => {
  return (
    <>
      <div className="swiper-container swiper-group-3 swiper">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          className="swiper-wrapper pb-70 pt-5"
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                <div className="text-center card-grid-3-image">
                  <Link legacyBehavior href="src/components/sliders#">
                    <a>
                      <figure>
                        <img
                          alt="jobBox"
                          src="/assets/imgs/page/homepage1/img-news1.png"
                        />
                      </figure>
                    </a>
                  </Link>
                </div>
                <div className="card-block-info">
                  <div className="tags mb-15">
                    <Link legacyBehavior href="/src/pages/blog-grid">
                      <a className="btn btn-tag">News</a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/src/pages/blog-grid">
                      <a>21 Tip Wawancara Kerja: Cara Membuat Kesan Hebat</a>
                    </Link>
                  </h5>
                  <p className="mt-10 color-text-paragraph font-sm">
                    Misi kami adalah membuat aplikasi pencarian kerja untuk
                    membantu pelamar kerja dengan menciptakan sistem yang
                    berkualitas tinggi baik secara teknologi maupun secara
                    profesional.
                  </p>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-6 col-6">
                        <div className="d-flex">
                          <img
                            className="img-rounded"
                            src="/assets/imgs/page/homepage1/user1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <span className="font-sm font-bold color-brand-1 op-70">
                              Sarah Harding
                            </span>
                            <br />
                            <span className="font-xs color-text-paragraph-2">
                              06 September
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-end col-6 pt-15">
                        <span className="color-text-paragraph-2 font-xs">
                          8 mins to read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                <div className="text-center card-grid-3-image">
                  <Link legacyBehavior href="src/components/sliders#">
                    <a>
                      <figure>
                        <img
                          alt="jobBox"
                          src="/assets/imgs/page/homepage1/img-news2.png"
                        />
                      </figure>
                    </a>
                  </Link>
                </div>
                <div className="card-block-info">
                  <div className="tags mb-15">
                    <Link legacyBehavior href="/src/pages/blog-grid">
                      <a className="btn btn-tag">Events</a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/src/pages/blog-grid">
                      <a>
                        39 Kekuatan dan Kelemahan Pelamar Kerja dalam Wawancara
                      </a>
                    </Link>
                  </h5>
                  <p className="mt-10 color-text-paragraph font-sm">
                    Misi kami adalah membuat aplikasi pencarian kerja untuk
                    membantu pelamar kerja dengan menciptakan sistem yang
                    berkualitas tinggi baik secara teknologi maupun secara
                    profesional.
                  </p>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-6 col-6">
                        <div className="d-flex">
                          <img
                            className="img-rounded"
                            src="/assets/imgs/page/homepage1/user2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <span className="font-sm font-bold color-brand-1 op-70">
                              Steven Jobs
                            </span>
                            <br />
                            <span className="font-xs color-text-paragraph-2">
                              06 September
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-end col-6 pt-15">
                        <span className="color-text-paragraph-2 font-xs">
                          6 mins to read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                <div className="text-center card-grid-3-image">
                  <Link legacyBehavior href="src/components/sliders#">
                    <a>
                      <figure>
                        <img
                          alt="jobBox"
                          src="/assets/imgs/page/homepage1/img-news3.png"
                        />
                      </figure>
                    </a>
                  </Link>
                </div>
                <div className="card-block-info">
                  <div className="tags mb-15">
                    <Link legacyBehavior href="/src/pages/blog-grid">
                      <a className="btn btn-tag">News</a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/src/pages/blog-grid">
                      <a>
                        Pertanyaan Wawancara: Mengapa Anda Tidak Memiliki Gelar?
                      </a>
                    </Link>
                  </h5>
                  <p className="mt-10 color-text-paragraph font-sm">
                    Pelajari cara merespons jika pewawancara bertanya mengapa
                    Anda tidak melakukannya memiliki gelar, dan membaca contoh
                    jawaban yang dapat membantu Anda menjadi ahli
                  </p>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-6 col-6">
                        <div className="d-flex">
                          <img
                            className="img-rounded"
                            src="/assets/imgs/page/homepage1/user3.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <span className="font-sm font-bold color-brand-1 op-70">
                              Wiliam Kend
                            </span>
                            <br />
                            <span className="font-xs color-text-paragraph-2">
                              06 September
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-end col-6 pt-15">
                        <span className="color-text-paragraph-2 font-xs">
                          9 mins to read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </>
  );
};

export default BlogSlider;
