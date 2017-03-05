import * as React from 'react';
import { Button, Submit, ButtonGroup } from 'skeoh-ui-component-button/src';

export const App = () => (
	<div>
		<Submit>Hello world</Submit>
		<br />
		<br />
		<br />
		<ButtonGroup>
			<Button>Foo</Button>
			<Button>Bar</Button>
			<Button>Baz</Button>
		</ButtonGroup>
	</div>
);
