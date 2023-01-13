import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';

Event.PropTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

export const ContactItem = ({ name, number, id, onDeleteContacts }) => {
  return (
    <>
      <span>{name}: {number}</span>
      <Button type="button" onClick={() => onDeleteContacts(id)}>
        Delete
      </Button>
    </>
  );
};
