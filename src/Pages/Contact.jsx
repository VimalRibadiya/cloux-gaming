import React from "react";

const Contact = () => {
  return (
    <>
      <div className="empty"></div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051"
          frameborder="0"
        ></iframe>
      </div>
      <div className="empty2"></div>
      <div className="contact-outer">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-inner-in1">
              <input type="text" placeholder="name" />
              <input type="text" placeholder="email adress" />
              <br />
              <input type="text" placeholder="phone number" />
              <input type="text" placeholder="subject" />
              <br />
              <textarea
                cols="65"
                rows="7"
                maxLength={2000}
                placeholder="message"
              ></textarea>
              <br />
              <button type="button" className="con-btn">
                Submit
              </button>
            </div>
            <div className="contact-inner-in2">
              <span className="con-in">
                <i class="fas fa-map-marker-alt" aria-hidden="true"></i> Walking
                Street, Los Angeles, California, USA
              </span>
              <a href="#" className="con-in">
                <i class="fas fa-envelope" aria-hidden="true"></i>{" "}
                info@cloux.com
              </a>
              <a href="#" className="con-in">
                <i class="fas fa-phone" aria-hidden="true"></i> 0674 987 66 59
              </a>
              <span className="con-in">
                <i class="fas fa-fax" aria-hidden="true"></i> 1923 236 12 96
              </span>
              <div className="empty4"></div>
              <p>
                Lorem ipsum dolor sit amet,{" "}
                <strong>voluptua iracundia disputationi an pri</strong>, his eef
                dolore oblique nusquam,{" "}
                <u>cu luptatum volutpat delicatissimi has.</u> Sed ad dicam
                platonem, mea eros illum elitr id, ei has similique constituto.
                Ea movet saperet rationibus sit,{" "}
                <span>
                  <strong className="constr">pri autem aliquip invidunt</strong>
                </span>{" "}
                an consetetur omittantur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="empty3"></div>
    </>
  );
};

export default Contact;
