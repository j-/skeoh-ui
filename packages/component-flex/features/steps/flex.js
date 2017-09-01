const React = require('react');
const defineSupportCode = require('cucumber').defineSupportCode;
const shallow = require('enzyme').shallow;

const {
	FlexContainer,
	FlexItem,
} = require('../../');

defineSupportCode(function (support) {
	support.Given(/^a flex (container|item)$/, function (type) {
		switch (type) {
			case 'container':
				this.wrapper = shallow(React.createElement(FlexContainer));
				break;
			case 'item':
				this.wrapper = shallow(React.createElement(FlexItem));
				break;
			default:
				throw new Error('Unrecognized type: ' + type);
		}
	});
});
