const assert = require('assert');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;

defineSupportCode(function (support) {
	support.When(/^the prop "([^"]*?)" is set to "([^"]*?)"$/, function (propName, value) {
		const newProps = {};
		newProps[propName] = value;
		this.wrapper.setProps(newProps);
	});

	support.Then(/^the component should have the class "([^"]*?)"$/, function (className) {
		assert(this.wrapper.hasClass(className));
	});

	support.Then(/^the component should have the prop "([^"]*?)" set to "([^"]*?)"$/, function (propName, value) {
		assert.equal(this.wrapper.prop(propName), value);
	});
});
