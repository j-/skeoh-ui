import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input, NumberInput } from '@skeoh-ui/component-input';
import '@skeoh-ui/component-input/dist/styles.css';

storiesOf('component-input', module)
	.add('text', () => (
		<Input onChange={action('onChange')} />
	))
	.add('number', () => (
		<NumberInput onChange={action('onChange')} />
	))
	.add('number, no spinner', () => (
		<NumberInput onChange={action('onChange')} hideSpinner />
	));
