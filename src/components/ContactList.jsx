import { useDispatch, useSelector } from "react-redux";
import Css from "./ContactList.module.css";
import { deleteContact } from "../redux/reducers/contacts/slice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const handleDeleteUser = (id) => {
    dispatch(
      deleteContact({
        id: id,
      })
    );
  };
  return (
    <div className={Css.ContactArea}>
      <h2 className={Css.ContactAreaTitle}>Contacts</h2>
      <ul className={Css.ContactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={Css.ContactItem}>
            <span className={Css.ItemBadge}>{contact.name[0]}</span>{" "}
            <p className={Css.Title}>{contact.name}</p>{" "}
            <p className={Css.subTitle}>{contact.phone}</p>{" "}
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
