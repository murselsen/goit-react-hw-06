import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";

import Css from "./Form.module.css";

const aForm = () => {
  console.log("Form component rendered");
  const nameId = nanoid();
  const telId = nanoid();
  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      onSubmit={(values) => {
        console.log("Form submitted with values:", values);
      }}
    >
      <Form className={Css.Form}>
        <div className={Css.FormGroup}>
          <label className={Css.Label} htmlFor={nameId}>
            Name
          </label>
          <Field type="text" className={Css.Input} id={nameId} name="name" />
          <ErrorMessage name="name" component="span" className={Css.Error} />
        </div>
        <div className={Css.FormGroup}>
          <label className={Css.Label} htmlFor={telId}>
            Phone
          </label>
          <Field type="tel" className={Css.Input} id={telId} name="phone" />
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

export default aForm;
