import "./contactus.css";

function ContactUs() {
  const locationSrc =
    "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lokmany%20nagar,%20Korochi,%20Ichalkaranji,%20Maharashtra%20416109+(Unplanned%20Events%20Planner)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
  return (
    <>
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contatc Us</h3>
                        <p>
                          Feel Free to contact us any time. We will get back to
                          you as soon as we can!.
                        </p>
                        <input
                          type="text"
                          className="form-control form-group"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          className="form-control form-group"
                          placeholder="Email"
                        />
                        <textarea
                          className="form-control form-group"
                          placeholder="Message"
                        ></textarea>
                        <button className="contact_form_submit">Send</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="right_conatct_social_icon d-flex align-items-end">
                      <div className="socil_item_inner d-flex">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-square"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-headset"></i>
                    <span>+91 8009 054294</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-envelope-open-text"></i>
                    <span>info@flightmantra.com</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>
                      1000+ Travel partners and 65+ Service city across India,
                      USA, Canada & UAE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quo beatae quasi assumenda, expedita aliquam minima
                  tenetur maiores neque incidunt repellat aut voluptas hic
                  dolorem sequi ab porro, quia error.
                </p>
                <div className="map_bind">
                  <iframe
                    src={locationSrc}
                    width="100%"
                    height="450"
                    frameBorder={0}
                    style={{ border: "0" }}
                    allow=""
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;

// <div style="width: 100%">
//   <iframe
//     width="100%"
//     height="600"
//     frameborder="0"
//     scrolling="no"
//     marginheight="0"
//     marginwidth="0"
//     src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lokmany%20nagar,%20Korochi,%20Ichalkaranji,%20Maharashtra%20416109+(Unplanned%20Events%20Planner)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//   >
//     <a href="https://www.maps.ie/population/">Population calculator map</a>
//   </iframe>
// </div>;
