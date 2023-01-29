import React, { useState, useEffect } from "react";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  async function register() {
    const item = { firstName, lastName, password, email, mobileNumber };
    // console.warn(item)
    let result = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        mode: "cors",
      },
    });
    result = await result.json();

    setFormErrors(validate(item));
    setIsSubmit(true);
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!firstName) {
      errors.firstName = "firstName is required!";
    }
    if (!lastName) {
      errors.lastName = "lastName is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1 className="title">LOGIN PAGE</h1>
            <div className="field">
              <label className="label">First Name</label>
              <input
                type="text"
                className="input is-primary"
                placeholder="Enter First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <br />

              <label className="label">Last Name</label>
              <input
                type="text"
                className="input is-primary"
                placeholder="Enter Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              <br />

              <label className="label">Email Address</label>
              <input
                type="email"
                className="input is-primary"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />

              <label className="label">Password</label>
              <input
                type="password"
                className="input is-primary"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <br />

              <label className="label">Mobile Number</label>
              <input
                type="number"
                className="input is-primary"
                placeholder="Mobile Number"
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
              />
              <br />
              <br />

              <button type="submit" className="button" onClick={register}>
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
