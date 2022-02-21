import "../../App.css";
import { Toaster } from "react-hot-toast";
import ContactForm from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList.jsx";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contAsyncThunk";
import { useDispatch } from "react-redux";

const ContactsView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default ContactsView;
