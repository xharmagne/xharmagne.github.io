import React from 'react';
import AccountItem from './AccountItem.jsx';

require("./AccountList.css");

class AccountList extends React.Component {


  render() {

    let accounts = [];

    if (this.props.accounts) {
      accounts = this.props.accounts.map(function(account, i) {
          return <AccountItem key={i} account={account} />;
      });
    }

    return (
      <div className="account-list">
        {accounts}
      </div>
    )
  }
}

export default AccountList;
