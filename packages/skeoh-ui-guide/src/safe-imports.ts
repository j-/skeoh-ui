import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as ComponentButton from 'skeoh-ui-component-button/src';
import * as ComponentFill from 'skeoh-ui-component-fill/src';
import * as ComponentFlex from 'skeoh-ui-component-flex/src';
import * as ComponentInput from 'skeoh-ui-component-input/src';

const xrequire = (moduleName: string) => {
	switch (moduleName) {
		case 'react': return React;
		case 'react-dom': return ReactDOM;
		case 'skeoh-ui-component-button': return ComponentButton;
		case 'skeoh-ui-component-fill': return ComponentFill;
		case 'skeoh-ui-component-flex': return ComponentFlex;
		case 'skeoh-ui-component-input': return ComponentInput;
		default: return {};
	}
};

const bootstrap = (window: Window) => {
	Object.defineProperties(window, {
		'require': {
			value: xrequire,
		},
		'exports': {
			value: {},
		},
	});
};

export default bootstrap;
