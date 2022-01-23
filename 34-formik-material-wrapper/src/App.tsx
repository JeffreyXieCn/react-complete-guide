import {
  Button,
  Container,
  InputAdornment,
  LinearProgress,
  Stack,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import LockIcon from "@mui/icons-material/Lock";
import { TextField } from "formik-mui";
import * as React from "react";

interface Values {
  email: string;
  password: string;
}

function App() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Container maxWidth="xs">
            <Stack spacing={2}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                variant="outlined"
              />

              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {isSubmitting && <LinearProgress />}

              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Stack>
          </Container>
        </Form>
      )}
    </Formik>
  );
}

export default App;
