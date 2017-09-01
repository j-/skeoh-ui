const React = require('react');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;

const {
	FillHorizontal,
	FillVertical,
	Fill,
} = require('../../');

defineSupportCode(function (support) {
	support.Given(/^a (fill|horizontal fill|vertical fill) component$/, function (type) {
		switch (type) {
			case 'horizontal fill':
				this.wrapper = shallow(React.createElement(FillHorizontal));
				break;
			case 'vertical fill':
				this.wrapper = shallow(React.createElement(FillVertical));
				break;
			case 'fill':
				this.wrapper = shallow(React.createElement(Fill));
				break;
			default:
				throw new Error('Unrecognized type: ' + type);
		}
	});
});
