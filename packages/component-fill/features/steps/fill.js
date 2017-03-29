const React = require('react');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;
const Fill = require('../../dist/fill').default;
const Horizontal = require('../../dist/horizontal').default;
const Vertical = require('../../dist/vertical').default;

defineSupportCode(function (support) {
	support.Given(/^a (fill|horizontal fill|vertical fill) component$/, function (type) {
		switch (type) {
			case 'horizontal fill':
				this.wrapper = shallow(React.createElement(Horizontal));
				break;
			case 'vertical fill':
				this.wrapper = shallow(React.createElement(Vertical));
				break;
			case 'fill':
				this.wrapper = shallow(React.createElement(Fill));
				break;
			default:
				throw new Error('Unrecognized type: ' + type);
		}
	});
});
