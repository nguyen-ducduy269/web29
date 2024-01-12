import React, { useState } from "react";

import { ContactCss } from "@/app/_style-components/contact/ContactCss";
import { Container } from "@/app/_style-components/home-page-css/Container";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [questionRegarding, setQuestionRegarding] = useState("");
  const [question, setQuestion] = useState("");
  const [activeRadio, setActiveRadio] = useState(0);
  const [issues, setIssues] = useState("");
  const [details, setDetails] = useState("");

  const deliveryQuestion = [
    {
      id: 1,
      name: "I did not receive my order",
    },
    {
      id: 2,
      name: "I only received part of my order",
    },
    {
      id: 3,
      name: "My order is incorrect or arrived damaged",
    },
    {
      id: 4,
      name: "Cancel my order",
    },
    {
      id: 5,
      name: "Change my shipping address",
    },
  ];

  const onSubmit = () => {
    if (name == "" && email != "") {
      alert("The name cannot be left blank!");
      window.scrollTo(0, 1300);
    } else if (name != "" && email == "") {
      alert("The email cannot be left blank!");
      window.scrollTo(0, 1500);
    } else if (name == "" && email == "") {
      alert("The name and email cannot be left blank!");
      window.scrollTo(0, 1300);
    } else {
      alert("Submitted successfully! Thank you for your contributions!");
      setName("");
      setEmail("");
      setQuestionRegarding("");
      setQuestion("");
      setActiveRadio(0);
      setIssues("");
      setDetails("");
      window.location.reload();
      window.scrollTo(0, 0);
    }
  };

  return (
    <ContactCss>
      <Container>
        <div className="contact">
          <div className="send-dirt">
            <h1>Send us the dirt</h1>

            <div className="send-content">
              <h2>Online Orders</h2>

              <p>
                If you have any questions about your online order,{" "}
                <a href="">send us an email</a> or send us a note through the
                submission box below. Please include your order number and
                necessary information to resolve your issue.
              </p>

              <p>
                Our customer service team is available every Mondays through
                Fridays from 10am till 6pm PST. Please give us 1-2 business days
                to get back to you.
              </p>

              <p>
                You can also read our <a href="">Frequently Asked Questions</a>
              </p>
            </div>

            <div className="send-content">
              <h2>Plant Care Help</h2>

              <p>
                We love talking plants! Give us the dirt every Mondays through
                Fridays by emailing our <a href="">send us an email</a> for any
                plant health related questions. You can also join our{" "}
                <a href="">Facebook Community Group </a> to discuss anything
                house plant related.
              </p>
            </div>

            <div className="send-content">
              <h2>Partnership Inquiries</h2>

              <p>
                Email our <a href="">marketing team</a> for partnership or
                collaboration inquiries.
              </p>

              <p>
                Email our <a href="">merchandising team</a> for product requests
                or if you're a supplier looking to feature your product within
                our network.
              </p>
            </div>

            <div className="send-content">
              <h2>Trade Inquiries</h2>

              <p>
                We operate wholesale and dropshipping services for business of
                all sizes. Email our <a href="">wholesale team</a> for
                wholesale, gifting, and dropshipping inquiries.
              </p>
            </div>
          </div>

          <div className="form-question">
            <div className="cross">--------</div>

            <div className="text">
              If you have any questions send us a note through the submission
              box below.
            </div>

            <div className="form">
              <form action="">
                <label htmlFor="full-name">
                  <div>*</div> Full Name
                </label>

                <input
                  type="text"
                  id="full-name"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              </form>

              <form action="">
                <label htmlFor="email">
                  <div>*</div> Email
                </label>

                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </form>

              <form action="">
                <label htmlFor="">
                  Is your question regarding the House Plant Subscription Box?
                </label>

                <select
                  name=""
                  id=""
                  value={questionRegarding}
                  onChange={(e: any) => setQuestionRegarding(e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </form>

              <form action="">
                <label htmlFor="">
                  Is your question about an existing order?
                </label>

                <select
                  name=""
                  id=""
                  value={question}
                  onChange={(e: any) => setQuestion(e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </form>

              <div className="delivery-question">
                <div className="title">
                  I have a shipping / delivery question about my order
                </div>

                <ul>
                  {deliveryQuestion.map((ques: any) => {
                    return (
                      <li key={ques.id} onClick={() => setActiveRadio(ques.id)}>
                        {activeRadio == ques.id ? (
                          <input type="radio" name="" id={ques.id} checked />
                        ) : (
                          <input type="radio" name="" id={ques.id} />
                        )}
                        <label htmlFor={ques.id}>{ques.name}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <form action="">
                <label htmlFor="issues">
                  What plants or products had issues?
                </label>

                <input
                  type="text"
                  id="issues"
                  value={issues}
                  onChange={(e: any) => setIssues(e.target.value)}
                />
              </form>

              <form action="">
                <label htmlFor="details">
                  Please provide more details below.
                </label>

                <textarea
                  name=""
                  id="details"
                  value={details}
                  onChange={(e: any) => setDetails(e.target.value)}
                ></textarea>
              </form>

              <button className="submit" onClick={() => onSubmit()}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Container>
    </ContactCss>
  );
};

export default ContactPage;
