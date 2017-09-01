import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input, NumberInput } from '@skeoh-ui/component-input';
import '@skeoh-ui/component-input/dist/styles.css';

storiesOf('component-input', module)
	.add('text', () => (
		<Input />
	))
	.add('number', () => (
		<NumberInput />
	))
	.add('number, no spinner', () => (
		<NumberInput hideSpinner />
	));
