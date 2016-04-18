import React from 'react';

require("./ContactItem.css");

class ContactItem extends React.Component {
  render() {

    let name = "";
    let amount = "";
    let isHighRisk = false;

    if (this.props.contact) {
      name = this.props.contact.Name;
      amount = this.props.contact.Amount;
      isHighRisk = this.props.contact.High_Risk ? "Yes" : "No";
    }

    return (
      <div className="contact-item">
        <div className="contact-name">{name}</div>
        <div className="contact-amount"><span className="label">Amount: </span>{amount}</div>
        <div className="contact-highrisk"><span className="label">High risk: </span>{isHighRisk}</div>
      </div>
    )
  }
}

export default ContactItem;
