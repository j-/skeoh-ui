const React = require('react');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;

const {
	Input,
	NumberInput,
} = require('../../');

defineSupportCode(function (support) {
	support.Given(/^a (text|number) input$/, function (type) {
		switch (type) {
			case 'text':
				this.wrapper = shallow(React.createElement(Input));
				break;
			case 'number':
				this.wrapper = shallow(React.createElement(NumberInput));
				break;
			default:
				throw new Error('Unrecognized type: ' + type);
		}
	});
});
