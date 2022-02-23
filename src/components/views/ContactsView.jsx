import "../../App.css";
import { Toaster } from "react-hot-toast";
import ContactForm from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList.jsx";
import { ContainerContacts } from "./CSSComponents";

const ContactsView = () => {
  return (
    <ContainerContacts>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster />
    </ContainerContacts>
  );
};
export default ContactsView;
