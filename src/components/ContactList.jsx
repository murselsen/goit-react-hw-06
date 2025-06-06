import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Css from "./ContactList.module.css";
import { deleteContact } from "../redux/reducers/contacts/slice";
import { changeFilter } from "../redux/reducers/filters/slice";
import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const ContactList = () => {
  const rContacts = useSelector((state) => state.contacts.items);
  const [contacts, setContacts] = useState(rContacts);
  const dispatch = useDispatch();
  const handleDeleteUser = (id) => {
    dispatch(
      deleteContact({
        id: id,
      })
    );
  };

  const changeSearchName = (e) => {
    dispatch(changeFilter(e.target.value));
    const filteredContacts = rContacts.filter((contact) =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setContacts(filteredContacts);
  };
  const searchId = nanoid();
  return (
    <div className={Css.ContactArea}>
      <h2 className={Css.ContactAreaTitle}>Contacts</h2>
      <Formik>
        <Form className={Css.ContactForm}>
          <div className={Css.ContactFormGroup}>
            <label className={Css.Label} htmlFor={searchId}>
              Search
            </label>
            <Field
              className={Css.Input}
              name="search"
              id={searchId}
              onChange={changeSearchName}
              placeholder="Enter the name you want to search for..."
            />
          </div>
        </Form>
      </Formik>
      <ul className={Css.ContactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={Css.ContactItem}>
            <span className={Css.ItemBadge}>{contact.name[0]}</span>
            <p className={Css.Title}>{contact.name}</p>

            <p className={Css.subTitle}>{`${contact.phone.slice(
              0,
              3
            )}-${contact.phone.slice(3, 5)}-${contact.phone.slice(5)}`}</p>
            <button
              onClick={() => handleDeleteUser(contact.id)}
              className={Css.Btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
