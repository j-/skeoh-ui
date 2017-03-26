const React = require('react');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;
const NumberInput = require('../../dist/number').default;

defineSupportCode(function (support) {
	support.Given(/^a (number) input$/, function (type) {
		switch (type) {
			case 'number':
				this.wrapper = shallow(React.createElement(NumberInput));
				break;
			default:
				throw new Error('Unrecognized type: ' + type);
		}
	});
});
