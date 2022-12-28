import { Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../apis/apis";
import { userSchema } from "../../../utils/validationSchema";

const AddUser = () => {
  const dispatch = useDispatch()
  const handleSubmit = async (val) => {
    console.log(val);
    await handleAddUser(val);
  };

  const handleAddUser = async (values) => {
    try {
      const response = await createUser(values);
      if (response) {
        dispatch(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add-user-container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values, touched, errors }) => (
          <Form className="add-user-container-form">
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="User Name"
              name="name"
              onChange={handleChange}
              value={values.name}
              autoComplete="name"
              autoFocus
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleChange}
              value={values.email}
              autoComplete="email"
              autoFocus
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
              value={values.password}
              id="password"
              autoComplete="current-password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Button
              type="submit"
              large
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add User
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;
