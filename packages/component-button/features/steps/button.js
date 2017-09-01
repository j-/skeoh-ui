const assert = require('assert');
const React = require('react');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;

const {
	Button,
	Submit,
	ButtonGroup,
} = require('../../');

defineSupportCode(function (support) {
	support.Given(/^a (button|submit button|button group) component$/, function (type) {
		switch (type) {
			case 'button':
				this.wrapper = shallow(React.createElement(Button));
				break;
			case 'submit button':
				this.wrapper = shallow(React.createElement(Submit));
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
			React.createElement(Button, { key: 1 }),
			React.createElement(Button, { key: 2 }),
			React.createElement(Button, { key: 3 }),
		]);
		this.wrapper = shallow(group);
	});

	support.Then(/^every button should be wrapped in a fill$/, function () {
		const result = this.wrapper.find(Button).everyWhere((button) => (
			button.parent().is('Fill')
		));
		assert(result);
	});

	support.Then(/^every button should grow with the group$/, function () {
		const buttons = this.wrapper.find(Button);
		assert(buttons.length >= 1, 'Group has buttons');
		const result = buttons.everyWhere((button) => {
			const flexItem = button.closest('FlexItem');
			assert(flexItem.exists(), 'Button is wrapped in flex item');
			assert.equal(flexItem.prop('grow'), 1, 'Flex item grows');
			return true;
		});
		assert(result, 'All buttons are OK');
	});
});
