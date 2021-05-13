import React, { useState } from "react";
import axios from "axios";
import "../registration.css";
import Login from "./Login";

const Register = (props) => {
  const [confirmReg, setConfirmReg] = useState("");
  const [errs, setErrs] = useState({});

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/user/register", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          city: "",
          state: "",
          password: "",
          confirmPassword: "",
        });

        setConfirmReg("Thank you for Registering, you can now log in!");
        setErrs({});
      })
      .catch((err) => {
        console.log(err);
        setErrs(err.response.data.errors);
      });
  };

  return (
    <div>
      {/* <h2>Register</h2> */}
      {confirmReg ? <h4>{confirmReg}</h4> : null}
      {/* <form onSubmit={register}>
        <div>
          <label>First Name</label>
          {
            errs.firstName ?
              <span className="error-text">{ errs.firstName.message }</span>
              : null
          }
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Last Name</label>
          {
            errs.lastName ?
              <span className="error-text">{ errs.lastName.message }</span>
              : null
          }
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Email</label>
          {
            errs.email?
              <span className="error-text">{ errs.email.message }</span>
              : null
          }
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>Address</label>
          {
            errs.address?
              <span className="error-text">{ errs.address.message }</span>
              : null
          }
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>City</label>
          {
            errs.city?
              <span className="error-text">{ errs.city.message }</span>
              : null
          }
          <input
            type="text"
            name="city"
            value={user.city}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>State</label>
          {
            errs.state?
              <span className="error-text">{ errs.state.message }</span>
              : null
          }
          <input
            type="text"
            name="state"
            value={user.state}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>Password</label>
          {
            errs.password ?
              <span className="error-text">{ errs.password.message }</span>
              : null
          }
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>Confirm Password</label>
          {
            errs.confirmPassword?
              <span className="error-text">{ errs.confirmPassword.message }</span>
              : null
          }
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={ handleChange }
          />
        </div>
        <div className="center">
          <button
            type="submit"
          >Register Me</button>
        </div>
      </form> */}

      <div class="top-content">
        <div class="inner-bg">
          <div class="container">
            <div class="row">
              <div class="col-sm-5">
                <Login />
              </div>

              <div class="col-sm-1 middle-border"></div>
              <div class="col-sm-1"></div>

              <div class="col-sm-5">
                <div class="form-box">
                  <div class="form-top">
                    <div class="form-top-left">
                      <h3>Register now</h3>
                      <p>Fill in the form below to register:</p>
                    </div>
                    <div class="form-top-right">
                      <i class="fa fa-pencil"></i>
                    </div>
                  </div>
                  <div class="form-bottom">
                    <form
                      role="form"
                      action=""
                      method="post"
                      class="registration-form"
                      onSubmit={register}
                    >
                      <div class="form-group">
                        <label class="sr-only" for="form-first-name">
                          First name
                        </label>
                        {errs.firstName ? (
                          <span className="error-text">
                            _{errs.firstName.message}
                          </span>
                        ) : null}

                        <input
                          type="text"
                          placeholder="First name..."
                          class="form-first-name form-control"
                          id="form-first-name"
                          name="firstName"
                          value={user.firstName}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="form-last-name">
                          Last name
                        </label>
                        _{errs.lastName ? (
                          <span className="error-text">
                            {errs.lastName.message}
                          </span>
                        ) : null}

                        <input
                          type="text"
                          placeholder="Last name..."
                          class="form-last-name form-control"
                          id="form-last-name"
                          name="lastName"
                          value={user.lastName}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="form-email">
                          Email
                        </label>
                        {errs.email ? (
                          <span className="error-text">
                            _{errs.email.message}
                          </span>
                        ) : null}

                        <input
                          type="text"
                          placeholder="Email..."
                          class="form-email form-control"
                          id="form-email"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="form-email">
                          Password
                        </label>
                        {errs.password ? (
                          <span className="error-text">
                            _{errs.password.message}
                          </span>
                        ) : null}

                        <input
                          type="text"
                          placeholder="Password..."
                          class="form-email form-control"
                          id="form-email"
                            name="password"
                            value={user.password}
                            onChange={ handleChange }
                        />
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="form-email">
                          Confirm Password
                        </label>
                         {
                            errs.confirmPassword?
                              <span className="error-text">{ errs.confirmPassword.message }</span>
                              : null
                          }

                        <input
                          type="text"
                          placeholder="Confirm Password..."
                          class="form-email form-control"
                          id="form-email"
                            name="confirmPassword"
                            value={user.confirmPassword}
                            onChange={ handleChange }
                        />
                      </div>
                     
                    
                      <button type="submit" class="btn">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
