const assert = require('assert');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;

defineSupportCode(function (support) {
	support.When(/^the prop "([^"]*?)" is set to (.*?)$/, function (propName, stringified) {
		const newProps = {};
		newProps[propName] = JSON.parse(stringified);
		this.wrapper.setProps(newProps);
	});

	support.When(/^the prop "([^"]*?)" is$/, function (propName, stringified) {
		const newProps = {};
		newProps[propName] = JSON.parse(stringified);
		this.wrapper.setProps(newProps);
	});

	support.Then(/^the component should have the class "([^"]*?)"$/, function (className) {
		assert(this.wrapper.hasClass(className));
	});

	support.Then(/^the child should have the class "([^"]*?)"$/, function (className) {
		assert(this.wrapper.childAt(0).hasClass(className));
	});

	support.Then(/^the component should have the prop "([^"]*?)" set to "([^"]*?)"$/, function (propName, value) {
		assert.equal(this.wrapper.prop(propName), value);
	});

	support.Then(/^the component should have the style "([^"]*?)" set to "([^"]*?)"$/, function (styleName, value) {
		assert.equal(this.wrapper.prop('style')[styleName], value);
	});
});
