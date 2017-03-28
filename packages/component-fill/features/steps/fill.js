const React = require('react');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;
const Fill = require('../../dist/fill').default;
const Horizontal = require('../../dist/horizontal').default;
const Vertical = require('../../dist/vertical').default;

defineSupportCode(function (support) {
	support.Given(/^a (?:(horizontal|vertical) )?fill component$/, function (type) {
		switch (type) {
			case 'horizontal':
				this.wrapper = shallow(React.createElement(Horizontal));
				break;
			case 'vertical':
				this.wrapper = shallow(React.createElement(Vertical));
				break;
			case undefined:
				this.wrapper = shallow(React.createElement(Fill));
				break;
			default:
				throw new Error('Unrecognized type: ' + type);
		}
	});

	support.Given(/^a (?:(horizontal|vertical) )?fill component with a child$/, function (type) {
		const child = React.createElement('div');
		switch (type) {
			case 'horizontal':
				this.wrapper = shallow(React.createElement(Horizontal, {}, child));
				break;
			case 'vertical':
				this.wrapper = shallow(React.createElement(Vertical, {}, child));
				break;
			case undefined:
				this.wrapper = shallow(React.createElement(Fill, {}, child));
				break;
			default:
				throw new Error('Unrecognized type: ' + type);
		}
	});
});
