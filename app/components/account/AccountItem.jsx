import React from 'react';
import ContactList from '../contact/ContactList.jsx';
import classNames from 'classnames';

require("./AccountItem.css");

class AccountItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isCollapsed: true
    };

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay (event) {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }

  render() {

    let name = "";
    let phone = "";
    let email = "";
    let contacts = [];

    if (this.props.account) {
      name = this.props.account.Name;
      phone = this.props.account.Phone;
      email = this.props.account.Email;
      contacts = this.props.account.Contacts;
    }

    let accountItemClasses = classNames('account-item', {
      'collapsed': this.state.isCollapsed
    });

    return (
        <div className={accountItemClasses}>
          <div className="account-name" onClick={this.toggleDisplay}>{name}</div>
          <div className="account-details">
            <div className="account-phone">{phone}</div>
            <div className="account-email">{email}</div>
            <div className="account-contacts">
              <div className="contacts-header">Contacts</div>
              <ContactList contacts={contacts} />
            </div>
          </div>
        </div>
    )
  }
}

export default AccountItem;
