import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";

import Css from "./Form.module.css";

import { addContact } from "../redux/reducers/contact/slice"; // Importing the contact slice for potential future use
import { useDispatch } from "react-redux";

const AForm = () => {
  console.log("Form component rendered");
  const nameId = nanoid();
  const telId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);
    // Here you would typically dispatch an action to add the contact
    dispatch(addContact(values));
    resetForm(); // Reset the form after submission
  };

  return (
    <Formik initialValues={{ name: "", phone: "" }} onSubmit={handleSubmit}>
      <Form className={Css.Form}>
        <div className={Css.FormGroup}>
          <label className={Css.Label} htmlFor={nameId}>
            Name
          </label>
          <Field
            type="text"
            className={Css.Input}
            id={nameId}
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="span" className={Css.Error} />
        </div>
        <div className={Css.FormGroup}>
          <label className={Css.Label} htmlFor={telId}>
            Phone
          </label>
          <Field
            type="numberas"
            className={Css.Input}
            id={telId}
            name="phone"
            placeholder="Enter phone number"
          />
          <ErrorMessage name="phone" component="span" className={Css.Error} />
        </div>
        <div className={Css.FormGroup}>
          <button type="reset" className={Css.Button}>
            Reset
          </button>
          <button type="submit" className={Css.Button}>
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AForm;
