import { useState } from "react";
import "./Contact.scss";
import Start from "../../Components/start/Start";
import axios from "axios";
import { motion } from "framer-motion";
import Recaptcha from 'react-recaptcha';


// 6LfdYhUjAAAAAGvt0h9M2ykZKjFn91CIGJbwcSL0
// 6LfdYhUjAAAAAEH1KW1cOHjSw8CQY9Ga97bLWyt4


const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const [verifyError, setVerifyError] = useState(false);

  const recaptchaLoaded = () => {
    console.log('capcha successfully loaded');
  }

  const verifyCallback = (response) => {
    if (response) {
      setIsVerified({ status: true, message: 'vitrify success' })
    }
  }

  const MessageData = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  const SendMessage = (e) => {
    e.preventDefault()
    if (name && email && subject && message && isVerified) {
      axios.post("/contact", MessageData).then((res) => {
        console.log(res);
      });
      setSubmit(true);
      setIsVerified(false)
      console.log('done');
      setVerifyError(false)


    }
    else {
      setSubmit(false);
      setVerifyError(true)
    };


  };

  return (
    <div className="contact">
      <div className="contact-section-1">
        <div className="opacity">
          <motion.div
            className="contact-text"
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Contact Us</h1>
            <h4>Contact for Premium Business Services</h4>
            <p>
              We are happy to answer any questions you have about our services.{" "}
              <br /> To get in touch with us, please fill out the form below and
              we will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-main">
          <div className="left-box">
            {submit ? (
              <p
                style={{
                  width: "100%",
                  padding: " 10px 20px",
                  textAlign: "center",
                  margin: " auto 0 ",
                  textAlign: "center",
                  fontSize: "20px",
                  fontFamily: "Orienta,sans-serif",
                }}
              >
                Thanks for contacting Us ! We will be in touch with you shortly.
              </p>
            ) : (
              <form
              // action="/Contact"
              // method="post"
              // onSubmit={() => {
              //   setSubmit(true);
              // }}
              >
                <h3>Send Us A Message</h3>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Massage"
                  name="massage"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div style={{ marginBottom: '20px' }}>
                  <Recaptcha
                    sitekey="6LfdYhUjAAAAAGvt0h9M2ykZKjFn91CIGJbwcSL0"
                    render="explicit"
                    onloadCallback={recaptchaLoaded}
                    verifyCallback={verifyCallback}
                  />
                </div>
                {
                  verifyError ?
                    <p style={{ color: 'red' }}>Please fill all fields and Verify as you not robot</p>
                    :
                    null
                }

                <button onClick={(e) => SendMessage(e)}>Send Message</button>
              </form>

            )}

            <div className="form-text">
              <h3>Get In Touch</h3>
              <h5>Address</h5>
              <p>Berlin – Germany</p>
              <h5>Email</h5>
              <p>info@software-prime.com</p>
              <h5>Phone</h5>
              <p>+490000000000</p>
              <h5>Follow Us</h5>
              <div className="icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="right-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.59372221289!2d13.284650302208142!3d52.506970379262846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sde!4v1659621024007!5m2!1sen!2sde"
              width="100%"
              height="100%"
              frameBorder="0"
              // style="border:0;"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
      </div>
      <Start />
    </div>
  );
};

export default Contact;
