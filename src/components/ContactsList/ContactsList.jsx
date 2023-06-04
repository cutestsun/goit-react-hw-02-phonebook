import { Li } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          {name}: {number}
          <button onClick={() => onDelete(id)}>Delete</button>
        </Li>
      ))}
    </ul>
  );
};
