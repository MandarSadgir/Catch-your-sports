import "../components/1.css";
import { useState } from "react";
import axios from "axios";
import React from "react";
export default function Contactus() {
  return (
    <div>
      <Mypage></Mypage>
    </div>
  );
}

function Mypage() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const takename = (e) => {
    setname(e.target.value);
  };
  const takeemail = (e) => {
    setemail(e.target.value);
  };
  const takesubject = (e) => {
    setsubject(e.target.value);
  };
  const takemessage = (e) => {
    setmessage(e.target.value);
  };

  const submit = async () => {
    if (name == "" || email == "" || subject == "" || message == "") {
      alert("All Fields are mandatory");
      return;
    }
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    const url = `http://localhost:2000/postdata`;
    await axios.post(url, data);
    alert("your feedback sended successfully");

    setname("");
    setemail("");
    setsubject("");
    setmessage("");
  };

  return (
    <div>
      <div className="container-fluid">
        <div>
          <div className="row" style={{ height: "72vh" }}>
            <div className="d-none d-md-block col-md-2"></div>

            <div className="col-sm-12 col-md-8 fb">
              <div className="row" style={{ height: "72vh" }}>
                <div className="col-md-8">
                  <div className="row" style={{ height: "16vh" }}>
                    <h2>Feedback</h2>
                    <p>
                      Your feedback matters. Write to us if you have any
                      questions, queries or suggestions regarding any
                      page/content published on CatchyourSports.com.
                    </p>
                  </div>
                  <div className="row" style={{ height: "56vh" }}>
                    <div>
                      <h6>Name</h6>
                      <div>
                        <input
                          className="w-75"
                          style={{ height: "5vh" }}
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={takename}
                          pattern="[A-Za-z]"
                        />
                      </div>
                      <div className="mt-3">
                        <h6>Email</h6>
                        <div>
                          <input
                            className="w-75 rounded-2"
                            style={{ height: "5vh" }}
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={takeemail}
                            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <h6>Subject</h6>
                        <div>
                          <input
                            className="w-75"
                            style={{ height: "5vh" }}
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={takesubject}
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <h6>Message</h6>
                        <div>
                          <input
                            className="w-75"
                            style={{ height: "15vh" }}
                            type="text"
                            placeholder=""
                            value={message}
                            onChange={takemessage}
                          />
                        </div>
                      </div>
                      <div className="mt-1">
                        <input
                          className="bg-success text-light btn border rounded-2 fs-6"
                          type="button"
                          value="Submit"
                          onClick={submit}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-none d-md-block col-md-4 border">
                  <div className="row"></div>
                  <div className="col-sm-12">
                    <div>
                      <h4>Office Contact Details</h4>
                    </div>
                  </div>
                  <div className="row">
                    <span> CDAC Institute Juhu.</span>
                    <span> Office:Gulmohar,</span>
                    <span> 9-10,Cross Road Number 9, </span>
                    <span> Juhu,Mumbai, Maharashtra</span>
                    <span> Corp.Office:Kharghar</span>
                    <span> Phone :022 2620 1606</span>
                  </div>
                  <div className="row mt-1">
                    <div
                      className="col google-maps"
                      style={
                        ({ height: "30vh" },
                        { display: "flex" },
                        { objectFit: "contain" })
                      }
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8390641904675!2d72.8316535792962!3d19.114714887129008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf0628a9e1%3A0x655f4077e15252a0!2sCentre%20for%20Development%20of%20Advanced%20Computing!5e0!3m2!1sen!2sin!4v1641661851249!5m2!1sen!2sin"
                        width=""
                        height="20vh"
                        style={{ border: "0" }}
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-none d-md-block col-md-2"></div>
          </div>

          <div className="row mt-2" style={{ height: "28vh" }}>
            <div className="d-none d-md-block col-sm-2"></div>

            <div className="col-md-8 bg-body">
              <div className="row text-center" style={{ height: "7vh" }}>
                <div className="fw-bold fs-5">
                  Meet our brilliant and knowledgeable support team
                </div>
                <p style={{ fontsize: "small" }}>
                  Live support is available Mon-Fri 5am-7pm ET/10am-Midnight GMT
                </p>
              </div>
              <hr />
              <div className="row" style={{ height: "20vh" }}>
                <div className="col">
                  <div className="row justify-content-center">
                    <img
                      className="image"
                      style={({ height: "15vh" }, { width: "10vw" })}
                      src={require("./myself.jpeg")}
                      alt="image not available"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    Mayur Dighe
                  </div>
                </div>
                <div className="col">
                  <div className="row justify-content-center">
                    <img
                      className="image"
                      style={({ height: "15vh" }, { width: "10vw" })}
                      src={require("./dalvi.PNG")}
                      alt="image not available"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    Mayur Dalvi
                  </div>
                </div>
                <div className="col">
                  <div className="row justify-content-center">
                    <img
                      className="image"
                      style={({ height: "15vh" }, { width: "10vw" })}
                      src={require("./mandar.PNG")}
                      alt="image not available"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    Mandar Sadgir
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
