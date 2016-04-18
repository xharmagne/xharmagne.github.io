jest.unmock('./ContactList.jsx');
jest.unmock('./ContactItem.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ContactList from './ContactList.jsx';
import ContactItem from './ContactItem.jsx';

describe('ContactList', function() {

  it('exists', function() {
    var contactList = TestUtils.renderIntoDocument( <ContactList /> );
    expect(TestUtils.isCompositeComponent(contactList)).toBeTruthy();
  });

  it('lists out all the contacts passed to it as a data source', function () {
    var contacts =  [
				{
					"Name": "Contact DA",
					"High_Risk": false,
					"Amount": 22500
				},
				{
					"Name": "Contact DB",
					"High_Risk": false,
					"Amount": 5000
				},
				{
					"Name": "Contact DC",
					"High_Risk": false,
					"Amount": 20000
				}
			];

    let contactList = TestUtils.renderIntoDocument( <ContactList contacts={contacts} /> );
    let contactItems = TestUtils.scryRenderedComponentsWithType(contactList, ContactItem);

    expect(contactItems.length).toEqual(3);
    expect(contactItems[0].props.contact).toBe(contactList.props.contacts[0]);
    expect(contactItems[1].props.contact).toBe(contactList.props.contacts[1]);
    expect(contactItems[2].props.contact).toBe(contactList.props.contacts[2]);

  });

  it('does not list out any contacts if the the array passed to it is empty', function () {
    let contacts = [];

    let contactList = TestUtils.renderIntoDocument( <ContactList contacts={contacts} /> );
    let contactItems = TestUtils.scryRenderedComponentsWithType(contactList, ContactItem);

    expect(contactItems.length).toEqual(0);

  });

});
