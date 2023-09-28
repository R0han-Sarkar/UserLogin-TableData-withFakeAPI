import { Form, Button, Modal, Row, Col, InputGroup } from "react-bootstrap";
import "./UserTableData.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import { UpdateUserSchema } from "../schemas/UpdateUserSchema";

const AddUserValues = {
  email: "",
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  city: "",
  phone: "",
};

export default function UserTableData() {
  const [user, setUser] = useState<[] | null>(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    //fecthing the ALL_USER api to show the data to the table
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  const handleDelete = (id: number) => {
    // Fetching the DELETE-USER API
    fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log("Error", err));
  };

  const addUserData = (e:any) => {

    fetch("https://fakestoreapi.com/users", {
      method: "POST",
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
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  // const addDataWithClose = () => {
  //   // calling ADD-USER api with closing the Modal
  //   addUserData();
  //   handleClose();
  // };

  return (
    <>
      <header
        className="d-flex justify-content-between"
        style={{ backgroundColor: "#BFD7EA" }}
      >
        <h5 style={{ marginLeft: "20px", marginTop: "10px", color: "black" }}>
          User Data Table
        </h5>
        <div>
          <Button
            className="btn"
            variant="info"
            onClick={handleShow}
            style={{
              padding: "5px 10px",
              marginBottom: "3px",
              marginRight: "20px",
              marginTop: "5px",
            }}
          >
            ADD USER
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik
                initialValues={AddUserValues}
                validationSchema={UpdateUserSchema}
                onSubmit={(value) => {
                  addUserData(value);
                  handleClose();
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
                    <Row className="mb-3">
                      <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstname"
                          value={values.firstname}
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
                          value={values.lastname}
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="City"
                      />
                      {errors.city && touched.city ? (
                        <b>
                          <span
                            className="form-error"
                            style={{ fontSize: "10px" }}
                          >
                            {errors.city}
                          </span>
                        </b>
                      ) : null}
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ marginLeft: "35%" }}
                    >
                      Save Changes
                    </Button>
                  </Form>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
        </div>
      </header>
      <div className="container">
        {user ? (
          <table
            className="table table-sm"
            style={{
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <th>SL. No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Edit User</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {user?.map((item: any, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name.firstname}</td>
                  <td>{item.name.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.address.city}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Link to={"/user/edit/" + item.id}>
                      <Button
                        type="button"
                        variant="primary"
                        style={{ padding: "6.3px 20px" }}
                      >
                        EDIT
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      DELETE
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </>
  );
}
