jest.unmock('./AccountList.jsx');
jest.unmock('./AccountItem.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AccountList from './AccountList.jsx';
import AccountItem from './AccountItem.jsx';

describe('AccountList', function() {

  it('exists', function() {
    let accountList = TestUtils.renderIntoDocument( <AccountList /> );
    expect(TestUtils.isCompositeComponent(accountList)).toBeTruthy();
  });

  it('lists out all the accounts passed to it as an array', function () {
    let accounts = [{
			"Name": "Team A",
			"Phone": "0412345678",
			"Email": "team@teama.com"
		},
		{
			"Name": "Team B",
			"Phone": "0412123123",
			"Email": "team@teamb.com"
		},
    {
  			"Name": "Team C",
  			"Phone": "0402021244",
  			"Email": "team@teamc.com"
    },
    {
  			"Name": "Team D",
  			"Phone": "0429060332",
  			"Email": "team@teamd.com"
    }];

    let accountsList = TestUtils.renderIntoDocument( <AccountList accounts={accounts} /> );
    let accountItems = TestUtils.scryRenderedComponentsWithType(accountsList, AccountItem);

    expect(accountItems.length).toEqual(4);
    expect(accountItems[0].props.account).toBe(accountsList.props.accounts[0]);
    expect(accountItems[1].props.account).toBe(accountsList.props.accounts[1]);
    expect(accountItems[2].props.account).toBe(accountsList.props.accounts[2]);
    expect(accountItems[3].props.account).toBe(accountsList.props.accounts[3]);

  });

  it('does not list out any accounts if the the array passed to it is empty', function () {
    let accounts = [];

    let accountsList = TestUtils.renderIntoDocument( <AccountList accounts={accounts} /> );
    let accountItems = TestUtils.scryRenderedComponentsWithType(accountsList, AccountItem);

    expect(accountItems.length).toEqual(0);

  });

});
