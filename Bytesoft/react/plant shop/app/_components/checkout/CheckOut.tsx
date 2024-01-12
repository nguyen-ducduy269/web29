import { Container } from "@/app/_style-components/home-page-css/Container";
import React from "react";

const CheckOutPage = () => {
  return (
    <Container>
      <div className="check-out">
        <div className="contact">
          <div className="form-email">
            <label htmlFor="email">Contact</label>
            <input type="email" placeholder="Email" />
          </div>

          <select name="" id="">
            <option value="">United Staté</option>
          </select>

          <div className="name">
            <input type="text" placeholder="First name" />

            <input type="text" placeholder="Last name" />
          </div>

          <input type="text" placeholder="Company (optional)" />

          <input type="text" placeholder="Address" />

          <input type="text" placeholder="Apartment, suite, etc. (optional)" />

          <div className="place">
            <input type="text" placeholder="City" />

            <select name="" id="" placeholder="State">
              <option value="">Alabama</option>
              <option value="">Alaska</option>
              <option value="">American Samoa</option>
              <option value="">Arizona</option>
              <option value="">Arkansas</option>
              <option value="">California</option>
              <option value="">Colorado</option>
              <option value="">Connecticut</option>
              <option value="">Delaware</option>
              <option value="">Micronesia</option>
              <option value="">Florida</option>
              <option value="">Georgia</option>
              <option value="">Guam</option>
              <option value="">Hawaii</option>
              <option value="">Idaho</option>
              <option value="">Illinois</option>
              <option value="">Indiana</option>
              <option value="">Iowa</option>
              <option value="">Kansas</option>
              <option value="">Kentucky</option>
              <option value="">Louisiana</option>
              <option value="">Maine</option>
              <option value="">Marshall Islands</option>
              <option value="">Maryland</option>
              <option value="">Massachchusetts</option>
            </select>

            <input type="text" placeholder="ZIP Code" />
          </div>

          <input type="text" placeholder="Phone (optional)" />
        </div>
      </div>
    </Container>
  );
};

export default CheckOutPage;
