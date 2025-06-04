import { useSelector } from "react-redux";
import { selectContacts } from "../redux/reducers/contact/slice";

const ContactList = () => {
  const contacts = useSelector()(selectContacts);

  return (
    <div className={"contact-list"}>
      <h2 className={"contact-list-title"}>Contacts</h2>
      <ul className={"contact-list-items"}>
        Here you would map over your contacts and render them
        {/* Example: */}
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
