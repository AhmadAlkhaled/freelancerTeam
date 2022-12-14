import "./Termin.scss";
import React, { useState, useEffect } from "react";
import DatePicker from "sassy-datepicker";
import axios from "axios";
import React, { useState, useCallback } from "react";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import e from "cors";

const Termin = () => {
  return (
    <div className="Termin">
      <div className="opacity">
        <div
          className="btn"
          onClick={() => {
            window.open("/Appointment", "_self");
          }}
        >
          <i class="fas fa-calendar-alt"></i>
          Make An Appointment
        </div>
      </div>
    </div>
  );
};

export { Termin };

const TerminPage = () => {
  const [date, setDate] = useState(new Date());

  const [Time, setTime] = useState("");
  const [submit, setsubmit] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [contactArt, setContactArt] = useState();
  const [Telephone, setTelephone] = useState();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [timeError, setTimeError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [sentDate, setSentDate] = useState(false);
  const [allDates, setAllDates] = useState([]);

  const onChange2 = (e) => {
    setDate(e);
    axios.get("/date").then((res) => {
      setAllDates(res.data.allDates);
      const times = document.querySelector(".time");
      for (let i = 0; i < times.children.length; i++) {
        times.children[i].removeAttribute("disabled", "");
        times.children[i].classList = "time1";
        times.children[i].removeAttribute("title");
      }

      if (allDates.length > 0) {
        allDates.map((d) => {
          const da = `${Time}  ${e.getDate()} ${
            months[e.getMonth()]
          }  ${e.getFullYear()}`;
          if (d.Date.substring(7, 50) == da.substring(2, 50)) {
            const times = document.querySelector(".time");
            for (let i = 0; i < times.children.length; i++) {
              if (times.children[i].textContent == d.Date.substring(0, 5)) {
                times.children[i].setAttribute("disabled", "");
                times.children[i].classList = "disabled-1";
                times.children[i].setAttribute("title", " not available... !");
              }
            }
          }
        });
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      const x = document.querySelector(".rc");
      x.style.width = "100%";
    }, 10);
  }, []);

  useEffect(() => {
    axios.get("/date").then((res) => {
      setAllDates(res.data.allDates);
    });
  }, []);

  useEffect(() => {
    if (allDates.length > 0) {
      allDates.map((d) => {
        setTimeout(() => {
          const da = `${Time}  ${date.getDate()} ${
            months[date.getMonth()]
          }  ${date.getFullYear()}`;

          if (d.Date.substring(7, 50) == da.substring(2, 50)) {
            const times = document.querySelector(".time");

            for (let i = 0; i < times.children.length; i++) {
              if (times.children[i].textContent === d.Date.substring(0, 5)) {
                times.children[i].setAttribute("disabled", "");
                times.children[i].classList = "disabled-1";
                times.children[i].setAttribute("title", "not available... !");
              }
            }
          }
        }, 100);
      });
    }
  }, [allDates]);

  const Appointment = {
    name: name,
    email: email,
    subject: subject,
    message: message,
    contactArt: contactArt,
    Telephone: Telephone,
    Date: `${Time}  ${date.getDate()} ${
      months[date.getMonth()]
    }  ${date.getFullYear()}`,
  };

  const SendMessage = (e) => {
    e.preventDefault();
    if (Time === "") {
      setTimeError(true);
      setFormError(false);
    } else {
      setTimeError(false);
      setFormError(true);
      if (
        contactArt === "Email"
          ? name && email && subject && message && contactArt
          : name && email && subject && message && contactArt && telefon
      ) {
        setFormError(false);
        axios.post("/Appointment", Appointment).then((res) => {
          console.log(res);
          if (res.data.success) {
            const form = document.querySelector("form");
            form.reset();
            setSentDate(true);
            document.documentElement.scrollTop = 0;
          }
        });
      }
    }
  };

  const time = (e) => {
    const btns = document.querySelectorAll(".disabled");
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList = "time1";
    }
    if (e.target.classList.value == "time1") {
      setTime(e.target.textContent);
      e.target.classList = "disabled";
      setTimeError(false);
    }

    if (allDates.length > 0) {
      allDates.map((d) => {
        if (d.Date.substring(10, 12) == date.getDate()) {
          const times = document.querySelector(".time");
          for (let i = 0; i < times.children.length; i++) {
            if (times.children[i].textContent == d.Date.substring(2, 7)) {
              times.children[i].setAttribute("disabled", "");
              times.children[i].classList = "disabled-1";
            }
          }
        }
      });
    }
  };

  const newOne = () => {
    const days = document.querySelectorAll(".rc_wknd");
    for (let i = 0; i < days.length; i++) {
      days[i].children[0].children[0].onclick = (i) => {
        i.preventDefault();
      };
    }
  };

  useEffect(() => {
    newOne();
  });

  return (
    <div className="TerminPage">
      {sentDate ? (
        <div className="doneTermin">
          <div className="done-card">
            <h2>
              <i class="fas fa-calendar-alt"></i> {Time} - {date.getDate()}{" "}
              {months[date.getMonth()]} {date.getFullYear()}{" "}
              <i class="fas fa-check-circle"></i>{" "}
            </h2>
          </div>
          <p>
            Thank you for your appointment. <br /> We will get in touch soon.
          </p>
        </div>
      ) : (
        <div className="min">
          <h2>
            {" "}
            <i class="fas fa-calendar-alt"></i> {Time} - {date.getDate()}{" "}
            {months[date.getMonth()]} {date.getFullYear()}{" "}
          </h2>

          <div className="newCalender">
            <Calendar value={date} onChange={onChange2} />
          </div>

          <div className="time" onClick={time}>
            <button className="time1">10:00</button>
            <button className="time1">11:00</button>
            <button className="time1">13:00</button>
            <button className="time1">14:00</button>
            <button className="time1">15:00</button>
            {timeError ? (
              <p className="timeerorrmsg">
                PLEASE CHOOSE ONE OF THE AVAILABLE TIME'S
              </p>
            ) : null}
          </div>

          <form
            onSubmit={() => {
              setsubmit(true);
            }}
          >
            {/* <label htmlFor="">
                Project Art <span>*</span>
              </label> */}

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
            <select
              name="contact"
              required
              onChange={(e) => setContactArt(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Choose Your Contact Art
              </option>
              <option>Video Meeting</option>
              <option>Telephone</option>
            </select>
            {contactArt == "Telephone" ? (
              <input
                type="text"
                className=""
                required
                name="Telephone"
                placeholder="Telephone number"
                onChange={(e) => {
                  setTelephone(e.target.value);
                }}
              />
            ) : null}
            <textarea
              id=""
              cols="30"
              rows="10"
              placeholder="Massage"
              name="massage"
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {formError ? (
              <p className="timeerorrmsg">Please Fill All Field's</p>
            ) : null}
            <br />
            <div className="buttBox">
              <button onClick={SendMessage} type="submit" className="butt">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export { TerminPage };
