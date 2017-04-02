const assert = require('assert');
const React = require('react');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;
const Button = require('../../dist/button').default;
const SubmitButton = require('../../dist/submit').default;
const ButtonGroup = require('../../dist/group').default;

defineSupportCode(function (support) {
	support.Given(/^a (button|submit button|button group) component$/, function (type) {
		switch (type) {
			case 'button':
				this.wrapper = shallow(React.createElement(Button));
				break;
			case 'submit button':
				this.wrapper = shallow(React.createElement(SubmitButton));
				break;
			case 'button group':
				this.wrapper = shallow(React.createElement(ButtonGroup));
				break;
			default:
				throw new Error('Unrecognized type: ' + type);
		}
	});

	support.Given(/^a button group with some buttons$/, function () {
		const group = React.createElement(ButtonGroup, {}, [
			React.createElement(Button),
			React.createElement(Button),
			React.createElement(Button),
		]);
		this.wrapper = shallow(group);
	});

	support.Then(/^every button should be wrapped in a fill$/, function () {
		const result = this.wrapper.find('button').everyWhere((button) => (
			button.parent().is('Fill')
		));
		assert(result);
	});
});
