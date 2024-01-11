import React from "react";

import { ContactCss } from "@/app/_style-components/contact/ContactCss";
import { Container } from "@/app/_style-components/home-page-css/Container";

const ContactPage = () => {
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

                <input type="text" id="full-name" />
              </form>

              <form action="">
                <label htmlFor="email">
                  <div>*</div> Email
                </label>

                <input type="email" id="email" />
              </form>

              <form action="">
                <label htmlFor="">
                  Is your question regarding the House Plant Subscription Box?
                </label>

                <select name="" id="">
                  <option value="">- Select -</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </form>

              <form action="">
                <label htmlFor="">
                  Is your question about an existing order?
                </label>

                <select name="" id="">
                  <option value="">- Select -</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </form>

              <div className="delivery-question">
                <div className="title">
                  I have a shipping / delivery question about my order
                </div>

                <ul>
                  <li>
                    <input type="radio" name="" id="" />
                    <div>I did not receive my order</div>
                  </li>

                  <li>
                    <input type="radio" name="" id="" />
                    <div>I only received part of my order</div>
                  </li>

                  <li>
                    <input type="radio" name="" id="" />
                    <div>My order is incorrect or arrived damaged</div>
                  </li>

                  <li>
                    <input type="radio" name="" id="" />
                    <div>Cancel my order</div>
                  </li>

                  <li>
                    <input type="radio" name="" id="" />
                    <div>Change my shipping address</div>
                  </li>
                </ul>
              </div>

              <form action="">
                <label htmlFor="issues">
                  What plants or products had issues?
                </label>

                <input type="text" id="issues" />
              </form>

              <form action="">
                <label htmlFor="details">
                  Please provide more details below.
                </label>

                <textarea name="" id="details"></textarea>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </ContactCss>
  );
};

export default ContactPage;
