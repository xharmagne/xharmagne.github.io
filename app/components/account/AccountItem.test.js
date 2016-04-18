jest.unmock('./AccountItem.jsx');
jest.unmock('../contact/ContactList.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AccountItem from './AccountItem.jsx';
import ContactList from '../contact/ContactList.jsx';


describe('AccountItem', function() {

  it('exists', function() {
    let accountItem = TestUtils.renderIntoDocument( <AccountItem /> );
    expect(TestUtils.isCompositeComponent(accountItem)).toBeTruthy();
  });


  it('displays account details and contact list passed to it', function () {

    let account = {
			"Name": "Team A",
			"Phone": "0412345678",
			"Email": "team@teama.com",
      "Contacts": [
				{
					"Name": "Contact AA",
					"High_Risk": false,
					"Amount": 20000
				},
				{
					"Name": "Contact AB",
					"High_Risk": false,
					"Amount": 20000
				}
			]
		};

    let accountItem = TestUtils.renderIntoDocument( <AccountItem account={account} /> );
    let name = TestUtils.scryRenderedDOMComponentsWithClass(accountItem, "account-name");
    let phone = TestUtils.scryRenderedDOMComponentsWithClass(accountItem, "account-phone");
    let email = TestUtils.scryRenderedDOMComponentsWithClass(accountItem, "account-email");
    let contactList = TestUtils.scryRenderedComponentsWithType(accountItem, ContactList);

    expect(name.length).toEqual(1);
    expect(phone.length).toEqual(1);
    expect(email.length).toEqual(1);
    expect(contactList.length).toEqual(1);

    expect(name[0].textContent).toEqual('Team A');
    expect(phone[0].textContent).toEqual('0412345678');
    expect(email[0].textContent).toEqual('team@teama.com');
    expect(contactList[0].props.contacts).toBe(accountItem.props.account.Contacts);

  });


  it('shows collapsed view of account details by default', function () {

    let account = {
      "Name": "Team A",
      "Phone": "0412345678",
      "Email": "team@teama.com"
    };

    let accountItem = TestUtils.renderIntoDocument( <AccountItem account={account} /> );

    // Wanted to test this by checking for the collapsed and account-item classes,
    // But it seems that scryRenderedDOMComponentsWithClass doesn't work with dynamic class names
    // i.e. when using dynamic class names, inst in this line --return ReactTestUtils.findAllInRenderedTree(root, function (inst) {--
    // returned no .className
    //let collapsedAccountItem = TestUtils.scryRenderedDOMComponentsWithClass(accountItem, ["account-item", "collapsed"]);
    //expect(collapsedAccountItem.length).toBe(1);

    expect(accountItem.state.isCollapsed).toBe(true);

  });


  it('expands view of account details when collapsed view is clicked', function () {

    let account = {
      "Name": "Team A",
      "Phone": "0412345678",
      "Email": "team@teama.com"
    };

    let accountItem = TestUtils.renderIntoDocument( <AccountItem account={account} /> );

    expect(accountItem.state.isCollapsed).toBe(true);

    let accountName = TestUtils.scryRenderedDOMComponentsWithClass(accountItem, "account-name");
    TestUtils.Simulate.click(accountName[0]);

    expect(accountItem.state.isCollapsed).toBe(false);

  });


  it('collapses view of account details when expanded view is clicked', function () {

        let account = {
          "Name": "Team A",
          "Phone": "0412345678",
          "Email": "team@teama.com"
        };

        let accountItem = TestUtils.renderIntoDocument( <AccountItem account={account} /> );

        let accountName = TestUtils.scryRenderedDOMComponentsWithClass(accountItem, "account-name");
        TestUtils.Simulate.click(accountName[0]);

        expect(accountItem.state.isCollapsed).toBe(false);

        TestUtils.Simulate.click(accountName[0]);
        expect(accountItem.state.isCollapsed).toBe(true);
  });

});
