import * as React from 'react';
import { Button, Submit, ButtonGroup } from 'skeoh-ui-component-button/src';
import { Input, NumberInput } from 'skeoh-ui-component-input/src';

export const App = () => (
	<div>
		<Submit>Hello world</Submit>
		<br />
		<br />
		<br />
		<ButtonGroup>
			<Button>Foo</Button>
			<Button>FooBar</Button>
			<Button>FooBarBaz</Button>
		</ButtonGroup>
		<br />
		<br />
		<br />
		<Button disabled>Can't touch this</Button>
		<br />
		<br />
		<br />
		<Input /><NumberInput hideSpinner />
	</div>
);
