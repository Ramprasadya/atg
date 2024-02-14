import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [tap, seTtap] = useState("sign in");
  const navigate = useNavigate();
  return (
    <>
      <div className="container  mt-4 ">
        <div className="Hero  ">
          <div>
            <h1 className="fst-italic lh-lg ">
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
              <span style={{ color: "#8064A2" }}>passion</span>
            </h1>
            <p className="lg-lg">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className="lh-lg">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <div className="group" style={{ marginTop: "4rem" }}>
              <img src={require("./assets/Group 27.png")} alt="grp" />
            </div>
          </div>

          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div className="d-flex lg-justify-content-center  gap-2 mb-3 ">
              <p
                style={{ cursor: "pointer" }}
                onClick={() => seTtap("sign in")}
                className={`${tap === "sign in" ? "tab" : "tab1"}`}
              >
                Sign In
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => seTtap("join in")}
                className={`${tap === "join in" ? "tab" : "tab1"}`}
              >
                Join In
              </p>
            </div>
            {tap === "sign in" ? (
              <form>
                <div className="d-flex flex-column gap-3 ">
                  <a
                    class="btn btn- btn-lg btn-block justify-content-around d-flex border border-2 border-dark "
                    href="#!"
                    role="button"
                  >
                    <FcGoogle className="mt-1" />
                    Continue with Google
                  </a>
                  <a
                    class="btn btn- btn-lg btn-block justify-content-around d-flex border border-2 border-dark"
                    href="#!"
                    role="button"
                  >
                    <FaFacebook className="mt-1" />
                    Continue with Facebook
                  </a>
                </div>
                <div class="divider d-flex align-items-center my-2">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example13">
                    Email address
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example23">
                    Password
                  </label>
                </div>

                <div class="d-flex justify-content-around align-items-center mb-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label class="form-check-label" for="form1Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  class="btn border border-2 border-dark btn-lg btn-block w-100 "
                >
                  Continue
                </button>
              </form>
            ) : (
              <form>
                <div className="d-flex flex-column gap-3 ">
                  <a
                    class="btn btn- btn-lg btn-block justify-content-around d-flex border border-2 border-dark "
                    href="#!"
                    role="button"
                  >
                    <FcGoogle className="mt-1" />
                    Continue with Google
                  </a>
                  <a
                    class="btn btn- btn-lg btn-block justify-content-around d-flex border border-2 border-dark"
                    href="#!"
                    role="button"
                  >
                    <FaFacebook className="mt-1" />
                    Continue with Facebook
                  </a>
                </div>
                <div class="divider d-flex align-items-center my-2">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example13">
                    Email address
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example23">
                    Password
                  </label>
                </div>

                <div class="d-flex justify-content-around align-items-center ">
                  <p>
                    By continuing, you agree to our Terms of Service and Privacy
                    Policy.
                  </p>
                </div>

                <button
                  type="submit"
                  class="btn btn-lg btn-block w-100 "
                  style={{ backgroundColor: "#8064A2", color: "white" }}
                >
                  Agree and Continue
                </button>
              </form>
            )}
          </div>
          <div className="group1" style={{ marginTop: "4rem" }}>
              <img className="w-100"  src={require("./assets/Group 27.png")} alt="grp" />
            </div>
        </div>
        {/* Second Section  */}
        <div className="second">
          <div class="row mb-3">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-size ">
                    <span>
                      <svg
                        width="40"
                        height="20"
                        viewBox="0 0 40 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 11.25C22.7167 11.25 25.1167 11.9 27.0667 12.75C28.8667 13.55 30 15.35 30 17.3V20H10V17.3167C10 15.35 11.1333 13.55 12.9333 12.7667C14.8833 11.9 17.2833 11.25 20 11.25ZM6.66667 11.6667C8.5 11.6667 10 10.1667 10 8.33333C10 6.5 8.5 5 6.66667 5C4.83333 5 3.33333 6.5 3.33333 8.33333C3.33333 10.1667 4.83333 11.6667 6.66667 11.6667ZM8.55 13.5C7.93333 13.4 7.31667 13.3333 6.66667 13.3333C5.01667 13.3333 3.45 13.6833 2.03333 14.3C0.8 14.8333 0 16.0333 0 17.3833V20H7.5V17.3167C7.5 15.9333 7.88333 14.6333 8.55 13.5ZM33.3333 11.6667C35.1667 11.6667 36.6667 10.1667 36.6667 8.33333C36.6667 6.5 35.1667 5 33.3333 5C31.5 5 30 6.5 30 8.33333C30 10.1667 31.5 11.6667 33.3333 11.6667ZM40 17.3833C40 16.0333 39.2 14.8333 37.9667 14.3C36.55 13.6833 34.9833 13.3333 33.3333 13.3333C32.6833 13.3333 32.0667 13.4 31.45 13.5C32.1167 14.6333 32.5 15.9333 32.5 17.3167V20H40V17.3833ZM20 0C22.7667 0 25 2.23333 25 5C25 7.76667 22.7667 10 20 10C17.2333 10 15 7.76667 15 5C15 2.23333 17.2333 0 20 0Z"
                          fill="#8064A2"
                        />
                      </svg>
                    </span>
                    People
                  </h5>
                  <p class="card-text lh-lg ">
                    Find a teacher, coach, or expert for your hobby interest in
                    your locality. Find a partner, teammate, accompanist or
                    collaborator.
                  </p>
                  <a href="#" class="btn btn-atg ">
                    Connect
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-size">
                    <span>
                      <svg
                        width="24"
                        height="34"
                        viewBox="0 0 24 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0002 0.333328C5.55016 0.333328 0.333496 5.55 0.333496 12C0.333496 20.75 12.0002 33.6667 12.0002 33.6667C12.0002 33.6667 23.6668 20.75 23.6668 12C23.6668 5.55 18.4502 0.333328 12.0002 0.333328ZM12.0002 16.1667C9.70016 16.1667 7.8335 14.3 7.8335 12C7.8335 9.7 9.70016 7.83333 12.0002 7.83333C14.3002 7.83333 16.1668 9.7 16.1668 12C16.1668 14.3 14.3002 16.1667 12.0002 16.1667Z"
                          fill="#77933C"
                        />
                      </svg>
                    </span>{" "}
                    Place
                  </h5>
                  <p class="card-text lh-lg ">
                    Find a class, school, playground, auditorium, studio, shop
                    or an event venue. Book a slot at venues that allow booking
                    through hobbycue.
                  </p>
                  <a href="#" class="btn btn-atg">
                    Meet up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3 ">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-size">
                    <span>
                      <svg
                        width="38"
                        height="32"
                        viewBox="0 0 38 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.6832 11.9997L20.3832 1.06636C20.0665 0.599697 19.5332 0.366364 18.9998 0.366364C18.4665 0.366364 17.9332 0.599697 17.6165 1.08303L10.3165 11.9997H2.33317C1.4165 11.9997 0.666504 12.7497 0.666504 13.6664C0.666504 13.8164 0.683171 13.9664 0.733171 14.1164L4.9665 29.5664C5.34984 30.9664 6.63317 31.9997 8.1665 31.9997H29.8332C31.3665 31.9997 32.6498 30.9664 33.0498 29.5664L37.2832 14.1164L37.3332 13.6664C37.3332 12.7497 36.5832 11.9997 35.6665 11.9997H27.6832ZM13.9998 11.9997L18.9998 4.66636L23.9998 11.9997H13.9998ZM18.9998 25.333C17.1665 25.333 15.6665 23.833 15.6665 21.9997C15.6665 20.1664 17.1665 18.6664 18.9998 18.6664C20.8332 18.6664 22.3332 20.1664 22.3332 21.9997C22.3332 23.833 20.8332 25.333 18.9998 25.333Z"
                          fill="#C0504D"
                        />
                      </svg>
                    </span>{" "}
                    Product
                  </h5>
                  <p class="card-text lh-lg ">
                    Find equipment or supplies required for your hobby. Buy,
                    rent or borrow from shops, online stores or from community
                    members.
                  </p>
                  <a href="#" class="btn btn-atg">
                    Get it
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-size">
                    <span>
                      <svg
                        width="30"
                        height="34"
                        viewBox="0 0 30 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.6667 16.5498C21.1833 16.0665 20.3833 16.0665 19.9 16.5498L12.65 23.7998L10 21.1498C9.51667 20.6665 8.71667 20.6665 8.23333 21.1498C7.75 21.6332 7.75 22.4332 8.23333 22.9165L11.4667 26.1498C12.1167 26.7998 13.1667 26.7998 13.8167 26.1498L21.65 18.3165C22.15 17.8332 22.15 17.0332 21.6667 16.5498ZM26.6667 3.99984H25V2.33317C25 1.4165 24.25 0.666504 23.3333 0.666504C22.4167 0.666504 21.6667 1.4165 21.6667 2.33317V3.99984H8.33333V2.33317C8.33333 1.4165 7.58333 0.666504 6.66667 0.666504C5.75 0.666504 5 1.4165 5 2.33317V3.99984H3.33333C1.48333 3.99984 0.0166667 5.49984 0.0166667 7.33317L0 30.6665C0 32.4998 1.48333 33.9998 3.33333 33.9998H26.6667C28.5 33.9998 30 32.4998 30 30.6665V7.33317C30 5.49984 28.5 3.99984 26.6667 3.99984ZM25 30.6665H5C4.08333 30.6665 3.33333 29.9165 3.33333 28.9998V12.3332H26.6667V28.9998C26.6667 29.9165 25.9167 30.6665 25 30.6665Z"
                          fill="#0096C8"
                        />
                      </svg>
                    </span>{" "}
                    Program
                  </h5>
                  <p class="card-text lh-lg ">
                    Find events, meetups and workshops related to your hobby.
                    Register or buy tickets online.
                  </p>
                  <a href="#" class="btn btn-atg">
                    Attend
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Third section */}
        <div className="third">
          <div class="col-sm-6 mb-3 mb-sm-0 w-100 ">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-size ">
                  <span>
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.0002 0.333313C7.80016 0.333313 0.333496 7.79998 0.333496 17C0.333496 26.2 7.80016 33.6666 17.0002 33.6666C26.2002 33.6666 33.6668 26.2 33.6668 17C33.6668 7.79998 26.2002 0.333313 17.0002 0.333313ZM23.6668 18.6666H18.6668V23.6666C18.6668 24.5833 17.9168 25.3333 17.0002 25.3333C16.0835 25.3333 15.3335 24.5833 15.3335 23.6666V18.6666H10.3335C9.41683 18.6666 8.66683 17.9166 8.66683 17C8.66683 16.0833 9.41683 15.3333 10.3335 15.3333H15.3335V10.3333C15.3335 9.41665 16.0835 8.66665 17.0002 8.66665C17.9168 8.66665 18.6668 9.41665 18.6668 10.3333V15.3333H23.6668C24.5835 15.3333 25.3335 16.0833 25.3335 17C25.3335 17.9166 24.5835 18.6666 23.6668 18.6666Z"
                        fill="#0096C8"
                      />
                    </svg>
                  </span>
                  Add your own
                </h5>
                <p class="card-text lh-lg ">
                  Are you a teacher or expert? Do you sell or rent out
                  equipment, venue or event tickets? Or, you know someone who
                  should be on hobbycue? Go ahead and Add your Own page
                </p>
                <button onClick={()=>navigate("/add")} class="btn btn-atg ">
                  Add new
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fourth">
          <div className="bg-testmonial">
            <h5 className="text-size">
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 40.0005C31.0277 40.0005 40 31.0282 40 20.0005C40 16.7252 39.1373 13.6637 37.7383 10.9341L36 7.99854L33 4.99854L29.0566 2.2583C26.3293 0.862223 23.2723 0.000490634 20 0.000490347C8.9723 0.000489383 2.71253e-06 8.97278 1.74846e-06 20.0005C7.84383e-07 31.0282 8.97229 40.0005 20 40.0005ZM26 26.9985C23.791 26.9985 22 25.2075 22 22.9985C22 22.9125 22.0204 22.8316 22.0254 22.7466C22.0114 22.6656 22 22.5826 22 22.4966C22 22.2216 22.0526 15.7084 26.5996 12.2974C26.8696 12.0954 27.185 11.9966 27.498 11.9966C27.954 11.9966 28.4042 12.2051 28.6992 12.5981C29.1962 13.2611 29.0624 14.2008 28.4004 14.6978C26.8924 15.8288 26.0568 17.5196 25.5898 19.0396C25.7268 19.0256 25.859 18.9985 26 18.9985C28.209 18.9985 30 20.7895 30 22.9985C30 25.2075 28.209 26.9985 26 26.9985ZM14 26.9985C11.791 26.9985 10 25.2075 10 22.9985C10 22.9125 10.0204 22.8316 10.0254 22.7466C10.0114 22.6656 10 22.5826 10 22.4966C10 22.2216 10.0526 15.7084 14.5996 12.2974C14.8696 12.0954 15.185 11.9966 15.498 11.9966C15.954 11.9966 16.4042 12.2051 16.6992 12.5981C17.1962 13.2611 17.0624 14.2008 16.4004 14.6978C14.8924 15.8288 14.0568 17.5195 13.5898 19.0396C13.7268 19.0256 13.859 18.9985 14 18.9985C16.209 18.9985 18 20.7895 18 22.9985C18 25.2075 16.209 26.9985 14 26.9985Z"
                    fill="#8064A2"
                  />
                </svg>
              </span>{" "}
              Testimonials
            </h5>
            <p className="text-testi">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
            <div className="d-flex justify-content-around ">
             <img  style={{width:"50vw"}} src={require("./assets/Audio Track.png")} alt="" />
              <img style={{width:"20vw"}}  src={require("./assets/Group 108.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="last-section" >
         <div className="container last-class  " >
            <h5>Your Hobby, Your Community...</h5>
            <button className="btn last-atg btn-atg2 " >Get started</button>
         </div>
         <div className="container w-100 h-auto " >
            <img className="w-100"  src={require("./assets/Group 99.png")} alt="" />
         </div>
      </div>
    </>
  );
};

export default Home;
