import React from 'react';
import ContactItem from './ContactItem.jsx';

require("./ContactList.css");

class ContactList extends React.Component {
  render() {
    let contacts = [];

    if (this.props.contacts) {
      contacts = this.props.contacts.map(function(contact, i) {
          return <ContactItem key={i} contact={contact} />;
      });
    }

    return (
      <div className="contact-list">
        {contacts}
      </div>
    )
  }
}

export default ContactList;
