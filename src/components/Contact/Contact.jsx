import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactWrapper}>
      <div className={css.wrapper}>
        <FaUser className={css.icon} />
        <h3>{name}</h3>
      </div>
      <div className={css.wrapper}>
        <FaPhoneAlt className={css.icon} />
        <p>{number}</p>
      </div>

      <button
        className={css.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
