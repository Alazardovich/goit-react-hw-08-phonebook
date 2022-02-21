import PropTypes from "prop-types";
import { Item } from "./CSSContactItem";
// import { getLoading } from "../../redux/contacts/contactsSelected";
const ContactItem = ({ name, number, id, handleDelete }) => {
  const deleteCl = () => handleDelete(id);
  return (
    <Item>
      <span>
        {name}: {number}
      </span>

      <button type="button" onClick={deleteCl}>
        Delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.node.isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
