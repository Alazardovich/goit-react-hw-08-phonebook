import "../../App.css";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import ContactForm from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList.jsx";
import { ContainerContacts, Div } from "./CSSComponents";
import { getLoggedIn } from "../../redux/auth/authSelector";

const ContactsView = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return isLoggedIn ? (
    <ContainerContacts>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster />
    </ContainerContacts>
  ) : (
    <Div>
      <h2>Чтобы вoспользоваться телефонной книгой нужна авторизация</h2>
    </Div>
  );
};
export default ContactsView;
