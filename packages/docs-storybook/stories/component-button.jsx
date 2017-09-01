import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonGroup, Submit } from '@skeoh-ui/component-button';
import { FillHorizontal, FillVertical } from '@skeoh-ui/component-fill';
import '@skeoh-ui/component-button/dist/styles.css';

storiesOf('component-button', module)
	.add('default', () => (
		<Button onClick={action('onClick')}>
			Default Button
		</Button>
	))
	.add('submit', () => (
		<Button onClick={action('clicked')}>
			Submit Button
		</Button>
	))
	.add('button group', () => (
		<ButtonGroup>
			<Button onClick={action('onClick')}>Foo</Button>
			<Button onClick={action('onClick')}>Bar</Button>
			<Button onClick={action('onClick')} disabled>Disabled</Button>
			<Button onClick={action('onClick')}>Baz</Button>
		</ButtonGroup>
	))
	.add('button group, fill horizontal', () => (
		<FillHorizontal>
			<ButtonGroup>
				<Button onClick={action('onClick')}>Foo</Button>
				<Button onClick={action('onClick')}>Bar</Button>
				<Button onClick={action('onClick')} disabled>Disabled</Button>
				<Button onClick={action('onClick')}>Baz</Button>
			</ButtonGroup>
		</FillHorizontal>
	))
	.add('button group, vertical', () => (
		<ButtonGroup vertical>
			<Button onClick={action('onClick')}>Foo</Button>
			<Button onClick={action('onClick')}>Bar</Button>
			<Button onClick={action('onClick')} disabled>Disabled</Button>
			<Button onClick={action('onClick')}>Baz</Button>
		</ButtonGroup>
	));
