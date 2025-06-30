import React from "react";

const Steps = () => {
  return (
    <section class="roadmap pt-120 pb-120" id="roadmap">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xxl-7">
            <div class="heading__content mb-10 mb-lg-15 text-center">
              <h1 class="display-four mb-5 mb-lg-6">Roadmap</h1>
              <p class="fs-six-up mx-ch mx-auto">
                We're constantly updating our roadmap to bring transparency for
                our users and to get your feedback - please tell us what is
                important for you!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="roadmap__content">
              <span class="roadmap__line"></span>
              <div class="roadmap__part">
                <div class="event cus-rounded-1 p-4 p-md-5 p-xxl-10 me-5">
                  <span class="heading fs-three p1-color mb-3">2010</span>
                  <h4>Introduction to Blockchain</h4>
                  <p class="mt-4">
                    The blockchain is used for cryptocurrency
                  </p>
                </div>
              </div>
              <div class="roadmap__part">
                <div class="event cus-rounded-1 p-4 p-md-5 p-xxl-10">
                  <span class="heading fs-three p1-color mb-3">2012</span>
                  <h4>Emerge of bitcoin</h4>
                  <p class="mt-4">
                    Bitcoin was emerged in this era{" "}
                  </p>
                </div>
              </div>
              <div class="roadmap__part">
                <div class="event cus-rounded-1 p-4 p-md-5 p-xxl-10 me-5">
                  <span class="heading fs-three p1-color mb-3">2014</span>
                  <h4>Trading </h4>
                  <p class="mt-4">
                    Trading was done using cryptocurrency in a decentralised way
                  </p>
                </div>
              </div>
              <div class="roadmap__part">
                <div class="event cus-rounded-1 p-4 p-md-5 p-xxl-10">
                  <span class="heading fs-three p1-color mb-3">2016</span>
                  <h4>Proposed for Decentralised elections</h4>
                  <p class="mt-4">
                    Papers on blockchain in voting have started
                  </p>
                </div>
              </div>
              <div class="roadmap__part">
                <div class="event cus-rounded-1 p-4 p-md-5 p-xxl-10 me-5">
                  <span class="heading fs-three p1-color mb-3">2018</span>
                  <h4>Blockchain Management</h4>
                  <p class="mt-4">
                    {" "}
                    Blockachain was started in many domains.
                  </p>
                </div>
              </div>
              <div class="roadmap__part">
                <div class="event cus-rounded-1 p-4 p-md-5 p-xxl-10">
                  <span class="heading fs-three p1-color mb-3">2023</span>
                  <h4>Blockchain based voting</h4>
                  <p class="mt-4">
                    Palesteine has started using blockchain for voting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
