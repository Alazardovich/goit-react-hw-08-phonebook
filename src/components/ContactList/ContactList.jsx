// import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem/Item";
// import { fetchContacts } from "../../redux/contacts/contAsyncThunk";
import {
  getVisibleItems,
  getLoading,
} from "../../redux/contacts/contactsSelected";
import { deleteContact } from "../../redux/contacts/contAsyncThunk";
import { ListContainer } from "./CSSContactList";

const ContactList = () => {
  const items = useSelector(getVisibleItems);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));

  return loading ? (
    <p>...Loading</p>
  ) : (
    <ListContainer>
      {items.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={handleDelete}
          />
        );
      })}
    </ListContainer>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
export default ContactList;
