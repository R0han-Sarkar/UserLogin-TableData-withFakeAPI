import { Col, Form, Row, Button, InputGroup } from "react-bootstrap";
import "./UpdateData.css";
import { Formik } from "formik";
import { UpdateUserSchema } from "../../schemas/UpdateUserSchema";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataModule } from "../../module.ts/DataModule";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const updateUserValues = {
  email: "",
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  city: "",
  phone: "",
};

export default function UpdateData() {
  const [data, setData] = useState<dataModule>({});
  const { id } = useParams();
  const [showPass, setShowPass] = useState(false);

  const togglePassVisibility = () => {
    setShowPass(showPass ? false : true);
  };

  const defaultValue = {
    firstname: data.name?.firstname,
    lastname: data.name?.lastname,
    email: data.email,
    username: data.username,
    password: data.password,
    city: data.address?.city,
    phone: data.phone,
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  const updateData = (e:any) => {
    fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        email: e.email,
        username: e.username,
        password: e.password,
        firstname: e.firstname,
        lastname: e.lastname,
        city: e.city,
        phone: e.phone,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <div className="form-container">
        <div>
          <Formik
            initialValues={{ ...updateUserValues, ...defaultValue }}
            enableReinitialize
            validationSchema={UpdateUserSchema}
            onSubmit={(value) => {
              updateData(value);
              console.log(value);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleSubmit,
              handleChange,
            }) => (
              <Form onSubmit={handleSubmit}>
                <h3 className="mb-4" style={{ marginLeft: "80px" }}>
                  Welcome to Update Page
                </h3>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      value={values.firstname || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter First Name"
                    />
                    {errors.firstname && touched.firstname ? (
                      <b>
                        <span
                          className="form-error"
                          style={{ fontSize: "10px" }}
                        >
                          {errors.firstname}
                        </span>
                      </b>
                    ) : null}
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastname"
                      value={values.lastname || ""}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                    />
                    {errors.lastname && touched.lastname ? (
                      <b>
                        <span
                          className="form-error"
                          style={{ fontSize: "10px" }}
                        >
                          {errors.lastname}
                        </span>
                      </b>
                    ) : null}
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Username</Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>@</InputGroup.Text>
                      <Form.Control
                        id="inlineFormInputGroup"
                        name="username"
                        value={values.username || ""}
                        onChange={handleChange}
                        placeholder="Username"
                      />
                    </InputGroup>
                    {errors.username && touched.username ? (
                      <b>
                        <span
                          className="form-error"
                          style={{ fontSize: "10px" }}
                        >
                          {errors.username}
                        </span>
                      </b>
                    ) : null}
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={showPass ? "text" : "password"}
                      name="password"
                      value={values.password || ""}
                      onChange={handleChange}
                      style={{ position: "relative" }}
                      placeholder="Enter Password"
                    />
                    {errors.password && touched.password ? (
                      <b>
                        <span
                          className="form-error"
                          style={{ fontSize: "10px" }}
                        >
                          {errors.password}
                        </span>
                      </b>
                    ) : null}
                    <FontAwesomeIcon
                      style={{
                        position: "absolute",
                        bottom: "60.1%",
                        left: "72%",
                      }}
                      onClick={togglePassVisibility}
                      icon={showPass ? faEyeSlash : faEye}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email || ""}
                      onChange={handleChange}
                      placeholder="name@example.com"
                    />
                    {errors.email && touched.email ? (
                      <b>
                        <span
                          className="form-error"
                          style={{ fontSize: "10px" }}
                        >
                          {errors.email}
                        </span>
                      </b>
                    ) : null}
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Tel</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={values.phone || ""}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                    />
                    {errors.phone && touched.phone ? (
                      <b>
                        <span
                          className="form-error"
                          style={{ fontSize: "10px" }}
                        >
                          {errors.phone}
                        </span>
                      </b>
                    ) : null}
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>City </Form.Label>
                  <Form.Control
                    type="address"
                    name="city"
                    value={values.city || ""}
                    onChange={handleChange}
                    placeholder="City"
                  />
                  {errors.city && touched.city ? (
                    <b>
                      <span className="form-error" style={{ fontSize: "10px" }}>
                        {errors.city}
                      </span>
                    </b>
                  ) : null}
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  className="mt-3"
                  // onClick={() => ()}
                  style={{ marginLeft: "40%", marginBottom: "10px" }}
                >
                  SUBMIT
                </Button>
              </Form>
            )}
          </Formik>
          <NavLink to={"/"}>
            <Button type="button" style={{ marginLeft: "42%" }}>
              BACK
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
