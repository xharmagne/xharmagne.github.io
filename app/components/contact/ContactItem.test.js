jest.unmock('./ContactItem.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ContactItem from './ContactItem.jsx';

describe('ContactItem', function() {

  it('exists', function() {
    let contactItem = TestUtils.renderIntoDocument( <ContactItem /> );
    expect(TestUtils.isCompositeComponent(contactItem)).toBeTruthy();
  });

  it('displays contact details passed to it', function () {
    let contact = {
			"Name": "Contact AA",
			"High_Risk": false,
			"Amount": 20000
		};

    let contactItem = TestUtils.renderIntoDocument( <ContactItem contact={contact} /> );
    let name = TestUtils.scryRenderedDOMComponentsWithClass(contactItem, "contact-name");
    let amount = TestUtils.scryRenderedDOMComponentsWithClass(contactItem, "contact-amount");
    let highrisk = TestUtils.scryRenderedDOMComponentsWithClass(contactItem, "contact-highrisk");

    expect(name.length).toEqual(1);
    expect(amount.length).toEqual(1);
    expect(highrisk.length).toEqual(1);

    expect(name[0].textContent).toEqual('Contact AA');
    expect(amount[0].textContent).toEqual('20000');
    //expect(highrisk[0].textContent).toEqual('false');

  });

  it('marks non high risk contact as high risk when selected', function () {

  });

  it('marks high risk contact as non high risk when selected', function () {

  });

});
