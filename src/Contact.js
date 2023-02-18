const Contact = ({ contact }) => {
    return (
      <div>
        <div>
          Full name: {contact.firstName} {contact.lastName}
        </div>
        <div>Phone: {contact.phone}</div>
        {contact.gender && <div>Gender: {contact.gender}</div>}
        <hr />
      </div>
    );
  };
  
  export default Contact;